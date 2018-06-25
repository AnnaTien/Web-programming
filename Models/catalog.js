var db = require('../Dbconnection');

var Catalog = {
  getAllCatalog: function (callback) {
    return db.query("Select * from catalog", callback);
  },
  getCatalogById: function (id, callback) {
    return db.query("select * from catalog where catalog_id=?", [id], callback);
  }
};
module.exports = Catalog;