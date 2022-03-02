/*MAIN FILE FOR THE TODOAPP*/

//Use require to use Express package
var express = require('express');

//Require all controllers
var todoController = require('./controllers/todoController');

//make express app
var app = express();

//Set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./assets'));

//Used in place of Body Parser module
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Fire controllers
todoController(app);

//listen to port
app.listen(3000);
console.log('You are listening to port 3000');
