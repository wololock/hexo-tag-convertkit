'use strict';

const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

module.exports = function(uid, domain) {
  const template = fs.readFileSync(path.resolve(__dirname, 'template.ejs'), 'utf-8');
  return ejs.render(template, {
    uid: uid,
    domain: domain
  });
};

