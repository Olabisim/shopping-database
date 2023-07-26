const express = require('express')
const app = express()
const dotenv = require('dotenv')
const port = 5000;

dotenv.config({
    path: "./.env"
})

app.get('/', (req, res) => {
    console.log("this is the home page")
})


app.listen(port, () => {
    console.log('server is listening on port 5000')
})