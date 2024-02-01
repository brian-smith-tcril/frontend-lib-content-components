"use strict";

var _problem = require("../../../../data/constants/problem");
var hooks = _interopRequireWildcard(require("./hooks"));
var _testUtils = require("../../../../../testUtils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const mockRawOLX = '<problem>rawOLX</problem>';
const mockBuiltOLX = 'builtOLX';
const mockGetSettings = {
  max_attempts: 1,
  weight: 2,
  showanswer: 'finished',
  show_reset_button: false,
  rerandomize: 'never'
};
const mockParseRawOlxSettingsDiscrepancy = {
  max_attempts: 1,
  weight: 2,
  showanswer: 'finished',
  show_reset_button: true,
  rerandomize: 'never'
};
const mockParseRawOlxSettings = {
  max_attempts: 1,
  weight: 2,
  showanswer: 'finished',
  show_reset_button: false,
  rerandomize: 'never'
};
const problemState = {
  problemType: _problem.ProblemTypeKeys.ADVANCED,
  settings: {
    randomization: null,
    scoring: {
      weight: 1,
      attempts: {
        unlimited: true,
        number: ''
      }
    },
    timeBetween: 0,
    showAnswer: {
      on: 'finished',
      afterAttempts: 0
    },
    showResetButton: false,
    solutionExplanation: ''
  }
};
const toStringMock = () => mockRawOLX;
const refMock = {
  current: {
    state: {
      doc: {
        toString: toStringMock
      }
    }
  }
};
jest.mock('../../data/ReactStateOLXParser', () => jest.fn().mockImplementation(() => ({
  buildOLX: () => mockBuiltOLX
})));
const hookState = new _testUtils.MockUseState(hooks);
describe('saveWarningModalToggle', () => {
  const hookKey = hookState.keys.isSaveWarningModalOpen;
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('state hook', () => {
    hookState.testGetter(hookKey);
  });
  describe('using state', () => {
    beforeEach(() => {
      hookState.mock();
    });
    afterEach(() => {
      hookState.restore();
    });
    describe('saveWarningModalToggle', () => {
      let hook;
      beforeEach(() => {
        hook = hooks.saveWarningModalToggle();
      });
      test('isSaveWarningModalOpen: state value', () => {
        expect(hook.isSaveWarningModalOpen).toEqual(hookState.stateVals[hookKey]);
      });
      test('openSaveWarningModal: calls setter with true', () => {
        hook.openSaveWarningModal();
        expect(hookState.setState[hookKey]).toHaveBeenCalledWith(true);
      });
      test('closeSaveWarningModal: calls setter with false', () => {
        hook.closeSaveWarningModal();
        expect(hookState.setState[hookKey]).toHaveBeenCalledWith(false);
      });
    });
  });
});
describe('EditProblemView hooks parseState', () => {
  describe('fetchEditorContent', () => {
    const getContent = () => '<p>testString</p>';
    test('returns answers', () => {
      window.tinymce.editors = {
        'answer-A': {
          getContent
        }
      };
      const editorObject = hooks.fetchEditorContent({
        format: ''
      });
      expect(editorObject).toEqual({
        answers: {
          A: '<p>testString</p>'
        },
        hints: []
      });
    });
    test('returns hints', () => {
      window.tinymce.editors = {
        'hint-0': {
          getContent
        }
      };
      const editorObject = hooks.fetchEditorContent({
        format: ''
      });
      expect(editorObject).toEqual({
        hints: ['<p>testString</p>']
      });
    });
    test('returns question', () => {
      window.tinymce.editors = {
        question: {
          getContent
        }
      };
      const editorObject = hooks.fetchEditorContent({
        format: ''
      });
      expect(editorObject).toEqual({
        question: '<p>testString</p>',
        hints: []
      });
    });
    test('returns selectedFeedback', () => {
      window.tinymce.editors = {
        'selectedFeedback-A': {
          getContent
        }
      };
      const editorObject = hooks.fetchEditorContent({
        format: ''
      });
      expect(editorObject).toEqual({
        selectedFeedback: {
          A: '<p>testString</p>'
        },
        hints: []
      });
    });
    test('returns unselectedFeedback', () => {
      window.tinymce.editors = {
        'unselectedFeedback-A': {
          getContent
        }
      };
      const editorObject = hooks.fetchEditorContent({
        format: ''
      });
      expect(editorObject).toEqual({
        unselectedFeedback: {
          A: '<p>testString</p>'
        },
        hints: []
      });
    });
    test('returns groupFeedback', () => {
      window.tinymce.editors = {
        'groupFeedback-0': {
          getContent
        }
      };
      const editorObject = hooks.fetchEditorContent({
        format: ''
      });
      expect(editorObject).toEqual({
        groupFeedback: {
          0: '<p>testString</p>'
        },
        hints: []
      });
    });
    test('returns groupFeedback', () => {
      window.tinymce.editors = {};
      const editorObject = hooks.fetchEditorContent({
        format: ''
      });
      expect(editorObject).toEqual({
        hints: []
      });
    });
  });
  describe('parseState', () => {
    jest.mock('../../data/ReactStateSettingsParser', () => jest.fn().mockImplementationOnce(() => ({
      getSettings: () => mockGetSettings,
      parseRawOlxSettings: () => mockParseRawOlxSettings
    })));
    it('default problem', () => {
      const res = hooks.parseState({
        problem: problemState,
        isAdvanced: false,
        ref: refMock,
        assets: {}
      })();
      expect(res.olx).toBe(mockBuiltOLX);
    });
    it('advanced problem', () => {
      const res = hooks.parseState({
        problem: problemState,
        isAdvanced: true,
        ref: refMock,
        assets: {}
      })();
      expect(res.olx).toBe(mockRawOLX);
    });
  });
  describe('checkNoAnswers', () => {
    const openSaveWarningModal = jest.fn();
    describe('hasTitle', () => {
      const problem = {
        problemType: _problem.ProblemTypeKeys.NUMERIC
      };
      beforeEach(() => {
        jest.clearAllMocks();
      });
      it('should call openSaveWarningModal for numerical problem with empty title', () => {
        const expected = hooks.checkForNoAnswers({
          openSaveWarningModal,
          problem: _objectSpread(_objectSpread({}, problem), {}, {
            answers: [{
              id: 'A',
              title: '',
              correct: true
            }]
          })
        });
        expect(openSaveWarningModal).toHaveBeenCalled();
        expect(expected).toEqual(true);
      });
      it('returns false for numerical problem with title', () => {
        const expected = hooks.checkForNoAnswers({
          openSaveWarningModal,
          problem: _objectSpread(_objectSpread({}, problem), {}, {
            answers: [{
              id: 'A',
              title: 'sOmevALUe',
              correct: true
            }]
          })
        });
        expect(openSaveWarningModal).not.toHaveBeenCalled();
        expect(expected).toEqual(false);
      });
    });
    describe('hasCorrectAnswer', () => {
      const problem = {
        problemType: _problem.ProblemTypeKeys.SINGLESELECT
      };
      beforeEach(() => {
        jest.clearAllMocks();
      });
      it('should call openSaveWarningModal for single select problem with empty title', () => {
        window.tinymce.editors = {
          'answer-A': {
            getContent: () => ''
          },
          'answer-B': {
            getContent: () => 'sOmevALUe'
          }
        };
        const expected = hooks.checkForNoAnswers({
          openSaveWarningModal,
          problem: _objectSpread(_objectSpread({}, problem), {}, {
            answers: [{
              id: 'A',
              title: '',
              correct: true
            }, {
              id: 'B',
              title: 'sOmevALUe',
              correct: false
            }]
          })
        });
        expect(openSaveWarningModal).toHaveBeenCalled();
        expect(expected).toEqual(true);
      });
      it('returns true for single select with title but no correct answer', () => {
        window.tinymce.editors = {
          'answer-A': {
            getContent: () => 'sOmevALUe'
          }
        };
        const expected = hooks.checkForNoAnswers({
          openSaveWarningModal,
          problem: _objectSpread(_objectSpread({}, problem), {}, {
            answers: [{
              id: 'A',
              title: 'sOmevALUe',
              correct: false
            }, {
              id: 'B',
              title: '',
              correct: false
            }]
          })
        });
        expect(openSaveWarningModal).toHaveBeenCalled();
        expect(expected).toEqual(true);
      });
      it('returns true for single select with title and correct answer', () => {
        window.tinymce.editors = {
          'answer-A': {
            getContent: () => 'sOmevALUe'
          }
        };
        const expected = hooks.checkForNoAnswers({
          openSaveWarningModal,
          problem: _objectSpread(_objectSpread({}, problem), {}, {
            answers: [{
              id: 'A',
              title: 'sOmevALUe',
              correct: true
            }]
          })
        });
        expect(openSaveWarningModal).not.toHaveBeenCalled();
        expect(expected).toEqual(false);
      });
    });
  });
  describe('checkForSettingDiscrepancy', () => {
    const openSaveWarningModal = jest.fn();
    const problem = problemState;
    beforeEach(() => {
      jest.clearAllMocks();
    });
    it('returns true for setting discrepancies', () => {
      jest.mock('../../data/ReactStateSettingsParser', () => jest.fn().mockImplementationOnce(() => ({
        getSettings: () => mockGetSettings,
        parseRawOlxSettings: () => mockParseRawOlxSettingsDiscrepancy
      })));
      const mockRawOLXWithSettings = '<problem show_reset_button="true">rawOLX</problem>';
      const refMockWithSettings = {
        current: {
          state: {
            doc: {
              toString: () => mockRawOLXWithSettings
            }
          }
        }
      };
      const expected = hooks.checkForSettingDiscrepancy({
        openSaveWarningModal,
        problem,
        ref: refMockWithSettings
      });
      expect(openSaveWarningModal).toHaveBeenCalled();
      expect(expected).toEqual(true);
    });
    it('returns false when there are no setting discrepancies', () => {
      jest.mock('../../data/ReactStateSettingsParser', () => jest.fn().mockImplementationOnce(() => ({
        getSettings: () => mockGetSettings,
        parseRawOlxSettings: () => mockParseRawOlxSettings
      })));
      const expected = hooks.checkForSettingDiscrepancy({
        openSaveWarningModal,
        problem,
        ref: refMock
      });
      expect(openSaveWarningModal).not.toHaveBeenCalled();
      expect(expected).toEqual(false);
    });
  });
  describe('getContent', () => {
    const assets = {};
    const lmsEndpointUrl = 'someUrl';
    const editorRef = refMock;
    const expectedSettings = {
      max_attempts: '',
      weight: 1,
      showanswer: 'finished',
      show_reset_button: false,
      submission_wait_seconds: 0,
      attempts_before_showanswer_button: 0
    };
    const openSaveWarningModal = jest.fn();
    it('default visual save and returns parseState data', () => {
      const problem = _objectSpread(_objectSpread({}, problemState), {}, {
        problemType: _problem.ProblemTypeKeys.NUMERIC,
        answers: [{
          id: 'A',
          title: 'problem',
          correct: true
        }]
      });
      const content = hooks.getContent({
        isAdvancedProblemType: false,
        problemState: problem,
        editorRef,
        assets,
        lmsEndpointUrl,
        openSaveWarningModal
      });
      expect(content).toEqual({
        olx: 'builtOLX',
        settings: expectedSettings
      });
    });
    it('default advanced save and returns parseState data', () => {
      const content = hooks.getContent({
        isAdvancedProblemType: true,
        problemState,
        editorRef,
        assets,
        lmsEndpointUrl,
        openSaveWarningModal
      });
      expect(content).toEqual({
        olx: '<problem>rawOLX</problem>',
        settings: expectedSettings
      });
    });
    it('should return null', () => {
      const problem = _objectSpread(_objectSpread({}, problemState), {}, {
        problemType: _problem.ProblemTypeKeys.NUMERIC,
        answers: [{
          id: 'A',
          title: '',
          correct: true
        }]
      });
      const content = hooks.getContent({
        isAdvancedProblemType: false,
        problemState: problem,
        editorRef,
        assets,
        lmsEndpointUrl,
        openSaveWarningModal
      });
      expect(openSaveWarningModal).toHaveBeenCalled();
      expect(content).toEqual(null);
    });
  });
});
//# sourceMappingURL=hooks.test.js.map