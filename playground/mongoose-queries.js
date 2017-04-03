var {ObjectID} =require('mongodb');
var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todoModel');
var {User} = require('./../server/models/userModel');

var id = '58d202b3b56697456505e9fa';
var idUser = '58d0a5092afc8852282bc56d'
/*if(!ObjectID.isValid(id)) {
    console.log('ID not valid');
}*/

/*Todo.find({
    _id: id
}).then((docs) => {
    if(docs.length === 0) {
        return console.log('ID not found');
    }
    console.log('docs:', docs);
});

Todo.findOne({
    _id: id
}).then((doc) => {
    if(!doc) {
        return console.log('ID not found');
    }
    console.log('doc:', doc);
});*/

Todo.findById(id).then((doc) => {
    if(!doc) {
        return console.log('ID not found');
    }
    console.log('doc found by id:', doc);
}).catch((e) => {
    return console.log('There is an error: ', e);
});

User.findById(idUser).then((doc) => {
    if(!doc) {
        return console.log('ID User not found');
    }
    console.log('User found by id:', doc);
}).catch((e) => {
    return console.log('There is an error: ', e);
});

