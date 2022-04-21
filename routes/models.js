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

    var queryString = `SELECT
                      products.id,          products.name,      products.slogan,
                      products.description, products.category,  products.default_price,
                      features.feature,     features.value
                      FROM products JOIN features ON products.id=${productId} AND features.product_id=${productId}`;

    db.query(queryString)
      .then((res) => {
        var data = res.rows;
        data[0].features = [];

        for (let i = 0; i < data.length; i++) {
          var temp = {
            feature: data[i].feature,
            value: data[i].value
          }
          data[0].features.push(temp);
        }
        delete data[0].feature;
        delete data[0].value;
        callback(null, data[0]);
      })
      .catch(err => callback(err))
  }
}