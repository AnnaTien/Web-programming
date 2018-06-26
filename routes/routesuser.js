var express = require('express');
var router = express.Router();
var User = require('../Models/user');

router.post('/login', function (req, res, next) {
  var email = req.body.email;
  var pass = req.body.password;
  var data = {
    "Data": ""
  };
  User.Login(email, pass, function (err, rows, fields) {
    if (rows.length != 0) {
      data["Data"] = 0;
      res.json(data);
    } else {
      data["Data"] = -1;
      res.json(data);
    }
  })
});
module.exports = router;