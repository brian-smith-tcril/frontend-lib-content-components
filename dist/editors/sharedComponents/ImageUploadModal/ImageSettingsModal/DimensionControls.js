"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DimensionControls = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var _hooks = _interopRequireDefault(require("./hooks"));
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
 * Wrapper for image dimension inputs and the lock checkbox.
 * @param {bool} isLocked - are dimensions locked
 * @param {func} lock - lock dimensions
 * @param {func} setHeight - updates dimensions based on new height
 * @param {func} setWidth - updates dimensions based on new width
 * @param {func} unlock - unlock dimensions
 * @param {func} updateDimensions - update dimensions callback
 * @param {obj} value - local dimension values { height, width }
 */
const DimensionControls = _ref => {
  let {
    isLocked,
    lock,
    setHeight,
    setWidth,
    unlock,
    updateDimensions,
    value,
    // inject
    intl
  } = _ref;
  return value !== null && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Form.Group, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Label, {
      as: "h4",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.imageDimensionsLabel))
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "mt-4.5",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
        className: "dimension-input",
        value: value.width,
        onChange: _hooks.default.onInputChange(setWidth),
        onBlur: updateDimensions,
        floatingLabel: intl.formatMessage(_messages.default.widthFloatingLabel)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
        className: "dimension-input",
        value: value.height,
        onChange: _hooks.default.onInputChange(setHeight),
        onBlur: updateDimensions,
        floatingLabel: intl.formatMessage(_messages.default.heightFloatingLabel)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.IconButton, {
        className: "d-inline-block",
        alt: isLocked ? intl.formatMessage(_messages.default.unlockDimensionsLabel) : intl.formatMessage(_messages.default.lockDimensionsLabel),
        iconAs: _paragon.Icon,
        src: isLocked ? _icons.Locked : _icons.Unlocked,
        onClick: isLocked ? unlock : lock
      })]
    })]
  });
};
exports.DimensionControls = DimensionControls;
DimensionControls.defaultProps = {
  value: {
    height: '100',
    width: '100'
  }
};
DimensionControls.propTypes = {
  value: _propTypes.default.shape({
    height: _propTypes.default.string,
    width: _propTypes.default.string
  }),
  setHeight: _propTypes.default.func.isRequired,
  setWidth: _propTypes.default.func.isRequired,
  isLocked: _propTypes.default.bool.isRequired,
  lock: _propTypes.default.func.isRequired,
  unlock: _propTypes.default.func.isRequired,
  updateDimensions: _propTypes.default.func.isRequired,
  // inject
  intl: _i18n.intlShape.isRequired
};
var _default = exports.default = (0, _i18n.injectIntl)(DimensionControls);
//# sourceMappingURL=DimensionControls.js.map