"use strict";

var _react = require("react");
var _testUtils = require("../../../../../../../../testUtils");
var _messages = _interopRequireDefault(require("./messages"));
var hooks = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
describe('Problem settings hooks', () => {
  let output;
  let updateSettings;
  let generalFeedback;
  beforeEach(() => {
    updateSettings = jest.fn();
    generalFeedback = 'sOmE_vAlUe';
    state.mock();
  });
  afterEach(() => {
    state.restore();
    _react.useEffect.mockClear();
  });
  describe('Show advanced settings', () => {
    beforeEach(() => {
      output = hooks.generalFeedbackHooks(generalFeedback, updateSettings);
    });
    test('test default state is false', () => {
      expect(output.summary.message).toEqual(_messages.default.noGeneralFeedbackSummary);
    });
    test('test showAdvancedCards sets state to true', () => {
      const mockEvent = {
        target: {
          value: 'sOmE_otheR_ValUe'
        }
      };
      output.handleChange(mockEvent);
      expect(updateSettings).toHaveBeenCalledWith({
        generalFeedback: mockEvent.target.value
      });
    });
  });
});
//# sourceMappingURL=hooks.test.js.map