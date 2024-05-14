const codepenImg = (item, figCaption) => {
  return `<figure class="card card--img">
    <img src="https://shots.codepen.io/jensgro/pen/${item}-512.webp" class="card__image" alt="">
    <figcaption class="card__footer">
      <a href="https://codepen.io/jensgro/pen/${item}">${figCaption}</a>
    </figcaption>
  </figure>`;
};

module.exports = codepenImg;

// https://codepen.io/jensgro/pen/BaEeQww

// https://shots.codepen.io/username/pen/BaEeQww-512.webp?version=1714493944

// https://shots.codepen.io/jensgro/pen/BaEeQww-512.png
