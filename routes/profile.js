'use strict';

const {ensureLoggedIn} = require('connect-ensure-login');
const express = require('express');
const router = express.Router();

router.get('/',
  ensureLoggedIn(),
  function(req, res, next) {
    res.render('profile', { title: 'Your Simple App Profile', user: req.user});
  }
);

module.exports = router;
