"use strict";

var _StrictDict = _interopRequireDefault(require("./StrictDict"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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