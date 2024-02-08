"use strict";

var _reducer = require("./reducer");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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