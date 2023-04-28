const slugify = require('slugify');

/** Converts string to a slug form. */
const slugifyString = str => {
  return slugify(str, {
    replacement: '-',
    remove: /[#,&,+()$~%.'":*?<>{}]/g,
    lower: true
  });
};

/** throw an error if the provided argument is not of the expected. */
const throwIfNotType = (arg, expectedType) => {
  if (typeof arg !== expectedType) {
    throw new Error(
      `Expected argument of type ${expectedType} but instead got ${arg} (${typeof arg})`
    );
  }
};

const random = () => {
	const segment = () => {
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
	}
	return `${segment()}-${segment()}-${segment()}`
}

module.exports = {
  now: Date.now(),
  slugifyString,
  throwIfNotType,
  random: random()
};
