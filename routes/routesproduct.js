var express = require('express');
var router = express.Router();
var Product = require('../Models/product');

router.get('/productbyid/:id', function (req, res, next) {
  var productid = req.params.productid
  Product.getProductById(productid, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows[0]);
    }
  });
});
router.get('/productall', function (req, res, next) {
  Product.getAllProduct(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
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
router.get('/productcatalog/:catalogid', function (req, res, next) {
  var catalogid = req.params.catalogid
  Product.getproductcatalog(catalogid, function (err, rows, fields) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.get('/productcompany/:companyid', function (req, res, next) {
  var companyid = req.params.companyid
  Product.getproductcompany(companyid, function (err, rows, fields) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;