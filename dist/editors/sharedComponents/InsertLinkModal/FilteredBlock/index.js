"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _paragon = require("@openedx/paragon");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _formatBlockPath = _interopRequireDefault(require("../formatBlockPath"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const FilteredBlock = _ref => {
  let {
    block,
    onBlockFilterClick,
    blockDisabled
  } = _ref;
  const {
    title,
    subTitle
  } = (0, _formatBlockPath.default)(block.path);
  const handleBlockClick = () => {
    onBlockFilterClick(block);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Button, {
    variant: "tertiary",
    className: "d-flex flex-column w-100 align-items-start p-3",
    onClick: handleBlockClick,
    "data-testid": "filtered-block-item",
    disabled: blockDisabled,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "h5 text-left",
      children: subTitle
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "h3",
      children: title
    })]
  }, `filtered_block_${block.id}`);
};
const blockShape = _propTypes.default.shape({
  id: _propTypes.default.string.isRequired,
  blockId: _propTypes.default.string.isRequired,
  lmsWebUrl: _propTypes.default.string.isRequired,
  legacyWebUrl: _propTypes.default.string.isRequired,
  studentViewUrl: _propTypes.default.string.isRequired,
  type: _propTypes.default.string.isRequired,
  displayName: _propTypes.default.string.isRequired,
  children: _propTypes.default.arrayOf(_propTypes.default.string)
});
FilteredBlock.defaultProps = {
  blockDisabled: false
};
FilteredBlock.propTypes = {
  block: _propTypes.default.objectOf(blockShape).isRequired,
  onBlockFilterClick: _propTypes.default.func.isRequired,
  blockDisabled: _propTypes.default.bool
};
var _default = exports.default = FilteredBlock;
//# sourceMappingURL=index.js.map