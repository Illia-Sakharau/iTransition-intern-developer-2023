const Router = require('express');
const router = new Router();
const userController = require('../controllers/usersController');
const authMiddleware = require('../middleware/authMddleware');

router.get('/all', authMiddleware, userController.getUsers)
router.post('/status', authMiddleware, userController.changeStatus)
router.delete('/delete', authMiddleware, userController.deleteUsers)

module.exports = router;