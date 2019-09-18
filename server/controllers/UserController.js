var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded( { extended: true } ));
router.use(bodyParser.json());
const VerifyToken = require('../middleware/VerifyToken');
var User = require('../models/User');





// GET ALL USERS
router.get('/', VerifyToken, function(req, res) {
    debugger;
User.find({}, function(error, users) {
    debugger;
if(error) {
    return res.status(500).send("an error occured")
} else {
    res.status(200).send(users);
}

})

});


    router.patch("/:id", VerifyToken, function(req, res) {
        debugger;
        
        User.findByIdAndUpdate({_id: req.params.id}, {
          "name" :req.body.updatedUser.name ,
"lastname" :req.body.updatedUser.lastname ,
"birthdate" :req.body.updatedUser.birthdate ,
"city" :req.body.updatedUser.city,
"telephone" :req.body.updatedUser.telephone ,
"address" :req.body.updatedUser.address ,
"zipcode" :req.body.updatedUser.zipcode ,
"city" :req.body.updatedUser.city,
"role" :req.body.updatedUser.role  

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



  router.delete('/:id', VerifyToken, function (req, res) {
      debugger;
        User.findByIdAndRemove({_id: req.params.id}, function(err, user){
            debugger;
            if(err) res.json(err);
            else res.json('Successfully removed');
        });
    });


    module.exports = router;