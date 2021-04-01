var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  var url = fs.writeFile()
  // res.render('index', { title: 'Express' });
  res.render('index');
});

module.exports = router;
