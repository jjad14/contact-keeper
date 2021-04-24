const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
require('dotenv').config();

// create express app
const app = express();

// Connect to Database
connectDB();

// Init middleware
app.use(express.json({ }));

// Route Defined
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// Serve static assets in production
if(process.env.NODE_ENV === 'production'){
     // Set static folder
     app.use(express.static('client/build'));

     // if we hit the home page it's going to load the index.html inside client/build
     app.get('*', (req, res) => 
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
     );
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on post ${PORT}`));
