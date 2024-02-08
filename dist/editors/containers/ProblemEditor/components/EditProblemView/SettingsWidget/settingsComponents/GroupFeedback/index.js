"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GroupFeedbackCard = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _SettingsOption = _interopRequireDefault(require("../../SettingsOption"));
var _messages = _interopRequireDefault(require("./messages"));
var _hooks = require("./hooks");
var _GroupFeedbackRow = _interopRequireDefault(require("./GroupFeedbackRow"));
var _Button = _interopRequireDefault(require("../../../../../../../sharedComponents/Button"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const GroupFeedbackCard = _ref => {
  let {
    groupFeedbacks,
    updateSettings,
    answers,
    // inject
    intl
  } = _ref;
  const {
    summary,
    handleAdd
  } = (0, _hooks.groupFeedbackCardHooks)(groupFeedbacks, updateSettings, answers);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_SettingsOption.default, {
    title: intl.formatMessage(_messages.default.groupFeedbackSettingTitle),
    summary: intl.formatMessage(summary.message, _objectSpread({}, summary.values)),
    none: !groupFeedbacks.length,
    hasExpandableTextArea: true,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "pb-3",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.groupFeedbackInputLabel))
    }), groupFeedbacks.map(groupFeedback => /*#__PURE__*/(0, _jsxRuntime.jsx)(_GroupFeedbackRow.default, _objectSpread({
      id: groupFeedback.id,
      value: groupFeedback,
      answers: answers
    }, (0, _hooks.groupFeedbackRowHooks)({
      id: groupFeedback.id,
      groupFeedbacks,
      updateSettings
    })), groupFeedback.id)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      className: "m-0 p-0 font-weight-bold",
      variant: "add",
      onClick: handleAdd,
      size: "sm",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.addGroupFeedbackButtonText))
    })]
  });
};
exports.GroupFeedbackCard = GroupFeedbackCard;
GroupFeedbackCard.propTypes = {
  intl: _i18n.intlShape.isRequired,
  groupFeedbacks: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.number.isRequired,
    feedback: _propTypes.default.string.isRequired,
    answers: _propTypes.default.arrayOf(_propTypes.default.string).isRequired
  })).isRequired,
  answers: _propTypes.default.arrayOf(_propTypes.default.shape({
    correct: _propTypes.default.bool,
    id: _propTypes.default.string,
    selectedFeedback: _propTypes.default.string,
    title: _propTypes.default.string,
    unselectedFeedback: _propTypes.default.string
  })).isRequired,
  updateSettings: _propTypes.default.func.isRequired
};
var _default = exports.default = (0, _i18n.injectIntl)(GroupFeedbackCard);
//# sourceMappingURL=index.js.map