//install mongodb library
//mongo client connects you to a mongo server and issue commands to manipulate database
//const MongoClient = require('mongodb').MongoClient;

//now MongoClient var will take up the MongoClient property of mongodb object
//ObjectID constructor lets us make new object ids on the fly
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Snigdha', age: 23};
// //Object destructuring lets you pull out properties from an object creating variables
// //a good way to make new vars from an object's properties
// //lets say we wanna grab name and create a name var.
// var {name} = user;
// console.log(name);

//first arg us the url where the db lives
//second arg is a callback function which is gonna fire if the connection is a success or a failure
//TodoApp is the database name we're going to create
//but mongo is not going to create the db unless we start adding data to it
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  //all todos
  //find() returns a mongodb cursor, it's a pointer to the documents in the collection
  //find(condition) e.g. find({completed: false})
  db.collection('Users').find({
    //_id: new ObjectID('5b9228ce752dc836c6c9fa73')
    name: 'Swagat'
  }).toArray().then((docs) => {

    console.log('Todos : ');
    console.log(JSON.stringify(docs, undefined, 2));

  }, (err) => {
    console.log('Unable to fetch Todos', err);
  });

  db.collection('Todos').find().count().then((count) => {

    console.log('Todos count : ', count);

  }, (err) => {
    console.log('Unable to fetch Todos', err);
  });

  //db.close();
});
