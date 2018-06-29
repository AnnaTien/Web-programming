var express = require('express');
var router = express.Router();
var Status = require('../Models/status');

router.get('/statussall', function (req, res, next) {
  Status.getAllstatus(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.get('statusbyid/:status_id', function (req, res, next) {
  Status.getstatusById(req.params.status_id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows[0]);
    }
  });
});
module.exports = router;