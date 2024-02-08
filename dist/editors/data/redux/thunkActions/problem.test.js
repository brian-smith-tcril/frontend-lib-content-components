"use strict";

var _ = require("..");
var _module = _interopRequireWildcard(require("./problem"));
var _olxTestData = require("../../../containers/ProblemEditor/data/mockData/olxTestData");
var _problem2 = require("../../constants/problem");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const mockOlx = 'SOmEVALue';
const mockBuildOlx = jest.fn(() => mockOlx);
jest.mock('../../../containers/ProblemEditor/data/ReactStateOLXParser', () => jest.fn().mockImplementation(() => ({
  buildOLX: mockBuildOlx
})));
jest.mock('..', () => ({
  actions: {
    problem: {
      load: () => {},
      setEnableTypeSelection: () => {},
      updateField: args => args
    }
  }
}));
jest.mock('./requests', () => ({
  fetchAdvancedSettings: args => ({
    fetchAdvanceSettings: args
  })
}));
const blockValue = {
  data: {
    data: _olxTestData.checkboxesOLXWithFeedbackAndHintsOLX.rawOLX,
    metadata: {}
  }
};
let rawOLX = blockValue.data.data;
const rawSettings = {};
const defaultSettings = {
  max_attempts: 1
};
describe('problem thunkActions', () => {
  let dispatch;
  let getState;
  let dispatchedAction;
  beforeEach(() => {
    dispatch = jest.fn(action => ({
      dispatch: action
    }));
    getState = jest.fn(() => ({
      problem: {}
    }));
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('initializeProblem visual Problem :', () => {
    _module.initializeProblem(blockValue)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
  test('switchToAdvancedEditor visual Problem', () => {
    _module.switchToAdvancedEditor()(dispatch, getState);
    expect(dispatch).toHaveBeenCalledWith(_.actions.problem.updateField({
      problemType: _problem2.ProblemTypeKeys.ADVANCED,
      rawOLX: mockOlx
    }));
  });
  describe('fetchAdvanceSettings', () => {
    it('dispatches fetchAdvanceSettings action', () => {
      _module.fetchAdvancedSettings({
        rawOLX,
        rawSettings
      })(dispatch);
      [[dispatchedAction]] = dispatch.mock.calls;
      expect(dispatchedAction.fetchAdvanceSettings).not.toEqual(undefined);
    });
    it('dispatches actions.problem.updateField and loadProblem on success', () => {
      dispatch.mockClear();
      _module.fetchAdvancedSettings({
        rawOLX,
        rawSettings
      })(dispatch);
      [[dispatchedAction]] = dispatch.mock.calls;
      dispatchedAction.fetchAdvanceSettings.onSuccess({
        data: {
          key: 'test',
          max_attempts: 1
        }
      });
      expect(dispatch).toHaveBeenCalledWith(_.actions.problem.load());
    });
    it('calls loadProblem on failure', () => {
      dispatch.mockClear();
      _module.fetchAdvancedSettings({
        rawOLX,
        rawSettings
      })(dispatch);
      [[dispatchedAction]] = dispatch.mock.calls;
      dispatchedAction.fetchAdvanceSettings.onFailure();
      expect(dispatch).toHaveBeenCalledWith(_.actions.problem.load());
    });
  });
  describe('loadProblem', () => {
    test('initializeProblem advanced Problem', () => {
      rawOLX = _olxTestData.advancedProblemOlX.rawOLX;
      _module.loadProblem({
        rawOLX,
        rawSettings,
        defaultSettings
      })(dispatch);
      expect(dispatch).toHaveBeenCalledWith(_.actions.problem.load());
    });
    test('initializeProblem blank Problem', () => {
      rawOLX = _olxTestData.blankProblemOLX.rawOLX;
      _module.loadProblem({
        rawOLX,
        rawSettings,
        defaultSettings
      })(dispatch);
      expect(dispatch).toHaveBeenCalledWith(_.actions.problem.setEnableTypeSelection());
    });
  });
});
//# sourceMappingURL=problem.test.js.map