const MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url, (err, db) => {
    if(err) {return console.log(err)}
    console.log('Successfully connected to Mongo server');

    db.collection('Todos').insertOne({
        text: "Walk the dog",
        completed: false
    }, (err, result) => {
        if(err){return console.log("Unable to connect ", err)}
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    /*db.collection('Users').insertOne({
        name: 'ajm',
        age: 46,
        location: 'Los Angeles'
    }, (err, result) => {
        if(err){return console.log("Unable to connect ", err)}
        console.log(JSON.stringify(result.ops, undefined, 2));
    });*/

    db.close();
});