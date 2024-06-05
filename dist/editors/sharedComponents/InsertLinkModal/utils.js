"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidURL = exports.formatBlocks = exports.addPathToBlocks = void 0;
var _lodash = _interopRequireDefault(require("lodash.clonedeep"));
var _blockTypes = _interopRequireDefault(require("./blockTypes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Recursively adds path, parent ID, and root status to blocks in a nested structure.
 *
 * @param {Object} block - The current block in the recursion.
 * @param {string} [parentPath=""] - The path of the parent block.
 * @param {Object} blocks - The collection of blocks.
 * @param {string} blockRoot - The key of the root block.
 * @param {string|null} [parentId=null] - The ID of the parent block.
 */
const addPathToBlocks = function (block, blocks, blockRoot) {
  let parentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  let parentPath = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  const path = parentPath ? `${parentPath} / ${block.displayName}` : block.displayName;
  block.path = path;
  block.parentId = parentId;
  if (block.children && block.children.length > 0) {
    block.children.forEach(childKey => {
      const childBlock = blocks[childKey];
      addPathToBlocks(childBlock, blocks, blockRoot, block.id, path);
    });
  }
};

/**
 * Formats the blocks by adding path information to each block.
 *
 * @param {Object} blocks - The blocks to be formatted.
 * @param {string} blockRoot - The key of the root block.
 * @returns {Object} - The formatted blocks with added path information.
 */
exports.addPathToBlocks = addPathToBlocks;
const formatBlocks = (blocks, blockRoot) => {
  const copyBlocks = (0, _lodash.default)(blocks);
  Object.keys(copyBlocks).forEach(key => {
    const block = copyBlocks[key];
    const rootBlock = copyBlocks[blockRoot];
    const parentPath = block.type === _blockTypes.default.section ? rootBlock.displayName : '';
    addPathToBlocks(block, copyBlocks, blockRoot, null, parentPath);
  });
  return copyBlocks;
};

/**
 * Validates a URL using a regular expression.
 *
 * @param {string} url - The URL to be validated.
 * @returns {boolean} - True if the URL is valid, false otherwise.
 */
exports.formatBlocks = formatBlocks;
const isValidURL = url => {
  try {
    // eslint-disable-next-line no-new
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};
exports.isValidURL = isValidURL;
//# sourceMappingURL=utils.js.map