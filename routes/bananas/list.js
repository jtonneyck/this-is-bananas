var express = require('express');
var router = express.Router();
var Banana = require("../../models/banana");

router.get('/list', function(req, res, next) {
  debugger
  Banana.find()
    .then((bananas)=> {
      res.render('bananas',{bananas});
    })
    .catch((error)=> {
      next(error)
    })
});

module.exports = router;
