//import mongoose
const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author need a name"],
        minLength: [2, "minimum of 2 characters for name"]
    }
});
//Register our new collection (Schema)
const Author = mongoose.model('author', AuthorSchema);
module.exports = Author;