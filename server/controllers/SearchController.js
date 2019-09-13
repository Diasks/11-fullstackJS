
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded( { extended: true } ));
router.use(bodyParser.json());
const VerifyToken = require('../middleware/VerifyToken');
var User = require('../models/User');
const mongoose = require("mongoose");
const db = mongoose.connection;

router.get("/:query", function(req, res) {  
    debugger;
    db.collection('games').find({
      "$text": {
        "$search": req.params.query
      }
    }).toArray( function (err, data) {
        debugger;
        if (err) throw error;
        console.log(data);
        res.json({data})
    });
    });



    //remove cart
    router.patch("/:id", VerifyToken, function(req, res) {
      debugger;
    
      const itemId = req.body.gameId;
      debugger;
      User.findByIdAndUpdate(   req.params.id, {
        $unset: {'cart': ''}
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

    module.exports = router;