const BookModel = require("../../model/book.model")

class BookService {

    findOne = async(filter)=>{
        try {
            const book = await BookModel.findById(filter)
            return book
            
        } catch (exception) {
            throw exception
            
        }
    }
    delete = async(filter) =>{
        try {
            const book = await BookModel.findByIdAndDelete(filter)
            if(!book){
                throw{code:422 ,message:"Book not found"}
            }
            return book
            
        } catch (exception){
            throw exception            
        }
    }
    transformUpdateData=async(req,newData) =>{
        try {
            const data = {
                ...req.body
            }
            if(req.file){
                data.imageUrl = req.file.filename

            }else{
                data.imageUrl = newData.imageUrl
            }
            return data
            
        } catch (exception) {
            throw exception            
        }
    }
    update = async(filter,data)=>{
        try {
            const updateResponse =  await BookModel.findByIdAndUpdate(filter,{$set:data}, { new: true })
            return updateResponse
            
        } catch (exception) {
            throw exception
            
        }
    }
}

const bookSvc = new BookService()
module.exports = bookSvc