const mysql = require("mysql");
const Promise = require("bluebird");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require("./config");

let changePass = async (input) => {

    const connection = mysql.createConnection(config.DBConfig);

    await connection.connectAsync();

    let sql = "UPDATE user SET password = ? WHERE username = ?";

    const result = await connection.queryAsync(sql, [
        input.password1,
        input.username,
    ]);

    await connection.endAsync();

    if (result.length === 0) {
        throw new Error("Invalid Credentials");
    }

    console.log(result);
};


module.exports = {
    changePass
};