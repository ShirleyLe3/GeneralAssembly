// models/person.js
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var personSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    superPower: String,
    weakness: String,
    isExcited: Boolean
});

var Person = mongoose.model('Person', personSchema);

module.exports = Person;