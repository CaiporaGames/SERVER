const mongoose = require('mongoose');

module.exports = mongoose.model('employee',
{
    fullName: {type: String},
    position:{type: String},
    location:{type: String},
    salary:{type: Number}
}, 'questions'); //Name of the collection