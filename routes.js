var express = require('express');
var path = require('path');

var router = express.Router();
//route
//export our router


var index = require('./routes/index');
var led = require('./routes/led');
var sens= require('./routes/sensors');
router.use('/', index);
router.use('/led', led);
router.use('/s',sens);

module.exports=router;
// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
//error page
router.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.router.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
router.get('/', function(req, res) {
    res.render('pages/index');
});
