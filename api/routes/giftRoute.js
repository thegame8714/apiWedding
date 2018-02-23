'use strict'
module.exports = function(app) {
  var guestList = require('../controllers/giftController')

  app.route('/addGift').post(guestList.checkGuestList)
}
