var express = require('express');
var router = express.Router();
var multer = require("multer")
var Banana = require("../../models/banana");

router.post('/add', function(req, res, next) {
  debugger
  Banana.create({path: req.file.filename})
    .then((banana)=> {
      res.redirect('/bananas/list');
    })
    .catch((error)=> {
      next(error)
    })
});

module.exports = router;
