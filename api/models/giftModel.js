'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var GuestSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  rsvp: {
    type: Boolean,
    required: false
  }
})

module.exports = mongoose.model('Guest', GuestSchema)
