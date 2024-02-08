"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AltTextControls = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var hooks = _interopRequireWildcard(require("./hooks"));
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
 * Wrapper for alt-text input and isDecorative checkbox control
 * @param {obj} errorProps - props for error handling
 *   {bool} isValid - are alt-text fields valid for saving?
 * @param {bool} isDecorative - is the image decorative?
 * @param {func} setIsDecorative - handle isDecorative change event
 * @param {func} setValue - update alt-text value
 * @param {string} value - current alt-text value
 */
const AltTextControls = _ref => {
  let {
    isDecorative,
    setIsDecorative,
    setValue,
    validation,
    value,
    // inject
    intl
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Form.Group, {
    className: "mt-4.5",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Label, {
      as: "h4",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.accessibilityLabel))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
      className: "mt-4.5",
      disabled: isDecorative,
      floatingLabel: intl.formatMessage(_messages.default.altTextFloatingLabel),
      isInvalid: validation.show,
      onChange: hooks.onInputChange(setValue),
      type: "input",
      value: value
    }), validation.show && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control.Feedback, {
      type: "invalid",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.altTextLocalFeedback))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Checkbox, {
      checked: isDecorative,
      className: "mt-4.5 decorative-control-label",
      onChange: hooks.onCheckboxChange(setIsDecorative),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Label, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.decorativeAltTextCheckboxLabel))
      })
    })]
  });
};
exports.AltTextControls = AltTextControls;
AltTextControls.propTypes = {
  error: _propTypes.default.shape({
    show: _propTypes.default.bool
  }).isRequired,
  isDecorative: _propTypes.default.bool.isRequired,
  setValue: _propTypes.default.func.isRequired,
  setIsDecorative: _propTypes.default.func.isRequired,
  validation: _propTypes.default.shape({
    show: _propTypes.default.bool
  }).isRequired,
  value: _propTypes.default.string.isRequired,
  // inject
  intl: _i18n.intlShape.isRequired
};
var _default = exports.default = (0, _i18n.injectIntl)(AltTextControls);
//# sourceMappingURL=AltTextControls.js.map