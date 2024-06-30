require("dotenv").config();
const mysql = require("mysql");

module.exports = async function db(query) {
  const results = {
    data: [],
    error: null
  };
  let promise = await new Promise((resolve, reject) => {
    const DB_HOST = process.env.DB_HOST;
    const DB_USER = process.env.DB_USER;
    const DB_PASS = process.env.DB_PASS;
    const DB_NAME = process.env.DB_NAME;

    const con = mysql.createConnection({
      host: DB_HOST || "127.0.0.1",
      user: DB_USER || "root",
      password: DB_PASS,
      database: DB_NAME || "database",
      multipleStatements: true
    });

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");

      con.query(query, function(err, result) {
        if (err) {
          results.error = err;
          console.log(err);
          reject(err);
          con.end();
          return;
        }

        if (!result.length) {
          if (result.affectedRows === 0) {
            results.error = "Action not complete";
            console.log(err);
            reject(err);
            con.end();
            return;
          }

        } else if (result[0].constructor.name == "RowDataPacket") {
          result.forEach(row => results.data.push(row));
        } else if (result[0].constructor.name == "OkPacket") {
          results.data.push(result[0]);
        }

        con.end();
        resolve(results);
      });
    });
  });

  return promise;
};
