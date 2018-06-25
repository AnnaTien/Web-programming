var express = require('express');
var router = express.Router();
var Product = require('../Models/product');
router.get('/product/:id?', function (req, res, next) {
  if (req.params.id) {
    Product.getProductById(req.params.id, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    Product.getAllProduct(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }

    });
  }
});
module.exports = router;