var express = require('express')
var app = express()
var port = process.env.PORT || 3000
var mongoose = require('mongoose')
var Guest = require('./api/models/giftModel')
var bodyParser = require('body-parser')

mongoose.Promise = global.Promise
mongoose.connect(
  'mongodb://fabioSalimbeni:Fredr4987vs!@ds247838.mlab.com:47838/guestlist'
)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var routes = require('./api/routes/giftRoute') //importing route
routes(app) //register the route

app.listen(port)

console.log('Server started on port ' + port)
