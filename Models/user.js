var db = require('../Dbconnection');

var User = {
  Login: function (email,password,callback) {
    return db.query("SELECT * FROM user WHERE email = ? AND password = ?", [email, password], callback);
  }
};
module.exports = User;