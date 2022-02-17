'use strict';

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Simple App', user: req.user });
});

module.exports = router;
