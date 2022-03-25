const AuthorModel = require('../models/author.model')

module.exports = {

    findAllAuthors: (req,res) => {
        console.log('inside findAllAuthors')
    
        AuthorModel.find({})
        .collation({locale: "en" })
        .sort({name:1})
        .then( (AuthorObj) => {
            //console.log(AuthorObj)
            res.json(AuthorObj)
        })
        .catch( (err) => {
            console.log(`error: ${err}`)
            res.status(500).json(err)
        })
    },

    createAuthor: (req,res) => {
        console.log('inside createAuthor')
    
        AuthorModel.create(req.body)
        .then( (AuthorObj) => {
            console.log('Great Success! Author written')
            res.json(AuthorObj)
        })
        .catch( (err) => {
            console.log(`error: ${err}`)
            res.status(500).json(err)
        })
    },

    findAuthorById: (req,res) => {
        console.log('inside findAuthorById')
    
        AuthorModel.findOne({_id:req.params._id})
        .then( (AuthorObj) => {
            console.log(AuthorObj)
            return res.json(AuthorObj)
        })
        .catch( (err) => {
            console.log(`err: ${err}`)
            return res.status(500).json(err)
        })
    },

    deleteAuthor: (req,res) => {
        console.log('inside deleteAuthor')
        //console.log(req)
        console.log(req.params)
    
        AuthorModel.deleteOne({_id:req.params._id})
        .then( deletedAuthor => {
            console.log('Great Success! Author deleted')
            console.log(deletedAuthor)
            return res.json(deletedAuthor)
        })
        .catch( (err) => {
            console.log(`error: ${err}`)
            return res.status(500).send(err)
        })
    },

    updateAuthor: (req, res) => {
        console.log('inside updateAuthor')

        AuthorModel.findOneAndUpdate({_id:req.params._id},
        req.body,
        {new:true, runValidators:true}
        )
        .then(updatedAuthor => {
            console.log('updated Author: ' + updatedAuthor)
            res.json(updatedAuthor)
        })
        .catch( (err) => {
            console.log(`error: ${err}`)
            return res.status(500).send(err)
        })
    }

}