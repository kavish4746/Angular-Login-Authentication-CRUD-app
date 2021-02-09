var db = require("../dbconnection");

var login = {
  verifyUserById: function (item, callback) {
    return db.query(
      "Select id from user_tbl where email=? and password=?",
      [item.email, item.password],
      callback
    );
  },
};
module.exports = login;
