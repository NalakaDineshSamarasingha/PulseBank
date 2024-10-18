import ballerinax/mysql;
import ballerina/sql;

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

function insertData(string name) returns sql:ExecutionResult | sql:Error{
    sql:ParameterizedQuery insertQuery = `insert into test (name) values (${name})`;
    return dbClient->execute(insertQuery);
}
function getdata() returns sql:ExecutionResult | sql:Error{
    sql:ParameterizedQuery getData = `Select `
}