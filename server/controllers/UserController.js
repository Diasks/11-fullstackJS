const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const VerifyToken = require('../middleware/VerifyToken');
const User = require('../models/User');

router.get('/', VerifyToken, function(req, res) {
  User.find({}, function(error, users) {
    if (error) {
      return res.status(500).send('an error occured');
    } else {
      res.status(200).send(users);
    }
  });
});

router.patch('/:id', VerifyToken, function(req, res) {
  User.findByIdAndUpdate(
    { _id: req.params.id },
    {
      name: req.body.updatedUser.name,
      lastname: req.body.updatedUser.lastname,
      birthdate: req.body.updatedUser.birthdate,
      email: req.body.updatedUser.email,
      telephone: req.body.updatedUser.telephone,
      address: req.body.updatedUser.address,
      zipcode: req.body.updatedUser.zipcode,
      city: req.body.updatedUser.city,
      role: req.body.updatedUser.role
    },
    { new: true },

    function(error, user) {
      if (error) {
        res.json({ status: 'error', message: `${error}` });
      }
      res.status(200).json(user);
    }
  );
});

router.delete('/:id', VerifyToken, function(req, res) {
  User.findByIdAndRemove({ _id: req.params.id }, function(err, user) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = router;
