const express = require("express")
require('./db.config')
const cors = require('cors')
const helmet = require('helmet')
const mainRoute = require("./router.config")
const app = express()


app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

app.use(mainRoute)

app.use((req,res,next)=>{
    next({code:404,message:"NOT FOUND"})
})

app.use((error,req,res,next)=>{

    let statusCode = typeof error.code === 'number' ? error.code : 500;
    let msg = error.message || "Internal server error"
    let data = error.data || null

    res.status(statusCode).json({
        result:data,
        message:msg,
        meta:null
    })
})



module.exports = app