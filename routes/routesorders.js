var express = require('express');
var router = express.Router();
var Orders = require('../Models/orders');

router.get('/ordersall', function (req, res, next) {
  Orders.getAllorders(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.get('/ordersbyid/:orders_id', function (req, res, next) {
  Orders.getOrdersById(req.params.orders_id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows[0]);
    }
  });
});
router.post('/addorders', function (req, res, next) {
  Orders.addOrders(req.body, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.delete('/deleteorders/:orders_id', function (req, res, next) {
  Orders.deleteorders(req.params.orders_id, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});

router.put('/updateorders/:orders_id', function (req, res, next) {
  Orders.updateorders(req.params.orders_id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;