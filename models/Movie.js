const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create schema
const MovieSchema = new Schema ({
  title :{
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Movie = mongoose.model('movie', MovieSchema)