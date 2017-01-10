var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
  var staticSites = fs.readFileSync('data/staticSites.json', 'utf8'),
      responsiveSites = fs.readFileSync('data/responsiveSites.json', 'utf8'),
      skills = fs.readFileSync('data/skills.json', 'utf8');

  res.render('index', {
    title: 'Portfolio',
    staticSites: JSON.parse(staticSites),
    responsiveSites: JSON.parse(responsiveSites),
    skills: JSON.parse(skills)
  });
});

module.exports = router;
