const {Schema, model, default: mongoose} = require('mongoose')
const { User } = require('./user')

const reviewSchema = new Schema({
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
    user: {
        type: mongoose.Schema.ObjectId, 
        ref: 'User'
    }
})

const Review = model('Review', reviewSchema)

module.exports = Review;
