const svgSprite = (sprite, icon, modificator = false) => {
    if(modificator) {
      return `<svg class="svg-icon ${modificator}"><use xlink:href="/assets/svg/${sprite}.svg#${icon}"></use></svg>`;
    } else {
        return `<svg class="svg-icon"><use xlink:href="/assets/svg/${sprite}.svg#${icon}"></use></svg>`;
    }
};
  
module.exports = svgSprite;
