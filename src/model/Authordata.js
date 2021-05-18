const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ict.llvv1.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    description: String,
    image: String
});

var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;