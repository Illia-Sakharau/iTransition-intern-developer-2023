const Router = require('express');
const router = new Router();
const controller = require('./controller');

router.get('/', controller.getPersons)
router.get('/download', controller.downloadCSV)

module.exports = router;
