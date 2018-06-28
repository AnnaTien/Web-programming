var express = require('express');
var router = express.Router();
var Product = require('../Models/product');

router.get('/productbyid/:productid', function (req, res, next) {
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
  Product.getAllproduct(function (err, rows) {
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
router.get('/productcompany/:company_id', function (req, res, next) {
  Product.getproductcompany(req.params.company_id, function (err, rows, fields) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.post('/addproduct', function (req, res, next) {
  Product.addproduct(req.body, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.delete('/deleteproduct/:product_id', function (req, res, next) {
  Product.deleteproduct(req.params.product_id, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});

router.put('/updateproduct/:product_id', function (req, res, next) {
  Product.updateproduct(req.params.product_id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;