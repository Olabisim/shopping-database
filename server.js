const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const port = 5000;

dotenv.config({
    path: "./.env"
})

mongoose.connect(process.env.MONGO_LINK, {
    
}).then(() => {console.log("server connected")})


app.listen(port, () => {
    console.log('server is listening on port 5000')
})