var express = require('express');
var router = express.Router();
var fs = require('fs');
var multer  = require('multer')

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var uri_mongoose ="mongodb+srv://phunkimhanh:Hanh18042001@hanhcluster.winin.mongodb.net/Tinder?retryWrites=true&w=majority";

mongoose.connect(uri_mongoose, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {});

var user =new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  username: String,
  password: String,
  gender:String,
  avatar: String
});

var userInsert = db.model('users',user);

var upload = multer({
  dest: 'public/uploads/photos/'
})




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/sign_in', function(req, res, next) {
  res.render('sign_in');
});
router.post('/sign_up',upload.single('avatar'),function (rep,res) {
  res.render('sign_up');
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
