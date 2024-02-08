"use strict";

var _utils = require("../../../utils");
var selectors = _interopRequireWildcard(require("./selectors"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } // import * in order to mock in-file references
jest.mock('reselect', () => ({
  createSelector: jest.fn((preSelectors, cb) => ({
    preSelectors,
    cb
  }))
}));
const testState = {
  some: 'arbitraryValue'
};
const testValue = 'my VALUE';
describe('problem selectors unit tests', () => {
  const {
    problemState,
    simpleSelectors
  } = selectors;
  describe('problemState', () => {
    it('returns the problem data', () => {
      expect(problemState(_objectSpread(_objectSpread({}, testState), {}, {
        problem: testValue
      }))).toEqual(testValue);
    });
  });
  describe('simpleSelectors', () => {
    const testSimpleSelector = key => {
      test(`${key} simpleSelector returns its value from the problem store`, () => {
        const {
          preSelectors,
          cb
        } = simpleSelectors[key];
        expect(preSelectors).toEqual([problemState]);
        expect(cb(_objectSpread(_objectSpread({}, testState), {}, {
          [key]: testValue
        }))).toEqual(testValue);
      });
    };
    const simpleKeys = (0, _utils.keyStore)(simpleSelectors);
    describe('simple selectors link their values from problem store', () => {
      [simpleKeys.problemType, simpleKeys.answers, simpleKeys.correctAnswerCount, simpleKeys.settings, simpleKeys.question, simpleKeys.defaultSettings].map(testSimpleSelector);
    });
    test('simple selector completeState equals the entire state', () => {
      const {
        preSelectors,
        cb
      } = simpleSelectors[simpleKeys.completeState];
      expect(preSelectors).toEqual([problemState]);
      expect(cb(_objectSpread(_objectSpread({}, testState), {}, {
        [simpleKeys.completeState]: testValue
      }))).toEqual(_objectSpread(_objectSpread({}, testState), {}, {
        [simpleKeys.completeState]: testValue
      }));
    });
  });
});
//# sourceMappingURL=selectors.test.js.map