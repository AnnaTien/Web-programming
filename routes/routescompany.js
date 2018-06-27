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
router.post('/addcompany', function (req, res, next) {
  Company.addcompany(req.body, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.delete('/deletecompany/:company_id', function (req, res, next) {
  Company.deletecompany(req.params.company_id, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});

router.put('/updatecompany/:company_id', function (req, res, next) {
  Company.updatecompany(req.params.company_id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;