const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require("dotenv").config();

router.use(bodyParser.urlencoded( { extended: false } ));
router.use(bodyParser.json());

const User = require('../models/User');
const VerifyToken = require('../middleware/VerifyToken');

//working with postman removing .user from all request and just have req.body, working with frontend just like written now.
router.post('/login', function(req, res) {
    debugger;
User.findOne( {email: req.body.user.email }, function(error, user) {
if (error) {
    debugger;
    return res.status(500).send('An error occured while trying to process login')
}

if(!user){
    debugger;
    return res.status(404).send('No registered user found with that email');
}

//Compare passwords
let isValidPassword = bcrypt.compareSync(req.body.user.password, user.password);
if (!isValidPassword) {
    debugger;
    return res.status(401).send({
        authenticated: false,
        token: null
    });
}

    let token = jwt.sign( {id: user._id}, process.env.SECRET, {
        expiresIn: 86400
    });
    debugger;
    return res.status(200).send({
        authenticated: true,
        token: token,
        user: user
    });
 
})

});

//working with postman removing .user from all request and just have req.body, working with frontend just like written now.
router.post('/register', function(req, res) {
    User.create({
    name: req.body.user.firstName,
    lastname: req.body.user.lastName,
    birtdate: req.body.user.birthDate,
    email: req.body.user.email,
    password: req.body.user.password
    }, function (error, user){
        if(error){
            return res.status(500).send("an error occured")
        } else {
            //Create a jwt token
            let token = jwt.sign({id: user._id}, process.env.SECRET, {
                expiresIn: 86400 //valid 24 hours
            });
            return res.status(200).send({authenticated: true, token: token});
        }
    });
    });

    router.get('/me', VerifyToken, function(req, res) {
        debugger;
            User.findById(req.userId, { password: 0 }, function(error, user) {
                //user undefined at the moment ... debugging..
                debugger;
if(error) {
    debugger;
    res.status(500).send('An error occured while trying to find the user')
}
if(!user) {
    debugger;
    res.status(404).send('User not found');
}
            });
            res.status(200).send({
                authenticated: true,
                user: user
            });
        });

    module.exports = router;