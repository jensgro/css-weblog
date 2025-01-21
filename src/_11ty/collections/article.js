module.exports = function(collection) {
  return collection
    .getFilteredByGlob(["./src/content/article/*.md", "./src/content/article/*.njk"])
}
