var db = require('../Dbconnection');

var Order = {
  getAllorder: function (callback) {
    return db.query("Select * from order", callback);
  },
  getorderById: function (orderid, callback) {
    return db.query("select * from order where order_id=?", [orderid], callback);
  },
  addorder: function (order, callback) {
    return db.query("Insert into order(transaction_id,product_id,qty,amount,status) values(?,?,?,?,?)", [order.transaction_id, order.product_id, order.qty, order.amount, order.status], callback);
  },
  deleteorder: function (order_id, callback) {
    return db.query("delete from order where order_id=?", [order_id], callback);
  },
  updateorder: function (order_id, order, callback) {
    return db.query("update order set qty=? where order_id=?", [order.qty, order_id], callback);
  }
};
module.exports = Order;