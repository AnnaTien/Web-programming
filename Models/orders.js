var db = require('../Dbconnection');

var Orders = {
  getAllorders: function (callback) {
    return db.query("Select * from orders", callback);
  },
  //lấy thông tin chi tiết của sản phẩm
  getOrdersById: function (orders_id, callback) {
    return db.query("select * from orders where orders_id=?", [orders_id], callback);
  },
  addOrders: function (orders, callback) {
    return db.query("Insert into orders(product_id,orders_qty,orders_amount,orders_status,transaction_id) values(?,?,?,?,?)", [orders.product_id,orders.orders_qty,orders.orders_amount,101,orders.transaction_id], callback);
  },
  deleteorders: function (orders_id, callback) {
    return db.query("delete from orders where orders_id=?", [orders_id], callback);
  },
  updateorders: function (orders_id, orders, callback) {
    return db.query("update orders set orders_qty=?,orders_amount=?,orders_status=?,transaction_id=? where orders_id=?", [orders.orders_qty, orders.orders_amount,orders.orders_status, orders.transaction_id, orders_id], callback);
  }
};
module.exports = Orders;