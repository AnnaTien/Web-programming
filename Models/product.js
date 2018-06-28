var db = require('../Dbconnection');

var product = {
  //lấy tất cả các sản phẩm
  getAllproduct: function (callback) {
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
  getproductcompany: function (company_id, callback) {
    return db.query("select * from product where company_id=?", [company_id], callback);
  },
  addproduct: function (product, callback) {
    return db.query("Insert into product(product_name,catalog_id,company_id,product_price,product_discount,product_madein) values(?,?,?,?,?,?)", [product.product_name, product.catalog_id, product.company_id, product.product_price, product.product_discount, product.product_madein], callback);
  },
  deleteproduct: function (product_id, callback) {
    return db.query("delete from product where product_id=?", [product_id], callback);
  },
  updateproduct: function (product_id, product, callback) {
    return db.query("update product set product_name=?,catalog_id=?,company_id=?,product_price=?,product_discount=?,product_madein=? where product_id=?", [product.product_name, product.catalog_id, product.company_id, product.product_price, product.product_discount, product.product_madein, product_id], callback);
  },
  getsumproduct: function (callback) {
    return db.query("select SUM(product_qty)as total from product ", callback);
  },
};
module.exports = product;