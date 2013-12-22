var PlayerStatus = require('../models/playerStatus.js');

exports.index = function (req, res) {
  PlayerStatus.find({}, function(err, playerStatuses) {
    if (err) return err;
    res.json(playerStatuses);
  });
};