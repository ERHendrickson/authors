//import contoller
const AuthorController = require('../controller/author.controller');

//define routes
module.exports = (app) => {
    //-----------------------CREATE----------------------------------
    app.post('/api/author/new', AuthorController.createAuthor);

//-----------------------DISPLAY ALL-----------------------------
    app.get('/api/authors', AuthorController.showAllAuthor);

//-----------------------DISPLAY ONE-----------------------------
    app.get('/api/author/:id', AuthorController.findOneAuthor);

//-----------------------UPDATE----------------------------------
    app.put('/api/author/update/:id', AuthorController.updateAuthor);

//-----------------------DELETE----------------------------------
    app.delete('/api/author/delete/:id', AuthorController.deleteAuthor);
}