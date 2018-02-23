'use strict'

var mongoose = require('mongoose')
var AUTH_CODE = require('../constants')
var Guest = mongoose.model('Guest')

exports.checkGuestList = function(req, res) {
  var checkGuest = new Guest(req.body)

  if (checkGuest.code === AUTH_CODE) {
    Guest.find({ name: checkGuest.name }, function(err, guest) {
      if (err) res.send(err)
      if (guest.length === 0) {
        res.status(404)
        res.send('No guests found')
      } else {
        res.send({
          status: 200
        })
      }
    })
  }
}
