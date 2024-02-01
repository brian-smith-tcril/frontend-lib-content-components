"use strict";

var _reducer = require("./reducer");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const testingState = _objectSpread(_objectSpread({}, _reducer.initialState), {}, {
  arbitraryField: 'arbitrary'
});
describe('app reducer', () => {
  it('has initial state', () => {
    expect((0, _reducer.reducer)(undefined, {})).toEqual(_reducer.initialState);
  });
  const testValue = 'roll for initiative';
  describe('handling actions', () => {
    describe('initialize', () => {
      it('loads initial input fields into the store', () => {
        const data = {
          studioEndpointUrl: 'testURL',
          lmsEndpointUrl: 'sOmEOtherTestuRl',
          blockId: 'anID',
          learningContextId: 'OTHERid',
          blockType: 'someTYPE'
        };
        expect((0, _reducer.reducer)(testingState, _reducer.actions.initialize(_objectSpread(_objectSpread({}, data), {}, {
          other: 'field'
        })))).toEqual(_objectSpread(_objectSpread({}, testingState), data));
      });
    });
    const setterTest = (action, target) => {
      describe(action, () => {
        it(`load ${target} from payload`, () => {
          expect((0, _reducer.reducer)(testingState, _reducer.actions[action](testValue))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
            [target]: testValue
          }));
        });
      });
    };
    [['setUnitUrl', 'unitUrl'], ['setStudioView', 'studioView'], ['setBlockContent', 'blockContent'], ['setBlockTitle', 'blockTitle'], ['setSaveResponse', 'saveResponse'], ['setAssets', 'assets'], ['setVideos', 'videos'], ['setCourseDetails', 'courseDetails']].map(args => setterTest(...args));
    describe('setBlockValue', () => {
      it('sets blockValue, as well as setting the blockTitle from data.display_name', () => {
        const blockValue = {
          data: {
            display_name: 'my test name'
          },
          other: 'data'
        };
        expect((0, _reducer.reducer)(testingState, _reducer.actions.setBlockValue(blockValue))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          blockValue,
          blockTitle: blockValue.data.display_name
        }));
      });
    });
    describe('initializeEditor', () => {
      it('sets editorInitialized to true', () => {
        expect((0, _reducer.reducer)(testingState, _reducer.actions.initializeEditor())).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
          editorInitialized: true
        }));
      });
    });
  });
});
//# sourceMappingURL=reducer.test.js.map