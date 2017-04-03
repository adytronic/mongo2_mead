var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var todoSchema =  new Schema({
    text: {type: String, required: [true, 'Todo text required'], minlength: 3, trim: true},
    completed: {type: Boolean, default: false},
    completedAt: {type: Number, default: null}
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = {Todo};
