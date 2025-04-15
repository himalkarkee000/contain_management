const http = require('http')
const app = require('./config/express.config')

const server = http.createServer(app)

const port = process.env.PORT || 4000


server.listen(port,"localhost",(err)=>{
    if(!err){
        console.log(`Server is running in port ${port}`)
    }
})