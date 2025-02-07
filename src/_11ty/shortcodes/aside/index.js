const markdownLib = require('../../plugins/markdown');

const aside = (children, summary) => {
  if (!children) {
    throw new Error('Der Inhalt darf nicht leer sein, sonst macht das alles keinen Sinn!');
  }
  const content = markdownLib.render(children);
  return `<aside class="aside">${content}</aside>`;
};

module.exports = aside;
