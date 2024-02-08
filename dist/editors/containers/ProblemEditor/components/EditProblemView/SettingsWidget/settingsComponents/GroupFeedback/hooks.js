"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = exports.groupFeedbackRowHooks = exports.groupFeedbackCardHooks = void 0;
var _react = require("react");
var _lodashEs = _interopRequireDefault(require("lodash-es"));
var _messages = _interopRequireDefault(require("./messages"));
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const state = exports.state = {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  summary: val => (0, _react.useState)(val)
};
const groupFeedbackCardHooks = (groupFeedbacks, updateSettings, answerslist) => {
  const [summary, setSummary] = _module.state.summary({
    message: _messages.default.noGroupFeedbackSummary,
    values: {}
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  (0, _react.useEffect)(() => {
    if (groupFeedbacks.length === 0) {
      setSummary({
        message: _messages.default.noGroupFeedbackSummary,
        values: {}
      });
    } else {
      const feedbacksInList = groupFeedbacks.map(_ref => {
        let {
          answers,
          feedback
        } = _ref;
        const answerIDs = answerslist.map(a => a.id);
        const answersString = answers.filter(value => answerIDs.includes(value));
        return `${answersString} ${feedback}\n`;
      });
      setSummary({
        message: _messages.default.groupFeedbackSummary,
        values: {
          groupFeedback: feedbacksInList
        }
      });
    }
  }, [groupFeedbacks, answerslist]);
  const handleAdd = () => {
    let newId = 0;
    if (!_lodashEs.default.isEmpty(groupFeedbacks)) {
      newId = Math.max(...groupFeedbacks.map(feedback => feedback.id)) + 1;
    }
    const groupFeedback = {
      id: newId,
      answers: [],
      feedback: ''
    };
    const modifiedGroupFeedbacks = [...groupFeedbacks, groupFeedback];
    updateSettings({
      groupFeedbackList: modifiedGroupFeedbacks
    });
  };
  return {
    summary,
    handleAdd
  };
};
exports.groupFeedbackCardHooks = groupFeedbackCardHooks;
const groupFeedbackRowHooks = _ref2 => {
  let {
    id,
    groupFeedbacks,
    updateSettings
  } = _ref2;
  // Hooks for the answers associated with a groupfeedback
  const addSelectedAnswer = _ref3 => {
    let {
      value
    } = _ref3;
    const oldGroupFeedback = groupFeedbacks.find(x => x.id === id);
    const newAnswers = [...oldGroupFeedback.answers, value];
    const newFeedback = _objectSpread(_objectSpread({}, oldGroupFeedback), {}, {
      answers: newAnswers
    });
    const remainingFeedbacks = groupFeedbacks.filter(item => item.id !== id);
    const updatedFeedbackList = [newFeedback, ...remainingFeedbacks].sort((a, b) => a.id - b.id);
    updateSettings({
      groupFeedbackList: updatedFeedbackList
    });
  };
  const removedSelectedAnswer = _ref4 => {
    let {
      value
    } = _ref4;
    const oldGroupFeedback = groupFeedbacks.find(x => x.id === id);
    const newAnswers = oldGroupFeedback.answers.filter(item => item !== value);
    const newFeedback = _objectSpread(_objectSpread({}, oldGroupFeedback), {}, {
      answers: newAnswers
    });
    const remainingFeedbacks = groupFeedbacks.filter(item => item.id !== id);
    const updatedFeedbackList = [newFeedback, ...remainingFeedbacks].sort((a, b) => a.id - b.id);
    updateSettings({
      groupFeedbackList: updatedFeedbackList
    });
  };
  const handleAnswersSelectedChange = event => {
    const {
      checked,
      value
    } = event.target;
    if (checked) {
      addSelectedAnswer({
        value
      });
    } else {
      removedSelectedAnswer({
        value
      });
    }
  };

  // Delete Button
  const handleDelete = () => {
    const modifiedGroupFeedbacks = groupFeedbacks.filter(item => item.id !== id);
    updateSettings({
      groupFeedbackList: modifiedGroupFeedbacks
    });
  };

  // Hooks for the feedback associated with a groupfeedback
  const handleFeedbackChange = event => {
    const {
      value
    } = event.target;
    const modifiedGroupFeedback = groupFeedbacks.map(groupFeedback => {
      if (groupFeedback.id === id) {
        return _objectSpread(_objectSpread({}, groupFeedback), {}, {
          feedback: value
        });
      }
      return groupFeedback;
    });
    updateSettings({
      groupFeedbackList: modifiedGroupFeedback
    });
  };
  return {
    handleAnswersSelectedChange,
    handleFeedbackChange,
    handleDelete
  };
};
exports.groupFeedbackRowHooks = groupFeedbackRowHooks;
//# sourceMappingURL=hooks.js.map