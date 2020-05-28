# hexo-tag-convertkit

[![npm version](https://badgen.net/npm/v/hexo-tag-convertkit)](https://www.npmjs.com/package/hexo-tag-convertkit)
[![Build Status](https://travis-ci.org/wololock/hexo-tag-convertkit.svg?branch=master)](https://travis-ci.org/wololock/hexo-tag-convertkit)
[![Coverage Status](https://coveralls.io/repos/github/wololock/hexo-tag-convertkit/badge.svg?branch=master)](https://coveralls.io/github/wololock/hexo-tag-convertkit?branch=master)

A small plugin that integrates Hexo blog with a [Convertkit](https://app.convertkit.com/referrals/l/0de2af60-39b9-4c36-a925-687b4c4189e8) email marketing platform.

## Why to use this plugin?

Convertkit counts visitors to calculate the conversion rate of your newsletter form.
However, it counts all visitors that visits the page with a form, no matter if the visitor seen it.
This plugin uses JavaScript to load Convertkit form only when the visitor scrolls to the place on your website where the newsletter form is displayed.
This way you can get much more accurate information about the conversion rate.

## Installation

```
npm install --save hexo-tag-convertkit
```

## Configuration

The plugin requires one field to be configured - the `domain`.
Convertkit serves the JavaScript file from the dedicated subdomain that hosts your unique `index.js` file.
Below is a configuration block you need to add to the `_config.yml` file.

```
convertkit:
  domain: your-domain.ck.page
```

Example: if your unique `index.js` file is hosted on `https://15a5-my-domain.ck.page/14aff6777a4e/index.js`, use the following configuration:

```
convertkit:
  domain: 15a5-my-domain.ck.page
```

## Usage

To insert Convertkit form using JavaScript code, use the `convertkit(uid)` tag.
You can find the newsletter form `uid` on the Embed page.
For instance, if your JavaScript form code is the following:

```
<script async data-uid="123123123" src="https://15a5-my-domain.ck.page/123123123/index.js"></script>
```

then the `uid` is `123123123`.

### EJS

```
<%= convertkit('123123123') %>
```

### Markdown (blog post body)

```
{% convertkit '123123123' %}
```
