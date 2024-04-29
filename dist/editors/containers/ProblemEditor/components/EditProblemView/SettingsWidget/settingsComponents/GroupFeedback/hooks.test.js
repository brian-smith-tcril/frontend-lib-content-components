"use strict";

var _react = require("react");
var _testUtils = require("../../../../../../../../testUtils");
var _messages = _interopRequireDefault(require("./messages"));
var hooks = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
jest.mock('react', () => {
  const updateState = jest.fn();
  return {
    updateState,
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
const state = new _testUtils.MockUseState(hooks);
describe('groupFeedbackCardHooks', () => {
  let output;
  let updateSettings;
  let groupFeedbacks;
  beforeEach(() => {
    updateSettings = jest.fn();
    groupFeedbacks = [];
    state.mock();
  });
  afterEach(() => {
    state.restore();
    _react.useEffect.mockClear();
  });
  describe('Show advanced settings', () => {
    beforeEach(() => {
      output = hooks.groupFeedbackCardHooks(groupFeedbacks, updateSettings);
    });
    test('test default state is false', () => {
      expect(output.summary.message).toEqual(_messages.default.noGroupFeedbackSummary);
    });
    test('test Event adds a new feedback ', () => {
      output.handleAdd();
      expect(updateSettings).toHaveBeenCalledWith({
        groupFeedbackList: [{
          id: 0,
          answers: [],
          feedback: ''
        }]
      });
    });
  });
});
describe('groupFeedbackRowHooks', () => {
  const mockId = 'iD';
  const mockAnswer = 'moCkAnsweR';
  const mockFeedback = 'mOckFEEdback';
  let groupFeedbacks;
  let output;
  let updateSettings;
  beforeEach(() => {
    updateSettings = jest.fn();
    groupFeedbacks = [{
      id: mockId,
      answers: [mockAnswer],
      feedback: mockFeedback
    }];
    state.mock();
  });
  afterEach(() => {
    state.restore();
    _react.useEffect.mockClear();
  });
  describe('Show advanced settings', () => {
    beforeEach(() => {
      output = hooks.groupFeedbackRowHooks({
        id: mockId,
        groupFeedbacks,
        updateSettings
      });
    });
    test('test associate an answer with the feedback object', () => {
      const mockNewAnswer = 'nEw VAluE';
      output.handleAnswersSelectedChange({
        target: {
          checked: true,
          value: mockNewAnswer
        }
      });
      expect(updateSettings).toHaveBeenCalledWith({
        groupFeedbackList: [{
          id: mockId,
          answers: [mockAnswer, mockNewAnswer],
          feedback: mockFeedback
        }]
      });
    });
    test('test unassociate an answer with the feedback object', () => {
      output.handleAnswersSelectedChange({
        target: {
          checked: false,
          value: mockAnswer
        }
      });
      expect(updateSettings).toHaveBeenCalledWith({
        groupFeedbackList: [{
          id: mockId,
          answers: [],
          feedback: mockFeedback
        }]
      });
    });
    test('test update feedback text with a groupfeedback', () => {
      const mockNewFeedback = 'nEw fEedBack';
      output.handleFeedbackChange({
        target: {
          checked: false,
          value: mockNewFeedback
        }
      });
      expect(updateSettings).toHaveBeenCalledWith({
        groupFeedbackList: [{
          id: mockId,
          answers: [mockAnswer],
          feedback: mockNewFeedback
        }]
      });
    });
    test('Delete a Row from the list of feedbacks', () => {
      output.handleDelete();
      expect(updateSettings).toHaveBeenCalledWith({
        groupFeedbackList: []
      });
    });
  });
});
//# sourceMappingURL=hooks.test.js.map