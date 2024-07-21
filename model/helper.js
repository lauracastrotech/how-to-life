require('dotenv').config();
const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 1000, // Adjust this number as per your application's needs
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'how_to_life',
  port: process.env.DB_PORT || '3307',
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
        connection.release(); 
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
};