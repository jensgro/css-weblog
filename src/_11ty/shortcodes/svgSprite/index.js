const svgSprite = (sprite, icon) => {
    return `<svg class="svg-icon"><use xlink:href="/assets/svg/${sprite}.svg#${icon}"></use></svg>`;
};
  
module.exports = svgSprite;
