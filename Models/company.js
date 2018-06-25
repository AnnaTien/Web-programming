var db = require('../Dbconnection');

var Company = {
  getAllCompany: function (callback) {
    return db.query("Select * from company", callback);
  },
  getCompanyById: function (id, callback) {
    return db.query("select * from company where company_id=?", [id], callback);
  }
};
module.exports = Company;