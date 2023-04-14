const figImg = (img, figCaption, alt) => {
  return `<figure class="card card--img">
    <img src="../../../assets/img/${img}" class="card__image" alt="${alt}">
    <figcaption class="card__footer">${figCaption}</figcaption>
  </figure>`;
};

module.exports = figImg;
