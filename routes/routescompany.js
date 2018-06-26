var express = require('express');
var router = express.Router();
var Company = require('../Models/company');
router.get('/companybyid/:companyid', function (req, res, next) {
  var companyid = req.params.companyid;
  Company.getCompanyById(companyid, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows[0]);
    }
  });
});
router.get('/companyall', function (req, res, next) {
  Company.getAllCompany(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;