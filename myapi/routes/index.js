var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/name', function(req, res, next) {
  var person = {
    name: 'Kwame',
    age: 45,
    country: 'Ghana',
    town: 'Kumasi',
  };

  var visitor = req.query;
  res.render('myname', {
    title:'Myself',
    me:person,
    visitor
  });
});


router.get('/register', function(req, res, next)
{
  res.render('Info',{title:'Sign Up'});
});


router.post('/cc', function(req, res, next){
  res.render('display', {
    title: 'User details provided',
    user: req.body
  });

});
  


module.exports = router;
