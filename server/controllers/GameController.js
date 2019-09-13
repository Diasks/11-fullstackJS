var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded( { extended: true } ));
router.use(bodyParser.json());
const VerifyToken = require('../middleware/VerifyToken');
var User = require('../models/User');
const mongoose = require("mongoose");
const db = mongoose.connection;

  
  router.get('/:slug', (req, res) => {
    debugger;
    let slug = req.params.slug;
    debugger;
    db.collection('games').find({slug: slug}).toArray((err, info) => {
      debugger;
      if(err) throw err;
      console.log(err);
      console.log(info);
     return res.json(info);
    } )});
  
  
  
  router.get('/game', (req, res) => {
    db.collection('games').find().toArray((err, results) =>{
      if(err) throw err;
      console.log(err);
      console.log(results);
      results.forEach((value)=>{
        console.log(value);
      })
     return res.json(results);
    })
  });



  //remove specificItem from cart
    router.patch("/:id", VerifyToken, function(req, res) {
      debugger;
    
      const itemId = req.body.gameId;
      debugger;
      User.findByIdAndUpdate(   req.params.id, {
        $pull: {'cart': {id : itemId}},  
      },{new: true},
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