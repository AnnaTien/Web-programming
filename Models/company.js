var db = require('../Dbconnection');

var Company = {
  getAllCompany: function (callback) {
    return db.query("Select * from company", callback);
  },
  getCompanyById: function (companyid, callback) {
    return db.query("select * from company where company_id=?", [companyid], callback);
  },
  addcompany: function (company, callback) {
    return db.query("Insert into company(company_name) values(?)", [company.company_name], callback);
  },
  deletecompany: function (company_id, callback) {
    return db.query("delete from company where company_id=?", [company_id], callback);
  },
  updatecompany: function (company_id, company, callback) {
    return db.query("update company set company_name=? where company_id=?", [company.company_name, company_id], callback);
  },
  getsumcompany: function (callback) {
    return db.query("select count(*)as total from company ", callback);
  },
};
module.exports = Company;