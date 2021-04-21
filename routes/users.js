const express = require('express');
const bcrypt = require('bcryptjs');
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
    async (req, res) => {
      // Finds the validation errors in this request and wraps them in an object with handy functions
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const {name, email, password} = req.body;

      try {
        let user = await User.findOne({email});

        if (user) {
            return res.status(400).json({message: 'User already exists'});
        }

        // create user
        user = new User({
            name,
            email,
            password
        });

        // generate salt
        const salt = await bcrypt.genSalt();

        // create password hash
        user.password = await bcrypt.hash(password, salt);

        // save user to database
        await user.save();
        
        res.send('User Saved');
      }
      catch(err) {
        res.status(500).send('Server Error');
      }

    }
);

module.exports = router;