var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded( { extended: true } ));
router.use(bodyParser.json());
const VerifyToken = require('../middleware/VerifyToken');
var User = require('../models/User');
const mongoose = require("mongoose");
const db = mongoose.connection;


//add to cart in database
router.patch("/:id", VerifyToken, function(req, res) {
    debugger;
    const inCart = req.body.myObj;
    debugger;
    User.findByIdAndUpdate(   req.params.id, {
      $push: { "cart": inCart }
    }, {new: true},
      function(error, user) {
        debugger;
        if (error) {
          res.json({ status: "error", message: `${error}` });
        }
        res.status(200).json(user);
      }
    );
  });


  router.get("/:id", VerifyToken, function(req, res) {

    debugger;
    User.findById(   req.params.id, 
 function(error, user) {
        debugger;
        if (error) {
          res.json({ status: "error", message: `${error}` });
        }
        res.status(200).json(user);
      }
    );
  });




  module.exports = router;




 