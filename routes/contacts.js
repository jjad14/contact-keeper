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
router.post(
    '/', 
    [ auth, [
        body('name', 'Name is required').not().isEmpty()
    ]], 
    async (req, res) => {
      // Finds the validation errors in this request and wraps them in an object with handy functions
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
    
      // get contact data from body
    const {name, email, phone, type} = req.body;

    try {
        // create new contact object
        const newContact = new Contact({
            name,
            email,
            phone,
            type,
            user: req.user.id
        });

        // save to db
        const contact = await newContact.save();

        // return newly created contact
        res.json(contact);

    } catch (error) {
        res.status(500).send('Server Error');
    }
});

// PUT: api/contacts/:id
// Update contact
// Private access
router.put('/:id', auth, (req, res) => {
    res.send('Update Contact');
});

// DELETE: api/contacts/:id
// Delete contact
// Private access
router.delete('/:id', auth, (req, res) => {
    res.send('Delete Contact');
});


module.exports = router;