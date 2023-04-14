const markdownLib = require('../../plugins/markdown');

const details = (children, summary, open = false) => {
  if (!children) {
    throw new Error('Der Inhalt darf nicht leer sein, sonst macht das alles keinen Sinn!');
  }
  const content = markdownLib.render(children);
  return `<details${open ? ' open' : ''}>
  <summary>${summary}</summary>
  <div class="details__content">${content}</div>
  </details>`;
};

module.exports = details;
