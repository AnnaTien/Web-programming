var db = require('../Dbconnection');
var date = new Date();
var User = {
  Login: function (email, password, callback) {
    return db.query("SELECT * FROM user WHERE email = ? AND password = ?", [email, password], callback);
  },
  Register: function (register, callback) {
    return db.query("Insert into user(username,password,email,phone,name,Role,created) values(?,?,?,?,?,?,?)", [register.username, register.password, register.email, register.phone, register.name, 0, date], callback);
  },
  changeInfor: function (user_id, register, callback) {
    return db.query("update user set username=?,email=?,phone=?,name=? where user_id=?", [register.username, register.email, register.phone, register.name,user_id], callback);
  },
  getuserById: function (user_id, callback) {
    return db.query("select * from user where usert_id=?", [user_id], callback);
  },
};
module.exports = User;