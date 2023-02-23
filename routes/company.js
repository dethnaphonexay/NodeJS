var express = require('express');
var router = express.Router();
const companyController = require('../controller/companyController');
/* POST company data.. */

router.post('/', companyController.Create);
module.exports = router;