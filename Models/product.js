var db = require('../Dbconnection');

var product = {
  //lấy tất cả các sản phẩm
  getAllProduct: function (id, callback) {
    return db.query("Select * from product", callback);
  },
  //lấy thông tin chi tiết của sản phẩm
  getProductById: function (productid, callback) {
    return db.query("select * from product where product_id=?", [productid], callback);
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
  getproductcatalog: function (catalogid, callback) {
    return db.query("select * from product where catalog_id=?", [catalogid], callback);
  },
  getproductcompany: function (companyid, callback) {
    return db.query("select * from product where company_id=?", [companyid], callback);
  }
};
module.exports = product;