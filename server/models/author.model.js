const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true,'author name required'],
        maxlength:[30, 'author name length <= 30'],
        minlength:[3, 'author name must be > 2 chars']
    }
}, {timestamps: true})

const collection = 'Author' // name of collection
const AuthorModel = mongoose.model(collection, AuthorSchema);
module.exports = AuthorModel;