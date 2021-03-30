const defineElement = (name, cls) =>
  !customElements.get(name) && customElements.define(name, cls);

const getScopedTagName = (ele, tagName) =>
  ele.constructor.getScopedTagName(tagName);

export { defineElement, getScopedTagName };
