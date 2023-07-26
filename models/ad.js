const {Schema, model, default: mongoose} = require('mongoose')
const Review = require('./review')

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
    },
    category: {
        type: mongoose.Schema.ObjectId, 
        ref: 'Category'
    },
    numberOfRatings: {
        type: Number,
        default: 0
    },
    averageRating: {
        type: Number,
        default: 0,
        min: 1,
        max: 5
    },
    reviews: [{
        type: mongoose.Schema.ObjectId, 
        ref: "Review"
    }],
})

const Ad = model('Ad', adSchema)

module.exports = Ad;
