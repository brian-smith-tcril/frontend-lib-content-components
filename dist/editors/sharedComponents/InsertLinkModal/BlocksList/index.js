"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var _blockTypes = _interopRequireDefault(require("../blockTypes"));
var _utils = require("./utils");
var _messages = _interopRequireDefault(require("./messages"));
require("./index.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const BlocksList = _ref => {
  let {
    blocks,
    onBlockSelected,
    disableBlocks
  } = _ref;
  const intl = (0, _i18n.useIntl)();
  const messageBlockType = {
    [_blockTypes.default.section]: intl.formatMessage(_messages.default.blocksListSubsectionTitle),
    [_blockTypes.default.subsection]: intl.formatMessage(_messages.default.blocksListUnitTitle),
    [_blockTypes.default.unit]: intl.formatMessage(_messages.default.blocksListUnitTitle)
  };
  const [blockState, setBlockState] = (0, _react.useState)({
    blockSelected: {},
    type: _blockTypes.default.subsection,
    hasNavigated: false,
    blocksNavigated: []
  });
  const sections = (0, _utils.getSectionsList)(blocks);
  const subsections = (0, _utils.getChildrenFromList)(blockState.blockSelected, blocks);
  const listItems = blockState.hasNavigated ? subsections : sections;
  const isBlockSelectedUnit = blockState.type === _blockTypes.default.unit;
  const blockNameButtonClass = isBlockSelectedUnit ? 'col-12' : 'col-11';
  const handleSelectBlock = function (block) {
    let navigate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (navigate) {
      setBlockState(_objectSpread(_objectSpread({}, blockState), {}, {
        blocksNavigated: [...blockState.blocksNavigated, block.id],
        blockSelected: block,
        type: block.type,
        hasNavigated: true
      }));
    } else {
      onBlockSelected(block);
    }
  };
  const handleGoBack = () => {
    const newValue = blockState.blocksNavigated.filter(id => id !== blockState.blockSelected.id);
    if (newValue.length) {
      const lastBlockIndex = newValue.length - 1;
      const blockId = newValue[lastBlockIndex];
      const newBlock = blocks[blockId];
      setBlockState(_objectSpread(_objectSpread({}, blockState), {}, {
        type: newBlock.type,
        hasNavigated: true,
        blockSelected: newBlock,
        blocksNavigated: newValue
      }));
    } else {
      setBlockState(_objectSpread(_objectSpread({}, blockState), {}, {
        type: blockState.section,
        hasNavigated: false,
        blockSelected: {}
      }));
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [blockState.hasNavigated && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
      className: "w-100 d-flex justify-content-space-between p-3",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
        variant: "tertiary",
        className: "col-1",
        onClick: handleGoBack,
        iconBefore: _icons.ArrowBack,
        "data-testid": "block-back-navigation",
        children: "\xA0"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "col-11 text-center",
        children: messageBlockType[blockState.type]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "block-list-container",
      children: listItems.map(block => /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.TransitionReplace, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
          className: "w-100 d-flex justify-content-space-between p-3",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
            variant: "tertiary",
            className: `${blockNameButtonClass} py-4`,
            onClick: () => handleSelectBlock(block),
            "data-testid": "block-name",
            disabled: disableBlocks,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "w-100 text-left",
              children: block.displayName
            })
          }), !isBlockSelectedUnit && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
            variant: "tertiary",
            className: "col-1 py-4",
            onClick: () => handleSelectBlock(block, true),
            "data-testid": "block-navigation",
            iconAfter: _icons.ArrowForwardIos,
            disabled: disableBlocks,
            children: "\xA0"
          })]
        }, block.id)
      }, `transition_${block.id}`))
    })]
  });
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
BlocksList.defaultProps = {
  disableBlocks: false
};
BlocksList.propTypes = {
  blocks: _propTypes.default.objectOf(blockShape).isRequired,
  onBlockSelected: _propTypes.default.func.isRequired,
  disableBlocks: _propTypes.default.bool
};
var _default = exports.default = BlocksList;
//# sourceMappingURL=index.js.map