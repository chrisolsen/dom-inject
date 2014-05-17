'use strict';

var dom = require('dom');

/**
 * Injects an element into DOM.
 *
 * If the first param is left blank it will default to the body tag.
 *
 * @param {Element} parentElem - The element that the selector will start. Default = body
 * @param {String}  selector   - Css selector to obtain the insert point
 * @param {Element} elem       - Element to be inserted
 */
module.exports = function(parentElem, selector, elem) {
  if (typeof elem === 'string') elem = dom(elem);

  // handle the argument mismatch if the first is a string selector
  if (typeof parentElem === 'string') {
    elem        = selector;
    selector    = parentElem;
    parentElem  = dom('body')[0];
  }

  dom(parentElem)
    .find(selector)
    .empty()
    .append(elem);

  return elem;
};
