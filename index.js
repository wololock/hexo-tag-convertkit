/* global hexo */

'use strict';

const convertkit = require('./lib/convertkit');

hexo.extend.tag.register('convertkit', args => {
  const uid = args.shift();
  return convertkit(uid, hexo.config.convertkit.domain, hexo.config.convertkit.threshold || 1000);
});

hexo.extend.helper.register('convertkit', uid => {
  return convertkit(uid, hexo.config.convertkit.domain, hexo.config.convertkit.threshold || 1000);
});
