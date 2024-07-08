const express = require('express');
const router = express.Router();
const db = require('../model/helper');

// Endpoint to fetch all suggestions
router.get('/', async function(req, res) {
    const sql = `
        SELECT category, question, click_count
        FROM suggestions
        ORDER BY click_count DESC
        LIMIT 10;`;

    try {
        const connection = await db();
        connection.query(sql, (err, results) => {
            if (err) {
                console.error('Error executing SQL query:', err);
                res.status(500).send(err);
            } else {
                console.log('All suggestions:', results);
                res.json(results);
            }
            connection.end();
        });
    } catch (e) {
        console.error('Database connection error:', e);
        res.status(500).send(e);
    }
});

// Endpoint to fetch top 10 questions based on category
router.get('/top10', async function(req, res) {
    const { category } = req.query;
    const sql = `
        SELECT category, question, click_count
        FROM suggestions
        WHERE category = ?
        ORDER BY click_count DESC
        LIMIT 10;`;

    try {
        const connection = await db();
        connection.query(sql, [category], (err, results) => {
            if (err) {
                console.error('Error executing SQL query:', err);
                res.status(500).send(err);
            } else {
                console.log(`Top 10 ${category} suggestions:`, results);
                res.json(results);
            }
            connection.end();
        });
    } catch (e) {
        console.error('Database connection error:', e);
        res.status(500).send(e);
    }
});

module.exports = router;
