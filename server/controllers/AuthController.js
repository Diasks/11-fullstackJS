const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require("dotenv").config();

router.use(bodyParser.urlencoded( { extended: false } ));
router.use(bodyParser.json());

const User = require('../models/User');

router.post('/register', function(req, res) {
    debugger;

const hashedPassword = bcrypt.hashSync(req.body.user.password, 10);
debugger;
    User.create({
    name: req.body.user.firstName,
    lastname: req.body.user.lastName,
    birtdate: req.body.user.birthDate,
    email: req.body.user.email,
    password: hashedPassword
    }, function (error, user){
        debugger;
        if(error){
            return res.status(500).send("and error occured")
        } else {
            //Create a jwt token
            let token = jwt.sign({id: user._id}, process.env.SECRET, {
                expiresIn: 86400 //valid 24 hours
            });
            res.status(200).send({authenticated: true, token: token});
        }
    });
    });

    router.get('/me', function(req, res) {
        debugger;
        let token = req.headers['x-access-token'];
        if (!token) {
            return res.status(401).send({
                authenticated: false,
                message: 'Unauthorized. No token provided.'
            });
        }
        jwt.verify(token, process.env.SECRET, function(error, decodedToken) {
            if(error) {
                res.status(500).send({
                    authenticated: false,
                    message: 'An error occured when trying to authenticate token'
                });
            }

            User.findById(decodedToken.id, function(error, user) {
if(error) {
    res.status(500).send('An error occured while trying to find the user')
}
if(!user) {
    res.status(404).send('User not found');
}

            });
            res.status(200).send({
                authenticated: true,
                user: user});
        });
    })

    module.exports = router;