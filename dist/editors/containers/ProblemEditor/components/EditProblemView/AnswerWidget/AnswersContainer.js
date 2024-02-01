"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.default = exports.AnswersContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _messages = _interopRequireDefault(require("./messages"));
var _hooks = require("./hooks");
var _redux = require("../../../../../data/redux");
var _types = require("../../../../../data/services/cms/types");
var _AnswerOption = _interopRequireDefault(require("./AnswerOption"));
var _Button = _interopRequireDefault(require("../../../../../sharedComponents/Button"));
var _problem = require("../../../../../data/constants/problem");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const AnswersContainer = _ref => {
  let {
    problemType,
    // Redux
    answers,
    addAnswer,
    addAnswerRange,
    updateField
  } = _ref;
  const hasSingleAnswer = (0, _hooks.isSingleAnswerProblem)(problemType);
  (0, _hooks.useAnswerContainer)({
    answers,
    problemType,
    updateField
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "answers-container border border-light-700 rounded py-4 pl-4 pr-3",
    children: [answers.map(answer => /*#__PURE__*/(0, _jsxRuntime.jsx)(_AnswerOption.default, {
      hasSingleAnswer: hasSingleAnswer,
      answer: answer
    }, answer.id)), problemType !== _problem.ProblemTypeKeys.NUMERIC ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      variant: "add",
      onClick: addAnswer,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.addAnswerButtonText))
    }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Dropdown, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Dropdown.Toggle, {
        id: "Add-Answer-Or-Answer-Range",
        variant: "tertiary",
        className: "pl-0",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
          src: _icons.Add
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.addAnswerButtonText))]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Dropdown.Menu, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Item, {
          onClick: addAnswer,
          className: `AddAnswerRange ${answers.length === 1 && answers[0].isAnswerRange ? 'disabled' : ''}`,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.addAnswerButtonText))
        }, "add-answer"), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Item, {
          onClick: addAnswerRange,
          className: `AddAnswerRange ${answers.length > 1 || answers.length === 1 && answers[0].isAnswerRange ? 'disabled' : ''}`,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.addAnswerRangeButtonText))
        }, "add-answer-range")]
      })]
    })]
  });
};
exports.AnswersContainer = AnswersContainer;
AnswersContainer.propTypes = {
  problemType: _propTypes.default.string.isRequired,
  answers: _propTypes.default.arrayOf(_types.answerOptionProps).isRequired,
  addAnswer: _propTypes.default.func.isRequired,
  addAnswerRange: _propTypes.default.func.isRequired,
  updateField: _propTypes.default.func.isRequired
};
const mapStateToProps = state => ({
  answers: _redux.selectors.problem.answers(state)
});
exports.mapStateToProps = mapStateToProps;
const mapDispatchToProps = exports.mapDispatchToProps = {
  addAnswer: _redux.actions.problem.addAnswer,
  addAnswerRange: _redux.actions.problem.addAnswerRange,
  updateField: _redux.actions.problem.updateField
};
var _default = exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AnswersContainer);
//# sourceMappingURL=AnswersContainer.js.map