require('dotenv').config();
const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 1000, // Adjust this number as per your application's needs
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'how_to_life',
  // port: process.env.DB_PORT || '3307',
  multipleStatements: true
});

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

        const response = {
          data: results,
          affectedRows: results.affectedRows,
          changedRows: results.changedRows
        };

        resolve(response);
      });
    });
  });
<<<<<<< HEAD
};
||||||| 6d29931
});

// require('dotenv').config();
// const mysql = require('mysql');
// const fs = require('fs');

// const DB_HOST = process.env.DB_HOST;
// const DB_USER = process.env.DB_USER;
// const DB_PASS = process.env.DB_PASS;
// const DB_NAME = process.env.DB_NAME;
// const DB_PORT = process.env.DB_PORT || 3306;

// const con = mysql.createConnection({
//   host: DB_HOST || '127.0.0.1',
//   user: DB_USER || 'root',
//   password: DB_PASS,
//   database: DB_NAME || 'how_to_life',
//   port: DB_PORT,
//   multipleStatements: true
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log('Connected!');

//   const sql = fs.readFileSync(__dirname + '/init_db.sql').toString();
//   con.query(sql, function(err, result) {
//     if (err) throw err;
//     console.log('Tables creation was successful!');

//     console.log('Closing...');
//     con.end();
//   });
// });

//for bianca connection to DB
// require('dotenv').config();
// const mysql = require('mysql');

// const pool = mysql.createPool({
//   connectionLimit: 1000, // Adjust this number as per your application's needs
//   host: process.env.DB_HOST || '127.0.0.1',
//   user: process.env.DB_USER || 'root',
//   password: process.env.DB_PASS || '',
//   database: process.env.DB_NAME || 'how_to_life',
//   // port: process.env.DB_PORT || '3307',
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
=======
});

// require('dotenv').config();
// const mysql = require('mysql');
// const fs = require('fs');

// const DB_HOST = process.env.DB_HOST;
// const DB_USER = process.env.DB_USER;
// const DB_PASS = process.env.DB_PASS;
// const DB_NAME = process.env.DB_NAME;
// const DB_PORT = process.env.DB_PORT || 3306;

// const con = mysql.createConnection({
//   host: DB_HOST || '127.0.0.1',
//   user: DB_USER || 'root',
//   password: DB_PASS,
//   database: DB_NAME || 'how_to_life',
//   port: DB_PORT,
//   multipleStatements: true
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log('Connected!');

//   const sql = fs.readFileSync(__dirname + '/init_db.sql').toString();
//   con.query(sql, function(err, result) {
//     if (err) throw err;
//     console.log('Tables creation was successful!');

//     console.log('Closing...');
//     con.end();
//   });
// });

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
>>>>>>> 0097d0ca53717eccb7e53608f778de5cf6b86681
