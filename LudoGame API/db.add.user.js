const mysql = require("mysql");
const Promise = require("bluebird");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require("./config");

let addData = async (input) => {

    const connection = mysql.createConnection(config.DBConfig);

    await connection.connectAsync();

    let sql = "INSERT INTO user (fname ,lname,username,password,email, mobile) VALUES (?,?,?,?,?,?)";

    const result = await connection.queryAsync(sql, [
        input.fname,
        input.lname,
        input.username,
        input.password,
        input.email,
        input.mobile,
    ]);

    await connection.endAsync();
    console.log(result);
};


module.exports = {
    addData
};