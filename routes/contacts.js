const express = require('express');

const router = express.Router();

// GET: api/contacts
// Get a users contacts
// Private access
router.get('/', (req, res) => {
    res.send('Get all Contacts');
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