var db = require('../Dbconnection');

var Status = {
  getAllstatus: function (callback) {
    return db.query("Select * from status", callback);
  },
  //lấy thông tin chi tiết của sản phẩm
  getstatusById: function (status_id, callback) {
    return db.query("select * from status where status_id=?", [status_id], callback);
  }
};
module.exports = Status;