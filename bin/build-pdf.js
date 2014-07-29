#!/usr/bin/env node

var NodePDF = require('nodepdf');

var options = {
  'viewportSize': {
    'width': 1440,
    'height': 900
  },
  'paperSize': {
    'pageFormat': 'A4',
    'margin': {
      'top': '0.7cm',
      'left': '0.7cm',
      'right': '0.7cm',
      'bottom': '0.7cm'
    },
    'footer': {
      'height': '1cm',
      'contents': '{currentPage} / {pages}'
    }
  },
  'zoomFactor': 0.75
};

NodePDF.render('./static/resume.html', './static/resume.pdf', options, function(err, filePath) {
  if (err) { console.error(err); return; }
  console.log('PDF file written at', filePath);
});

