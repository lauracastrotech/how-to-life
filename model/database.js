require("dotenv").config();
const mysql = require("mysql");

const dbConfig = {
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "root",
  database: process.env.DB_NAME || "how_to_life",
  multipleStatements: true
};

const pool = mysql.createPool(dbConfig);

module.exports = pool;