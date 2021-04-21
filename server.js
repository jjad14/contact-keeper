const express = require('express');
const connectDB = require('./config/db');

// create express app
const app = express();

// Connect to Database
connectDB();

app.get('/', (req, res) => res.json({ msg: 'Welcome to the ContactKeeper API...'}));

// Route Defined
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on post ${PORT}`));
