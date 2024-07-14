-- Drop Tables
SET foreign_key_checks = 0;
DROP TABLE if exists users;
DROP TABLE if exists history;
DROP TABLE if exists suggestions;
SET foreign_key_checks = 1;

-- Step 1: Create the database 
-- CREATE DATABASE how_to_life;

-- /* Step 2: Navigate to the database 
-- USE how_to_life;

-- /* Step 3: Create users table */
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) not null,
    email VARCHAR(50) UNIQUE,
    password VARCHAR(255)
);

-- Add sample users for testing
INSERT INTO users (first_name, email, password) VALUES ('Laura', 'lauracastro@gmail.com', 123);

-- Step 4: Create history table
CREATE TABLE history (
    history_id INT AUTO_INCREMENT PRIMARY KEY,
    -- user_id INT,
    question TEXT NOT NULL,
    answer TEXT NOT NULL
    -- FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Step 5 : Create questions table
CREATE TABLE suggestions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category ENUM('Health', 'Relationships', 'Technology', 'Finance', 'Education', 'Career') NOT NULL,
    question TEXT NOT NULL,
    click_count INT DEFAULT 0
);


-- I also used dummy data to populate the table. To start with 100 questions beggining with how to.

-- Health
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Health', 'How to boost my immune system naturally?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Health', 'How to lose weight effectively?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Health', 'How to improve sleep quality?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Health', 'How to reduce stress and anxiety?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Health', 'How to lower blood pressure without medication?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Health', 'How to prevent common cold and flu?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Health', 'How to maintain a healthy diet on a budget?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Health', 'How to improve digestion naturally?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Health', 'How to manage chronic pain?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Health', 'How to start a workout routine at home?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Health', 'How to quit smoking for good?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Health', 'How to manage diabetes through diet?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Health', 'How to improve heart health?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Health', 'How to stay hydrated throughout the day?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Health', 'How to recognize signs of dehydration?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Health', 'How to reduce cholesterol levels?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Health', 'How to relieve back pain quickly?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Health', 'How to overcome insomnia?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Health', 'How to achieve mental clarity?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Health', 'How to deal with seasonal allergies?', 0);

-- Relationships
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Relationships', 'How to build trust in a relationship?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Relationships', 'How to communicate effectively with your partner?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Relationships', 'How to apologize sincerely?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Relationships', 'How to resolve conflicts without arguments?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Relationships', 'How to strengthen emotional intimacy?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Relationships', 'How to maintain a long-distance relationship?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Relationships', 'How to spice up your relationship?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Relationships', 'How to rebuild a broken relationship?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Relationships', 'How to express love and affection?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Relationships', 'How to support your partner through tough times?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Relationships', 'How to set healthy boundaries in a relationship?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Relationships', 'How to balance work and relationship?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Relationships', 'How to deal with jealousy in a relationship?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Relationships', 'How to improve intimacy in marriage?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Relationships', 'How to recover from infidelity?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Relationships', 'How to nurture friendships as an adult?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Relationships', 'How to build a strong relationship with family members?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Relationships', 'How to keep romance alive after having children?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Relationships', 'How to navigate cultural differences in a relationship?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Relationships', 'How to know when to end a relationship?', 0);

-- Technology
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Technology', 'How to install React.js?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Technology', 'How to build a responsive website?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Technology', 'How to secure your online accounts?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Technology', 'How to create a mobile app?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Technology', 'How to optimize website performance?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Technology', 'How to choose the right web hosting service?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Technology', 'How to set up a VPN on your device?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Technology', 'How to protect your computer from malware?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Technology', 'How to learn programming languages quickly?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Technology', 'How to automate repetitive tasks using scripts?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Technology', 'How to create a database using SQL?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Technology', 'How to implement version control using Git?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Technology', 'How to troubleshoot network connectivity issues?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Technology', 'How to improve cybersecurity awareness?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Technology', 'How to upgrade your operating system safely?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Technology', 'How to set up a home office for remote work?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Technology', 'How to integrate APIs into your application?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Technology', 'How to conduct usability testing for a website?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Technology', 'How to secure an e-commerce website?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Technology', 'How to stay updated with technology trends?', 0);

-- Finance
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Finance', 'How to create a budget and stick to it?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Finance', 'How to save money for retirement?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Finance', 'How to invest in the stock market for beginners?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Finance', 'How to build an emergency fund?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Finance', 'How to pay off debt fast?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Finance', 'How to negotiate a salary raise?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Finance', 'How to calculate your net worth?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Finance', 'How to file taxes as a freelancer?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Finance', 'How to choose the right credit card?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Finance', 'How to start a successful side hustle?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Finance', 'How to save for a down payment on a house?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Finance', 'How to manage finances as a couple?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Finance', 'How to protect yourself from identity theft?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Finance', 'How to choose the right insurance plan?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Finance', 'How to understand credit scores?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Finance', 'How to invest in cryptocurrency?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Finance', 'How to prepare financially for starting a family?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Finance', 'How to handle unexpected financial emergencies?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Finance', 'How to save money on groceries?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Finance', 'How to compare mortgage options?', 0);

-- Education:
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Education', 'How to study effectively for exams?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Education', 'How to improve reading comprehension?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Education', 'How to write a compelling essay?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Education', 'How to prepare for college interviews?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Education', 'How to choose a major in college?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Education', 'How to excel in online classes?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Education', 'How to manage time effectively as a student?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Education', 'How to develop good study habits?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Education', 'How to prepare for standardized tests like SAT or GRE?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Education', 'How to choose the right university?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Education', 'How to write a resume for your first job?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Education', 'How to find scholarships for college?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Education', 'How to improve public speaking skills?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Education', 'How to learn a new language effectively?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Education', 'How to stay motivated during online learning?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Education', 'How to build a strong portfolio for art school?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Education', 'How to take notes effectively in class?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Education', 'How to choose the right extracurricular activities?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Education', 'How to prepare for a successful career in STEM?', 0);
-- INSERT INTO suggestions (category, question, click_count) VALUES ('Education', 'How to apply for financial aid?', 0);


