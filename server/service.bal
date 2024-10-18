import ballerina/http;
import ballerina/sql;

@http:ServiceConfig{
    cors: {
        allowOrigins: ["*"]
    }
}

service / on new http:Listener(9090) {
    resource function get HelloWorld(string? name) returns string|error {
        if name is () {
            return error("name should not be empty!");
        }
        return string `Hello, ${name}`;
    }
     resource function post addUser(string name) returns http:Ok | http:InternalServerError {
        sql:ExecutionResult | error result = insertData(name);
        if result is sql:ExecutionResult{
            return http:OK;
        }
        return http:INTERNAL_SERVER_ERROR;
     }
     resource function get data() {
        
     }
}
