var express = require('express')
var exphbs = require('express-handlebars')
var path = require('path')

var data = require('./data')

var app = express()

var hbs = exphbs.create({
  helpers: {
    list1: listHelper
  }
})

app.use(express.static('public'))
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', function (req, res) {
  asyncMessage (function(err, message) {
    if (!err) {
      console.log(message)
      res.render('home', {tvs: data.home.tvs, couches: data.home.couches, message})
    } else {
      console.error(err)
    }
  })
})

app.listen(3001, function () {
  console.log('Listening on 3001')
})

function callFunc () {
  asyncMessage(data.home.spitOutMessage)
}

function asyncMessage (callback) {
  // console.log('1')
  setTimeout(function () {
    return callback(null, 'Here\'s the message')
  }, 2000)
  // console.log('2')
}

function listHelper(items, options) {
  var out = '<div>'
  for(var i=0; i < items.length; i++) {
  out += '<h2>' + options.fn(items[i]) + '</h2>'
  }
  out += '</div>'
  return out
}
