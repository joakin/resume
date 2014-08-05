#!/usr/bin/env node

var fs = require('fs');
var jade = require('jade');
var yaml = require('js-yaml');
var md = require('marked');

var extend = require('lodash.assign');

var root = __dirname + '/../';
var htmlPath = 'static/index.html';
var data = yaml.safeLoad(fs.readFileSync(root + 'resume.yaml', 'utf8'));
var templateContents = fs.readFileSync(root + 'resume.jade', 'utf8');

var template = jade.compile(templateContents, {
  filename: './',
  pretty: true,
  compileDebug: true
});

var locals = extend(data, {
  md: md
});
fs.writeFileSync(root + htmlPath, template(locals));

console.log('Written ' + htmlPath);

