"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ResetCard = void 0;
var _react = _interopRequireDefault(require("react"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _SettingsOption = _interopRequireDefault(require("../SettingsOption"));
var _messages = _interopRequireDefault(require("../messages"));
var _hooks = require("../hooks");
var _redux = require("../../../../../../data/redux");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const ResetCard = _ref => {
  let {
    showResetButton,
    defaultValue,
    updateSettings,
    // inject
    intl
  } = _ref;
  const isLibrary = (0, _reactRedux.useSelector)(_redux.selectors.app.isLibrary);
  const {
    setResetTrue,
    setResetFalse
  } = (0, _hooks.resetCardHooks)(updateSettings);
  const advancedSettingsLink = `${(0, _reactRedux.useSelector)(_redux.selectors.app.studioEndpointUrl)}/settings/advanced/${(0, _reactRedux.useSelector)(_redux.selectors.app.learningContextId)}#show_reset_button`;
  const currentResetButton = showResetButton !== null ? showResetButton : defaultValue;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_SettingsOption.default, {
    title: intl.formatMessage(_messages.default.resetSettingsTitle),
    summary: currentResetButton ? intl.formatMessage(_messages.default.resetSettingsTrue) : intl.formatMessage(_messages.default.resetSettingsFalse),
    className: "resetCard",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "halfSpacedMessage",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.resetSettingText))
      })
    }), !isLibrary && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "spacedMessage",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Hyperlink, {
        destination: advancedSettingsLink,
        target: "_blank",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.advancedSettingsLinkText))
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ButtonGroup, {
      size: "sm",
      className: "resetSettingsButtons mb-2",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
        variant: currentResetButton ? 'outline-primary' : 'primary',
        size: "sm",
        onClick: setResetFalse,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.resetSettingsFalse))
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
        variant: currentResetButton ? 'primary' : 'outline-primary',
        size: "sm",
        onClick: setResetTrue,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.resetSettingsTrue))
      })]
    })]
  });
};
exports.ResetCard = ResetCard;
ResetCard.propTypes = {
  showResetButton: _propTypes.default.bool.isRequired,
  defaultValue: _propTypes.default.bool.isRequired,
  updateSettings: _propTypes.default.func.isRequired,
  // injected
  intl: _i18n.intlShape.isRequired
};
var _default = exports.default = (0, _i18n.injectIntl)(ResetCard);
//# sourceMappingURL=ResetCard.js.map