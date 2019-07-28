const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded( { extended: true } ));
router.use(bodyParser.json());

const User = require('../models/User');

router.post('/register', function(req, res) {

const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    User.create({
    name: req.body.name,
    lastname: req.body.lastname,
    birtdate: req.body.birthdate,
    email: req.body.email,
    password: req.body.password
    }, function (error, user){
        if(error){
            return res.status(500).send("and error occured")
        } else {
            res.status(200).send(user);
        }
    });
    });