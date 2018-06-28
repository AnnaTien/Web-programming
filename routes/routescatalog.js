var express = require('express');
var router = express.Router();
var Catolog = require('../Models/catalog');
router.get('/catalogbyid/:catalogid', function (req, res, next) {
  var catalogid = req.params.catalogid
  Catolog.getCatalogById(catalogid, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows[0]);
    }
  });
});
router.get('/catalogall', function (req, res, next) {
  Catolog.getAllCatalog(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.post('/addcatalog', function (req, res, next) {
  Catolog.addcatalog(req.body, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.delete('/deletecatalog/:catalog_id', function (req, res, next) {
  var catalogid = req.params.catalog_id;
  Catolog.deletecatalog(catalogid, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});

router.put('/updatecatalog/:catalog_id', function (req, res, next) {
  Catolog.updatecatalog(req.params.catalog_id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.get('/catalogsum', function (req, res, next) {  
  Catolog.getsumcatalog(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows[0]);
    }
  });
});
module.exports = router;