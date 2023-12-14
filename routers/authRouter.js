const Router = require('express');
const router = new Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMddleware');

router.post('/login', authController.login)
router.post('/registration', authController.registration)
router.get('/check', authMiddleware, authController.checkUser)

module.exports = router;