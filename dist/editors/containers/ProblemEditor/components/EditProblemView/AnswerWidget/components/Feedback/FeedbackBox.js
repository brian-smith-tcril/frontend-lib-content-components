"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FeedbackBox = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _types = require("../../../../../../../data/services/cms/types");
var _FeedbackControl = _interopRequireDefault(require("./FeedbackControl"));
var _messages = _interopRequireDefault(require("./messages"));
var _problem = require("../../../../../../../data/constants/problem");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const FeedbackBox = _ref => {
  let {
    answer,
    problemType,
    setSelectedFeedback,
    setUnselectedFeedback,
    // injected
    intl
  } = _ref;
  const props = {
    answer,
    intl
  };
  return problemType === _problem.ProblemTypeKeys.MULTISELECT ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "bg-light-300 p-4 mt-3 rounded text-primary-500",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FeedbackControl.default, _objectSpread({
      feedback: answer.selectedFeedback,
      labelMessage: _messages.default.selectedFeedbackLabel,
      labelMessageBoldUnderline: _messages.default.selectedFeedbackLabelBoldUnderlineText,
      onChange: setSelectedFeedback,
      type: "selected"
    }, props), `selectedfeedback-${answer.id}`), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FeedbackControl.default, _objectSpread({
      feedback: answer.unselectedFeedback,
      labelMessage: _messages.default.unSelectedFeedbackLabel,
      labelMessageBoldUnderline: _messages.default.unSelectedFeedbackLabelBoldUnderlineText,
      onChange: setUnselectedFeedback,
      type: "unselected"
    }, props), `unselectedfeedback-${answer.id}`)]
  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "bg-light-300 p-4 mt-3 rounded text-primary-500",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FeedbackControl.default, _objectSpread({
      feedback: answer.selectedFeedback,
      labelMessage: _messages.default.selectedFeedbackLabel,
      labelMessageBoldUnderline: _messages.default.selectedFeedbackLabelBoldUnderlineText,
      onChange: setSelectedFeedback,
      type: "selected"
    }, props), `selectedfeedback-${answer.id}`)
  });
};
exports.FeedbackBox = FeedbackBox;
FeedbackBox.propTypes = {
  answer: _types.answerOptionProps.isRequired,
  problemType: _propTypes.default.string.isRequired,
  setAnswer: _propTypes.default.func.isRequired,
  setSelectedFeedback: _propTypes.default.func.isRequired,
  setUnselectedFeedback: _propTypes.default.func.isRequired,
  intl: _i18n.intlShape.isRequired
};
var _default = exports.default = (0, _i18n.injectIntl)(FeedbackBox);
//# sourceMappingURL=FeedbackBox.js.map