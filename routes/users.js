const express = require('express');
const { body, validationResult } = require('express-validator');

const User = require('../models/User');

const router = express.Router();

// POST: api/users
// Register a user
// Public access
router.post(
    '/',
    body('name', 'Please include a name').not().isEmpty(),
    body('email', 'Please include a valid email').isEmail(),
    body('password', 'Please include a password with 6 or more characters').isLength({min: 6}),
    (req, res) => {
      // Finds the validation errors in this request and wraps them in an object with handy functions
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
    //   User.create({
    //     username: req.body.username,
    //     password: req.body.password,
    //   }).then(user => res.json(user));

    res.send(req.body);
    }
);

module.exports = router;