//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url, (err, db) => {
    if(err) {return console.log(err)}
    console.log('Successfully connected to Mongo server');

    // encuentra todos los todos
    /*db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos:');
        console.log(docs);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });*/

    // encuentra todos los users
    db.collection('Users').find().toArray().then((docs) => {
        console.log('Users:');
        console.log(docs);
    }, (err) => {
        console.log('Unable to fetch users', err);
    });

    // encuentra con query
    /*db.collection('Todos').find({_id : ObjectId("58d202b3b56697456505e9fa")}).toArray().then((docs) => {
        console.log('Todos:');
        console.log(docs);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });*/

    // count 
    /*db.collection('Todos').find().count().then((count) => {
        console.log(`Count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });*/

    //db.close();
});