"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.initialState = exports.actions = void 0;
var _lodashEs = _interopRequireDefault(require("lodash-es"));
var _toolkit = require("@reduxjs/toolkit");
var _OLXParser = require("../../../containers/ProblemEditor/data/OLXParser");
var _utils = require("../../../utils");
var _problem = require("../../constants/problem");
var _constants = require("../../../containers/ProblemEditor/components/EditProblemView/SettingsWidget/settingsComponents/Tolerance/constants");
const _excluded = ["id", "hasSingleAnswer"],
  _excluded2 = ["scoring", "showAnswer"],
  _excluded3 = ["settings"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const nextAlphaId = lastId => String.fromCharCode(lastId.charCodeAt(0) + 1);
const initialState = exports.initialState = {
  rawOLX: '',
  problemType: null,
  question: '',
  answers: [],
  correctAnswerCount: 0,
  groupFeedbackList: [],
  generalFeedback: '',
  additionalAttributes: {},
  defaultSettings: {},
  settings: {
    randomization: null,
    scoring: {
      weight: 1,
      attempts: {
        unlimited: false,
        number: null
      }
    },
    hints: [],
    timeBetween: 0,
    showAnswer: {
      on: '',
      afterAttempts: 0
    },
    showResetButton: null,
    solutionExplanation: '',
    tolerance: {
      value: null,
      type: _constants.ToleranceTypes.none.type
    }
  }
};

// eslint-disable-next-line no-unused-vars
const problem = (0, _toolkit.createSlice)({
  name: 'problem',
  initialState,
  reducers: {
    updateField: (state, _ref) => {
      let {
        payload
      } = _ref;
      return _objectSpread(_objectSpread({}, state), payload);
    },
    updateQuestion: (state, _ref2) => {
      let {
        payload
      } = _ref2;
      return _objectSpread(_objectSpread({}, state), {}, {
        question: payload
      });
    },
    updateAnswer: (state, _ref3) => {
      let {
        payload
      } = _ref3;
      const {
          id,
          hasSingleAnswer
        } = payload,
        answer = _objectWithoutProperties(payload, _excluded);
      let {
        correctAnswerCount
      } = state;
      const answers = state.answers.map(obj => {
        if (obj.id === id) {
          if (_lodashEs.default.has(answer, 'correct') && payload.correct) {
            correctAnswerCount += 1;
            return _objectSpread(_objectSpread({}, obj), answer);
          }
          if (_lodashEs.default.has(answer, 'correct') && payload.correct === false) {
            correctAnswerCount -= 1;
            return _objectSpread(_objectSpread({}, obj), answer);
          }
          return _objectSpread(_objectSpread({}, obj), answer);
        }
        // set other answers as incorrect if problem only has one answer correct
        // and changes object include correct key change
        if (hasSingleAnswer && _lodashEs.default.has(answer, 'correct') && obj.correct) {
          return _objectSpread(_objectSpread({}, obj), {}, {
            correct: false
          });
        }
        return obj;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        correctAnswerCount,
        answers
      });
    },
    deleteAnswer: (state, _ref4) => {
      let {
        payload
      } = _ref4;
      const {
        id,
        correct,
        editorState
      } = payload;
      const EditorsArray = window.tinymce.editors;
      if (state.answers.length === 1) {
        return _objectSpread(_objectSpread({}, state), {}, {
          correctAnswerCount: state.problemType === _problem.ProblemTypeKeys.NUMERIC ? 1 : 0,
          answers: [{
            id: 'A',
            title: '',
            selectedFeedback: '',
            unselectedFeedback: '',
            correct: state.problemType === _problem.ProblemTypeKeys.NUMERIC,
            isAnswerRange: false
          }]
        });
      }
      const answers = state.answers.filter(obj => obj.id !== id).map((answer, index) => {
        const newId = _OLXParser.indexToLetterMap[index];
        if (answer.id === newId) {
          return answer;
        }
        let newAnswer = _objectSpread(_objectSpread({}, answer), {}, {
          id: newId,
          selectedFeedback: editorState.selectedFeedback ? editorState.selectedFeedback[answer.id] : '',
          unselectedFeedback: editorState.unselectedFeedback ? editorState.unselectedFeedback[answer.id] : ''
        });
        if (_problem.RichTextProblems.includes(state.problemType)) {
          newAnswer = _objectSpread(_objectSpread({}, newAnswer), {}, {
            title: editorState.answers[answer.id]
          });
          if (EditorsArray[`answer-${newId}`]) {
            EditorsArray[`answer-${newId}`].setContent(newAnswer.title ?? '');
          }
        }
        // Note: The following assumes selectedFeedback and unselectedFeedback is using ExpandedTextArea
        //   Content only needs to be set here when the 'next' feedback fields are shown.
        if (EditorsArray[`selectedFeedback-${newId}`]) {
          EditorsArray[`selectedFeedback-${newId}`].setContent(newAnswer.selectedFeedback ?? '');
        }
        if (EditorsArray[`unselectedFeedback-${newId}`]) {
          EditorsArray[`unselectedFeedback-${newId}`].setContent(newAnswer.unselectedFeedback ?? '');
        }
        return newAnswer;
      });
      const groupFeedbackList = state.groupFeedbackList.map(feedback => {
        const newAnswers = feedback.answers.filter(obj => obj !== id).map(letter => {
          if (letter.charCodeAt(0) > id.charCodeAt(0)) {
            return String.fromCharCode(letter.charCodeAt(0) - 1);
          }
          return letter;
        });
        return _objectSpread(_objectSpread({}, feedback), {}, {
          answers: newAnswers
        });
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        answers,
        correctAnswerCount: correct ? state.correctAnswerCount - 1 : state.correctAnswerCount,
        groupFeedbackList
      });
    },
    addAnswer: state => {
      const currAnswers = state.answers;
      if (currAnswers.length >= _OLXParser.indexToLetterMap.length) {
        return state;
      }
      const newOption = {
        id: currAnswers.length ? nextAlphaId(currAnswers[currAnswers.length - 1].id) : 'A',
        title: '',
        selectedFeedback: '',
        unselectedFeedback: '',
        correct: state.problemType === _problem.ProblemTypeKeys.NUMERIC,
        isAnswerRange: false
      };
      let {
        correctAnswerCount
      } = state;
      if (state.problemType === _problem.ProblemTypeKeys.NUMERIC) {
        correctAnswerCount += 1;
      }
      const answers = [...currAnswers, newOption];
      return _objectSpread(_objectSpread({}, state), {}, {
        correctAnswerCount,
        answers
      });
    },
    addAnswerRange: state => {
      // As you may only have one answer range at a time, overwrite the answer object.
      const newOption = {
        id: 'A',
        title: '',
        selectedFeedback: '',
        unselectedFeedback: '',
        correct: state.problemType === _problem.ProblemTypeKeys.NUMERIC,
        isAnswerRange: true
      };
      const correctAnswerCount = 1;
      return _objectSpread(_objectSpread({}, state), {}, {
        correctAnswerCount,
        answers: [newOption]
      });
    },
    updateSettings: (state, _ref5) => {
      let {
        payload
      } = _ref5;
      return _objectSpread(_objectSpread({}, state), {}, {
        settings: _objectSpread(_objectSpread({}, state.settings), payload)
      });
    },
    load: (state, _ref6) => {
      let {
          payload: {
            settings: {
              scoring,
              showAnswer
            }
          }
        } = _ref6,
        settings = _objectWithoutProperties(_ref6.payload.settings, _excluded2),
        payload = _objectWithoutProperties(_ref6.payload, _excluded3);
      return _objectSpread(_objectSpread({}, state), {}, {
        settings: _objectSpread(_objectSpread({}, state.settings), {}, {
          scoring: _objectSpread(_objectSpread({}, state.settings.scoring), scoring),
          showAnswer: _objectSpread(_objectSpread({}, state.settings.showAnswer), showAnswer)
        }, settings)
      }, payload);
    },
    setEnableTypeSelection: (state, _ref7) => {
      let {
        payload
      } = _ref7;
      const {
        maxAttempts,
        showanswer,
        showResetButton
      } = payload;
      const attempts = {
        number: maxAttempts,
        unlimited: false
      };
      return _objectSpread(_objectSpread({}, state), {}, {
        settings: _objectSpread(_objectSpread({}, state.settings), {}, {
          scoring: _objectSpread(_objectSpread({}, state.settings.scoring), {}, {
            attempts
          }),
          showAnswer: _objectSpread(_objectSpread({}, state.settings.showAnswer), {}, {
            on: showanswer
          })
        }, showResetButton),
        problemType: null
      });
    }
  }
});
const actions = exports.actions = (0, _utils.StrictDict)(problem.actions);
const {
  reducer
} = problem;
exports.reducer = reducer;
//# sourceMappingURL=reducers.js.map