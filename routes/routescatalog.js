var express = require('express');
var router = express.Router();
var Catolog = require('../Models/catalog');
router.get('/catalog/:id?', function (req, res, next) {
  if (req.params.id) {
    Catolog.getCatalogById(req.params.id, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else { 
    Catolog.getAllCatalog(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }

    });
  }
});
module.exports = router;