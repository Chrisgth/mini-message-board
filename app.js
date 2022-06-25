var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRoute = require('./routes/indexRoute')
const newRoute = require('./routes/newRoute')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(8080, () => {
  console.log('listening on port 8080')
})

app.use(indexRoute)
app.use(newRoute)

app.use((req, res) => {
  res.status(404).render('404')
})


module.exports = app;
