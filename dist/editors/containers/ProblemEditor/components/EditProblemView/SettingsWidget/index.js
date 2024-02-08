"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDispatchToProps = exports.default = exports.SettingsWidget = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _reactRedux = require("react-redux");
var _paragon = require("@edx/paragon");
var _redux = require("../../../../../data/redux");
var _ScoringCard = _interopRequireDefault(require("./settingsComponents/ScoringCard"));
var _ShowAnswerCard = _interopRequireDefault(require("./settingsComponents/ShowAnswerCard"));
var _HintsCard = _interopRequireDefault(require("./settingsComponents/HintsCard"));
var _ResetCard = _interopRequireDefault(require("./settingsComponents/ResetCard"));
var _TimerCard = _interopRequireDefault(require("./settingsComponents/TimerCard"));
var _TypeCard = _interopRequireDefault(require("./settingsComponents/TypeCard"));
var _Tolerance = _interopRequireDefault(require("./settingsComponents/Tolerance"));
var _index = _interopRequireDefault(require("./settingsComponents/GroupFeedback/index"));
var _SwitchToAdvancedEditorCard = _interopRequireDefault(require("./settingsComponents/SwitchToAdvancedEditorCard"));
var _messages = _interopRequireDefault(require("./messages"));
var _hooks = require("./hooks");
require("./index.scss");
var _problem = require("../../../../../data/constants/problem");
var _Randomization = _interopRequireDefault(require("./settingsComponents/Randomization"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } // This widget should be connected, grab all settings from store, update them as needed.
const SettingsWidget = _ref => {
  let {
    problemType,
    // redux
    answers,
    groupFeedbackList,
    blockTitle,
    correctAnswerCount,
    settings,
    setBlockTitle,
    updateSettings,
    updateField,
    updateAnswer,
    defaultSettings
  } = _ref;
  const {
    isAdvancedCardsVisible,
    showAdvancedCards
  } = (0, _hooks.showAdvancedSettingsCards)();
  const feedbackCard = () => {
    if ([_problem.ProblemTypeKeys.MULTISELECT].includes(problemType)) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "mt-3",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.default, {
          groupFeedbacks: groupFeedbackList,
          updateSettings: updateField,
          answers: answers
        })
      });
    }
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {});
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "settingsWidget ml-4",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "mb-3",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TypeCard.default, {
        answers: answers,
        blockTitle: blockTitle,
        correctAnswerCount: correctAnswerCount,
        problemType: problemType,
        setBlockTitle: setBlockTitle,
        updateField: updateField,
        updateAnswer: updateAnswer
      })
    }), _problem.ProblemTypeKeys.NUMERIC === problemType && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "my-3",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tolerance.default, {
        updateSettings: updateSettings,
        answers: answers,
        tolerance: settings.tolerance
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "my-3",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ScoringCard.default, {
        scoring: settings.scoring,
        defaultValue: defaultSettings.maxAttempts,
        updateSettings: updateSettings
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "mt-3",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HintsCard.default, {
        problemType: problemType,
        hints: settings.hints,
        updateSettings: updateSettings
      })
    }), feedbackCard(), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Collapsible.Advanced, {
        open: !isAdvancedCardsVisible,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Collapsible.Body, {
          className: "collapsible-body small",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
            className: "my-3 px-0 text-info-500",
            variant: "link",
            size: "inline",
            onClick: showAdvancedCards,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.showAdvanceSettingsButtonText))
          })
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Collapsible.Advanced, {
      open: isAdvancedCardsVisible,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Collapsible.Body, {
        className: "collapsible-body",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "my-3",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ShowAnswerCard.default, {
            showAnswer: settings.showAnswer,
            defaultValue: defaultSettings.showanswer,
            updateSettings: updateSettings
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "my-3",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ResetCard.default, {
            showResetButton: settings.showResetButton,
            defaultValue: defaultSettings.showResetButton,
            updateSettings: updateSettings
          })
        }), problemType === _problem.ProblemTypeKeys.ADVANCED && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "my-3",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Randomization.default, {
            randomization: settings.randomization,
            defaultValue: defaultSettings.rerandomize,
            updateSettings: updateSettings
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "my-3",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TimerCard.default, {
            timeBetween: settings.timeBetween,
            updateSettings: updateSettings
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "my-3",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SwitchToAdvancedEditorCard.default, {
            problemType: problemType
          })
        })]
      })
    })]
  });
};
exports.SettingsWidget = SettingsWidget;
SettingsWidget.propTypes = {
  answers: _propTypes.default.arrayOf(_propTypes.default.shape({
    correct: _propTypes.default.bool,
    id: _propTypes.default.string,
    selectedFeedback: _propTypes.default.string,
    title: _propTypes.default.string,
    unselectedFeedback: _propTypes.default.string
  })).isRequired,
  groupFeedbackList: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.number,
    feedback: _propTypes.default.string,
    answers: _propTypes.default.arrayOf(_propTypes.default.string)
  })).isRequired,
  blockTitle: _propTypes.default.string.isRequired,
  correctAnswerCount: _propTypes.default.number.isRequired,
  problemType: _propTypes.default.string.isRequired,
  setBlockTitle: _propTypes.default.func.isRequired,
  updateAnswer: _propTypes.default.func.isRequired,
  updateField: _propTypes.default.func.isRequired,
  updateSettings: _propTypes.default.func.isRequired,
  defaultSettings: _propTypes.default.shape({
    maxAttempts: _propTypes.default.number,
    showanswer: _propTypes.default.string,
    showResetButton: _propTypes.default.bool,
    rerandomize: _propTypes.default.string
  }).isRequired,
  // eslint-disable-next-line
  settings: _propTypes.default.any.isRequired
};
const mapStateToProps = state => ({
  groupFeedbackList: _redux.selectors.problem.groupFeedbackList(state),
  settings: _redux.selectors.problem.settings(state),
  answers: _redux.selectors.problem.answers(state),
  blockTitle: _redux.selectors.app.blockTitle(state),
  correctAnswerCount: _redux.selectors.problem.correctAnswerCount(state),
  defaultSettings: _redux.selectors.problem.defaultSettings(state)
});
const mapDispatchToProps = exports.mapDispatchToProps = {
  setBlockTitle: _redux.actions.app.setBlockTitle,
  updateSettings: _redux.actions.problem.updateSettings,
  updateField: _redux.actions.problem.updateField,
  updateAnswer: _redux.actions.problem.updateAnswer
};
var _default = exports.default = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SettingsWidget));
//# sourceMappingURL=index.js.map