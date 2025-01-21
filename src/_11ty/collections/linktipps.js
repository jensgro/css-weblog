module.exports = function(collection) {
  return collection
    .getFilteredByGlob(["./src/content/linktipps/*.md", "./src/content/linktipps/*.njk"])
}
