"use strict";

var _react = require("react");
var _reactRedux = require("react-redux");
var _redux = require("../../../../../data/redux");
var _testUtils = require("../../../../../../testUtils");
var _problem = require("../../../../../data/constants/problem");
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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