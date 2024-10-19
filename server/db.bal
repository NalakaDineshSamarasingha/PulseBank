import ballerinax/mysql;
import ballerina/sql;
import ballerina/jwt;
import ballerina/time;


configurable int port = ?;
configurable string host = ?;
configurable string database = ?;
configurable string user = ?;
configurable string password = ?;

mysql:Client dbClient = check new(
    host = host,
    port = port,
    database = database,
    user = user,
    password = password
);

function insertData(string name) returns sql:ExecutionResult | sql:Error {
    sql:ParameterizedQuery insertQuery = `insert into test (name) values (${name})`;
    return dbClient->execute(insertQuery);
}

function getCampaignData() returns Campaign[] | sql:Error {
    sql:ParameterizedQuery getQuery = `SELECT CampId, OrganizerId, Date, StartAt, EndAt, Country, Province, District, Town, No, Address FROM campaign`;
    
    Campaign[] campaigns = [];

    stream<Campaign, sql:Error?> resultStream = dbClient->query(getQuery);

    error? e = resultStream.forEach(function(Campaign campaign) {
        campaigns.push(campaign);
    });

    if (e is sql:Error) {
        return e;
    }
    return campaigns;
}
// function checkLogin(string email, string password) returns boolean|error {
//     sql:ParameterizedQuery query = `SELECT * FROM users WHERE email = ${email} AND userpassword = ${password}`;

//     stream<User, sql:Error?> userStream = dbClient->query(query, User);

//     boolean loginSuccessful = false;

//     error? e = userStream.forEach(function (User user) {
//         loginSuccessful = true;
//     });

//     if (e is sql:Error) {
//         return e;
//     }
//     return loginSuccessful;
// }
function checkLogin(string email, string password) returns [boolean, string]|error {
    sql:ParameterizedQuery query = `SELECT userType FROM users WHERE email = ${email} AND userpassword = ${password}`;

    stream<User, sql:Error?> userStream = dbClient->query(query, User);

    boolean loginSuccessful = false;
    string userType = "";

    error? e = userStream.forEach(function (User user) {
        loginSuccessful = true;
        userType = user.userType; 
    });

    if (e is sql:Error) {
        return e;
    }

    if (loginSuccessful) {
        return [true, userType];
    } else {
        return [false, ""]; 
    }
}


function generateJwtToken(string email) returns string|error {
    jwt:IssuerConfig issuerConfig = {
        username: "pulseBank", 
        issuer: "PulseBank",  
        audience: "vEwzbcasJVQm1jVYHUHCjhxZ4tYa", 
        expTime: 3600, 
        signatureConfig: {
            config: {
                keyFile: "./private.key" 
            }
        }
    };
    string|error jwtToken = jwt:issue(issuerConfig);

    return jwtToken;
}
function getStatsData() returns [int, int, int]|error {
    sql:ParameterizedQuery donorQuery = `SELECT COUNT(*) AS count FROM donor`;
    stream<CountResponse, sql:Error?> donorStream = dbClient->query(donorQuery);
    int donorCount = 0;
    error? e = donorStream.forEach(function(CountResponse donor) {
        donorCount = donor.count;
    });
    check donorStream.close();
    if e is error {
        return e;
    }
    sql:ParameterizedQuery volunteerQuery = `SELECT COUNT(*) AS count FROM volunteer`;
    stream<CountResponse, sql:Error?> volunteerStream = dbClient->query(volunteerQuery);
    int volunteerCount = 0;
    e = volunteerStream.forEach(function(CountResponse volunteer) {
        volunteerCount = volunteer.count;
    });
    check volunteerStream.close();
    if e is error {
        return e;
    }
    time:Utc currentDate = time:utcNow();
    string today = time:utcToString(currentDate).substring(0, 10); 
    sql:ParameterizedQuery campaignQuery = `SELECT COUNT(*) AS count FROM campaign WHERE Date < ${today}`;
    stream<CountResponse, sql:Error?> campaignStream = dbClient->query(campaignQuery);
    int campaignCount = 0;
    e = campaignStream.forEach(function(CountResponse campaign) {
        campaignCount = campaign.count;
    });
    check campaignStream.close();
    if e is error {
        return e;
    }

    return [donorCount, volunteerCount, campaignCount];
}