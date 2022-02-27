const db = require('../database');

const borrower = {
  getById: function(id_borrower, callback) {
    return db.query('select * from borrower where id_borrower=?', [id_borrower], callback);
  },
  getAll: function(callback) {
    return db.query('select * from borrower', callback);
  },
  add: function(borrower, callback) {
    return db.query(
      'insert into borrower (fname,lname,streetAddress) values(?,?,?)',
      [borrower.fname, borrower.lname, borrower.streetAddress],
      callback
    );
  },
  delete: function(id_borrower, callback) {
    return db.query('delete from borrower where id_borrower=?', [id_borrower], callback);
  },
  update: function(id_borrower, borrower, callback) {
    return db.query(
      'update borrower set fname=?,lname=?, streetAddress=? where id_borrower=?',
      [borrower.fname, borrower.lname, borrower.streetAddress, id_borrower],
      callback
    );
  }
};
module.exports = borrower;