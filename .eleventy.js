const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const embedCodePen = require("@manustays/eleventy-plugin-codepen-iframe");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

const configPath = "./src/_11ty/";

// module import shortcodes
const {
  includeRaw,
  liteYoutube,
  figImg,
  details,
  aside,
  codepenImg
} = require(configPath+'shortcodes/index.js');

// filters
const htmlDateString = require(configPath+"filters/date.js").htmlDateString;
const head = require(configPath+"filters/head.js");

// collections
const article = require(configPath+"collections/article.js");
const articleDescending = require(configPath+"collections/articleDescending.js");
const notizen = require(configPath+"collections/notizen.js");
const notizenDescending = require(configPath+"collections/notizenDescending.js");
const linktipps = require(configPath+"collections/linktipps.js");
const linktippsDescending = require(configPath+"collections/linktippsDescending.js");

// plugins
const markdownLib = require(configPath+'plugins/markdown.js');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  eleventyConfig.addPlugin(embedCodePen, {
		tabs: "html, css, js,result",
		user: "jensgro",
    height: 500,
    theme: "flocke"
	});

  eleventyConfig.addFilter("htmlDateString", htmlDateString);
  eleventyConfig.addFilter("head", head);

  eleventyConfig.addCollection("article", article);
  eleventyConfig.addCollection("articleDescending", articleDescending);
  eleventyConfig.addCollection("notizen", notizen);
  eleventyConfig.addCollection("notizenDescending", notizenDescending);
  eleventyConfig.addCollection("linktipps", linktipps);
  eleventyConfig.addCollection("linktippsDescending", linktippsDescending);

  eleventyConfig.setDataDeepMerge(true);

  // 	--------------------- Custom shortcodes ---------------------
  eleventyConfig.addPairedShortcode('details', details);
  eleventyConfig.addPairedShortcode('aside', aside);
  eleventyConfig.addShortcode('figImg', figImg);
  eleventyConfig.addShortcode('codepenImg', codepenImg);
  eleventyConfig.addShortcode('youtube', liteYoutube);
  eleventyConfig.addShortcode('include_raw', includeRaw);
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`); // current year, stephanie eckles
  eleventyConfig.addShortcode('packageVersion', () => `v${packageVersion}`);

  // 	--------------------- Passthrough File Copy -----------------------
  // especially for favion, maybe for a robots.txt and a .htaccess
  eleventyConfig.addPassthroughCopy({"./src/static/":"/"});

  eleventyConfig.addPassthroughCopy({"./src/assets/img": "assets/img"});
  eleventyConfig.addPassthroughCopy({"./src/assets/js": "assets/js"});
  eleventyConfig.addPassthroughCopy({"./src/assets/fonts": "assets/fonts"});

  // 	--------------------- Plugins ---------------------
  eleventyConfig.setLibrary('md', markdownLib);

  eleventyConfig.setServerOptions({
    showAllHosts: true,
    showVersion: true
  });

  return {
    templateFormats: [
      "html",
      "md",
      "njk",
      "liquid"
    ],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
