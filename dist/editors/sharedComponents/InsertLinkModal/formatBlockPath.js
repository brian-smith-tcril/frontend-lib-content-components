"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * Formats a block path into title and subtitle.
 *
 * @param {string} path - The path to be formatted.
 * @returns {Object} - Formatted block path with title and subtitle.
 */
const formatBlockPath = path => {
  if (!path) {
    return {
      title: '',
      subTitle: ''
    };
  }
  const pathSlitted = path.split(' / ');
  let title = pathSlitted.pop();
  const subTitle = pathSlitted.join(' / ');
  if (!title.trim()) {
    // If the last part is empty or contains only whitespace
    title = pathSlitted.pop();
  }
  return {
    title,
    subTitle
  };
};
var _default = exports.default = formatBlockPath;
//# sourceMappingURL=formatBlockPath.js.map