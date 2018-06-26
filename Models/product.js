var db = require('../Dbconnection');

var product = {
  getAllProduct: function (id, callback) {
    return db.query("Select * from product", callback);
  },
  getProductById: function (id, callback) {
    return db.query("select * from product where product_id=?", [id], callback);
  },
  getProductlatest: function (callback) {
    return db.query("Select * from product order by product_created desc", callback);
  },
  getProductMostview: function (callback) {
    return db.query("Select * from product order by product_view desc", callback);
  },
  getProductdBestSell: function (callback) {
    return db.query("Select * from product order by product_pay desc", callback);
  },
  getproducttype: function (typeid, callback) {
    return db.query("select * from product where catalog_id=?", [typeid], callback);
  }
};
module.exports = product;