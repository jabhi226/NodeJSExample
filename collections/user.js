const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    id: Number,
    name: String,
    age: Number,
    hobby: String,
    query: [String]
})

module.exports = mongoose.model('User', schema)