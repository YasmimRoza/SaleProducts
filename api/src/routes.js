const router = require('express').Router();
// const multer = require('multer');
// const multerConfig = require('./config/multer');

// const ImageController = require('./controller/ImageController');
const UsersController = require('./controller/UsersController');
// const ProdutoController = require('./controller/ProdutoController');

// Usuario
router.post('/user', UsersController.create);
router.get('/user', UsersController.list);
router.get('/user/:id', UsersController.search);
router.put('/user/:id', UsersController.update);
router.delete('/user/:id', UsersController.delete);

module.exports = router;
