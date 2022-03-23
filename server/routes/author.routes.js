const AuthorController = require('../controllers/author.controller')

module.exports= (app) => {
    app.get('/api/authors', AuthorController.findAllAuthors)

    app.post('/api/authors', AuthorController.createAuthor)

    app.get('/api/authors/:_id', AuthorController.findAuthorById)

    app.delete('/api/authors/:_id', AuthorController.deleteAuthor)

    app.put('/api/authors/:_id', AuthorController.updateAuthor)
}