var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded( { extended: true } ));
router.use(bodyParser.json());

var User = require('../models/User');



    module.exports = router;