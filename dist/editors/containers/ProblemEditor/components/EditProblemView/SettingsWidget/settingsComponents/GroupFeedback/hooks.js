"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = exports.groupFeedbackRowHooks = exports.groupFeedbackCardHooks = void 0;
var _react = require("react");
var _lodashEs = _interopRequireDefault(require("lodash-es"));
var _messages = _interopRequireDefault(require("./messages"));
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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