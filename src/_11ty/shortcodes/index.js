// shortcodes and idea taken from https://github.com/madrilene/eleventy-excellent
// shortcodes from madrilene were imagePlaceholder, includeRaw and youtube-lite
const includeRaw = require('./includeRaw');
const liteYoutube = require('./youtube-lite');
const figImg = require('./figImg');
const details = require('./details');
const aside = require('./aside');
const codepenImg = require('./codepenImg');

module.exports = {
  includeRaw,
  liteYoutube,
  figImg,
  details,
  aside,
  codepenImg
};
