var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/sign_in', function(req, res, next) {
  res.render('sign_in');
});

router.get('/sign_up', function(req, res, next) {
  res.render('sign_up');
});
router.get('/profile', function(req, res, next) {
  res.render('profile',{layout: 'main_home'});
});

router.get('/home', function(req, res, next) {
  res.render('main_home');
});

router.get('/messenger', function(req, res, next) {
  res.render('messenger',{layout: 'main_home'});
});
module.exports = router;
