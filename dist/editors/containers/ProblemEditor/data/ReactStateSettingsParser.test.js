"use strict";

var _ReactStateSettingsParser = _interopRequireDefault(require("./ReactStateSettingsParser"));
var _problemTestData = require("./mockData/problemTestData");
const _excluded = ["markdown"],
  _excluded2 = ["markdown"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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