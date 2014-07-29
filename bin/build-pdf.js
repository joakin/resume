#!/usr/bin/env node

var NodePDF = require('nodepdf');

var options = {
  'viewportSize': {
    'width': 1440,
    'height': 900
  }
};

NodePDF.render('http://www.google.com', './static/google.pdf', options, function(err, filePath) {
  if (err) { console.error(err); return; }
  console.log('PDF file written at', filePath);
});

