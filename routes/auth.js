const express = require('express');

const router = express.Router();

// GET: api/auth
// Get logged a user
// Private access
router.get('/', (req, res) => {
    res.send('Get logged in user');
});

// POST: api/auth
// Authenticate user and get a token
// Public access
router.post('/', (req, res) => {
    res.send('Log in user');
});

module.exports = router;