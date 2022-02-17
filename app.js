'use strict';

const createError = require('http-errors');
const express = require('express');
const expressSession = require('express-session');
const path = require('path');
const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const db = require('./db/index');
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const profileRouter = require('./routes/profile');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// common middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// authentication via passport & session configuration
passport.use(new LocalStrategy(
  function(username, password, callback) {
    db.users.findByUsername(username, function(err, user) {
      if (err) {
        return void callback(err);
      }
      if (!user) {
        return void callback(null, false);
      }
      if (user.password !== password) {
        return void callback(null, false);
      }
      callback(null, user);
    });
  })
);

passport.serializeUser(function(user, callback) {
  callback(null, user.id);
});

passport.deserializeUser(function(id, callback) {
  db.users.findById(id, function (err, user) {
    if (err) {
      return void callback(err);
    }
    callback(null, user);
  });
});

app.use(expressSession({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/profile', profileRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
