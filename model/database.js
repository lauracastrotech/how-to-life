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

database.js
require("dotenv").config();
const mysql = require("mysql");
const fs = require("fs");
// const path = require("path");

// Load environment variables
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const DB_PORT = process.env.DB_PORT;

// Create a connection to run the init_db.sql
const con = mysql.createConnection(
  {
      host: DB_HOST || "127.0.0.1",
      user: DB_USER || "root",
      password: DB_PASS,
      database: DB_NAME || "how_to_life",
      port: DB_PORT || "3307",
      multipleStatements: true
  }
);

con.connect(function(err) {

    if (err) throw err;
    console.log("Connected!");
  
    let sql = fs.readFileSync(__dirname + "/init_db.sql").toString();
    con.query(sql, function(err, result) {
      if (err) throw err;
      console.log("Tables creation was successful!");
  
      console.log("Closing...");
    });
  
    con.end();
  });
