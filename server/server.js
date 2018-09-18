//this file runs when we start the node app
//look at mongoose validators and mongoose schema pages
//this file will be responsible for our routes

var express = require('express');
var bodyParser = require('body-parser');
//bodyparser will take the json and convert it into an object attaching it on to the request object

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

//middleware
app.use(bodyParser.json());

//if you want to create a resource use post http and send the resource as the body
//e.g. when we want to make a new todo we'll send the json object to the server
//the server will get the properties, create the new model, complete the model and send it back to the client
//setting up a route here - first arg is url and second is a callback
//resource creation
app.post('/todos', (req, res) => {
  //body gets stored by the body parser
  //console.log(req.body);

  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});
