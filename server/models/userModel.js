const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var userSchema =  new Schema({
    email: {type: String, required: [true, 'Email is required'], minlength: 3, trim: true}
});

var User = mongoose.model('User', userSchema);

module.exports = {User};