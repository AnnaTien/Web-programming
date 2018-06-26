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
module.exports = router;