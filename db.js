const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;
const dbURL = mongoURI;

mongoose.set('strictQuery', false);
module.exports = () =>
{
    return mongoose.connect(dbURL);
}