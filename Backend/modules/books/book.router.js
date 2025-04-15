
const { uploader, setPath } = require('../../middleware/uploader.middleware')
const bookCtrl = require('./book.controller')

const bookRoute = require('express').Router()

bookRoute.post('/book',setPath('books'),uploader.single('image'),bookCtrl.register)
bookRoute.get('/book',bookCtrl.findAll)
bookRoute.get('/book/:id',bookCtrl.findOne)
bookRoute.delete('/book/:id',bookCtrl.delete)
bookRoute.patch('/book/:id',setPath('books'),uploader.single('image'),bookCtrl.update)

module.exports = bookRoute