"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HintsCard = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _SettingsOption = _interopRequireDefault(require("../SettingsOption"));
var _problem = require("../../../../../../data/constants/problem");
var _messages = _interopRequireDefault(require("../messages"));
var _hooks = require("../hooks");
var _HintRow = _interopRequireDefault(require("./HintRow"));
var _Button = _interopRequireDefault(require("../../../../../../sharedComponents/Button"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const HintsCard = _ref => {
  let {
    hints,
    problemType,
    updateSettings,
    // inject
    intl
  } = _ref;
  const {
    summary,
    handleAdd
  } = (0, _hooks.hintsCardHooks)(hints, updateSettings);
  if (problemType === _problem.ProblemTypeKeys.ADVANCED) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_SettingsOption.default, {
    title: intl.formatMessage(_messages.default.hintSettingTitle),
    summary: intl.formatMessage(summary.message, _objectSpread({}, summary.values)),
    none: !hints.length,
    hasExpandableTextArea: true,
    children: [hints.map(hint => /*#__PURE__*/(0, _jsxRuntime.jsx)(_HintRow.default, _objectSpread({
      id: hint.id,
      value: hint.value
    }, (0, _hooks.hintsRowHooks)(hint.id, hints, updateSettings)), hint.id)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      className: "m-0 p-0 font-weight-bold",
      variant: "add",
      onClick: handleAdd,
      size: "sm",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.addHintButtonText))
    })]
  });
};
exports.HintsCard = HintsCard;
HintsCard.propTypes = {
  intl: _i18n.intlShape.isRequired,
  hints: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    value: _propTypes.default.string.isRequired
  })).isRequired,
  problemType: _propTypes.default.string.isRequired,
  updateSettings: _propTypes.default.func.isRequired
};
var _default = exports.default = (0, _i18n.injectIntl)(HintsCard);
//# sourceMappingURL=HintsCard.js.map