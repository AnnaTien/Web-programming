var express = require('express');
var router = express.Router();
var Company = require('../Models/company');
router.get('/company/:id?', function (req, res, next) {
  if (req.params.id) {
    Company.getCompanyById(req.params.id, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    Company.getAllCompany(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }

    });
  }
});
module.exports = router;