const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded( { extended: true } ));
router.use(bodyParser.json());
const VerifyToken = require('../middleware/VerifyToken');
const User = require('../models/User');
const mongoose = require("mongoose");
const db = mongoose.connection;



router.patch("/:id", VerifyToken, function(req, res) {
    User.findByIdAndUpdate(   req.params.id, {
      $push: { "orders": req.body.myObj }
    }, {new: true},
      function(error, user) {
        if (error) {
          res.json({ status: "error", message: `${error}` });
        }
        res.status(200).json(user);
      }
    );
  });


  module.exports = router;