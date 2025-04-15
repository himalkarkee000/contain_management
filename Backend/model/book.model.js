const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    bookName:{
        type:String,
        unique:true
    },
    bookPrice:{
        type:String
    },
    isbnNumber:{
        type:Number

    },
    authorName:{
        type:String
    },
    publishedAt:{
        type:String
    },
    imageUrl:String
})

const BookModel = mongoose.model("Book",bookSchema)

module.exports = BookModel