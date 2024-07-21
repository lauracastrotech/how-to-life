const express = require('express');
const router = express.Router();
const db = require('../model/helper');

router.get('/:category', async function(req, res) {
    const { category } = req.params;

    const sql = `
        SELECT id, category, question, click_count
        FROM suggestions
        WHERE category = ?
        ORDER BY click_count DESC
        LIMIT 5`;

    try {
        console.log('Category:', category);
        console.log('SQL Query:', sql);

        const results = await db(sql, [category]);

        console.log('Results:', results);

        if (results && results.data && results.data.length > 0) {
            res.json(results.data);
        } else {
            res.status(404).json({ error: 'No suggestions found for the category' });
        }
    } catch (e) {
        console.error('Error fetching suggestions:', e);
        res.status(500).send({ error: 'Error fetching suggestions' });
    }
});

module.exports = router;