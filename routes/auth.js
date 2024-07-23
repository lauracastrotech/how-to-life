const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../model/helper');
require('dotenv').config();

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET;


// router.get("/users/:id", async function(req, res) {
//     try {
//       const results = await db(`SELECT * FROM users WHERE user_id= ${+req.params.id}`); 
//     if(results.data.length === 1) {
//       res.status(200).send(results.data[0]);
//     } else {
//         res.status(404).send("Error! User not found");
//     }
//     } catch (e) {
//       res.status(500).send({ error: e.message });
//     }
//   });

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



  
router.post('/register', async (req, res) => {
    const { email, password, firstName } = req.body;
  
    if (!email || !password || !firstName) {
      return res.status(400).send({ message: "Please provide all required fields" });
    }
  
    try {
        const hash = await bcrypt.hash(password, saltRounds);
  
        await db(
            `INSERT INTO users (email, password, first_name) VALUES (?, ?, ?)`,
            [email, hash, firstName]
        );
  
        res.send({ message: "Register successful" });
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
  });
  

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
      const results = await db(
          `SELECT * FROM users WHERE email = "${email}"`
      );

      const user = results.data[0];

      if (user) {
          const user_id = user.id;

          const correctPassword = await bcrypt.compare(password, user.password);

          if (!correctPassword) throw new Error("Incorrect password");

          const token = jwt.sign({ user_id }, jwtSecret);
          res.send({ message: "Login successful, here is your token", token });
      } else {
          throw new Error("User does not exist. Please sign up!");
      }
  } catch (err) {
      res.status(400).send({ message: err.message });
  }
});


module.exports = router;
