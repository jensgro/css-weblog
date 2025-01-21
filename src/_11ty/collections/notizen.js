module.exports = function(collection) {
  return collection
    .getFilteredByGlob(["./src/content/notizen/*.md", "./src/content/notizen/*.njk"])
}
