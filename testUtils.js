const findTagsWithTestAttribute = (wrapper, attributeValue) =>
  wrapper.find(`[data-test='${attributeValue}']`);

module.exports = {
  findTagsWithTestAttribute,
};
