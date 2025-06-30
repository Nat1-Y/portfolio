// routes/contact.js

const express = require('express'); // ✅ Add this line
const router = express.Router();    // ✅ Add this line
const pool = require('../db');

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        await pool.query(
            'INSERT INTO contact_messages(name, email, message) VALUES($1, $2, $3)',
            [name, email, message]
        );
        res.status(200).json({ success: true });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;