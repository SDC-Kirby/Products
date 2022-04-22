const models = require('./models');

module.exports = {
  getAllProducts: (req, res) => {

    var count = 5;
    if (req.query.count) {
      count = req.query.count;
    }

    models.readAllProducts(count, (err, data) => {
      if (err) {
        console.error(err);
      }
      res.send(data);
    })
  },

  getProduct: (req, res) => {

    productId = req.params.productId;

    models.readProduct(productId, (err, data) => {
      if (err) {
        console.error(err);
      }
      res.send(data);
    })
  },

  getStyles: (req, res) => {
    productId = req.params.productId;

    models.readStyles(productId, (err, data) => {
      if (err) {
        console.error(err);
      }
      res.send(data);
    })
  }
}