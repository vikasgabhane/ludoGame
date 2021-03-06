const mysql = require("mysql");
const Promise = require("bluebird");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require("./config");

let checkEmail = async (input) => {

    const connection = mysql.createConnection(config.DBConfig);

    await connection.connectAsync();

    let sql = "SELECT * FROM user WHERE email = ?";

    const result = await connection.queryAsync(sql, [
        input.email,
    ]);

    await connection.endAsync();

    console.log(result);
    if (result.length === 0) {
        throw new Error("Invalid Credentials");
    }
    return result;
};


module.exports = {
    checkEmail
};