const Router = require('express');
const router = new Router();
const controller = require('./controller');

router.get('/', controller.getPersons)

module.exports = router;
