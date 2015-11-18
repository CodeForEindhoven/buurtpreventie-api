var models = require('../models');
var express = require('express');
var router = express.Router();

router.route('/api/users').get(function(req, res) {
  models.User.findAll().then(function(results) {
    res.json(results);
  });
});

router.route('/api/user/:id').get(function(req, res) {
  models.User.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    res.json(result);
  });
});


module.exports = router;
