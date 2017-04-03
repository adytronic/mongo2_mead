//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url, (err, db) => {
    if(err) {return console.log(err)}
    console.log('Successfully connected to Mongo server');

    // findOneAndUpdate
    /*db.collection('Todos').findOneAndUpdate(
        {_id: ObjectId("58d071d66bf31605e6f17f4f")}, 
        { $set: {completed: true}},
        { returnOriginal: false})
        .then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to fetch todos to update', err);
    });*/

    // findOneAndUpdate Users SET
    /*db.collection('Users').findOneAndUpdate(
        {_id: ObjectId("58d0328d3e44ef1ab3ba8ced")}, 
        { $set: {name: 'Alex'}},
        { returnOriginal: false})
        .then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to fetch users to update', err);
    });*/

    // findOneAndUpdate Users INC y SET a la vez
    // var num = 5; el incremento puede pasar como variable
    db.collection('Users').findOneAndUpdate(
        {_id: ObjectId("58d0328d3e44ef1ab3ba8ced")}, 
        { $inc: {age: 5}, $set: {name: 'Ady'}},
        { returnOriginal: false})
        .then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to fetch users to update', err);
    });

    //db.close();
});