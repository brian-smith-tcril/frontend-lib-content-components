"use strict";

var _react = require("react");
var _reactRedux = require("react-redux");
var _redux = require("../../../../../data/redux");
var _testUtils = require("../../../../../../testUtils");
var _problem = require("../../../../../data/constants/problem");
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
jest.mock('react', () => {
  const updateState = jest.fn();
  return {
    useEffect: jest.fn(),
    useState: jest.fn(val => [{
      state: val
    }, newVal => updateState({
      val,
      newVal
    })])
  };
});
jest.mock('@edx/frontend-platform/i18n', () => ({
  defineMessages: m => m
}));
jest.mock('../../../../../data/redux', () => ({
  actions: {
    problem: {
      deleteAnswer: args => ({
        deleteAnswer: args
      }),
      updateAnswer: args => ({
        updateAnswer: args
      })
    }
  }
}));
const state = new _testUtils.MockUseState(_module);
let output;
const answerWithOnlyFeedback = {
  id: 'A',
  title: 'Answer 1',
  correct: true,
  selectedFeedback: 'some feedback'
};
let windowSpy;
describe('Answer Options Hooks', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('state hooks', () => {
    state.testGetter(state.keys.isFeedbackVisible);
  });
  describe('removeAnswer', () => {
    beforeEach(() => {
      windowSpy = jest.spyOn(window, 'window', 'get');
    });
    afterEach(() => {
      windowSpy.mockRestore();
    });
    const answer = {
      id: 'A',
      correct: false
    };
    const dispatch = (0, _reactRedux.useDispatch)();
    it('dispatches actions.problem.deleteAnswer', () => {
      windowSpy.mockImplementation(() => ({
        tinymce: {
          editors: {
            'answer-A': {
              getContent: () => 'string'
            }
          }
        }
      }));
      _module.removeAnswer({
        answer,
        dispatch
      })();
      expect(dispatch).toHaveBeenCalledWith(_redux.actions.problem.deleteAnswer({
        id: answer.id,
        correct: answer.correct,
        editorState: {
          answers: {
            A: 'string'
          },
          hints: []
        }
      }));
    });
  });
  describe('setAnswer', () => {
    test('it dispatches actions.problem.updateAnswer', () => {
      const answer = {
        id: 'A'
      };
      const hasSingleAnswer = false;
      const dispatch = (0, _reactRedux.useDispatch)();
      const payload = {
        random: 'string'
      };
      _module.setAnswer({
        answer,
        hasSingleAnswer,
        dispatch
      })(payload);
      expect(dispatch).toHaveBeenCalledWith(_redux.actions.problem.updateAnswer(_objectSpread({
        id: answer.id,
        hasSingleAnswer
      }, payload)));
    });
  });
  describe('setAnswerTitle', () => {
    test('it dispatches actions.problem.updateAnswer for numeric problem', () => {
      const answer = {
        id: 'A'
      };
      const hasSingleAnswer = false;
      const dispatch = (0, _reactRedux.useDispatch)();
      const updatedTitle = {
        target: {
          value: 'string'
        }
      };
      const problemType = 'numericalresponse';
      _module.setAnswerTitle({
        answer,
        hasSingleAnswer,
        dispatch,
        problemType
      })(updatedTitle);
      expect(dispatch).toHaveBeenCalledWith(_redux.actions.problem.updateAnswer({
        id: answer.id,
        hasSingleAnswer,
        title: updatedTitle.target.value
      }));
    });
    test('it dispatches actions.problem.updateAnswer for single select problem', () => {
      const answer = {
        id: 'A'
      };
      const hasSingleAnswer = false;
      const dispatch = (0, _reactRedux.useDispatch)();
      const updatedTitle = 'string';
      const problemType = 'multiplechoiceresponse';
      _module.setAnswerTitle({
        answer,
        hasSingleAnswer,
        dispatch,
        problemType
      })(updatedTitle);
      expect(dispatch).toHaveBeenCalledWith(_redux.actions.problem.updateAnswer({
        id: answer.id,
        hasSingleAnswer,
        title: updatedTitle
      }));
    });
  });
  describe('setSelectedFeedback', () => {
    test('it dispatches actions.problem.updateAnswer', () => {
      const answer = {
        id: 'A'
      };
      const hasSingleAnswer = false;
      const dispatch = (0, _reactRedux.useDispatch)();
      const e = {
        target: {
          value: 'string'
        }
      };
      _module.setSelectedFeedback({
        answer,
        hasSingleAnswer,
        dispatch
      })(e);
      expect(dispatch).toHaveBeenCalledWith(_redux.actions.problem.updateAnswer({
        id: answer.id,
        hasSingleAnswer,
        selectedFeedback: e.target.value
      }));
    });
  });
  describe('setUnselectedFeedback', () => {
    test('it dispatches actions.problem.updateAnswer', () => {
      const answer = {
        id: 'A'
      };
      const hasSingleAnswer = false;
      const dispatch = (0, _reactRedux.useDispatch)();
      const e = {
        target: {
          value: 'string'
        }
      };
      _module.setUnselectedFeedback({
        answer,
        hasSingleAnswer,
        dispatch
      })(e);
      expect(dispatch).toHaveBeenCalledWith(_redux.actions.problem.updateAnswer({
        id: answer.id,
        hasSingleAnswer,
        unselectedFeedback: e.target.value
      }));
    });
  });
  describe('useFeedback hook', () => {
    beforeEach(() => {
      state.mock();
      windowSpy = jest.spyOn(window, 'window', 'get');
    });
    afterEach(() => {
      state.restore();
      windowSpy.mockRestore();
    });
    test('default state is false', () => {
      output = _module.useFeedback(answerWithOnlyFeedback);
      expect(output.isFeedbackVisible).toBeFalsy();
    });
    test('when useEffect triggers, isFeedbackVisible is set to true', () => {
      const key = state.keys.isFeedbackVisible;
      output = _module.useFeedback(answerWithOnlyFeedback);
      expect(state.setState[key]).not.toHaveBeenCalled();
      const [cb] = _react.useEffect.mock.calls[0];
      cb();
      expect(state.setState[key]).toHaveBeenCalledWith(true);
    });
    test('toggleFeedback with selected feedback', () => {
      const key = state.keys.isFeedbackVisible;
      output = _module.useFeedback(answerWithOnlyFeedback);
      windowSpy.mockImplementation(() => ({
        tinymce: {
          editors: {
            'selectedFeedback-A': {
              getContent: () => 'string'
            }
          }
        }
      }));
      output.toggleFeedback(false);
      expect(state.setState[key]).toHaveBeenCalledWith(true);
    });
    test('toggleFeedback with unselected feedback', () => {
      const key = state.keys.isFeedbackVisible;
      output = _module.useFeedback(answerWithOnlyFeedback);
      windowSpy.mockImplementation(() => ({
        tinymce: {
          editors: {
            'unselectedFeedback-A': {
              getContent: () => 'string'
            }
          }
        }
      }));
      output.toggleFeedback(false);
      expect(state.setState[key]).toHaveBeenCalledWith(true);
    });
    test('toggleFeedback with unselected feedback', () => {
      const key = state.keys.isFeedbackVisible;
      output = _module.useFeedback(answerWithOnlyFeedback);
      windowSpy.mockImplementation(() => ({
        tinymce: {
          editors: {
            'answer-A': {
              getContent: () => 'string'
            }
          }
        }
      }));
      output.toggleFeedback(false);
      expect(state.setState[key]).toHaveBeenCalledWith(false);
    });
  });
  describe('isSingleAnswerProblem()', () => {
    test('singleSelect', () => {
      expect(_module.isSingleAnswerProblem(_problem.ProblemTypeKeys.SINGLESELECT)).toBe(false);
    });
    test('multiSelect', () => {
      expect(_module.isSingleAnswerProblem(_problem.ProblemTypeKeys.MULTISELECT)).toBe(false);
    });
    test('dropdown', () => {
      expect(_module.isSingleAnswerProblem(_problem.ProblemTypeKeys.DROPDOWN)).toBe(true);
    });
  });
});
//# sourceMappingURL=hooks.test.js.map