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
//Mongoclient takes a callback and that is when we have access to the database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  //only arg it takes is the string name for the collection you wanna insert into
  //insertOne takes two args, first arg is an object which will store various key value pairs we wanna have on our document
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   //ops attribute is gonna store all of the docs that were inserted
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //Insert new doc into Users(name, age, location)
  // db.collection('Users').insertOne({
  //   //timestamp is only gonna be available when you're using object ids
  //   name: 'Swagat',
  //   age: 23,
  //   location: 'Pune'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //   //result.ops is the array of all the documents that got inserted
  //   //console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
