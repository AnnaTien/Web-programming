var db = require('../Dbconnection');
var date = new Date();
var Transaction = {
  getAlltransaction: function (callback) {
    return db.query("Select * from transaction", callback);
  },
  //lấy thông tin chi tiết của sản phẩm
  gettransactionById: function (transaction_id, callback) {
    return db.query("select * from transaction where transaction_id=?", [transaction_id], callback);
  },
  addtransaction: function (transaction, callback) {
    return db.query("Insert into transaction(status,user_id,user_name,user_email,user_phone,amount,adress,created) values(?,?,?,?,?,?,?,?)", [101, transaction.user_id, transaction.user_name, transaction.user_email, transaction.user_phone, transaction.amount, transaction.adress, date], callback);
  },
  deletetransaction: function (transaction_id, callback) {
    return db.query("delete from transaction where transaction_id=?", [transaction_id], callback);
  },
  updatetransaction: function (transaction_id, transaction, callback) {
    return db.query("update transaction set status=? where transaction_id=?", [transaction.status, transaction_id], callback);
  },
  getsumtransaction: function (callback) {
    return db.query("Select count(*)as total from transaction", callback);
  }
};
module.exports = Transaction;