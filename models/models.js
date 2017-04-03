const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// == Todo
// ======================
var todoSchema =  new Schema({
    text: {type: String, required: [true, 'Todo text required'], minlength: 3, trim: true},
    completed: {type: Boolean, default: false},
    completedAt: {type: Number, default: null}
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports.Todo = Todo;


// == User
// ======================
var userSchema =  new Schema({
    email: {type: String, required: [true, 'Email is required'], minlength: 3, trim: true}
});

var User = mongoose.model('User', userSchema);

module.exports.User = User;