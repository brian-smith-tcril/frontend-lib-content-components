"use strict";

var _reactRedux = require("react-redux");
var _redux = require("../../data/redux");
var _testUtils = require("../../../testUtils");
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
jest.mock('react', () => _objectSpread(_objectSpread({}, jest.requireActual('react')), {}, {
  useRef: jest.fn(val => ({
    current: val
  })),
  useEffect: jest.fn(),
  useCallback: (cb, prereqs) => ({
    cb,
    prereqs
  })
}));
jest.mock('react-redux', () => {
  const dispatchFn = jest.fn();
  return _objectSpread(_objectSpread({}, jest.requireActual('react-redux')), {}, {
    dispatch: dispatchFn,
    useDispatch: jest.fn(() => dispatchFn)
  });
});
jest.mock('../../data/redux', () => ({
  thunkActions: {
    video: {
      saveVideoData: jest.fn()
    }
  }
}));
const state = new _testUtils.MockUseState(_module);
let hook;
describe('VideoEditorHooks', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('state hooks', () => {
    state.testGetter(state.keys.durationErrors);
    state.testGetter(state.keys.handoutErrors);
    state.testGetter(state.keys.licenseErrors);
    state.testGetter(state.keys.thumbnailErrors);
    state.testGetter(state.keys.transcriptsErrors);
    state.testGetter(state.keys.videoSourceErrors);
  });
  describe('errors hook', () => {
    beforeEach(() => {
      state.mock();
    });
    afterEach(() => {
      state.restore();
    });
    const fakeDurationError = {
      field1: 'field1msg',
      field2: 'field2msg'
    };
    test('error: state values', () => {
      expect(_module.errorsHook().error.duration).toEqual([state.stateVals[state.keys.durationErrors], state.setState[state.keys.durationErrors]]);
      expect(_module.errorsHook().error.handout).toEqual([state.stateVals[state.keys.handoutErrors], state.setState[state.keys.handoutErrors]]);
      expect(_module.errorsHook().error.license).toEqual([state.stateVals[state.keys.licenseErrors], state.setState[state.keys.licenseErrors]]);
      expect(_module.errorsHook().error.thumbnail).toEqual([state.stateVals[state.keys.thumbnailErrors], state.setState[state.keys.thumbnailErrors]]);
      expect(_module.errorsHook().error.transcripts).toEqual([state.stateVals[state.keys.transcriptsErrors], state.setState[state.keys.transcriptsErrors]]);
      expect(_module.errorsHook().error.videoSource).toEqual([state.stateVals[state.keys.videoSourceErrors], state.setState[state.keys.videoSourceErrors]]);
    });
    describe('validateEntry', () => {
      test('validateEntry: returns true if all validation calls are true', () => {
        hook = _module.errorsHook();
        expect(hook.validateEntry()).toEqual(true);
      });
      test('validateEntry: returns false if any validation calls are false', () => {
        state.mockVal(state.keys.durationErrors, fakeDurationError);
        hook = _module.errorsHook();
        expect(hook.validateEntry()).toEqual(false);
      });
    });
  });
  describe('fetchVideoContent', () => {
    it('equals dispatch(thunkActions.video.saveVideoData())', () => {
      hook = _module.fetchVideoContent()({
        dispatch: _reactRedux.dispatch
      });
      expect(hook).toEqual((0, _reactRedux.dispatch)(_redux.thunkActions.video.saveVideoData()));
    });
  });
});
//# sourceMappingURL=hooks.test.js.map