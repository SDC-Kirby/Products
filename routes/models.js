const db = require('../database/db');

module.exports = {

  readAllProducts: (count, callback) => {

    var queryString = `SELECT * FROM products LIMIT ${count};`;

    db.query(queryString)
      .then((res) => {
        callback(null, res.rows);
      })
      .catch(err => callback(err));
  },

  readProduct: (productId, callback) => {

    var queryString = `SELECT * from products WHERE id=${productId}`;

    db.query(queryString)
      .then((res) => {
        callback(null, res.rows);
      })
      .catch(err => callback(err))
  }
}