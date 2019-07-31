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

const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    User.create({
    name: req.body.name,
    lastname: req.body.lastname,
    birtdate: req.body.birthdate,
    email: req.body.email,
    password: hashedPassword
    }, function (error, user){
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