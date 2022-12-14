const { Schema, model } = require('mongoose');

const diarySchema = new Schema({
    id: {
        type: Number
    },
    date: {
        type: String,
        default: 'No date provided'
    },
    weather: {
        type: String,
        default: 'No date provided'
    },
    visibility: {
        type: String,
        default: 'No date provided'
    },
    comment: {
        type: String,
        default: 'No date provided'
    }
})

const Diary = model('Diary', diarySchema)

module.exports = Diary