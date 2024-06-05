"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterBlocksByText = void 0;
var _lodash = _interopRequireDefault(require("lodash.clonedeep"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable import/prefer-default-export */

/**
 * Filters blocks based on the provided searchText.
 *
 * @param {string} searchText - The text to filter blocks.
 * @param {Object} blocks - The object containing blocks.
 * @returns {Object} - Filtered blocks.
 */
const filterBlocksByText = (searchText, blocks) => {
  if (!searchText) {
    return {};
  }
  const copyBlocks = (0, _lodash.default)(blocks);
  return Object.keys(copyBlocks).reduce((result, key) => {
    const item = copyBlocks[key];
    if (item.path.toLowerCase().includes(searchText.toLowerCase())) {
      result[key] = item;
    }
    return result;
  }, {});
};
exports.filterBlocksByText = filterBlocksByText;
//# sourceMappingURL=utils.js.map