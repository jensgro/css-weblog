const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItClass = require('@toycode/markdown-it-class');
const markdownItFootnote = require('markdown-it-footnote');
const markdownitMark = require('markdown-it-mark');
const markdownitAbbr = require('markdown-it-abbr');
const {slugifyString} = require('../utils');

const markdownLib = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true
})
  // .use(markdownItAnchor, {
  //   slugify: slugifyString,
  //   tabIndex: false,
  //   permalink: markdownItAnchor.permalink.headerLink({
  //     class: 'heading-anchor'
  //   })
  // })
  .use(markdownItClass, {
    ol: 'list list--ol',
    ul: 'list list--ul',
  })
  .use(markdownItFootnote)
  .use(markdownitMark)
  .use(markdownitAbbr);

module.exports = markdownLib;
