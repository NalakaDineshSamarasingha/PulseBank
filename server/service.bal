import ballerina/http;
import ballerina/sql;
import ballerina/log;


@http:ServiceConfig{
    cors: {
        allowOrigins: ["*"]
    }
}

service /api on new http:Listener(9090) {
    resource function get HelloWorld(string? name) returns string|error {
        if name is () {
            return error("name should not be empty!");
        }
        return string `Hello, ${name}`;
    }

    resource function post addUser(string name) returns http:Ok | http:InternalServerError {
        sql:ExecutionResult | error result = insertData(name);
        if result is sql:ExecutionResult {
            return http:OK;
        }
        return http:INTERNAL_SERVER_ERROR;
    }

    resource function get campaign(http:Caller caller, http:Request req) returns error? {
        sql:Error | Campaign[] result = getCampaignData();
        if result is sql:Error {
            log:printError("Failed to fetch campaign data", result);
            check caller->respond({ message: "Internal Server Error" });
        } else {
            check caller->respond(result.toJson());
        }
    }

    //  resource function post login(http:Caller caller, http:Request req) returns error? {
    //     json? body = check req.getJsonPayload();
    //     string email = (check body?.email).toString();
    //     string password = (check body?.password).toString();

    //     if (email == "" || password == "") {
    //         check caller->respond({ message: "Username or Password cannot be empty" });
    //         return;
    //     }

    //     boolean|error loginResult = checkLogin(email, password);

    //     if (loginResult is error) {
    //         log:printError("Error while checking login credentials", loginResult);
    //         check caller->respond({ message: "Internal Server Error" });
    //     } else if (loginResult) {
    //          string|error token = generateJwtToken(email);

    //          if (token is error) {
    //         check caller->respond({ message: "Failed to generate token" });
    //         return;
    //         }
    //          check caller->respond({
    //             message: "Login Successful",
    //             token: token
    //         });
    //     } else {
    //         check caller->respond({ message: "Invalid username or password" });
    //     }
    // }


    resource function post login(http:Caller caller, http:Request req) returns error? {
    json? body = check req.getJsonPayload();
    string email = (check body?.email).toString();
    string password = (check body?.password).toString();

    if (email == "" || password == "") {
        check caller->respond({ message: "Username or Password cannot be empty" });
        return;
    }

    [boolean, string]|error loginResult = check checkLogin(email, password);

    if (loginResult is error) {
        log:printError("Error while checking login credentials", loginResult);
        check caller->respond({ message: "Internal Server Error" });
    } else {
        boolean loginSuccessful = loginResult[0];
        string userType = loginResult[1];
        
        if (loginSuccessful) {
            string|error token = generateJwtToken(email);

            if (token is error) {
                check caller->respond({ message: "Failed to generate token" });
                return;
            }
            check caller->respond({
                message: "Login Successful",
                token: token,
                userType: userType
            });
        } else {
            check caller->respond({ message: "Invalid username or password" });
        }
    }
}

     resource function get stats(http:Caller caller, http:Request req) returns error? {
        error | [int, int, int] statsResult = getStatsData();
        if (statsResult is error) {
            log:printError("Failed to fetch stats data", statsResult);
            check caller->respond({ message: "Internal Server Error" });
        } else {
            json response = {
                "donors": statsResult[0],
                "volunteers": statsResult[1],
                "pastCampaigns": statsResult[2]
            };
            check caller->respond(response);
        }
    }

}
