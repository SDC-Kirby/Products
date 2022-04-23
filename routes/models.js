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

    var queryString =
    `SELECT
    products.id,          products.name,      products.slogan,
    products.description, products.category,  products.default_price,
    features.feature,     features.value
    FROM products
    JOIN features
    ON products.id=${productId}
    AND features.product_id=${productId}`;

    db.query(queryString)
      .then((res) => {
        let data = res.rows;
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
  },

  readStyles: (productId, callback) => {
    var styles = { product_id: productId };

    // SELECT id AS product_id
    let queryString =
      `SELECT json_agg(
        json_build_object(
          'style_id', styles.id,
          'name', styles.name,
          'original_price', styles.original_price,
          'sale_price', styles.sale_price,
          'default?', styles.default_style,
          'photos', (SELECT json_agg(json_build_object(
            'thumbnail_url', photos.thumbnail_url,
            'url', photos.url
          )) AS photos FROM photos WHERE photos.style_id=styles.id),
          'skus', (SELECT json_object_agg(
            skus.id, json_build_object(
              'quantity', skus.quantity,
              'size', skus.size
            )
          ) AS skus FROM skus WHERE skus.style_id=styles.id)
        )
      ) AS results FROM styles WHERE product_id=${productId};`
    db.query(queryString)
      .then((res) => {

        let data = res.rows[0];

        styles.results = data.results;

        callback(null, styles);
      })
      .catch(err => callback(err));

  },

  readRelated: (productId, callback) => {

    let queryString =
    `SELECT json_agg(related_product_id)
    AS results
    FROM related
    WHERE current_product_id=${productId}`

    db.query(queryString)
      .then((res) => {

        let data = res.rows[0].results;

        callback(null, data);
      })
      .catch(err => callback(err));

  }
}