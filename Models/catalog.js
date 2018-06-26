var db = require('../Dbconnection');

var Catalog = {
  getAllCatalog: function (callback) {
    return db.query("Select * from catalog", callback);
  },
  getCatalogById: function (catalogid, callback) {
    return db.query("select * from catalog where catalog_id=?", [catalogid], callback);
  }
};
module.exports = Catalog;