const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require("dotenv").config();
router.use(bodyParser.urlencoded( { extended: false } ));
router.use(bodyParser.json());
const User = require('../models/User');



router.post('/login', function(req, res) {
User.findOne( {email: req.body.user.email }, function(error, user) {
if (error) {
    return res.status(500).send('An error occured while trying to process login')
}
if(!user){
    res.json({status: "email does not exist"});
    return res.status(404).send('No registered user found with that email');
}

let isValidPassword = bcrypt.compareSync(req.body.user.password, user.password);
if (!isValidPassword) {
    return res.status(401).send({
        authenticated: false,
        token: null
    });
}

    let token = jwt.sign( {id: user._id}, process.env.SECRET, {
        expiresIn: 86400
    });
    return res.status(200).send({
        authenticated: true,
        token: token,
        user: user
    });
})
});

router.post('/register', function(req, res) {
const emailQuery = {email: req.body.user.email};

User.findOne(emailQuery, function(err, user) {
    if (err) throw err;
    if (user) {
        res.json({status: "email already exist"});
    }
else { 
    User.create({
    name: req.body.user.firstName,
    lastname: req.body.user.lastName,
    birtdate: req.body.user.birthDate,
    email: req.body.user.email,
    password: req.body.user.password,
    telephone: req.body.user.telephone,
    address: req.body.user.address,
    zipcode: req.body.user.zipcode,
    city: req.body.user.city,
    role: req.body.user.role
    }, function (error, user){
        if(error){
            return res.status(500).send("an error occured")
        } else {
            let token = jwt.sign({id: user._id}, process.env.SECRET, {
                expiresIn: 86400 //valid 24 hours
            });
            return res.status(200).send({authenticated: true, token: token});
        }
    });
    };
})
});


    module.exports = router;