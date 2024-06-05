"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSectionsList = exports.getChildrenFromList = void 0;
var _lodash = _interopRequireDefault(require("lodash.clonedeep"));
var _blockTypes = _interopRequireDefault(require("../blockTypes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Retrieves a list of sections from the provided blocks object.
 *
 * @param {Object} blocks - The blocks object containing various block types.
 * @returns {Array} An array of section (type: chapter) blocks extracted from the blocks object.
 */
const getSectionsList = function () {
  let blocks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const blocksList = Object.keys(blocks);
  return blocksList.reduce((previousBlocks, blockKey) => {
    const block = (0, _lodash.default)(blocks[blockKey]);
    if (block.type === _blockTypes.default.section) {
      return [...previousBlocks, block];
    }
    return previousBlocks;
  }, []);
};

/**
 * Retrieves an array of child blocks based on the children list of a selected block.
 *
 * @param {Object} blockSelected - The selected block for which children are to be retrieved.
 * @param {Object} blocks - The blocks object containing various block types.
 * @returns {Array} An array of child blocks cloned from the blocks object.
 */
exports.getSectionsList = getSectionsList;
const getChildrenFromList = (blockSelected, blocks) => {
  if (blockSelected.children) {
    return blockSelected.children.map(key => (0, _lodash.default)(blocks[key]));
  }
  return [];
};
exports.getChildrenFromList = getChildrenFromList;
//# sourceMappingURL=utils.js.map