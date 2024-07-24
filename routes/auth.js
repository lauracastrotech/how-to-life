const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../model/helper');
require('dotenv').config();

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET;


// Get user
router.get("/users/:userId", async function(req, res) {
  const { userId } = req.params;
  if (!userId) {
    return res.status(400).send({ error: "User ID is required!" });
  }
  try {
    const results = await db(`SELECT * FROM users WHERE user_id = ?`, [userId]);
    console.log(results)
    res.status(200).send( {data: results});
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

// Route to register a new user
router.post('/register', async (req, res) => {
    const { email, password, firstName } = req.body;

    if (!email || !password || !firstName) {
        return res.status(400).send({ message: "Please provide all required fields" });
    }

    try {
// Check if the user already exists
        const results = await db(`SELECT * FROM users WHERE email = ?`, [email]);
        if (results.data.length > 0) {
            return res.status(400).send({ message: "Email already in use" });
        }

        const hash = await bcrypt.hash(password, saltRounds);

        await db(
            `INSERT INTO users (email, password, first_name) VALUES (?, ?, ?)`,
            [email, hash, firstName]
        );

        res.send({ message: "Register successful" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// Route to login a user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const results = await db(`SELECT * FROM users WHERE email = ?`, [email]);
        const user = results.data[0];

        if (!user) return res.status(400).send({ message: "User does not exist. Please sign up!" });

        const correctPassword = await bcrypt.compare(password, user.password);

        if (!correctPassword) return res.status(400).send({ message: "Incorrect password" });

        const token = jwt.sign({ user_id: user.user_id }, jwtSecret, { expiresIn: '1h' });
        res.send({ message: "Login successful, here is your token", token, user_id: user.user_id });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});
module.exports = router;
