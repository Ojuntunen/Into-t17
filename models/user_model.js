const db = require('../database');

const user = {
  getById: function(id_user, callback) {
    return db.query('select * from user where id_user=?', [id_user], callback);
  },
  getAll: function(callback) {
    return db.query('select * from user', callback);
  },
  add: function(user, callback) {
    return db.query(
      'insert into user (username,password) values(?,?)',
      [user.username, user.password],
      callback
    );
  },
  delete: function(id_user, callback) {
    return db.query('delete from user where id_user=?', [id_user], callback);
  },
  update: function(id_user, user, callback) {
    return db.query(
      'update user set username=?,password=? where id_user=?',
      [user.username, user.password, id_user],
      callback
    );
  }
};
module.exports = user;