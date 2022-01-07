const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "examdata",
};

let adduser = async (user) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `INSERT INTO user (message) values(?)`;
  connection.queryAsync(sql, [user.message]);
  console.log("Data Added");
  await connection.endAsync();
};

let selectuser = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `SELECT * FROM USER`;
  let list = await connection.queryAsync(sql);
  console.log("Data Displayed");
  await connection.endAsync();
  return list;
};

module.exports = { adduser, selectuser };
