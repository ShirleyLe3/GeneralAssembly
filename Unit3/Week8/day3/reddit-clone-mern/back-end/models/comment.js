// Add your textPost model here
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
	text: String
});

module.exports = mongoose.model('Comment', CommentSchema);