'use strict'

var mongoose = require('mongoose')
var authCodes = require('../constants')
var Guest = require('../models/giftModel')
var GuestList = require('../models/guests')

exports.checkGuestList = function(req, res) {
  if (
    req.body.code === authCodes.AUTH_CODE ||
    req.body.code === authCodes.AUTH_CODE_UPPERCASE
  ) {
    Guest.findOne({ name: req.body.name }, function(err, guest) {
      if (err) res.send(err)

      if (!guest) {
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

exports.addAllGuests = function(req, res) {
  var numberOfAddedGuest = 0
  GuestList.forEach(function(guest) {
    var weddingGuest = new Guest(guest)

    Guest.findOne({ name: weddingGuest.name }, function(err, guestFound) {
      if (guestFound) {
        console.log('Guest ' + guestFound.name + ' already added')
        return
      }
      weddingGuest.save(function(err) {
        if (err) return err

        numberOfAddedGuest++

        console.log('Guest added: ' + guest.name)
      })
    })
  })
  res.send({
    status: 200,
    numberOfAddedGuest: numberOfAddedGuest
  })
}
