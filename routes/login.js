'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Simple App Login'});
});

router.post('/',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
);

module.exports = router;
