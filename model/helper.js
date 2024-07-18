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
          // push the result (which should be an OkPacket) to data
        } else if (result[0].constructor.name == "RowDataPacket") {
          // push each row (RowDataPacket) to data
          result.forEach(row => results.data.push(row));
        } else if (result[0].constructor.name == "OkPacket") {
          // push the first item in result list to data (this accounts for situations
          // such as when the query ends with SELECT LAST_INSERT_ID() and returns an insertId)
          results.data.push(result[0]);
        }
        con.end();
        resolve(results);
      });
    });
  });

  return promise;
};


//for bianca connection to DB
// require('dotenv').config();
// const mysql = require('mysql');

// const pool = mysql.createPool({
//   connectionLimit: 1000, // Adjust this number as per your application's needs
//   host: process.env.DB_HOST || '127.0.0.1',
//   user: process.env.DB_USER || 'root',
//   password: process.env.DB_PASS || '',
//   database: process.env.DB_NAME || 'how_to_life',
//   port: process.env.DB_PORT || '3307',
//   multipleStatements: true
// });

// module.exports = function db(query, params) {
//   return new Promise((resolve, reject) => {
//     pool.getConnection((err, connection) => {
//       if (err) {
//         console.error('Error getting MySQL connection:', err);
//         reject(err);
//         return;
//       }

//       connection.query(query, params, (error, results) => {
//         connection.release(); // Release the connection back to the pool

//         if (error) {
//           console.error('Error executing query:', error.message);
//           reject(error);
//           return;
//         }

//         const response = {
//           data: results,
//           affectedRows: results.affectedRows,
//           changedRows: results.changedRows
//         };

//         resolve(response);
//       });
//     });
//   });
// };