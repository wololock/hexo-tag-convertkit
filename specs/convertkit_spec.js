'use strict';

const test = require('ava');
const Hexo = require('hexo');
const path = require('path');
const { contentFor, process, createSandbox } = require('hexo-test-utils');

const sandbox = createSandbox(Hexo, {
  fixture_folder: path.join(__dirname, 'fixtures'),
  plugins: [
    require.resolve('../index.js'),
    require.resolve('hexo-renderer-ejs'),
    require.resolve('hexo-renderer-markdown-it')
  ]
});

test('default facebook share link', async t => {
  const ctx = await sandbox({ fixtureName: 'simple-post' });

  await process(ctx);

  const content = await contentFor(ctx, '/hello-world/index.html');

  t.true(content.includes('<div id="ck-123123123-box"></div>'));

  t.true(content.includes('load_newsletter("123123123");'));

  t.true(content.includes('function load_newsletter(uid)'));

  t.true(content.includes('newsletterEmbed.src = "https://lorem-ipsum.ck.page/" + uid + "/index.js";'));
});

test('loading convertkit script with lazy-load in the blog template', async t => {
  const ctx = await sandbox({ fixtureName: 'simple-theme' });

  await process(ctx);

  const content = await contentFor(ctx, '/hello-world/index.html');

  t.true(content.includes('<div id="ck-123123123-box"></div>'));

  t.true(content.includes('load_newsletter("123123123");'));

  t.true(content.includes('function load_newsletter(uid)'));

  t.true(content.includes('newsletterEmbed.src = "https://lorem-ipsum.ck.page/" + uid + "/index.js";'));
});
