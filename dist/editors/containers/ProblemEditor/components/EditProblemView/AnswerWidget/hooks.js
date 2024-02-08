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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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