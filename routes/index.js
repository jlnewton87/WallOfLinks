var express = require('express');
var router = express.Router();
var model = require('../model/panel.js');
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  model.panel.find().exec(function(err, panels){
    res.render('index', {panels: panels});
  });
});

/* POST to get list of panels */
router.post('/panel/list', function(req, res, next) {
  model.panel.find().exec(function(err, panels){
    res.send(panels);
  });
});

/* POST to add new panel */
router.post('/panel/add', function(req, res, next) {
  var newPanel = new model.panel({title: "New Panel"});
  newPanel.save(function(err, panels){
    model.panel.find().exec(function(err, panels){
      res.send(panels);
    });
  });
});

/* POST to rename panel */
router.post('/panel/rename/', function(req, res, next) {
  model.panel.findOne({_id: req.body.id},function(err, panel){
    if (panel != 'null') {
      panel.title = req.body.name;
      panel.save(function(){
        res.send(panel); 
      });
    }
  });
});

/* POST to delete panel */
router.post('/panel/remove/', function(req, res, next) {
  model.panel.remove({_id: req.body.id},function(err){
    res.send('done');
  });
});

module.exports = router;
