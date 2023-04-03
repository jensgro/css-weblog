const figImg = (img, figCaption, alt) => {
  return `<figure class="card">
    <img src="../../../images/${img}" class="card-img-top" alt="${alt}">
    <figcaption class="card-footer">${figCaption}</figcaption>
  </figure>`;
};

module.exports = figImg;
