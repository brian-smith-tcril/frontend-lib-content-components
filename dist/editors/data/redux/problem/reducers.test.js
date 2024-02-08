"use strict";

var _reducers = require("./reducers");
var _problem = require("../../constants/problem");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const testingState = _objectSpread(_objectSpread({}, _reducers.initialState), {}, {
  arbitraryField: 'arbitrary'
});
describe('problem reducer', () => {
  it('has initial state', () => {
    expect((0, _reducers.reducer)(undefined, {})).toEqual(_reducers.initialState);
  });
  const testValue = 'roll for initiative';
  describe('handling actions', () => {
    const setterTest = (action, target) => {
      describe(action, () => {
        it(`load ${target} from payload`, () => {
          expect((0, _reducers.reducer)(testingState, _reducers.actions[action](testValue))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
            [target]: testValue
          }));
        });
      });
    };
    [['updateQuestion', 'question']].map(args => setterTest(...args));
    describe('setEnableTypeSelection', () => {
      it('sets given problemType to null', () => {
        const payload = {
          maxAttempts: 1,
          showanswer: 'finished',
          showResetButton: false
        };
        expect((0, _reducers.reducer)(testingState, _reducers.actions.setEnableTypeSelection(payload))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          settings: _objectSpread(_objectSpread({}, testingState.settings), {}, {
            scoring: _objectSpread(_objectSpread({}, testingState.settings.scoring), {}, {
              attempts: {
                number: 1,
                unlimited: false
              }
            }),
            showAnswer: _objectSpread(_objectSpread({}, testingState.settings.showAnswer), {}, {
              on: payload.showanswer
            })
          }, payload.showResetButton),
          problemType: null
        }));
      });
    });
    describe('load', () => {
      it('sets answers', () => {
        const answer = {
          id: 'A',
          correct: false,
          selectedFeedback: '',
          title: '',
          isAnswerRange: false,
          unselectedFeedback: ''
        };
        expect((0, _reducers.reducer)(testingState, _reducers.actions.addAnswer(answer))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          answers: [answer]
        }));
      });
    });
    describe('updateField', () => {
      it('sets given parameter', () => {
        const payload = {
          problemType: 'soMePRoblEMtYPe'
        };
        expect((0, _reducers.reducer)(testingState, _reducers.actions.updateField(payload))).toEqual(_objectSpread(_objectSpread({}, testingState), payload));
      });
    });
    describe('updateSettings', () => {
      it('sets given settings parameter', () => {
        const payload = {
          hints: ['soMehInt']
        };
        expect((0, _reducers.reducer)(testingState, _reducers.actions.updateSettings(payload))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          settings: _objectSpread(_objectSpread({}, testingState.settings), payload)
        }));
      });
    });
    describe('addAnswer', () => {
      const answer = {
        id: 'A',
        correct: false,
        selectedFeedback: '',
        title: '',
        isAnswerRange: false,
        unselectedFeedback: ''
      };
      it('sets answers', () => {
        expect((0, _reducers.reducer)(_objectSpread(_objectSpread({}, testingState), {}, {
          problemType: 'choiceresponse'
        }), _reducers.actions.addAnswer())).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          problemType: 'choiceresponse',
          answers: [answer]
        }));
      });
      it('sets answers for numeric input', () => {
        const numericTestState = _objectSpread(_objectSpread({}, testingState), {}, {
          problemType: _problem.ProblemTypeKeys.NUMERIC,
          correctAnswerCount: 0
        });
        expect((0, _reducers.reducer)(numericTestState, _reducers.actions.addAnswer())).toEqual(_objectSpread(_objectSpread({}, numericTestState), {}, {
          correctAnswerCount: 1,
          answers: [_objectSpread(_objectSpread({}, answer), {}, {
            correct: true
          })]
        }));
      });
    });
    describe('addAnswerRange', () => {
      const answerRange = {
        id: 'A',
        correct: true,
        selectedFeedback: '',
        title: '',
        isAnswerRange: true,
        unselectedFeedback: ''
      };
      it('sets answerRange', () => {
        expect((0, _reducers.reducer)(_objectSpread(_objectSpread({}, testingState), {}, {
          problemType: _problem.ProblemTypeKeys.NUMERIC
        }), _reducers.actions.addAnswerRange())).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          correctAnswerCount: 1,
          problemType: _problem.ProblemTypeKeys.NUMERIC,
          answers: [answerRange]
        }));
      });
    });
    describe('updateAnswer', () => {
      it('sets answers, as well as setting the correctAnswerCount ', () => {
        const answer = {
          id: 'A',
          correct: true
        };
        expect((0, _reducers.reducer)(_objectSpread(_objectSpread({}, testingState), {}, {
          answers: [{
            id: 'A',
            correct: false
          }]
        }), _reducers.actions.updateAnswer(answer))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          correctAnswerCount: 1,
          answers: [{
            id: 'A',
            correct: true
          }]
        }));
      });
    });
    describe('deleteAnswer', () => {
      let windowSpy;
      beforeEach(() => {
        windowSpy = jest.spyOn(window, 'window', 'get');
      });
      afterEach(() => {
        windowSpy.mockRestore();
      });
      it('sets a default when deleting the last answer', () => {
        windowSpy.mockImplementation(() => ({
          tinymce: {
            editors: 'mock-editors'
          }
        }));
        const payload = {
          id: 'A',
          correct: false,
          editorState: 'empty'
        };
        expect((0, _reducers.reducer)(_objectSpread(_objectSpread({}, testingState), {}, {
          correctAnswerCount: 0,
          answers: [{
            id: 'A',
            correct: false
          }]
        }), _reducers.actions.deleteAnswer(payload))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          correctAnswerCount: 0,
          answers: [{
            id: 'A',
            title: '',
            selectedFeedback: '',
            unselectedFeedback: '',
            correct: false,
            isAnswerRange: false
          }]
        }));
      });
      it('sets answers and correctAnswerCount', () => {
        windowSpy.mockImplementation(() => ({
          tinymce: {
            editors: 'mock-editors'
          }
        }));
        const payload = {
          id: 'A',
          correct: false,
          editorState: {
            answers: {
              A: 'mockA'
            }
          }
        };
        expect((0, _reducers.reducer)(_objectSpread(_objectSpread({}, testingState), {}, {
          correctAnswerCount: 1,
          answers: [{
            id: 'A',
            correct: false
          }, {
            id: 'B',
            correct: true
          }]
        }), _reducers.actions.deleteAnswer(payload))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          correctAnswerCount: 1,
          answers: [{
            id: 'A',
            correct: true,
            selectedFeedback: '',
            unselectedFeedback: ''
          }]
        }));
      });
      it('sets answers and correctAnswerCount with editorState for RichTextProblems', () => {
        const setContent = jest.fn();
        windowSpy.mockImplementation(() => ({
          tinymce: {
            editors: {
              'answer-A': {
                setContent
              },
              'answer-B': {
                setContent
              }
            }
          }
        }));
        const payload = {
          id: 'A',
          correct: false,
          editorState: {
            answers: {
              A: 'editorAnsA',
              B: 'editorAnsB'
            }
          }
        };
        expect((0, _reducers.reducer)(_objectSpread(_objectSpread({}, testingState), {}, {
          problemType: _problem.ProblemTypeKeys.SINGLESELECT,
          correctAnswerCount: 1,
          answers: [{
            id: 'A',
            correct: false
          }, {
            id: 'B',
            correct: true
          }]
        }), _reducers.actions.deleteAnswer(payload))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          problemType: _problem.ProblemTypeKeys.SINGLESELECT,
          correctAnswerCount: 1,
          answers: [{
            id: 'A',
            correct: true,
            title: 'editorAnsB',
            selectedFeedback: '',
            unselectedFeedback: ''
          }]
        }));
      });
      it('sets selectedFeedback and unselectedFeedback with editorState', () => {
        windowSpy.mockImplementation(() => ({
          tinymce: {
            editors: {
              'answer-A': 'mockEditor',
              'answer-B': 'mockEditor'
            }
          }
        }));
        const payload = {
          id: 'A',
          correct: false,
          editorState: {
            answers: {
              A: 'editorAnsA',
              B: 'editorAnsB'
            },
            selectedFeedback: {
              A: 'editSelFA',
              B: 'editSelFB'
            },
            unselectedFeedback: {
              A: 'editUnselFA',
              B: 'editUnselFB'
            }
          }
        };
        expect((0, _reducers.reducer)(_objectSpread(_objectSpread({}, testingState), {}, {
          correctAnswerCount: 1,
          answers: [{
            id: 'A',
            correct: false
          }, {
            id: 'B',
            correct: true
          }]
        }), _reducers.actions.deleteAnswer(payload))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          correctAnswerCount: 1,
          answers: [{
            id: 'A',
            correct: true,
            selectedFeedback: 'editSelFB',
            unselectedFeedback: 'editUnselFB'
          }]
        }));
      });
      it('calls editor setContent to set answer and feedback fields', () => {
        const setContent = jest.fn();
        windowSpy.mockImplementation(() => ({
          tinymce: {
            editors: {
              'answer-A': {
                setContent
              },
              'answer-B': {
                setContent
              },
              'selectedFeedback-A': {
                setContent
              },
              'selectedFeedback-B': {
                setContent
              },
              'unselectedFeedback-A': {
                setContent
              },
              'unselectedFeedback-B': {
                setContent
              }
            }
          }
        }));
        const payload = {
          id: 'A',
          correct: false,
          editorState: {
            answers: {
              A: 'editorAnsA',
              B: 'editorAnsB'
            },
            selectedFeedback: {
              A: 'editSelFA',
              B: 'editSelFB'
            },
            unselectedFeedback: {
              A: 'editUnselFA',
              B: 'editUnselFB'
            }
          }
        };
        (0, _reducers.reducer)(_objectSpread(_objectSpread({}, testingState), {}, {
          problemType: _problem.ProblemTypeKeys.SINGLESELECT,
          correctAnswerCount: 1,
          answers: [{
            id: 'A',
            correct: false
          }, {
            id: 'B',
            correct: true
          }]
        }), _reducers.actions.deleteAnswer(payload));
        expect(window.tinymce.editors['answer-A'].setContent).toHaveBeenCalled();
        expect(window.tinymce.editors['answer-A'].setContent).toHaveBeenCalledWith('editorAnsB');
        expect(window.tinymce.editors['selectedFeedback-A'].setContent).toHaveBeenCalledWith('editSelFB');
        expect(window.tinymce.editors['unselectedFeedback-A'].setContent).toHaveBeenCalledWith('editUnselFB');
      });
      it('sets groupFeedbackList by removing the checked item in the groupFeedback', () => {
        windowSpy.mockImplementation(() => ({
          tinymce: {
            editors: 'mock-editors'
          }
        }));
        const payload = {
          id: 'A',
          correct: false,
          editorState: {
            answer: {
              A: 'aNSwERA',
              B: 'anSWeRB'
            }
          }
        };
        expect((0, _reducers.reducer)(_objectSpread(_objectSpread({}, testingState), {}, {
          correctAnswerCount: 1,
          answers: [{
            id: 'A',
            correct: false
          }, {
            id: 'B',
            correct: true
          }, {
            id: 'C',
            correct: false
          }],
          groupFeedbackList: [{
            id: 0,
            answers: ['A', 'C'],
            feedback: 'fake feedback'
          }]
        }), _reducers.actions.deleteAnswer(payload))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          correctAnswerCount: 1,
          answers: [{
            id: 'A',
            correct: true,
            selectedFeedback: '',
            unselectedFeedback: ''
          }, {
            id: 'B',
            correct: false,
            selectedFeedback: '',
            unselectedFeedback: ''
          }],
          groupFeedbackList: [{
            id: 0,
            answers: ['B'],
            feedback: 'fake feedback'
          }]
        }));
      });
      it('if you delete an answer range, it will be replaced with a blank answer', () => {
        windowSpy.mockImplementation(() => ({
          tinymce: {
            editors: 'mock-editors'
          }
        }));
        const payload = {
          id: 'A',
          correct: true,
          editorState: 'mockEditoRStAte'
        };
        expect((0, _reducers.reducer)(_objectSpread(_objectSpread({}, testingState), {}, {
          problemType: _problem.ProblemTypeKeys.NUMERIC,
          correctAnswerCount: 1,
          answers: [{
            id: 'A',
            correct: false,
            selectedFeedback: '',
            title: '',
            isAnswerRange: true,
            unselectedFeedback: ''
          }]
        }), _reducers.actions.deleteAnswer(payload))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          problemType: _problem.ProblemTypeKeys.NUMERIC,
          correctAnswerCount: 1,
          answers: [{
            id: 'A',
            title: '',
            selectedFeedback: '',
            unselectedFeedback: '',
            correct: true,
            isAnswerRange: false
          }]
        }));
      });
    });
  });
});
//# sourceMappingURL=reducers.test.js.map