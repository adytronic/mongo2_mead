var {ObjectID} =require('mongodb');
var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todoModel');
var {User} = require('./../server/models/userModel');


// Borraría todos mis todos
//Todo.remove({}).then((result) => {
//});

// encuentra uno
/*Todo.findOneAndRemove({"text": "Second test todo"}).then((result) => {
    console.log(result);
});*/

// encuentra uno con este id
Todo.findByIdAndRemove("58dde1630310a8e642cdbdbd").then((todo) => {
    console.log(todo);
});

