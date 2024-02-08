"use strict";

var _utils = require("../../../utils");
var urls = _interopRequireWildcard(require("../../services/cms/urls"));
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
jest.mock('../../services/cms/urls', () => ({
  returnUrl: args => ({
    returnUrl: args
  })
}));
const testState = {
  some: 'arbitraryValue'
};
const testValue = 'my VALUE';
describe('app selectors unit tests', () => {
  const {
    appSelector,
    simpleSelectors
  } = selectors;
  describe('appSelector', () => {
    it('returns the app data', () => {
      expect(appSelector(_objectSpread(_objectSpread({}, testState), {}, {
        app: testValue
      }))).toEqual(testValue);
    });
  });
  describe('simpleSelectors', () => {
    const testSimpleSelector = key => {
      test(`${key} simpleSelector returns its value from the app store`, () => {
        const {
          preSelectors,
          cb
        } = simpleSelectors[key];
        expect(preSelectors).toEqual([appSelector]);
        expect(cb(_objectSpread(_objectSpread({}, testState), {}, {
          [key]: testValue
        }))).toEqual(testValue);
      });
    };
    const simpleKeys = (0, _utils.keyStore)(simpleSelectors);
    describe('simple selectors link their values from app store', () => {
      [simpleKeys.blockContent, simpleKeys.blockId, simpleKeys.blockTitle, simpleKeys.blockType, simpleKeys.blockValue, simpleKeys.learningContextId, simpleKeys.editorInitialized, simpleKeys.saveResponse, simpleKeys.lmsEndpointUrl, simpleKeys.studioEndpointUrl, simpleKeys.unitUrl, simpleKeys.blockTitle, simpleKeys.studioView, simpleKeys.assets, simpleKeys.videos].map(testSimpleSelector);
    });
  });
  describe('returnUrl', () => {
    it('is memoized based on unitUrl and studioEndpointUrl', () => {
      expect(selectors.returnUrl.preSelectors).toEqual([simpleSelectors.unitUrl, simpleSelectors.studioEndpointUrl, simpleSelectors.learningContextId, simpleSelectors.blockId]);
    });
    it('returns urls.returnUrl with the returnUrl', () => {
      const {
        cb
      } = selectors.returnUrl;
      const studioEndpointUrl = 'baseURL';
      const unitUrl = 'some unit url';
      const learningContextId = 'some learning context';
      const blockId = 'block-v1 some v1 block id';
      expect(cb(unitUrl, studioEndpointUrl, learningContextId, blockId)).toEqual(urls.returnUrl({
        unitUrl,
        studioEndpointUrl,
        learningContextId,
        blockId
      }));
    });
  });
  describe('isInitialized selector', () => {
    it('is memoized based on unitUrl, editorInitialized, and blockValue', () => {
      expect(selectors.isInitialized.preSelectors).toEqual([simpleSelectors.unitUrl, simpleSelectors.blockValue]);
    });
    it('returns true iff unitUrl, blockValue, and editorInitialized are all truthy', () => {
      const {
        cb
      } = selectors.isInitialized;
      const truthy = {
        url: {
          url: 'data'
        },
        blockValue: {
          block: 'value'
        }
      };
      [[[null, truthy.blockValue], false], [[truthy.url, null], false], [[truthy.url, truthy.blockValue], true]].map(_ref => {
        let [args, expected] = _ref;
        return expect(cb(...args)).toEqual(expected);
      });
    });
  });
  describe('displayTitle', () => {
    const title = 'tItLe';
    it('is memoized based on blockType and blockTitle', () => {
      expect(selectors.displayTitle.preSelectors).toEqual([simpleSelectors.blockType, simpleSelectors.blockTitle]);
    });
    it('returns null if blockType is null', () => {
      expect(selectors.displayTitle.cb(null, title)).toEqual(null);
    });
    it('returns blockTitle if blockTitle is not null', () => {
      expect(selectors.displayTitle.cb('html', title)).toEqual(title);
    });
    it('returns Text if the blockType is html', () => {
      expect(selectors.displayTitle.cb('html', null)).toEqual('Text');
    });
    it('returns the blockType capitalized if not html', () => {
      expect(selectors.displayTitle.cb('video', null)).toEqual('Video');
      expect(selectors.displayTitle.cb('random', null)).toEqual('Random');
    });
  });
  describe('isRaw', () => {
    const studioViewCourseRaw = {
      data: {
        html: 'data-editor="raw"'
      }
    };
    const studioViewV2LibraryRaw = {
      data: {
        content: 'data-editor="raw"'
      }
    };
    const studioViewVisual = {
      data: {
        html: 'sOmEthIngElse'
      }
    };
    it('is memoized based on studioView', () => {
      expect(selectors.isRaw.preSelectors).toEqual([simpleSelectors.studioView]);
    });
    it('returns null if studioView is null', () => {
      expect(selectors.isRaw.cb(null)).toEqual(null);
    });
    it('returns true if course studioView is raw', () => {
      expect(selectors.isRaw.cb(studioViewCourseRaw)).toEqual(true);
    });
    it('returns true if v2 library studioView is raw', () => {
      expect(selectors.isRaw.cb(studioViewV2LibraryRaw)).toEqual(true);
    });
    it('returns false if the studioView is not Raw', () => {
      expect(selectors.isRaw.cb(studioViewVisual)).toEqual(false);
    });
  });
  describe('isLibrary', () => {
    const learningContextIdLibrary = 'library-v1:name';
    const learningContextIdCourse = 'course-v1:name';
    it('is memoized based on isLibrary', () => {
      expect(selectors.isLibrary.preSelectors).toEqual([simpleSelectors.learningContextId, simpleSelectors.blockId]);
    });
    describe('blockId is null', () => {
      it('should return false when learningContextId null', () => {
        expect(selectors.isLibrary.cb(null, null)).toEqual(false);
      });
      it('should return false when learningContextId defined', () => {
        expect(selectors.isLibrary.cb(learningContextIdCourse, null)).toEqual(false);
      });
    });
    describe('blockId is a course block', () => {
      it('should return false when learningContextId null', () => {
        expect(selectors.isLibrary.cb(null, 'block-v1:')).toEqual(false);
      });
      it('should return false when learningContextId defined', () => {
        expect(selectors.isLibrary.cb(learningContextIdCourse, 'block-v1:')).toEqual(false);
      });
    });
    describe('blockId is a v2 library block', () => {
      it('should return true when learningContextId null', () => {
        expect(selectors.isLibrary.cb(null, 'lb:')).toEqual(true);
      });
      it('should return false when learningContextId is a v1 library', () => {
        expect(selectors.isLibrary.cb(learningContextIdLibrary, 'lb:')).toEqual(true);
      });
    });
    describe('blockId is a v1 library block', () => {
      it('should return false when learningContextId null', () => {
        expect(selectors.isLibrary.cb(null, 'library-v1')).toEqual(false);
      });
      it('should return true when learningContextId a v1 library', () => {
        expect(selectors.isLibrary.cb(learningContextIdLibrary, 'library-v1')).toEqual(true);
      });
    });
  });
});
//# sourceMappingURL=selectors.test.js.map