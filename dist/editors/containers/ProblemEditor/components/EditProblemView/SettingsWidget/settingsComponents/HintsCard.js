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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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