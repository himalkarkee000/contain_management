const bookRoute = require('../modules/books/book.router')

const mainRoute = require('express').Router()

mainRoute.use('/api',bookRoute)


module.exports = mainRoute