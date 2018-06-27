var db = require('../Dbconnection');

var Catalog = {
  getAllCatalog: function (callback) {
    return db.query("Select * from catalog", callback);
  },
  getCatalogById: function (catalogid, callback) {
    return db.query("select * from catalog where catalog_id=?", [catalogid], callback);
  },
  addcatalog: function (catalog, callback) {
    return db.query("Insert into catalog(catalog_name) values(?)", [catalog.catalog_name], callback);
  },
  deletecatalog: function (id, callback) {
    return db.query("delete from catalog where catalog_id=?", [id], callback);
  },
  updatecatalog: function (catalog_id, catalog, callback) {
    return db.query("update catalog set catalog_name=? where catalog_id=?", [catalog.catalog_name, catalog_id], callback);
  }
};
module.exports = Catalog;