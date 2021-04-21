const mongoose = require('mongoose');
require("dotenv").config();

const db = process.env.MY_MONGO_URI;

// const connectDb = () => {
//     mongoose.connect(db, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//         useUnifiedTopology: true
//     })
//     .then(() => console.log('MongoDB Connected...'))
//     .catch((err) => {
//         console.log(err.message);
//         process.exit(1);
//     });
// };

const connectDb = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        console.log('MongoDB Connected...');
    }
    catch(err) {
        console.log(err);
        process.exit(1);
    }
};


module.exports = connectDb;