var mongoose = require('mongoose');
//   `mongodb://localhost/todo-app-demo` is a string formatted by specifications provided by the Mongoose package in order to connect to a MongoDB database on your local system named `todo-app-demo`. You can name it whatever you like and it will be created as soon as you save some data to it.
mongoose.connect('mongodb://localhost/todo-app-demo');

var Todo = require('./models/todo');


  var Person = require('./models/person');

  var justin = new Person({
      firstName: "Justin",
      lastName: "Castilla",
      age: 33,
      superPower: "Beard",
      weakness: "Razors",
      isExcited: true
  });

  justin.save(function(err, newPerson){
    if(err) {return console.log(err);}
    console.log("saved new person: ", newPerson);
  });