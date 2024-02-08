"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.default = exports.AnswerOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var _messages = _interopRequireDefault(require("./messages"));
var _redux = require("../../../../../data/redux");
var _types = require("../../../../../data/services/cms/types");
var _Checker = _interopRequireDefault(require("./components/Checker"));
var _Feedback = require("./components/Feedback");
var hooks = _interopRequireWildcard(require("./hooks"));
var _problem = require("../../../../../data/constants/problem");
var _ExpandableTextArea = _interopRequireDefault(require("../../../../../sharedComponents/ExpandableTextArea"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const AnswerOption = _ref => {
  let {
    answer,
    hasSingleAnswer,
    // injected
    intl,
    // redux
    problemType
  } = _ref;
  const dispatch = (0, _reactRedux.useDispatch)();
  const removeAnswer = hooks.removeAnswer({
    answer,
    dispatch
  });
  const setAnswer = hooks.setAnswer({
    answer,
    hasSingleAnswer,
    dispatch
  });
  const setAnswerTitle = hooks.setAnswerTitle({
    answer,
    hasSingleAnswer,
    dispatch,
    problemType
  });
  const setSelectedFeedback = hooks.setSelectedFeedback({
    answer,
    hasSingleAnswer,
    dispatch
  });
  const setUnselectedFeedback = hooks.setUnselectedFeedback({
    answer,
    hasSingleAnswer,
    dispatch
  });
  const {
    isFeedbackVisible,
    toggleFeedback
  } = hooks.useFeedback(answer);
  const getInputArea = () => {
    if ([_problem.ProblemTypeKeys.SINGLESELECT, _problem.ProblemTypeKeys.MULTISELECT].includes(problemType)) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExpandableTextArea.default, {
        value: answer.title,
        setContent: setAnswerTitle,
        placeholder: intl.formatMessage(_messages.default.answerTextboxPlaceholder),
        id: `answer-${answer.id}`
      });
    }
    if (problemType !== _problem.ProblemTypeKeys.NUMERIC || !answer.isAnswerRange) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
        as: "textarea",
        className: "answer-option-textarea text-gray-500 small",
        autoResize: true,
        rows: 1,
        value: answer.title,
        onChange: setAnswerTitle,
        placeholder: intl.formatMessage(_messages.default.answerTextboxPlaceholder)
      });
    }
    // Return Answer Range View
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
        as: "textarea",
        className: "answer-option-textarea text-gray-500 small",
        autoResize: true,
        rows: 1,
        value: answer.title,
        onChange: setAnswerTitle,
        placeholder: intl.formatMessage(_messages.default.answerRangeTextboxPlaceholder)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pgn__form-switch-helper-text",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.answerRangeHelperText))
      })]
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Collapsible.Advanced, {
    open: isFeedbackVisible,
    onToggle: toggleFeedback,
    className: "answer-option d-flex flex-row justify-content-between flex-nowrap pb-2 pt-2",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "mr-1 d-flex",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checker.default, {
        hasSingleAnswer: hasSingleAnswer,
        answer: answer,
        setAnswer: setAnswer,
        disabled: problemType === _problem.ProblemTypeKeys.NUMERIC
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "ml-1 flex-grow-1",
      children: [getInputArea(), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Collapsible.Body, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Feedback.FeedbackBox, {
          problemType: problemType,
          answer: answer,
          setSelectedFeedback: setSelectedFeedback,
          setUnselectedFeedback: setUnselectedFeedback,
          intl: intl
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "d-flex flex-row flex-nowrap",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Collapsible.Trigger, {
        "aria-label": "Toggle feedback",
        className: "btn-icon btn-icon-primary btn-icon-md align-items-center",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
          src: _icons.FeedbackOutline,
          alt: intl.formatMessage(_messages.default.feedbackToggleIconAltText)
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.IconButton, {
        src: _icons.DeleteOutline,
        iconAs: _paragon.Icon,
        alt: intl.formatMessage(_messages.default.answerDeleteIconAltText),
        onClick: removeAnswer,
        variant: "primary"
      })]
    })]
  });
};
exports.AnswerOption = AnswerOption;
AnswerOption.propTypes = {
  answer: _types.answerOptionProps.isRequired,
  hasSingleAnswer: _propTypes.default.bool.isRequired,
  // injected
  intl: _i18n.intlShape.isRequired,
  // redux
  problemType: _propTypes.default.string.isRequired
};
const mapStateToProps = state => ({
  problemType: _redux.selectors.problem.problemType(state)
});
exports.mapStateToProps = mapStateToProps;
const mapDispatchToProps = exports.mapDispatchToProps = {};
var _default = exports.default = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)( /*#__PURE__*/(0, _react.memo)(AnswerOption)));
//# sourceMappingURL=AnswerOption.js.map