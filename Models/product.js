var db = require('../Dbconnection');

var product = {
  getAllProduct: function (callback) {
    return db.query("Select * from product", callback);
  },
  getProductById: function (id, callback) {
    return db.query("select * from product where product_id=?", [id], callback);
  }
};
module.exports = product;