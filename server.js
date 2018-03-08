var express = require('express')
var app = express()
var port = process.env.PORT || 3000
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

mongoose.connect(
  'mongodb://fabiosalimbeni:Fredr4987vs!@ds247838.mlab.com:47838/guestlist'
)
// mongoose.connect('mongodb://localhost:27017/Guest')
mongoose.Promise = global.Promise

var db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var routes = require('./api/routes/giftRoute') //importing route
routes(app) //register the route

app.listen(port)

console.log('Server started on port ' + port)
