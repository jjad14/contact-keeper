const express = require('express');
const { body, validationResult } = require('express-validator');

require("dotenv").config();
const auth = require('../middleware/auth');

const User = require('../models/User');
const Contact = require('../modelS/Contact');


const router = express.Router();

// GET: api/contacts
// Get a users contacts
// Private access
router.get('/', auth, async (req, res) => {
    try {
        // find contact using user id
        const contacts = await Contact.find(
            {user: req.user.id}).sort({date: -1});

        res.json(contacts);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

// POST: api/contacts
// Add new contact
// Private access
router.post('/', (req, res) => {
    res.send('Add Contact');
});

// PUT: api/contacts/:id
// Update contact
// Private access
router.put('/:id', (req, res) => {
    res.send('Update Contact');
});

// DELETE: api/contacts/:id
// Delete contact
// Private access
router.delete('/:id', (req, res) => {
    res.send('Delete Contact');
});


module.exports = router;