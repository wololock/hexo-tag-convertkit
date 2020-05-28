'use strict';

const ejs = require('ejs');
const fs = require('fs');

module.exports = function(uid, domain) {
  const template = fs.readFileSync('lib/template.ejs', 'utf-8');
  return ejs.render(template, {
    uid: uid,
    domain: domain
  });
};

