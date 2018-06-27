var express = require('express');
var router = express.Router();
var Order = require('../Models/order');
router.get('/orderbyid/:orderid', function (req, res, next) {
  var orderid = req.params.orderid
  Order.getorderById(orderid, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows[0]);
    }
  });
});
router.get('/orderall', function (req, res, next) {
  Order.getAllorder(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.post('/addorder', function (req, res, next) {
  Order.addorder(req.body, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.delete('/deleteorder/:order_id', function (req, res, next) {
  var orderid = req.params.order_id;
  Order.deleteorder(orderid, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});

router.put('/updateorder/:order_id', function (req, res, next) {
  Order.updateorder(req.params.order_id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;