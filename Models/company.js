var db = require('../Dbconnection');

var Company = {
  getAllCompany: function (callback) {
    return db.query("Select * from company", callback);
  },
  getCompanyById: function (companyid, callback) {
    return db.query("select * from company where company_id=?", [companyid], callback);
  }
};
module.exports = Company;