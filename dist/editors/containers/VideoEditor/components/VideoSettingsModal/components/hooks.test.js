"use strict";

var _react = require("react");
var _reactRedux = require("react-redux");
var _utils = require("../../../../../utils");
var _redux = require("../../../../../data/redux");
var _testUtils = require("../../../../../../testUtils");
var handlers = _interopRequireWildcard(require("./handlers"));
var hooks = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
jest.mock('react', () => _objectSpread(_objectSpread({}, jest.requireActual('react')), {}, {
  useState: val => ({
    useState: val
  }),
  useEffect: jest.fn(),
  useCallback: jest.fn((cb, prereqs) => ({
    useCallback: {
      cb,
      prereqs
    }
  })),
  useMemo: jest.fn((cb, prereqs) => ({
    useMemo: {
      cb,
      prereqs
    }
  }))
}));
jest.mock('./handlers', () => ({
  handleIndexEvent: jest.fn(args => ({
    handleIndexEvent: args
  })),
  handleIndexTransformEvent: jest.fn(args => ({
    handleIndexTransformEvent: args
  })),
  onValue: jest.fn(cb => ({
    onValue: cb
  })),
  onChecked: jest.fn(cb => ({
    onChecked: cb
  })),
  onEvent: jest.fn(cb => ({
    onEvent: cb
  }))
}));
jest.mock('../../../../../data/redux', () => ({
  actions: {
    video: {
      updateField: val => ({
        updateField: val
      })
    }
  },
  selectors: {
    video: {
      videoSource: state => ({
        videoSource: state
      }),
      fallbackVideos: state => ({
        fallbackVideos: state
      }),
      allowVideoDownloads: state => ({
        allowVideoDownloads: state
      }),
      allowVideoSharing: state => ({
        allowVideoSharing: state
      }),
      thumbnail: state => ({
        thumbnail: state
      }),
      transcripts: state => ({
        transcripts: state
      }),
      allowTranscriptDownloads: state => ({
        allowTranscriptDownloads: state
      }),
      showTranscriptByDefault: state => ({
        showTranscriptByDefault: state
      }),
      duration: state => ({
        duration: state
      }),
      handout: state => ({
        handout: state
      }),
      licenseType: state => ({
        licenseType: state
      }),
      licenseDetails: state => ({
        licenseDetails: state
      })
    }
  }
}));
const keys = {
  hooks: (0, _utils.keyStore)(hooks),
  selectors: hooks.selectorKeys
};
const state = new _testUtils.MockUseState(hooks);
const testValue = 'my-test-value';
const testValue2 = 'my-test-value-2';
const testKey = keys.selectors.handout;
const dispatch = jest.fn(val => ({
  dispatch: val
}));
let out;
describe('Video Settings modal hooks', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('state hooks', () => {
    state.testGetter(state.keys.videoSource);
    state.testGetter(state.keys.fallbackVideos);
    state.testGetter(state.keys.allowVideoDownloads);
    state.testGetter(state.keys.allowVideoSharing);
    state.testGetter(state.keys.thumbnail);
    state.testGetter(state.keys.transcripts);
    state.testGetter(state.keys.allowTranscriptDownloads);
    state.testGetter(state.keys.showTranscriptByDefault);
    state.testGetter(state.keys.duration);
    state.testGetter(state.keys.handout);
    state.testGetter(state.keys.licenseType);
    state.testGetter(state.keys.licenseDetails);
  });
  describe('non-state hooks', () => {
    beforeEach(() => state.mock());
    afterEach(() => state.restore());
    describe('updatedArray', () => {
      it('returns a new array with the given index replaced', () => {
        const testArray = ['0', '1', '2', '3', '4'];
        const oldArray = [...testArray];
        expect(hooks.updatedArray(testArray, 3, testValue)).toEqual(['0', '1', '2', testValue, '4']);
        expect(testArray).toEqual(oldArray);
      });
    });
    describe('updatedObject', () => {
      it('returns a new object with the given index replaced', () => {
        const testObj = {
          some: 'data',
          [testKey]: testValue
        };
        const oldObj = _objectSpread({}, testObj);
        expect(hooks.updatedObject(testObj, testKey, testValue2)).toEqual(_objectSpread(_objectSpread({}, testObj), {}, {
          [testKey]: testValue2
        }));
        expect(testObj).toEqual(oldObj);
      });
    });
    describe('updateFormField', () => {
      it('returns a memoized callback that is only created once', () => {
        expect(hooks.updateFormField({
          dispatch,
          key: testKey
        }).useCallback.prereqs).toEqual([]);
      });
      it('returns memoized callback that dispaches updateField with val on the given key', () => {
        hooks.updateFormField({
          dispatch,
          key: testKey
        }).useCallback.cb(testValue);
        expect(dispatch).toHaveBeenCalledWith(_redux.actions.video.updateField({
          [testKey]: testValue
        }));
      });
    });
    describe('valueHooks', () => {
      let formValue;
      beforeEach(() => {
        formValue = (0, _reactRedux.useSelector)(_redux.selectors.video[testKey]);
      });
      describe('behavior', () => {
        describe('initialization', () => {
          test('useEffect memoized on formValue', () => {
            hooks.valueHooks({
              dispatch,
              key: testKey
            });
            expect(_react.useEffect).toHaveBeenCalled();
            expect(_react.useEffect.mock.calls[0][1]).toEqual([formValue]);
          });
          test('calls setLocal with formValue by default', () => {
            hooks.valueHooks({
              dispatch,
              key: testKey
            });
            _react.useEffect.mock.calls[0][0]();
            expect(state.setState[testKey]).toHaveBeenCalledWith(formValue);
          });
        });
      });
      describe('returned object', () => {
        const mockUpdateFormField = args => jest.fn(val => ({
          updateFormField: {
            args,
            val
          }
        }));
        beforeEach(() => {
          jest.spyOn(hooks, keys.hooks.updateFormField).mockImplementationOnce(mockUpdateFormField);
          out = hooks.valueHooks({
            dispatch,
            key: testKey
          });
        });
        test('formValue from selectors.video[key]', () => {
          expect(out.formValue).toEqual((0, _reactRedux.useSelector)(_redux.selectors.video[testKey]));
        });
        describe('local and setLocal', () => {
          test('keyed to state, initialized with formValue', () => {
            const {
              local,
              setLocal
            } = out;
            expect(local).toEqual(formValue);
            setLocal(testValue);
            expect(state.setState[testKey]).toHaveBeenCalledWith(testValue);
          });
        });
        test('setFormValue forwarded from module', () => {
          expect(out.setFormValue(testValue)).toEqual(mockUpdateFormField({
            dispatch,
            key: testKey
          })(testValue));
        });
        describe('setAll', () => {
          it('returns a memoized callback based on setLocal and setFormValue', () => {
            expect(out.setAll.useCallback.prereqs).toEqual([out.setLocal, out.setFormValue]);
          });
          it('calls setLocal and setFormValue with the passed value', () => {
            out.setAll.useCallback.cb(testValue);
            expect(out.setLocal).toHaveBeenCalledWith(testValue);
            expect(out.setFormValue).toHaveBeenCalledWith(testValue);
          });
        });
      });
    });
    describe('genericWidget', () => {
      const valueProps = {
        formValue: '123',
        local: 23,
        setLocal: jest.fn(),
        setFormValue: jest.fn(),
        setAll: jest.fn()
      };
      beforeEach(() => {
        jest.spyOn(hooks, keys.hooks.valueHooks).mockReturnValueOnce(valueProps);
        out = hooks.genericWidget({
          dispatch,
          key: testKey
        });
      });
      describe('returned object', () => {
        it('forwards formValue and local from valueHooks', () => {
          expect(hooks.valueHooks).toHaveBeenCalledWith({
            dispatch,
            key: testKey
          });
          expect(out.formValue).toEqual(valueProps.formValue);
          expect(out.local).toEqual(valueProps.local);
        });
        test('setFormValue mapped to valueHooks.setFormValue', () => {
          expect(out.setFormValue).toEqual(valueProps.setFormValue);
        });
        test('onChange mapped to handlers.onValue(valueHooks.setLocal)', () => {
          expect(out.onChange).toEqual(handlers.onValue(valueProps.setLocal));
        });
        test('onCheckedChange mapped to handlers.onChecked(valueHooks.setAll)', () => {
          expect(out.onCheckedChange).toEqual(handlers.onChecked(valueProps.setAll));
        });
        test('onBlur mapped to handlers.onValue(valueHooks.setAll)', () => {
          expect(out.onBlur).toEqual(handlers.onValue(valueProps.setAll));
        });
      });
    });
    describe('non-generic widgets', () => {
      const widgetValues = {
        formValue: '123',
        local: 23,
        setLocal: jest.fn(),
        setFormValue: jest.fn(),
        setAll: jest.fn()
      };
      let valueHooksSpy;
      beforeEach(() => {
        valueHooksSpy = jest.spyOn(hooks, keys.hooks.valueHooks).mockReturnValue(widgetValues);
      });
      afterEach(() => {
        valueHooksSpy.mockRestore();
      });
      describe('arrayWidget', () => {
        const mockUpdatedArray = function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return {
            updatedArray: args
          };
        };
        let arraySpy;
        beforeEach(() => {
          arraySpy = jest.spyOn(hooks, keys.hooks.updatedArray).mockImplementation(mockUpdatedArray);
          out = hooks.arrayWidget({
            dispatch,
            key: testKey
          });
        });
        afterEach(() => {
          arraySpy.mockRestore();
        });
        it('forwards widget values', () => {
          expect(out.formValue).toEqual(widgetValues.formValue);
          expect(out.local).toEqual(widgetValues.local);
        });
        it('overrides onChange with handleIndexTransformEvent', () => {
          expect(out.onChange).toEqual(handlers.handleIndexTransformEvent({
            handler: handlers.onValue,
            setter: widgetValues.setLocal,
            transform: arraySpy,
            local: widgetValues.local
          }));
        });
        it('overrides onBlur with handleIndexTransformEvent', () => {
          expect(out.onBlur).toEqual(handlers.handleIndexTransformEvent({
            handler: handlers.onValue,
            setter: widgetValues.setAll,
            transform: arraySpy,
            local: widgetValues.local
          }));
        });
        it('adds onClear event that calls setAll with empty string', () => {
          out.onClear(testKey)();
          expect(widgetValues.setAll).toHaveBeenCalledWith(arraySpy(widgetValues.local, testKey, ''));
        });
      });
      describe('objectWidget', () => {
        beforeEach(() => {
          out = hooks.objectWidget({
            dispatch,
            key: testKey
          });
        });
        it('forwards widget values', () => {
          expect(out.formValue).toEqual(widgetValues.formValue);
          expect(out.local).toEqual(widgetValues.local);
        });
        it('overrides onChange with handleIndexTransformEvent', () => {
          expect(out.onChange).toEqual(handlers.handleIndexTransformEvent({
            handler: handlers.onValue,
            setter: widgetValues.setLocal,
            transform: hooks.updatedObject,
            local: widgetValues.local
          }));
        });
        it('overrides onBlur with handleIndexTransformEvent', () => {
          expect(out.onBlur).toEqual(handlers.handleIndexTransformEvent({
            handler: handlers.onValue,
            setter: widgetValues.setAll,
            transform: hooks.updatedObject,
            local: widgetValues.local
          }));
        });
      });
    });
    describe('widgetValues', () => {
      describe('returned object', () => {
        test('shaped to the fields object, where each value is called with key and dispatch', () => {
          const testKeys = ['1', '24', '23gsa'];
          const fieldMethods = [jest.fn(v => ({
            v1: v
          })), jest.fn(v => ({
            v2: v
          })), jest.fn(v => ({
            v3: v
          }))];
          const fields = testKeys.reduce((obj, key, index) => _objectSpread(_objectSpread({}, obj), {}, {
            [key]: fieldMethods[index]
          }), {});
          const expected = testKeys.reduce((obj, key, index) => _objectSpread(_objectSpread({}, obj), {}, {
            [key]: fieldMethods[index]({
              key,
              dispatch
            })
          }), {});
          expect(hooks.widgetValues({
            fields,
            dispatch
          })).toMatchObject(expected);
        });
      });
    });
  });
});
//# sourceMappingURL=hooks.test.js.map