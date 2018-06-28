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
      data["account"] = rows[0];
      res.json(data);
    } else {
      data["Data"] = -1;
      res.json(data);
    }
  })
});
router.post('/register', function (req, res, next) {
  User.Register(req.body, function (err, count) {
    if (err) {
      data["Data"] = -1;
      res.json(data);
    } else {
      data["Data"] = -1;
      res.json(data);
    }
  });
});

router.put('/changeinfor/:user_id', function (req, res, next) {
  User.changeInfor(req.params.user_id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});
router.get('/userbyid/:user_id', function (req, res, next) {
  User.getuserById(req.params.user_id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows[0]);
    }
  });
});
module.exports = router;