//Include Mongoose Module
var mongoose = require('mongoose');

//Connect to the Database
mongoose.connect('mongodb+srv://todo:todo@todo.vjrvs.mongodb.net/Todo?retryWrites=true&w=majority');

//Create Collection Schema
var todoSchema = new mongoose.Schema({
  item: String
});

//Create Collection Model
var Todo = mongoose.model('Todo', todoSchema);

//Functionality
module.exports = function(app){

  //Get Data from Database and Display it.
  app.get('/todo', function(req, res){
    Todo.find({}, function(err, data){
      if (err) throw err;
      res.render('todo', {todos: data})
    });
  });

  //Save Data into Database from User Input.
  app.post('/todo', function(req, res){
    var newTodo = Todo(req.body).save(function(err, data){
      if (err) throw err;
      res.render('todo', {todos:data});
    });
  });

  //Delete Data on User Click
  app.delete('/todo/:item', function(req, res){
    Todo.find({item: req.params.item}).deleteOne(function(err, data){
      if (err) throw err;
      res.render('todo', {todos:data});
    });
  });
};
