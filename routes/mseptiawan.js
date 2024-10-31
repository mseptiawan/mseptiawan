// https://github.com/mseptiawan/mseptiawan


var express = require('express');
var router = express.Router();

const mseptiawanController = require('../controller/mseptiawan');


router.post('/mseptiawan',mseptiawanController.create)


module.exports = router;