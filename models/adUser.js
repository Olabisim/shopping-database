const {Schema, model} = require('mongoose')

const adSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    }
})

const adModel = model('adModel', adSchema)

module.exports = adModel;
