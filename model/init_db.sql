-- Drop Tables


SET foreign_key_checks = 0;
DROP TABLE if exists items;
SET foreign_key_checks = 1;

--
-- Create Tables
/* My database is called present_planner_pal */

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100)
);


CREATE TABLE Celebrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    friend_name VARCHAR(50) NOT NULL,
    relationship VARCHAR(50),
    birthday_date DATE NOT NULL,
    reminder_frequency VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

