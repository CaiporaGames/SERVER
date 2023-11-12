const mongoose = require('mongoose');
const dbURL = 'mongodb+srv://timoteo:11235813@cluster0.diujz.mongodb.net/autodrive_db?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);
module.exports = () =>
{
    return mongoose.connect(dbURL);
}