-- Drop Tables
SET foreign_key_checks = 0;
DROP TABLE if exists items;
SET foreign_key_checks = 1;

/* Step 1: Create the database */
CREATE DATABASE how_to_life;

/* Step 2: Navigate to the database */
USE how_to_life;

/* Step 3: Create users table */
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    username VARCHAR(50) UNIQUE,
    password VARCHAR(255)
);

/* Step 4: Create history table */
CREATE TABLE history (
    history_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    question TEXT,
    answer TEXT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

