const multer = require('multer')
const fs = require('fs')


const setPath = (path) =>{
    return(req,res,next) =>{
        req.uploadDir = path
        next()
    }
}

const myStorage = multer.diskStorage({
    destination : (req,file,cb)=>{
        const path = "./public/uploads/" + req.uploadDir     
        if(!fs.existsSync(path)){
            fs.mkdirSync(path, {
                recursive:true
            })
        }
        cb(null, path)
    },
    filename :(req,file,cb)=>{
        // const randomNo = Math.ceil(Math.random()*9999)
       
        const ext = file.originalname.split(".").pop()
        const filename ="new1-"+ Date.now()+"-"+"."+ext;
        cb(null,filename)
    }
})

const imageFilter = (req,file,cb)=>{
    const ext = file.originalname.split(".").pop()
    
    const allowed = ['jpg','png','jpeg','svg','webp','gif','bmp']
    if(allowed.includes(ext.toLowerCase())){
        cb(null,true)
    }else{
        cb({code:400,message:"Image Format not support"})
    }
}

const uploader = multer({   
    storage: myStorage,
    fileFilter:imageFilter,
    limits:{
        fileSize:30000000
    }

})


module.exports = {uploader,setPath};
