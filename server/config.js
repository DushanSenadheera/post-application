const mongoose = require('mongoose');

const connectToDB = async (url) => {
    try {
        await mongoose.connect(url);
        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to database', error);
    }
}

module.exports = connectToDB;