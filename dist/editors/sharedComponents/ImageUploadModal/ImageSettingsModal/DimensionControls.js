"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DimensionControls = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var _hooks = _interopRequireDefault(require("./hooks"));
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
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