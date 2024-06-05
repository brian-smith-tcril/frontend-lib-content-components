"use strict";

var _ReactStateSettingsParser = _interopRequireDefault(require("./ReactStateSettingsParser"));
var _problemTestData = require("./mockData/problemTestData");
const _excluded = ["markdown"],
  _excluded2 = ["markdown"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
describe('Test State to Settings Parser', () => {
  test('Test settings parsed from react state', () => {
    const settings = new _ReactStateSettingsParser.default({
      problem: _problemTestData.checklistWithFeebackHints.state
    }).getSettings();
    const _checklistWithFeeback = _problemTestData.checklistWithFeebackHints.metadata,
      {
        markdown
      } = _checklistWithFeeback,
      settingsPayload = _objectWithoutProperties(_checklistWithFeeback, _excluded);
    expect(settings).toStrictEqual(settingsPayload);
  });
  test('Test settings parsed from raw olx', () => {
    const settings = new _ReactStateSettingsParser.default({
      problem: _problemTestData.checklistWithFeebackHints.state,
      rawOLX: '<problem showanswer="always">text</problem>'
    }).parseRawOlxSettings();
    const _checklistWithFeeback2 = _problemTestData.checklistWithFeebackHints.metadata,
      {
        markdown
      } = _checklistWithFeeback2,
      settingsPayload = _objectWithoutProperties(_checklistWithFeeback2, _excluded2);
    expect(settings).toStrictEqual(_objectSpread(_objectSpread({}, settingsPayload), {}, {
      showanswer: 'always'
    }));
  });
});
//# sourceMappingURL=ReactStateSettingsParser.test.js.map