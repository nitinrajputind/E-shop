const express = require('express')
const connectDB = require("./db/config")
const defaultData = require('./defaultData')
const routes = require('./routes/routes')
require("dotenv").config()
const cors = require('cors')

const app = express()
const PORT = process.env.PORT 

app.use(cors({
    origin : "*"
}))

const startConnection = async ()=>{
    try{
        await connectDB(process.env.DB_URI)
        app.listen(PORT, () => {
            console.log(`Server is Runing on http://localhost:${PORT}`)
        })
        defaultData()
        
    }
    catch(err){
        console.log(`Database is showing Error ${err.message}`)
    }
}

startConnection()

app.use(express.json())
app.use("/",routes)