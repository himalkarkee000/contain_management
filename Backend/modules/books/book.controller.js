const BookModel = require("../../model/book.model")
const bookSvc = require("./book.service")

class BookController {
    register = async(req,res,next)=>{
        try {
            const{bookName,bookPrice,isbnNumber,authorName,publishedAt} = req.body
           
           
            const book = {
            
                bookName,bookPrice,isbnNumber,authorName,publishedAt,
                imageUrl:req.file.filename
       
            }
            const registerBook = new BookModel(book)
            await registerBook.save()
            res.json({
                result:registerBook,
                message:"Book register"
            })
            
        } catch (exception) {
            next(exception)
            
        }
        
    }
    findAll = async(req,res,next)=>{
       try {
        const book = await BookModel.find()

        res.json({
            result:book,
            message:"All books ",
            meta:null
        })
       } catch (exception) {
        next(exception)
       }
    }
    findOne= async(req,res,next)=>{
       try {
        const book = await bookSvc.findOne({
            _id:req.params.id
        })
        res.json({
            result:book,
            message:"Single Book Fetched",
            meta:null
        })
       } catch (exception) {
        next(exception)
        
       }
    }
    delete = async(req,res,next) =>{
        try {
            const book = await bookSvc.delete({
                _id:req.params.id
            })
            res.json({
                result:book,
                message:"Book removed Succcessfully"
            })
            
        } catch (exception) {
            next(exception)
            
        }
    }
    update = async(req,res,next)=>{
      try {
       const existingData = await bookSvc.findOne({
        _id:req.params.id
       })
       const newData = await bookSvc.transformUpdateData(req,existingData)
        const updatedData = await bookSvc.update({_id:req.params.id},newData)
        res.json({
            result:updatedData,
            message:"Successfully update"
        })
      } catch (exception) {
        next(exception)
        
      }
        
    }
}

const bookCtrl = new BookController()
module.exports = bookCtrl