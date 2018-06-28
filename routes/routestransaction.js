var express = require('express');
var router = express.Router();
var Transaction = require('../Models/transaction');

router.get('/transactionall', function (req, res, next) {
  Transaction.getAlltransaction(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.get('/transactionbyid/:transaction_id', function (req, res, next) {
  Transaction.gettransactionById(req.params.transaction_id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows[0]);
    }
  });
});
router.post('/addtransaction', function (req, res, next) {
  Transaction.addtransaction(req.body, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.delete('/deletetransaction/:transaction_id', function (req, res, next) {
  Transaction.deletetransaction(req.params.transaction_id, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});

router.put('/updatetransaction/:transaction_id', function (req, res, next) {
  Transaction.updatetransaction(req.params.transaction_id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.get('/sumtransaction', function (req, res, next) {
  Transaction.getsumtransaction(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows[0]);
    }
  });
});
module.exports = router;