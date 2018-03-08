'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var GuestSchema = new Schema({
  name: String,
  confirmed: Boolean,
  plusOne: Boolean,
  specialDiet: String,
  extra: String,
  code: String
})

module.exports = mongoose.model('Guest', GuestSchema)
