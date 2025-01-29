// sorting ascending based on date
// There is no easy api-method.
// https://github.com/11ty/eleventy/issues/411
module.exports = function(collection) {
  return collection
    .getFilteredByGlob(["./src/content/article/*.md", "./src/content/article/*.njk"]).sort((a,b) => {
      if (a.data.date > b.data.date) return -1;
      else if (a.data.date < b.data.date) return 1;
      else return 0;
    })
}
