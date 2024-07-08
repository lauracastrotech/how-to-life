const mysql = require('mysql');
require('dotenv').config();

const db = () => {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
        });

        connection.connect(err => {
            if (err) {
                reject(err);
            } else {
                resolve(connection);
            }
        });
    });
};

module.exports = db;