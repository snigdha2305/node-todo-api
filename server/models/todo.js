var mongoose = require('mongoose');

//create Todo model
//model takes 2 args, first is name and second is object that's going to define properties for the model
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true //removes leading/trailing whitespace
  },
  completed: {
    type: Boolean,
    default: false
  },
  //when the Todo was completed
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};

// //creating instances of this model
// //new constructor which takes args that define the model
// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// //saves data to mongodb database and save returns a Promise
// //--v is version, it keeps track of various model changes over time
// newTodo.save().then((doc) => {
//   console.log('Saved Todo : ', doc);
// }, (e) => {
//   console.log('Unable to save Todo');
// });

//task
//text can take number cuz typecasting is allowed in mongoose
// var taskTodo = new Todo({
//     text: 'Something to do'
// });
//
// taskTodo.save().then((doc) => {
//   console.log('Saved Todo : ', doc);
// }, (e) => {
//   console.log('Unable to save Todo');
// });
