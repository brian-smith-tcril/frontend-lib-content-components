"use strict";

var _react = _interopRequireDefault(require("react"));
var _testUtils = require("../../../../../testUtils");
var _module = _interopRequireWildcard(require("./hooks"));
var _problem = require("../../../../data/constants/problem");
var _problem2 = require("../../../../data/redux/thunkActions/problem");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* eslint-disable prefer-destructuring */
jest.mock('react', () => _objectSpread(_objectSpread({}, jest.requireActual('react')), {}, {
  useState: val => ({
    useState: val
  }),
  useEffect: jest.fn()
}));
const state = new _testUtils.MockUseState(_module);
const mockUpdateField = jest.fn().mockName('updateField');
const mockSelected = 'multiplechoiceresponse';
const mockAdvancedSelected = 'circuitschematic';
const mockSetSelected = jest.fn().mockName('setSelected');
const mocksetBlockTitle = jest.fn().mockName('setBlockTitle');
const mockDefaultSettings = {
  max_attempts: null,
  rerandomize: 'never',
  showR_reset_button: false,
  showanswer: 'always'
};
let hook;
describe('SelectTypeModal hooks', () => {
  beforeEach(() => {
    state.mock();
  });
  afterEach(() => {
    state.restore();
    jest.clearAllMocks();
  });
  describe('selectHooks', () => {
    beforeEach(() => {
      hook = _module.selectHooks();
    });
    test('selected defaults to SINGLESELECT', () => {
      expect(hook.selected).toEqual(_problem.ProblemTypeKeys.SINGLESELECT);
    });
    test('setSelected sets state as expected', () => {
      const expectedArg = 'neWvAl';
      state.mockVal(state.keys.selected, 'mOcKvAl');
      hook.setSelected(expectedArg);
      expect(state.setState.selected).toHaveBeenCalledWith(expectedArg);
    });
  });
  describe('onSelect', () => {
    test('updateField is called with selected templated if selected is an Advanced Problem', () => {
      _module.onSelect({
        selected: mockAdvancedSelected,
        updateField: mockUpdateField,
        setBlockTitle: mocksetBlockTitle
      })();
      expect(mockUpdateField).toHaveBeenCalledWith({
        problemType: _problem.ProblemTypeKeys.ADVANCED,
        rawOLX: _problem.AdvanceProblems[mockAdvancedSelected].template
      });
      expect(mocksetBlockTitle).toHaveBeenCalledWith(_problem.AdvanceProblems[mockAdvancedSelected].title);
    });
    test('updateField is called with selected on visual propblems', () => {
      _module.onSelect({
        selected: mockSelected,
        updateField: mockUpdateField,
        setBlockTitle: mocksetBlockTitle,
        defaultSettings: mockDefaultSettings
      })();
      // const testOlXParser = new OLXParser(ProblemTypes[mockSelected].template);
      const testState = (0, _problem2.getDataFromOlx)({
        rawOLX: _problem.ProblemTypes[mockSelected].template,
        rawSettings: {
          weight: 1,
          attempts_before_showanswer_button: 0,
          show_reset_button: null,
          showanswer: null
        },
        defaultSettings: mockDefaultSettings
      });
      expect(mockUpdateField).toHaveBeenCalledWith(testState);
      expect(mocksetBlockTitle).toHaveBeenCalledWith(_problem.ProblemTypes[mockSelected].title);
    });
  });
  describe('useArrowNav', () => {
    document.body.innerHTML = `
      <div id="multiplechoiceresponse" />
      <div id="choiceresponse" />
      <div id="optionresponse" />
      <div id="numericalresponse" />
      <div id="stringresponse" />
    `;
    const mockKeyUp = new KeyboardEvent('keydown', {
      key: 'ArrowUp'
    });
    const mockKeyDown = new KeyboardEvent('keydown', {
      key: 'ArrowDown'
    });
    let cb;
    let prereqs;
    describe('SINGLESELECT', () => {
      beforeEach(() => {
        _module.useArrowNav(_problem.ProblemTypeKeys.SINGLESELECT, mockSetSelected);
        [cb, prereqs] = _react.default.useEffect.mock.calls[0];
        cb();
      });
      test('pressing up arrow sets MULTISELECT', () => {
        expect(_react.default.useEffect.mock.calls.length).toEqual(1);
        expect(prereqs).toStrictEqual([_problem.ProblemTypeKeys.SINGLESELECT, mockSetSelected]);
        document.dispatchEvent(mockKeyUp);
        expect(mockSetSelected).toHaveBeenCalledWith(_problem.ProblemTypeKeys.TEXTINPUT);
      });
      test('pressing down arrow sets MULTISELECT', () => {
        expect(_react.default.useEffect.mock.calls.length).toEqual(1);
        expect(prereqs).toStrictEqual([_problem.ProblemTypeKeys.SINGLESELECT, mockSetSelected]);
        document.dispatchEvent(mockKeyDown);
        expect(mockSetSelected).toHaveBeenCalledWith(_problem.ProblemTypeKeys.MULTISELECT);
      });
    });
    describe('MULTISELECT', () => {
      beforeEach(() => {
        _module.useArrowNav(_problem.ProblemTypeKeys.MULTISELECT, mockSetSelected);
        [cb, prereqs] = _react.default.useEffect.mock.calls[0];
        cb();
      });
      test('pressing up arrow sets SINGLESELECT', () => {
        expect(_react.default.useEffect.mock.calls.length).toEqual(1);
        expect(prereqs).toStrictEqual([_problem.ProblemTypeKeys.MULTISELECT, mockSetSelected]);
        document.dispatchEvent(mockKeyUp);
        expect(mockSetSelected).toHaveBeenCalledWith(_problem.ProblemTypeKeys.SINGLESELECT);
      });
      test('pressing down arrow sets DROPDOWN', () => {
        expect(_react.default.useEffect.mock.calls.length).toEqual(1);
        expect(prereqs).toStrictEqual([_problem.ProblemTypeKeys.MULTISELECT, mockSetSelected]);
        document.dispatchEvent(mockKeyDown);
        expect(mockSetSelected).toHaveBeenCalledWith(_problem.ProblemTypeKeys.DROPDOWN);
      });
    });
    describe('DROPDOWN', () => {
      beforeEach(() => {
        _module.useArrowNav(_problem.ProblemTypeKeys.DROPDOWN, mockSetSelected);
        [cb, prereqs] = _react.default.useEffect.mock.calls[0];
        cb();
      });
      test('pressing up arrow sets MULTISELECT', () => {
        expect(_react.default.useEffect.mock.calls.length).toEqual(1);
        expect(prereqs).toStrictEqual([_problem.ProblemTypeKeys.DROPDOWN, mockSetSelected]);
        document.dispatchEvent(mockKeyUp);
        expect(mockSetSelected).toHaveBeenCalledWith(_problem.ProblemTypeKeys.MULTISELECT);
      });
      test('pressing down arrow sets NUMERIC', () => {
        expect(_react.default.useEffect.mock.calls.length).toEqual(1);
        expect(prereqs).toStrictEqual([_problem.ProblemTypeKeys.DROPDOWN, mockSetSelected]);
        document.dispatchEvent(mockKeyDown);
        expect(mockSetSelected).toHaveBeenCalledWith(_problem.ProblemTypeKeys.NUMERIC);
      });
    });
    describe('NUMERIC', () => {
      beforeEach(() => {
        _module.useArrowNav(_problem.ProblemTypeKeys.NUMERIC, mockSetSelected);
        [cb, prereqs] = _react.default.useEffect.mock.calls[0];
        cb();
      });
      test('pressing up arrow sets DROPDOWN', () => {
        expect(_react.default.useEffect.mock.calls.length).toEqual(1);
        expect(prereqs).toStrictEqual([_problem.ProblemTypeKeys.NUMERIC, mockSetSelected]);
        document.dispatchEvent(mockKeyUp);
        expect(mockSetSelected).toHaveBeenCalledWith(_problem.ProblemTypeKeys.DROPDOWN);
      });
      test('pressing down arrow sets TEXTINPUT', () => {
        expect(_react.default.useEffect.mock.calls.length).toEqual(1);
        expect(prereqs).toStrictEqual([_problem.ProblemTypeKeys.NUMERIC, mockSetSelected]);
        document.dispatchEvent(mockKeyDown);
        expect(mockSetSelected).toHaveBeenCalledWith(_problem.ProblemTypeKeys.TEXTINPUT);
      });
    });
    describe('TEXTINPUT', () => {
      beforeEach(() => {
        _module.useArrowNav(_problem.ProblemTypeKeys.TEXTINPUT, mockSetSelected);
        [cb, prereqs] = _react.default.useEffect.mock.calls[0];
        cb();
      });
      test('pressing up arrow sets NUMERIC', () => {
        expect(_react.default.useEffect.mock.calls.length).toEqual(1);
        expect(prereqs).toStrictEqual([_problem.ProblemTypeKeys.TEXTINPUT, mockSetSelected]);
        document.dispatchEvent(mockKeyUp);
        expect(mockSetSelected).toHaveBeenCalledWith(_problem.ProblemTypeKeys.NUMERIC);
      });
      test('pressing down arrow sets SINGLESELECT', () => {
        expect(_react.default.useEffect.mock.calls.length).toEqual(1);
        expect(prereqs).toStrictEqual([_problem.ProblemTypeKeys.TEXTINPUT, mockSetSelected]);
        document.dispatchEvent(mockKeyDown);
        expect(mockSetSelected).toHaveBeenCalledWith(_problem.ProblemTypeKeys.SINGLESELECT);
      });
    });
  });
});
//# sourceMappingURL=hooks.test.js.map