const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//var url = process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp'; // ya no!! Ahora lo hace config.js
var url = process.env.MONGODB_URI;
mongoose.connect(url);

module.exports = {
    mongoose
    // mongoose: mongoose // same thing
}