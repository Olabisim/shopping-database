const {Schema, model} = require('mongoose')

const categorySchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    }
})

const Category = model('Category', categorySchema)

module.exports = Category;
