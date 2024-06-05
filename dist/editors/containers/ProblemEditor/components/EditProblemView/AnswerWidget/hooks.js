"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFeedback = exports.useAnswerContainer = exports.state = exports.setUnselectedFeedback = exports.setSelectedFeedback = exports.setAnswerTitle = exports.setAnswer = exports.removeAnswer = exports.isSingleAnswerProblem = exports.default = void 0;
var _react = require("react");
var _utils = require("../../../../../utils");
var _module = _interopRequireWildcard(require("./hooks"));
var _redux = require("../../../../../data/redux");
var _problem = require("../../../../../data/constants/problem");
var _hooks2 = require("../hooks");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const state = exports.state = (0, _utils.StrictDict)({
  // eslint-disable-next-line react-hooks/rules-of-hooks
  isFeedbackVisible: val => (0, _react.useState)(val)
});
const removeAnswer = _ref => {
  let {
    answer,
    dispatch
  } = _ref;
  return () => {
    dispatch(_redux.actions.problem.deleteAnswer({
      id: answer.id,
      correct: answer.correct,
      editorState: (0, _hooks2.fetchEditorContent)({
        format: ''
      })
    }));
  };
};
exports.removeAnswer = removeAnswer;
const setAnswer = _ref2 => {
  let {
    answer,
    hasSingleAnswer,
    dispatch
  } = _ref2;
  return payload => {
    dispatch(_redux.actions.problem.updateAnswer(_objectSpread({
      id: answer.id,
      hasSingleAnswer
    }, payload)));
  };
};
exports.setAnswer = setAnswer;
const setAnswerTitle = _ref3 => {
  let {
    answer,
    hasSingleAnswer,
    dispatch,
    problemType
  } = _ref3;
  return updatedTitle => {
    let title = updatedTitle;
    if ([_problem.ProblemTypeKeys.TEXTINPUT, _problem.ProblemTypeKeys.NUMERIC, _problem.ProblemTypeKeys.DROPDOWN].includes(problemType)) {
      title = updatedTitle.target.value;
    }
    dispatch(_redux.actions.problem.updateAnswer({
      id: answer.id,
      hasSingleAnswer,
      title
    }));
  };
};
exports.setAnswerTitle = setAnswerTitle;
const setSelectedFeedback = _ref4 => {
  let {
    answer,
    hasSingleAnswer,
    dispatch
  } = _ref4;
  return e => {
    dispatch(_redux.actions.problem.updateAnswer({
      id: answer.id,
      hasSingleAnswer,
      selectedFeedback: e.target.value
    }));
  };
};
exports.setSelectedFeedback = setSelectedFeedback;
const setUnselectedFeedback = _ref5 => {
  let {
    answer,
    hasSingleAnswer,
    dispatch
  } = _ref5;
  return e => {
    dispatch(_redux.actions.problem.updateAnswer({
      id: answer.id,
      hasSingleAnswer,
      unselectedFeedback: e.target.value
    }));
  };
};
exports.setUnselectedFeedback = setUnselectedFeedback;
const useFeedback = answer => {
  const [isFeedbackVisible, setIsFeedbackVisible] = _module.state.isFeedbackVisible(false);
  (0, _react.useEffect)(() => {
    // Show feedback fields if feedback is present
    const isVisible = !!answer.selectedFeedback || !!answer.unselectedFeedback;
    setIsFeedbackVisible(isVisible);
  }, [answer]);
  const toggleFeedback = open => {
    // Do not allow to hide if feedback is added
    const {
      selectedFeedback,
      unselectedFeedback
    } = (0, _hooks2.fetchEditorContent)({
      format: ''
    });
    if (!!selectedFeedback?.[answer.id] || !!unselectedFeedback?.[answer.id]) {
      setIsFeedbackVisible(true);
      return;
    }
    setIsFeedbackVisible(open);
  };
  return {
    isFeedbackVisible,
    toggleFeedback
  };
};
exports.useFeedback = useFeedback;
const isSingleAnswerProblem = problemType => problemType === _problem.ProblemTypeKeys.DROPDOWN;
exports.isSingleAnswerProblem = isSingleAnswerProblem;
const useAnswerContainer = _ref6 => {
  let {
    answers,
    updateField
  } = _ref6;
  (0, _react.useEffect)(() => {
    let answerCount = 0;
    answers.forEach(answer => {
      if (answer.correct) {
        answerCount += 1;
      }
    });
    updateField({
      correctAnswerCount: answerCount
    });
  }, []);
};
exports.useAnswerContainer = useAnswerContainer;
var _default = exports.default = {
  state,
  removeAnswer,
  setAnswer,
  setAnswerTitle,
  useFeedback,
  isSingleAnswerProblem,
  useAnswerContainer
};
//# sourceMappingURL=hooks.js.map