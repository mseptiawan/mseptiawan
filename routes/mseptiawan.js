

var express = require('express');
var router = express.Router();

const Data = require('../model/data');
const mseptiawanController = require('../controller/mseptiawan');


router.post('/',mseptiawanController.create)


module.exports.router;