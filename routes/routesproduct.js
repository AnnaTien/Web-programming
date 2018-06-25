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
router.get('/productlatest', function (req, res, next) {
  Product.getProductlatest(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.get('/productdbestsell', function (req, res, next) {
  Product.getProductdBestSell(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.get('/productmostview', function (req, res, next) {
  Product.getProductMostview(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;