var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/', controller.getAllProducts);
router.get('/:productId', controller.getProduct);
router.get('/:productId/styles', controller.getStyles);

module.exports = router;