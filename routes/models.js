const db = require('../database/db');

module.exports = {

  readAllProducts: (count, callback) => {

    var queryString = `SELECT * FROM products LIMIT ${count}`;

    db.query(queryString)
      .then((res) => {
        callback(null, res.rows);
      })
      .catch(err => callback(err));
  },

  readProduct: (productId, callback) => {

    var queryString =
    `SELECT json_build_object(
      'id', id,
      'name', name,
      'slogan', slogan,
      'description', description,
      'category', category,
      'default_price', default_price,
      'features', (
        SELECT json_agg(
          json_build_object(
            'feature', feature,
            'value', value
          )
        ) FROM features WHERE product_id=${productId}
      )
    )
    AS results
    FROM products WHERE id=${productId}`

    db.query(queryString)
      .then((res) => {
        let data = res.rows[0].results;

        callback(null, data);
      })
      .catch(err => callback(err))
  },

  readStyles: (productId, callback) => {
    var styles = { product_id: productId };


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
      ) AS results FROM styles WHERE product_id=${productId}`
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