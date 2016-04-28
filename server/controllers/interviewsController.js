var Interview = require('../models/interview');

module.exports.create = function (req, res) {
  var interview = new Interview(req.body)
  interview.save(function (err, result) {
    res.json(result);
  });
}

module.exports.listInterviews = function (req, res) {
	var userID = req.query.id
  Interview.find({interviewer: userID, complete: false}, function (err, results) {
    res.json(results);
  });
}