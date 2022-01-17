const router = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const ImagesController = require('./controller/ImagesController');
const UsersController = require('./controller/UsersController');
const ProductsController = require('./controller/ProductsController');

// Usuario
router.post('/user', UsersController.create);
router.get('/user', UsersController.list);
router.get('/user/:id', UsersController.search);
router.put('/user/:id', UsersController.update);
router.delete('/user/:id', UsersController.delete);

// Produtos
router.post('/product/user/:sellerId', ProductsController.create);
router.get('/product/:sellerId', ProductsController.search);
router.get('/product', ProductsController.list);
router.delete('/product/:productId/user/:sellerId', ProductsController.delete);
router.put('/product/:productsId/user/:sellerId', ProductsController.update);

// Products and Images
router.post(
  '/image/:productsId',
  multer(multerConfig).array('files', 5),
  ImagesController.create
);
router.get('/image/:productsId', ImagesController.searchImages);
router.delete('/image/:productsId', ImagesController.delete);

module.exports = router;
