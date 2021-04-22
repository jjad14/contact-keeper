const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

require("dotenv").config();
const auth = require('../middleware/auth');

const User = require('../models/User');

const router = express.Router();

// GET: api/auth
// Get logged a user
// Private access
router.get('/', auth, async (req, res) => {
    try {
        // find user by id (without the password)
        const user = await User.findById(req.user.id).select('-password');

        // return user
        res.json(user);
    }
    catch(e) {
        res.status(500).send('Server Error');
    }
});

// POST: api/auth
// Authenticate user and get a token
// Public access
router.post(
    '/',
    body('email', 'Please inclue a valid email').isEmail(),
    body('password', 'Please include a password').exists(),
    async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // take email and password out of body
    const {email, password} = req.body;

    try {
        // find user by email
        let user = await User.findOne({email});

        // if there is no user
        if (!user) {
            return res.status(400).json({msg: 'Invalid Credentials'});
        }

        // compare passwords
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            res.status(400).json({msg: 'Invalid Credentials'});
        }

        // create payload
        const payload = {
            user: {
                id: user.id
            }
        };

        // sign token
        jwt.sign(payload, process.env.JWT_TOKEN_SECRET, {
            expiresIn: 3600
        }, (err, token) => {
            if (err) throw err;
            res.json({token});
        });

    }
    catch(err) {
        res.status(500).send('Server Error');
    }
    
});

module.exports = router;