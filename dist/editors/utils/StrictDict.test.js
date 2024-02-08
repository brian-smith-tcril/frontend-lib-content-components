"use strict";

var _StrictDict = _interopRequireDefault(require("./StrictDict"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const value1 = 'valUE1';
const value2 = 'vALue2';
const key1 = 'Key1';
const key2 = 'keY2';
jest.spyOn(window, 'Error').mockImplementation(error => ({
  stack: error
}));
describe('StrictDict', () => {
  let consoleError;
  let consoleLog;
  let windowError;
  beforeEach(() => {
    consoleError = window.console.error;
    consoleLog = window.console.lot;
    windowError = window.Error;
    window.console.error = jest.fn();
    window.console.log = jest.fn();
    window.Error = jest.fn(error => ({
      stack: error
    }));
  });
  afterAll(() => {
    window.console.error = consoleError;
    window.console.log = consoleLog;
    window.Error = windowError;
  });
  const rawDict = {
    [key1]: value1,
    [key2]: value2
  };
  const dict = (0, _StrictDict.default)(rawDict);
  it('provides key access like a normal dict object', () => {
    expect(dict[key1]).toEqual(value1);
  });
  it('allows key listing', () => {
    expect(Object.keys(dict)).toEqual([key1, key2]);
  });
  it('allows item listing', () => {
    expect(Object.values(dict)).toEqual([value1, value2]);
  });
  it('allows stringification', () => {
    expect(dict.toString()).toEqual(rawDict.toString());
    expect(_objectSpread({}, dict)).toEqual(_objectSpread({}, rawDict));
  });
  it('allows entry listing', () => {
    expect(Object.entries(dict)).toEqual(Object.entries(rawDict));
  });
  describe('missing key', () => {
    it('logs error with target, name, and error stack', () => {
      // eslint-ignore-next-line no-unused-vars
      const callBadKey = () => dict.fakeKey;
      callBadKey();
      expect(window.console.error.mock.calls).toEqual([[{
        target: dict,
        name: 'fakeKey'
      }], [Error('invalid property "fakeKey"').stack]]);
    });
    it('returns undefined', () => {
      expect(dict.fakeKey).toEqual(undefined);
    });
  });
});
//# sourceMappingURL=StrictDict.test.js.map