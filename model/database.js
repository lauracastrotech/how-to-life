<<<<<<< HEAD
require('dotenv').config();
const mysql = require('mysql');
||||||| ffb4e3b
require("dotenv").config();
const mysql = require("mysql");
const fs = require("fs");
// const path = require("path");
=======
// require('dotenv').config();
// const mysql = require('mysql');

// const pool = mysql.createPool({
//   connectionLimit: 10, // Adjust this number as per your application's needs
//   host: process.env.DB_HOST || '127.0.0.1',
//   user: process.env.DB_USER || 'root',
//   password: process.env.DB_PASS || '',
//   database: process.env.DB_NAME || 'how_to_life',
//   port: process.env.DB_PORT || 3306, // Assuming default MySQL port
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

//         resolve({
//           data: results,
//           affectedRows: results.affectedRows,
//           changedRows: results.changedRows
//         });
//       });
//     });
//   });
// };


  //bianca connection

//database.js
require("dotenv").config();
const mysql = require("mysql");
const fs = require("fs");
// const path = require("path");
>>>>>>> cf16d564cf6e02a52ddd84f674bb62526832ab1f

<<<<<<< HEAD
const pool = mysql.createPool({
  connectionLimit: 10, // Adjust this number as per your application's needs
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'how_to_life',
  port: process.env.DB_PORT || 3306, // Assuming default MySQL port
  multipleStatements: true
});
||||||| ffb4e3b
// Load environment variables
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
=======
// Load environment variables
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
//const DB_PORT = process.env.DB_PORT;
>>>>>>> cf16d564cf6e02a52ddd84f674bb62526832ab1f

module.exports = function db(query, params) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error getting MySQL connection:', err);
        reject(err);
        return;
      }

      connection.query(query, params, (error, results) => {
        connection.release(); // Release the connection back to the pool

        if (error) {
          console.error('Error executing query:', error.message);
          reject(error);
          return;
        }

        resolve({
          data: results,
          affectedRows: results.affectedRows,
          changedRows: results.changedRows
        });
      });
    });
<<<<<<< HEAD
||||||| ffb4e3b
  
    con.end();
  //});
=======
  
    con.end();
>>>>>>> cf16d564cf6e02a52ddd84f674bb62526832ab1f
  });
<<<<<<< HEAD
};

//sylwia
// require("dotenv").config();
// const mysql = require("mysql");
// const fs = require("fs");
// // const path = require("path");

// // Load environment variables
// const DB_HOST = process.env.DB_HOST;
// const DB_USER = process.env.DB_USER;
// const DB_PASS = process.env.DB_PASS;
// const DB_NAME = process.env.DB_NAME;

// // Create a connection to run the init_db.sql
// const con = mysql.createConnection(
//   {
//       host: DB_HOST || "127.0.0.1",
//       user: DB_USER || "root",
//       password: DB_PASS,
//       database: DB_NAME || "how_to_life",
//       //port: DB_PORT || "3307",
//       multipleStatements: true
//   }
// );

// con.connect(function(err) {

//     if (err) throw err;
//     console.log("Connected!");
  
//     let sql = fs.readFileSync(__dirname + "/init_db.sql").toString();
//     con.query(sql, function(err, result) {
//       if (err) throw err;
//       console.log("Tables creation was successful!");
  
//       console.log("Closing...");
//     });
  
//     con.end();
//   //});
//   });


  //bianca connection

// database.js
// require("dotenv").config();
// const mysql = require("mysql");
// const fs = require("fs");
// // const path = require("path");

// // Load environment variables
// const DB_HOST = process.env.DB_HOST;
// const DB_USER = process.env.DB_USER;
// const DB_PASS = process.env.DB_PASS;
// const DB_NAME = process.env.DB_NAME;
// // const DB_PORT = process.env.DB_PORT;

// // Create a connection to run the init_db.sql
// const con = mysql.createConnection(
//   {
//       host: DB_HOST || "127.0.0.1",
//       user: DB_USER || "root",
//       password: DB_PASS,
//       database: DB_NAME || "how_to_life",
//       // port: DB_PORT || "3307",
//       multipleStatements: true
//   }
// );

// con.connect(function(err) {

//     if (err) throw err;
//     console.log("Connected!");
  
//     let sql = fs.readFileSync(__dirname + "/init_db.sql").toString();
//     con.query(sql, function(err, result) {
//       if (err) throw err;
//       console.log("Tables creation was successful!");
  
//       console.log("Closing...");
//     });
  
//     con.end();
//   });
||||||| ffb4e3b


  //bianca connection

// database.js
// require("dotenv").config();
// const mysql = require("mysql");
// const fs = require("fs");
// // const path = require("path");

// // Load environment variables
// const DB_HOST = process.env.DB_HOST;
// const DB_USER = process.env.DB_USER;
// const DB_PASS = process.env.DB_PASS;
// const DB_NAME = process.env.DB_NAME;
// const DB_PORT = process.env.DB_PORT;

// // Create a connection to run the init_db.sql
// const con = mysql.createConnection(
//   {
//       host: DB_HOST || "127.0.0.1",
//       user: DB_USER || "root",
//       password: DB_PASS,
//       database: DB_NAME || "how_to_life",
//       port: DB_PORT || "3307",
//       multipleStatements: true
//   }
// );

// con.connect(function(err) {

//     if (err) throw err;
//     console.log("Connected!");
  
//     let sql = fs.readFileSync(__dirname + "/init_db.sql").toString();
//     con.query(sql, function(err, result) {
//       if (err) throw err;
//       console.log("Tables creation was successful!");
  
//       console.log("Closing...");
//     });
  
//     con.end();
//   });
=======
>>>>>>> cf16d564cf6e02a52ddd84f674bb62526832ab1f
