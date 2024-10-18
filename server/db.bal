import ballerinax/mysql;
import ballerina/sql;
import ballerina/jwt;


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
function checkLogin(string email, string password) returns boolean|error {
    sql:ParameterizedQuery query = `SELECT * FROM users WHERE email = ${email} AND userpassword = ${password}`;

    stream<User, sql:Error?> userStream = dbClient->query(query, User);

    boolean loginSuccessful = false;

    error? e = userStream.forEach(function (User user) {
        loginSuccessful = true;
    });

    if (e is sql:Error) {
        return e;
    }
    return loginSuccessful;
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