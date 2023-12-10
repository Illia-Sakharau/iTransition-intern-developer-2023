const Router = require('express');
const router = new Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/usersController');

router.get('/all', userController.getUsers)
router.post('/status', userController.changeStatus)
router.delete('/delete', userController.deleteUsers)

module.exports = router;