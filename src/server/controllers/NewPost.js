const Poll = require('../models/PollData.model');
const db =  "mongodb://localhost:voteapp/voteapp";
const moment = require('moment');

exports.newpost = function(req, res, next){
  let labelOptions = {};
  const title = req.body.title;
  const description = req.body.description;
  req.body.labelOptions.split(/,\s*/).map( prop =>{
    labelOptions[prop] = 0 // set counter to default 0
  })

  const poll = new Poll({
    title: title,
    description: description,
    labelOptions: labelOptions,
    date: moment().format('MMM D, YYYY')
  });

  poll.save(function(err) {
    if (err) { return next(err); }
    res.json({ message : 'Poll added!'})
  });
}

exports.getpost = function(req, res, next){
  Poll.find({}, function(err, data){
    res.send(data)
  })
}