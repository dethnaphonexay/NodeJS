var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-Parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var companyRouter = require('./routes/company');

var app = express();

app.use(logger('dev'));
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true, parameterLimit: 100000, limit: '500mb' }));
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/company', companyRouter);

module.exports = app;
