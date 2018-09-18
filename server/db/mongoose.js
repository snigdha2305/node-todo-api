var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose is maintaining this connection over time
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
