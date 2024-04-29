"use strict";

var _utils = require("../../../utils");
var urls = _interopRequireWildcard(require("../../services/cms/urls"));
var selectors = _interopRequireWildcard(require("./selectors"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // import * in order to mock in-file references
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