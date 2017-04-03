//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url, (err, db) => {
    if(err) {return console.log(err)}
    console.log('Successfully connected to Mongo server');

    // deleteMany
    /*db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
        console.log(result.result);
    }, (err) => {
        console.log('Unable to fetch todos to delete', err);
    });*/

     // deleteOne
    /*db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
        console.log(result.result);
    }, (err) => {
        console.log('Unable to fetch todos to delete', err);
    });*/

    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({_id: ObjectId("58d036c803141e3e72166c12")}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to fetch todos to delete', err);
    });

    //db.close();
});