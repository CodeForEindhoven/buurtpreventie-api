var models = require('../models');
var express = require('express');
var util = require('../helpers/util.js');
var router = express.Router();

router.route('/api/rounds').all(util.ensureAuthorized).get(function(req, res) {
  models.Round.findAll({
    attributes: [
      ['datum', 'date'],
      ['actueel', 'actual'],
      ['reden', 'reason'],
      ['bijzonderheden', 'particularities'],
    ],
    include: [{
      model: models.User,
      attributes: [
        ['real_name', 'name'],
        'credit'
      ]
    }, {
      model: models.Remark,
      attributes: [
        ['omschrijving', 'description'],
        ['bijzonderheid', 'particularity'],
      ]
    }]
  }).then(function(results) {
    res.json(results);
  });
});

router.route('/api/round/:id').all(util.ensureAuthorized).get(function(req, res) {
  models.Round.findOne({
    include: [models.User, models.Remark],
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    res.json(result);
  });
});

module.exports = router;
