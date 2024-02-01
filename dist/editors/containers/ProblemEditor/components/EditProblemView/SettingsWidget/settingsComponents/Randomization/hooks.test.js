"use strict";

var _react = require("react");
var _testUtils = require("../../../../../../../../testUtils");
var hooks = _interopRequireWildcard(require("./hooks"));
var _problem = require("../../../../../../../data/constants/problem");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
  let randomization;
  beforeEach(() => {
    updateSettings = jest.fn();
    randomization = 'sOmE_vAlUe';
    state.mock();
  });
  afterEach(() => {
    state.restore();
    _react.useEffect.mockClear();
  });
  describe('Show advanced settings', () => {
    beforeEach(() => {
      output = hooks.useRandomizationSettingStatus({
        randomization,
        updateSettings
      });
    });
    test('test default state is false', () => {
      expect(output.summary).toEqual({
        message: _problem.RandomizationTypes[_problem.RandomizationTypesKeys.NEVER],
        values: {}
      });
    });
    test('test showAdvancedCards sets state to true', () => {
      const mockEvent = {
        target: {
          value: 'sOmE_otheR_ValUe'
        }
      };
      output.handleChange(mockEvent);
      expect(updateSettings).toHaveBeenCalledWith({
        randomization: mockEvent.target.value
      });
    });
  });
});
//# sourceMappingURL=hooks.test.js.map