const express = require('express');
const router = express.Router();
const db = require("../model/helper")


/* GET home page. */
router.get('/suggestions', function(req, res) {
    const { category } = req.query;
    const sql = 
   `SELECT category, question, click_count
    FROM suggestions
    WHERE category = ?
    ORDER BY click_count DESC
    LIMIT 10;  -- Adjust the limit as needed`;
    
    db(sql, [category])
    .then(results => res.send(results))
    .catch(e => {
      console.error(e);
      res.status(500).send(e);
    });
});

module.exports = router;