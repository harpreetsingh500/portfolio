var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
  var htmlCssProjects = fs.readFileSync('data/html-css-projects.json', 'utf8'),
      jQueryProjects = fs.readFileSync('data/jquery-projects.json', 'utf8'),
      skills = fs.readFileSync('data/skills.json', 'utf8');

  res.render('index', {
    title: 'Portfolio',
    htmlCssProjects: JSON.parse(htmlCssProjects),
    jQueryProjects: JSON.parse(jQueryProjects),
    skills: JSON.parse(skills)
  });
});

module.exports = router;
