const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const VerifyToken = require('../middleware/VerifyToken');
const User = require('../models/User');
const mongoose = require('mongoose');
const db = mongoose.connection;

router.get('/:slug', (req, res) => {
  let slug = req.params.slug;
  db.collection('games')
    .find({ slug: slug })
    .toArray((err, info) => {
      if (err) throw err;
      return res.json(info);
    });
});

router.patch('/:id', VerifyToken, function(req, res) {
  const itemId = req.body.gameId;
  User.findByIdAndUpdate(
    req.params.id,
    {
      $pull: { cart: { id: itemId } }
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

module.exports = router;
