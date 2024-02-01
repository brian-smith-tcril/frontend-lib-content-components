"use strict";

var _utils = require("../../../utils");
var _requests = require("../../constants/requests");
var _api = _interopRequireDefault(require("../../services/cms/api"));
var requests = _interopRequireWildcard(require("./requests"));
var _index = require("../index");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const testState = {
  some: 'data'
};
jest.mock('../app/selectors', () => ({
  simpleSelectors: {
    studioEndpointUrl: state => ({
      studioEndpointUrl: state
    }),
    blockId: state => ({
      blockId: state
    })
  },
  studioEndpointUrl: state => ({
    studioEndpointUrl: state
  }),
  blockId: state => ({
    blockId: state
  }),
  blockType: state => ({
    blockType: state
  }),
  learningContextId: state => ({
    learningContextId: state
  }),
  blockTitle: state => ({
    title: state
  })
}));
jest.mock('../../services/cms/api', () => ({
  fetchBlockById: _ref => {
    let {
      id,
      url
    } = _ref;
    return {
      id,
      url
    };
  },
  fetchStudioView: _ref2 => {
    let {
      id,
      url
    } = _ref2;
    return {
      id,
      url
    };
  },
  fetchByUnitId: _ref3 => {
    let {
      id,
      url
    } = _ref3;
    return {
      id,
      url
    };
  },
  fetchCourseDetails: args => args,
  saveBlock: args => args,
  fetchAssets: _ref4 => {
    let {
      id,
      url
    } = _ref4;
    return {
      id,
      url
    };
  },
  fetchVideos: _ref5 => {
    let {
      id,
      url
    } = _ref5;
    return {
      id,
      url
    };
  },
  uploadAsset: args => args,
  loadImages: jest.fn(),
  uploadThumbnail: args => args,
  uploadTranscript: args => args,
  deleteTranscript: args => args,
  getTranscript: args => args,
  checkTranscriptsForImport: args => args,
  importTranscript: args => args,
  fetchVideoFeatures: args => args,
  uploadVideo: args => args
}));
const apiKeys = (0, _utils.keyStore)(_api.default);
let dispatch;
let onSuccess;
let onFailure;
const fetchParams = {
  fetchParam1: 'param1',
  fetchParam2: 'param2'
};
describe('requests thunkActions module', () => {
  beforeEach(() => {
    dispatch = jest.fn();
    onSuccess = jest.fn();
    onFailure = jest.fn();
  });
  describe('networkRequest', () => {
    const requestKey = 'test-request';
    const testData = {
      some: 'test data'
    };
    let resolveFn;
    let rejectFn;
    describe('without success and failure handlers', () => {
      beforeEach(() => {
        requests.networkRequest({
          requestKey,
          promise: new Promise((resolve, reject) => {
            resolveFn = resolve;
            rejectFn = reject;
          })
        })(dispatch);
      });
      test('calls startRequest action with requestKey', async () => {
        expect(dispatch.mock.calls).toEqual([[_index.actions.requests.startRequest(requestKey)]]);
      });
      describe('on success', () => {
        beforeEach(async () => {
          await resolveFn(testData);
        });
        it('dispatches completeRequest', async () => {
          expect(dispatch.mock.calls).toEqual([[_index.actions.requests.startRequest(requestKey)], [_index.actions.requests.completeRequest({
            requestKey,
            response: testData
          })]]);
        });
      });
      describe('on failure', () => {
        beforeEach(async () => {
          await rejectFn(testData);
        });
        test('dispatches completeRequest', async () => {
          expect(dispatch.mock.calls).toEqual([[_index.actions.requests.startRequest(requestKey)], [_index.actions.requests.failRequest({
            requestKey,
            error: testData
          })]]);
        });
      });
    });
    describe('with handlers', () => {
      beforeEach(() => {
        onSuccess = jest.fn();
        onFailure = jest.fn();
        requests.networkRequest({
          requestKey,
          promise: new Promise((resolve, reject) => {
            resolveFn = resolve;
            rejectFn = reject;
          }),
          onSuccess,
          onFailure
        })(dispatch);
      });
      test('calls startRequest action with requestKey', async () => {
        expect(dispatch.mock.calls).toEqual([[_index.actions.requests.startRequest(requestKey)]]);
      });
      describe('on success', () => {
        beforeEach(async () => {
          await resolveFn(testData);
        });
        it('dispatches completeRequest', async () => {
          expect(dispatch.mock.calls).toEqual([[_index.actions.requests.startRequest(requestKey)], [_index.actions.requests.completeRequest({
            requestKey,
            response: testData
          })]]);
        });
        it('calls onSuccess with response', async () => {
          expect(onSuccess).toHaveBeenCalledWith(testData);
          expect(onFailure).not.toHaveBeenCalled();
        });
      });
      describe('on failure', () => {
        beforeEach(async () => {
          await rejectFn(testData);
        });
        test('dispatches completeRequest', async () => {
          expect(dispatch.mock.calls).toEqual([[_index.actions.requests.startRequest(requestKey)], [_index.actions.requests.failRequest({
            requestKey,
            error: testData
          })]]);
        });
        test('calls onFailure with response', async () => {
          expect(onFailure).toHaveBeenCalledWith(testData);
          expect(onSuccess).not.toHaveBeenCalled();
        });
      });
    });
  });
  const testNetworkRequestAction = _ref6 => {
    let {
      action,
      args,
      expectedData,
      expectedString
    } = _ref6;
    let dispatchedAction;
    beforeEach(() => {
      action(_objectSpread(_objectSpread({}, args), {}, {
        onSuccess,
        onFailure
      }))(dispatch, () => testState);
      [[dispatchedAction]] = dispatch.mock.calls;
    });
    it('dispatches networkRequest', () => {
      expect(dispatchedAction.networkRequest).not.toEqual(undefined);
    });
    test('forwards onSuccess and onFailure', () => {
      expect(dispatchedAction.networkRequest.onSuccess).toEqual(onSuccess);
      expect(dispatchedAction.networkRequest.onFailure).toEqual(onFailure);
    });
    test(expectedString, () => {
      expect(dispatchedAction.networkRequest).toEqual(_objectSpread(_objectSpread({}, expectedData), {}, {
        onSuccess,
        onFailure
      }));
    });
  };
  describe('network request actions', () => {
    beforeEach(() => {
      // eslint-disable-next-line no-import-assign
      requests.networkRequest = jest.fn(args => ({
        networkRequest: args
      }));
    });
    describe('fetchBlock', () => {
      testNetworkRequestAction({
        action: requests.fetchBlock,
        args: fetchParams,
        expectedString: 'with fetchBlock promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.fetchBlock,
          promise: _api.default.fetchBlockById({
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState),
            blockId: _index.selectors.app.blockId(testState)
          })
        })
      });
    });
    describe('fetchUnit', () => {
      testNetworkRequestAction({
        action: requests.fetchUnit,
        args: fetchParams,
        expectedString: 'with fetchUnit promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.fetchUnit,
          promise: _api.default.fetchByUnitId({
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState),
            blockId: _index.selectors.app.blockId(testState)
          })
        })
      });
    });
    describe('fetchStudioView', () => {
      testNetworkRequestAction({
        action: requests.fetchStudioView,
        args: fetchParams,
        expectedString: 'with fetchStudioView promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.fetchStudioView,
          promise: _api.default.fetchStudioView({
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState),
            blockId: _index.selectors.app.blockId(testState)
          })
        })
      });
    });
    describe('fetchCourseDetails', () => {
      testNetworkRequestAction({
        action: requests.fetchCourseDetails,
        args: fetchParams,
        expectedString: 'with fetchCourseDetails promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.fetchCourseDetails,
          promise: _api.default.fetchCourseDetails({
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState),
            learningContextId: _index.selectors.app.learningContextId(testState)
          })
        })
      });
    });
    describe('fetchAssets', () => {
      let fetchAssets;
      let loadImages;
      let dispatchedAction;
      const expectedArgs = {
        studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState),
        learningContextId: _index.selectors.app.learningContextId(testState)
      };
      beforeEach(() => {
        fetchAssets = jest.fn(args => new Promise(resolve => {
          resolve({
            data: {
              assets: {
                fetchAssets: args
              }
            }
          });
        }));
        jest.spyOn(_api.default, apiKeys.fetchAssets).mockImplementationOnce(fetchAssets);
        loadImages = jest.spyOn(_api.default, apiKeys.loadImages).mockImplementationOnce(() => ({}));
        requests.fetchAssets(_objectSpread(_objectSpread({}, fetchParams), {}, {
          onSuccess,
          onFailure
        }))(dispatch, () => testState);
        [[dispatchedAction]] = dispatch.mock.calls;
      });
      it('dispatches networkRequest', () => {
        expect(dispatchedAction.networkRequest).not.toEqual(undefined);
      });
      test('forwards onSuccess and onFailure', () => {
        expect(dispatchedAction.networkRequest.onSuccess).toEqual(onSuccess);
        expect(dispatchedAction.networkRequest.onFailure).toEqual(onFailure);
      });
      test('api.fetchAssets promise called with studioEndpointUrl and learningContextId', () => {
        expect(fetchAssets).toHaveBeenCalledWith(expectedArgs);
      });
      test('promise is chained with api.loadImages', () => {
        expect(loadImages).toHaveBeenCalledWith({
          fetchAssets: expectedArgs
        });
      });
    });
    describe('fetchVideos', () => {
      const expectedArgs = {
        studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState),
        learningContextId: _index.selectors.app.learningContextId(testState)
      };
      let fetchVideos;
      let dispatchedAction;
      beforeEach(() => {
        fetchVideos = jest.fn(args => new Promise(resolve => {
          resolve({
            data: {
              videos: {
                fetchVideos: args
              }
            }
          });
        }));
        jest.spyOn(_api.default, apiKeys.fetchVideos).mockImplementationOnce(fetchVideos);
        requests.fetchVideos(_objectSpread(_objectSpread({}, fetchParams), {}, {
          onSuccess,
          onFailure
        }))(dispatch, () => testState);
        [[dispatchedAction]] = dispatch.mock.calls;
      });
      it('dispatches networkRequest', () => {
        expect(dispatchedAction.networkRequest).not.toEqual(undefined);
      });
      test('forwards onSuccess and onFailure', () => {
        expect(dispatchedAction.networkRequest.onSuccess).toEqual(onSuccess);
        expect(dispatchedAction.networkRequest.onFailure).toEqual(onFailure);
      });
      test('api.fetchVideos promise called with studioEndpointUrl and learningContextId', () => {
        expect(fetchVideos).toHaveBeenCalledWith(expectedArgs);
      });
    });
    describe('saveBlock', () => {
      const content = 'SoME HtMl CoNtent As String';
      testNetworkRequestAction({
        action: requests.saveBlock,
        args: _objectSpread({
          content
        }, fetchParams),
        expectedString: 'with saveBlock promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.saveBlock,
          promise: _api.default.saveBlock({
            blockId: _index.selectors.app.blockId(testState),
            blockType: _index.selectors.app.blockType(testState),
            learningContextId: _index.selectors.app.learningContextId(testState),
            content,
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState),
            title: _index.selectors.app.blockTitle(testState)
          })
        })
      });
    });
    describe('uploadAsset', () => {
      const asset = 'SoME iMage CoNtent As String';
      testNetworkRequestAction({
        action: requests.uploadAsset,
        args: _objectSpread({
          asset
        }, fetchParams),
        expectedString: 'with uploadAsset promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.uploadAsset,
          promise: _api.default.uploadAsset({
            learningContextId: _index.selectors.app.learningContextId(testState),
            asset,
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState)
          })
        })
      });
    });
    describe('uploadThumbnail', () => {
      const thumbnail = 'SoME tHumbNAil CoNtent As String';
      const videoId = 'SoME VidEOid CoNtent As String';
      testNetworkRequestAction({
        action: requests.uploadThumbnail,
        args: _objectSpread({
          thumbnail,
          videoId
        }, fetchParams),
        expectedString: 'with uploadThumbnail promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.uploadThumbnail,
          promise: _api.default.uploadThumbnail({
            learningContextId: _index.selectors.app.learningContextId(testState),
            thumbnail,
            videoId,
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState)
          })
        })
      });
    });
    describe('deleteTranscript', () => {
      const language = 'SoME laNGUage CoNtent As String';
      const videoId = 'SoME VidEOid CoNtent As String';
      testNetworkRequestAction({
        action: requests.deleteTranscript,
        args: _objectSpread({
          language,
          videoId
        }, fetchParams),
        expectedString: 'with deleteTranscript promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.deleteTranscript,
          promise: _api.default.deleteTranscript({
            blockId: _index.selectors.app.blockId(testState),
            language,
            videoId,
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState)
          })
        })
      });
    });
    describe('checkTranscriptsForImport', () => {
      const youTubeId = 'SoME yOUtUbEiD As String';
      const videoId = 'SoME VidEOid As String';
      testNetworkRequestAction({
        action: requests.checkTranscriptsForImport,
        args: _objectSpread({
          youTubeId,
          videoId
        }, fetchParams),
        expectedString: 'with checkTranscriptsForImport promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.checkTranscriptsForImport,
          promise: _api.default.checkTranscriptsForImport({
            blockId: _index.selectors.app.blockId(testState),
            youTubeId,
            videoId,
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState)
          })
        })
      });
    });
    describe('importTranscript', () => {
      const youTubeId = 'SoME yOUtUbEiD As String';
      testNetworkRequestAction({
        action: requests.importTranscript,
        args: _objectSpread({
          youTubeId
        }, fetchParams),
        expectedString: 'with importTranscript promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.importTranscript,
          promise: _api.default.importTranscript({
            blockId: _index.selectors.app.blockId(testState),
            youTubeId,
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState)
          })
        })
      });
    });
    describe('getTranscriptFile', () => {
      const language = 'SoME laNGUage CoNtent As String';
      const videoId = 'SoME VidEOid CoNtent As String';
      testNetworkRequestAction({
        action: requests.getTranscriptFile,
        args: _objectSpread({
          language,
          videoId
        }, fetchParams),
        expectedString: 'with getTranscriptFile promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.getTranscriptFile,
          promise: _api.default.getTranscript({
            blockId: _index.selectors.app.blockId(testState),
            language,
            videoId,
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState)
          })
        })
      });
    });
    describe('updateTranscriptLanguage', () => {
      const languageBeforeChange = 'SoME laNGUage CoNtent As String';
      const newLanguageCode = 'SoME NEW laNGUage CoNtent As String';
      const videoId = 'SoME VidEOid CoNtent As String';
      testNetworkRequestAction({
        action: requests.updateTranscriptLanguage,
        args: _objectSpread({
          languageBeforeChange,
          newLanguageCode,
          videoId
        }, fetchParams),
        expectedString: 'with uploadTranscript promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.updateTranscriptLanguage,
          promise: _api.default.uploadTranscript({
            blockId: _index.selectors.app.blockId(testState),
            videoId,
            language: languageBeforeChange,
            newLanguage: newLanguageCode,
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState)
          })
        })
      });
    });
    describe('uploadTranscript', () => {
      const language = 'SoME laNGUage CoNtent As String';
      const videoId = 'SoME VidEOid CoNtent As String';
      const transcript = 'SoME tRANscRIPt CoNtent As String';
      testNetworkRequestAction({
        action: requests.uploadTranscript,
        args: _objectSpread({
          transcript,
          language,
          videoId
        }, fetchParams),
        expectedString: 'with uploadTranscript promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.uploadTranscript,
          promise: _api.default.uploadTranscript({
            blockId: _index.selectors.app.blockId(testState),
            transcript,
            videoId,
            language,
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState)
          })
        })
      });
    });
    describe('fetchVideoFeatures', () => {
      testNetworkRequestAction({
        action: requests.fetchVideoFeatures,
        args: _objectSpread({}, fetchParams),
        expectedString: 'with fetchVideoFeatures promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.fetchVideoFeatures,
          promise: _api.default.fetchVideoFeatures({
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState)
          })
        })
      });
    });
    describe('uploadVideo', () => {
      const data = {
        files: [{
          file_name: 'video.mp4',
          content_type: 'mp4'
        }]
      };
      testNetworkRequestAction({
        action: requests.uploadVideo,
        args: _objectSpread(_objectSpread({}, fetchParams), {}, {
          data
        }),
        expectedString: 'with uploadVideo promise',
        expectedData: _objectSpread(_objectSpread({}, fetchParams), {}, {
          requestKey: _requests.RequestKeys.uploadVideo,
          promise: _api.default.uploadVideo({
            studioEndpointUrl: _index.selectors.app.studioEndpointUrl(testState),
            learningContextId: _index.selectors.app.learningContextId(testState),
            data
          })
        })
      });
    });
  });
});
//# sourceMappingURL=requests.test.js.map