"use strict";

var _react = _interopRequireDefault(require("react"));
var _testUtils = require("../../../../../testUtils");
var _module = _interopRequireWildcard(require("./hooks"));
var _problem = require("../../../../data/constants/problem");
var _OLXParser = require("../../data/OLXParser");
const _excluded = ["settings"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* eslint-disable prefer-destructuring */
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
        setBlockTitle: mocksetBlockTitle
      })();
      const testOlXParser = new _OLXParser.OLXParser(_problem.ProblemTypes[mockSelected].template);
      const _testOlXParser$getPar = testOlXParser.getParsedOLXData(),
        {
          settings
        } = _testOlXParser$getPar,
        testState = _objectWithoutProperties(_testOlXParser$getPar, _excluded);
      expect(mockUpdateField).toHaveBeenCalledWith(_objectSpread(_objectSpread({}, testState), {}, {
        rawOLX: _problem.ProblemTypes[mockSelected].template
      }));
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