const express = require('express')
const app = require('express')

app.use(express.json());
app.use(express.static(`${__dirname}/public`))

// unhandled routes
app.all("*", (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: 'url not found'
    })
})


// global error handler
app.request((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 500;

    return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    })
})

module.exports = app