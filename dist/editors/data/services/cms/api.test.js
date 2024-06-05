"use strict";

var utils = _interopRequireWildcard(require("../../../utils"));
var api = _interopRequireWildcard(require("./api"));
var mockApi = _interopRequireWildcard(require("./mockApi"));
var urls = _interopRequireWildcard(require("./urls"));
var _utils2 = require("./utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* eslint-disable no-import-assign */
jest.mock('../../../utils', () => {
  const camelizeMap = obj => _objectSpread(_objectSpread({}, obj), {}, {
    camelized: true
  });
  return _objectSpread(_objectSpread({}, jest.requireActual('../../../utils')), {}, {
    camelize: camelizeMap,
    camelizeKeys: list => list.map(camelizeMap)
  });
});
jest.mock('./urls', () => ({
  block: jest.fn().mockReturnValue('urls.block'),
  blockAncestor: jest.fn().mockReturnValue('urls.blockAncestor'),
  blockStudioView: jest.fn().mockReturnValue('urls.StudioView'),
  courseAssets: jest.fn().mockReturnValue('urls.courseAssets'),
  videoTranscripts: jest.fn().mockReturnValue('urls.videoTranscripts'),
  allowThumbnailUpload: jest.fn().mockReturnValue('urls.allowThumbnailUpload'),
  thumbnailUpload: jest.fn().mockReturnValue('urls.thumbnailUpload'),
  checkTranscriptsForImport: jest.fn().mockReturnValue('urls.checkTranscriptsForImport'),
  courseDetailsUrl: jest.fn().mockReturnValue('urls.courseDetailsUrl'),
  courseAdvanceSettings: jest.fn().mockReturnValue('urls.courseAdvanceSettings'),
  replaceTranscript: jest.fn().mockReturnValue('urls.replaceTranscript'),
  videoFeatures: jest.fn().mockReturnValue('urls.videoFeatures'),
  courseVideos: jest.fn().mockName('urls.courseVideos').mockImplementation(_ref => {
    let {
      studioEndpointUrl,
      learningContextId
    } = _ref;
    return `${studioEndpointUrl}/some_video_upload_url/${learningContextId}`;
  })
}));
jest.mock('./utils', () => ({
  get: jest.fn().mockName('get'),
  post: jest.fn().mockName('post'),
  deleteObject: jest.fn().mockName('deleteObject')
}));
const {
  camelize
} = utils;
const {
  apiMethods
} = api;
const blockId = 'block-v1-coursev1:2uX@4345432';
const learningContextId = 'demo2uX';
const studioEndpointUrl = 'hortus.coa';
const title = 'remember this needs to go into metadata to save';
describe('cms api', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('apiMethods', () => {
    describe('fetchBlockId', () => {
      it('should call get with url.blocks', () => {
        apiMethods.fetchBlockById({
          blockId,
          studioEndpointUrl
        });
        expect(_utils2.get).toHaveBeenCalledWith(urls.block({
          blockId,
          studioEndpointUrl
        }));
      });
    });
    describe('fetchByUnitId', () => {
      it('should call get with url.blockAncestor', () => {
        apiMethods.fetchByUnitId({
          blockId,
          studioEndpointUrl
        });
        expect(_utils2.get).toHaveBeenCalledWith(urls.blockAncestor({
          studioEndpointUrl,
          blockId
        }), {});
      });
      describe('when called in different contexts', () => {
        // To mock env variables, you need to use dynamic imports for the tested methods
        // and then reset the env variables afterwards.
        const OLD_ENV = process.env;
        beforeEach(() => {
          jest.resetModules();
          process.env = _objectSpread({}, OLD_ENV);
        });
        afterEach(() => {
          process.env = OLD_ENV;
        });
        it('should call get with normal accept header for prod', async () => {
          process.env.NODE_ENV = 'production';
          process.env.MFE_NAME = 'frontend-app-library-authoring';
          // eslint-disable-next-line no-shadow
          const {
            apiMethods
          } = await Promise.resolve().then(() => _interopRequireWildcard(require('./api')));
          // eslint-disable-next-line no-shadow
          const utils = await Promise.resolve().then(() => _interopRequireWildcard(require('./utils')));
          const getSpy = jest.spyOn(utils, 'get');
          apiMethods.fetchByUnitId({
            blockId,
            studioEndpointUrl
          });
          expect(getSpy).toHaveBeenCalledWith(urls.blockAncestor({
            studioEndpointUrl,
            blockId
          }), {});
        });
        it('should call get with normal accept header for course-authoring', async () => {
          process.env.NODE_ENV = 'development';
          process.env.MFE_NAME = 'frontend-app-course-authoring';
          // eslint-disable-next-line no-shadow
          const {
            apiMethods
          } = await Promise.resolve().then(() => _interopRequireWildcard(require('./api')));
          // eslint-disable-next-line no-shadow
          const utils = await Promise.resolve().then(() => _interopRequireWildcard(require('./utils')));
          const getSpy = jest.spyOn(utils, 'get');
          apiMethods.fetchByUnitId({
            blockId,
            studioEndpointUrl
          });
          expect(getSpy).toHaveBeenCalledWith(urls.blockAncestor({
            studioEndpointUrl,
            blockId
          }), {});
        });
        it('should call get with special accept header "*/*" for course-authoring', async () => {
          process.env.NODE_ENV = 'development';
          process.env.MFE_NAME = 'frontend-app-library-authoring';
          // eslint-disable-next-line no-shadow
          const {
            apiMethods
          } = await Promise.resolve().then(() => _interopRequireWildcard(require('./api')));
          // eslint-disable-next-line no-shadow
          const utils = await Promise.resolve().then(() => _interopRequireWildcard(require('./utils')));
          const getSpy = jest.spyOn(utils, 'get');
          apiMethods.fetchByUnitId({
            blockId,
            studioEndpointUrl
          });
          expect(getSpy).toHaveBeenCalledWith(urls.blockAncestor({
            studioEndpointUrl,
            blockId
          }), {
            headers: {
              Accept: '*/*'
            }
          });
        });
      });
    });
    describe('fetchStudioView', () => {
      it('should call get with url.blockStudioView', () => {
        apiMethods.fetchStudioView({
          blockId,
          studioEndpointUrl
        });
        expect(_utils2.get).toHaveBeenCalledWith(urls.blockStudioView({
          studioEndpointUrl,
          blockId
        }));
      });
    });
    describe('fetchAssets', () => {
      it('should call get with url.courseAssets', () => {
        apiMethods.fetchAssets({
          learningContextId,
          studioEndpointUrl
        });
        expect(_utils2.get).toHaveBeenCalledWith(urls.courseAssets({
          studioEndpointUrl,
          learningContextId
        }));
      });
    });
    describe('fetchCourseDetails', () => {
      it('should call get with url.courseDetailsUrl', () => {
        apiMethods.fetchCourseDetails({
          learningContextId,
          studioEndpointUrl
        });
        expect(_utils2.get).toHaveBeenCalledWith(urls.courseDetailsUrl({
          studioEndpointUrl,
          learningContextId
        }));
      });
    });
    describe('fetchVideos', () => {
      it('should call get with url.courseVideos', () => {
        apiMethods.fetchVideos({
          learningContextId,
          studioEndpointUrl
        });
        expect(_utils2.get).toHaveBeenCalledWith(urls.courseVideos({
          studioEndpointUrl,
          learningContextId
        }));
      });
    });
    describe('fetchAdvancedSettings', () => {
      it('should call get with url.courseAdvanceSettings', () => {
        apiMethods.fetchAdvancedSettings({
          learningContextId,
          studioEndpointUrl
        });
        expect(_utils2.get).toHaveBeenCalledWith(urls.courseAdvanceSettings({
          studioEndpointUrl,
          learningContextId
        }));
      });
    });
    describe('normalizeContent', () => {
      test('return value for blockType: html', () => {
        const content = 'Im baby palo santo ugh celiac fashion axe. La croix lo-fi venmo whatever. Beard man braid migas single-origin coffee forage ramps.';
        expect(apiMethods.normalizeContent({
          blockId,
          blockType: 'html',
          content,
          learningContextId,
          title
        })).toEqual({
          category: 'html',
          courseKey: learningContextId,
          data: content,
          has_changes: true,
          id: blockId,
          metadata: {
            display_name: title
          }
        });
      });
      test('return value for blockType: video', () => {
        const content = {
          videoSource: 'viDeOSouRCE',
          fallbackVideos: 'FalLBacKVidEOs',
          allowVideoDownloads: 'alLOwViDeodownLOads',
          allowVideoSharing: {
            level: 'sOMeStRInG',
            value: 'alloWviDeOshArinG'
          },
          thumbnail: 'THUmbNaIL',
          transcripts: 'traNScRiPts',
          allowTranscriptDownloads: 'aLloWTRaNScriPtdoWnlOADS',
          duration: {
            startTime: '00:00:00',
            stopTime: '00:00:00'
          },
          showTranscriptByDefault: 'ShOWtrANscriPTBYDeFAulT',
          handout: 'HAnDOuT',
          licenseType: 'LiCeNsETYpe',
          licenseDetails: 'liCENSeDetAIls'
        };
        const html5Sources = 'hTML5souRCES';
        const edxVideoId = 'eDXviDEOid';
        const youtubeId = 'yOUtUBeid';
        const license = 'LiCEnsE';
        jest.spyOn(api, 'processVideoIds').mockReturnValue({
          html5Sources,
          edxVideoId,
          youtubeId
        });
        jest.spyOn(api, 'processLicense').mockReturnValue(license);
        expect(apiMethods.normalizeContent({
          blockId,
          blockType: 'video',
          content,
          learningContextId,
          title
        })).toEqual({
          category: 'video',
          courseKey: learningContextId,
          display_name: title,
          id: blockId,
          metadata: {
            display_name: title,
            download_video: content.allowVideoDownloads,
            public_access: content.allowVideoSharing.value,
            edx_video_id: edxVideoId,
            html5_sources: html5Sources,
            youtube_id_1_0: youtubeId,
            thumbnail: content.thumbnail,
            download_track: content.allowTranscriptDownloads,
            track: '',
            show_captions: content.showTranscriptByDefault,
            handout: content.handout,
            start_time: content.duration.startTime,
            end_time: content.duration.stopTime,
            license
          }
        });
        jest.restoreAllMocks();
      });
      test('throw error for invalid blockType', () => {
        expect(() => {
          apiMethods.normalizeContent({
            blockType: 'somethingINVALID'
          });
        }).toThrow(TypeError);
      });
    });
    describe('saveBlock', () => {
      const content = 'Im baby palo santo ugh celiac fashion axe. La croix lo-fi venmo whatever. Beard man braid migas single-origin coffee forage ramps.';
      it('should call post with urls.block and normalizeContent', () => {
        apiMethods.saveBlock({
          blockId,
          blockType: 'html',
          content,
          learningContextId,
          studioEndpointUrl,
          title
        });
        expect(_utils2.post).toHaveBeenCalledWith(urls.block({
          studioEndpointUrl
        }), apiMethods.normalizeContent({
          blockType: 'html',
          content,
          blockId,
          learningContextId,
          title
        }));
      });
    });
    describe('uploadAsset', () => {
      const asset = {
        photo: 'dAta'
      };
      it('should call post with urls.courseAssets and imgdata', () => {
        const mockFormdata = new FormData();
        mockFormdata.append('file', asset);
        apiMethods.uploadAsset({
          learningContextId,
          studioEndpointUrl,
          asset
        });
        expect(_utils2.post).toHaveBeenCalledWith(urls.courseAssets({
          studioEndpointUrl,
          learningContextId
        }), mockFormdata);
      });
    });
    describe('uploadVideo', () => {
      it('should call post with urls.courseVideos and data', () => {
        const data = {
          files: [{
            file_name: 'video.mp4',
            content_type: 'mp4'
          }]
        };
        apiMethods.uploadVideo({
          data,
          studioEndpointUrl,
          learningContextId
        });
        expect(urls.courseVideos).toHaveBeenCalledWith({
          studioEndpointUrl,
          learningContextId
        });
        expect(_utils2.post).toHaveBeenCalledWith(urls.courseVideos({
          studioEndpointUrl,
          learningContextId
        }), data);
      });
    });
  });
  describe('loadImage', () => {
    it('loads incoming image data, replacing the dateAdded with a date field', () => {
      const [date, time] = ['Jan 20, 2022', '9:30 PM'];
      const imageData = {
        some: 'image data',
        dateAdded: `${date} at ${time}`
      };
      expect(api.loadImage(imageData)).toEqual(_objectSpread(_objectSpread({}, imageData), {}, {
        dateAdded: new Date(`${date} ${time}`).getTime()
      }));
    });
  });
  describe('loadImages', () => {
    it('loads a list of images into an object by id, using loadImage to translate', () => {
      const ids = ['id0', 'Id1', 'ID2', 'iD3'];
      const testData = [{
        id: ids[0],
        some: 'data'
      }, {
        id: ids[1],
        other: 'data'
      }, {
        id: ids[2],
        some: 'DATA'
      }, {
        id: ids[3],
        other: 'DATA'
      }];
      const oldLoadImage = api.loadImage;
      api.loadImage = imageData => ({
        loadImage: imageData
      });
      const out = api.loadImages(testData);
      expect(out).toEqual({
        [ids[0]]: api.loadImage(camelize(testData[0])),
        [ids[1]]: api.loadImage(camelize(testData[1])),
        [ids[2]]: api.loadImage(camelize(testData[2])),
        [ids[3]]: api.loadImage(camelize(testData[3]))
      });
      api.loadImage = oldLoadImage;
    });
  });
  describe('uploadThumbnail', () => {
    describe('uploadThumbnail', () => {
      const thumbnail = 'dAta';
      const videoId = 'sOmeVIDeoiD';
      it('should call post with urls.thumbnailUpload and thumbnail data', () => {
        const mockFormdata = new FormData();
        mockFormdata.append('file', thumbnail);
        apiMethods.uploadThumbnail({
          studioEndpointUrl,
          learningContextId,
          videoId,
          thumbnail
        });
        expect(_utils2.post).toHaveBeenCalledWith(urls.thumbnailUpload({
          studioEndpointUrl,
          learningContextId,
          videoId
        }), mockFormdata);
      });
    });
  });
  describe('videoTranscripts', () => {
    const language = 'la';
    const videoId = 'sOmeVIDeoiD';
    const youTubeId = 'SOMeyoutUBeid';
    describe('checkTranscriptsForImport', () => {
      const getJSON = `{"locator":"${blockId}","videos":[{"mode":"youtube","video":"${youTubeId}","type":"youtube"},{"mode":"edx_video_id","type":"edx_video_id","video":"${videoId}"}]}`;
      it('should call get with url.checkTranscriptsForImport', () => {
        apiMethods.checkTranscriptsForImport({
          studioEndpointUrl,
          blockId,
          videoId,
          youTubeId
        });
        expect(_utils2.get).toHaveBeenCalledWith(urls.checkTranscriptsForImport({
          studioEndpointUrl,
          parameters: encodeURIComponent(getJSON)
        }));
      });
    });
    describe('importTranscript', () => {
      const getJSON = `{"locator":"${blockId}","videos":[{"mode":"youtube","video":"${youTubeId}","type":"youtube"}]}`;
      it('should call get with url.replaceTranscript', () => {
        apiMethods.importTranscript({
          studioEndpointUrl,
          blockId,
          youTubeId
        });
        expect(_utils2.get).toHaveBeenCalledWith(urls.replaceTranscript({
          studioEndpointUrl,
          parameters: encodeURIComponent(getJSON)
        }));
      });
    });
    describe('uploadTranscript', () => {
      const transcript = {
        transcript: 'dAta'
      };
      it('should call post with urls.videoTranscripts and transcript data', () => {
        const mockFormdata = new FormData();
        mockFormdata.append('file', transcript);
        mockFormdata.append('edx_video_id', videoId);
        mockFormdata.append('language_code', language);
        mockFormdata.append('new_language_code', language);
        apiMethods.uploadTranscript({
          blockId,
          studioEndpointUrl,
          transcript,
          videoId,
          language
        });
        expect(_utils2.post).toHaveBeenCalledWith(urls.videoTranscripts({
          studioEndpointUrl,
          blockId
        }), mockFormdata);
      });
    });
    describe('transcript delete', () => {
      it('should call deleteObject with urls.videoTranscripts and transcript data', () => {
        const mockDeleteJSON = {
          data: {
            lang: language,
            edx_video_id: videoId
          }
        };
        apiMethods.deleteTranscript({
          blockId,
          studioEndpointUrl,
          videoId,
          language
        });
        expect(_utils2.deleteObject).toHaveBeenCalledWith(urls.videoTranscripts({
          studioEndpointUrl,
          blockId
        }), mockDeleteJSON);
      });
    });
    describe('transcript get', () => {
      it('should call get with urls.videoTranscripts and transcript data', () => {
        const mockJSON = {
          data: {
            lang: language,
            edx_video_id: videoId
          }
        };
        apiMethods.getTranscript({
          blockId,
          studioEndpointUrl,
          videoId,
          language
        });
        expect(_utils2.get).toHaveBeenCalledWith(`${urls.videoTranscripts({
          studioEndpointUrl,
          blockId
        })}?language_code=${language}`, mockJSON);
      });
    });
  });
  describe('processVideoIds', () => {
    const edxVideoId = 'eDXviDEoid';
    const youtubeId = 'yOuTuBeUrL';
    const youtubeUrl = `https://youtu.be/${youtubeId}`;
    const html5Sources = ['sOuRce1', 'sourCE2'];
    afterEach(() => {
      jest.restoreAllMocks();
    });
    describe('if there is a video id', () => {
      beforeEach(() => {
        jest.spyOn(api, 'isEdxVideo').mockReturnValue(true);
        jest.spyOn(api, 'parseYoutubeId').mockReturnValue(youtubeId);
      });
      it('returns edxVideoId when there are no fallbackVideos', () => {
        expect(api.processVideoIds({
          videoUrl: '',
          fallbackVideos: [],
          videoId: edxVideoId
        })).toEqual({
          edxVideoId,
          html5Sources: [],
          youtubeId: ''
        });
      });
      it('returns edxVideoId and html5Sources when there are fallbackVideos', () => {
        expect(api.processVideoIds({
          videoUrl: youtubeUrl,
          fallbackVideos: html5Sources,
          videoId: edxVideoId
        })).toEqual({
          edxVideoId,
          html5Sources,
          youtubeId
        });
      });
    });
    describe('if there is a youtube url', () => {
      beforeEach(() => {
        jest.spyOn(api, 'isEdxVideo').mockReturnValue(false);
        jest.spyOn(api, 'parseYoutubeId').mockReturnValue(youtubeId);
      });
      it('returns youtubeId when there are no fallbackVideos', () => {
        expect(api.processVideoIds({
          videoUrl: youtubeUrl,
          fallbackVideos: [],
          videoId: ''
        })).toEqual({
          edxVideoId: '',
          html5Sources: [],
          youtubeId
        });
      });
      it('returns youtubeId and html5Sources when there are fallbackVideos', () => {
        expect(api.processVideoIds({
          videoUrl: youtubeUrl,
          fallbackVideos: html5Sources,
          videoId: ''
        })).toEqual({
          edxVideoId: '',
          html5Sources,
          youtubeId
        });
      });
    });
    describe('if the videoSource is an html5 source', () => {
      beforeEach(() => {
        jest.spyOn(api, 'isEdxVideo').mockReturnValue(false);
        jest.spyOn(api, 'parseYoutubeId').mockReturnValue(null);
      });
      it('returns html5Sources when there are no fallbackVideos', () => {
        expect(api.processVideoIds({
          videoUrl: html5Sources[0],
          fallbackVideos: [],
          videoId: ''
        })).toEqual({
          edxVideoId: '',
          html5Sources: [html5Sources[0]],
          youtubeId: ''
        });
      });
      it('returns html5Sources when there are fallbackVideos', () => {
        expect(api.processVideoIds({
          videoUrl: html5Sources[0],
          fallbackVideos: [html5Sources[1]],
          videoId: ''
        })).toEqual({
          edxVideoId: '',
          html5Sources,
          youtubeId: ''
        });
      });
    });
  });
  describe('isEdxVideo', () => {
    it('returns true if id is in uuid4 format', () => {
      const id = 'c2afd8c8-3329-4dfc-95be-4ee6d986c3e5';
      expect(api.isEdxVideo(id)).toEqual(true);
    });
    it('returns false if id is not in uuid4 format', () => {
      const id = 'someB-ad-Id';
      expect(api.isEdxVideo(id)).toEqual(false);
    });
  });
  describe('parseYoutubeId', () => {
    it('returns the youtube id in an url', () => {
      const id = '3_yD_cEKoCk';
      const testURLs = ['https://www.youtube.com/watch?v=3_yD_cEKoCk&feature=featured', 'https://www.youtube.com/watch?v=3_yD_cEKoCk', 'http://www.youtube.com/watch?v=3_yD_cEKoCk', '//www.youtube.com/watch?v=3_yD_cEKoCk', 'www.youtube.com/watch?v=3_yD_cEKoCk', 'https://youtube.com/watch?v=3_yD_cEKoCk', 'http://youtube.com/watch?v=3_yD_cEKoCk', '//youtube.com/watch?v=3_yD_cEKoCk', 'youtube.com/watch?v=3_yD_cEKoCk', 'https://m.youtube.com/watch?v=3_yD_cEKoCk', 'http://m.youtube.com/watch?v=3_yD_cEKoCk', '//m.youtube.com/watch?v=3_yD_cEKoCk', 'm.youtube.com/watch?v=3_yD_cEKoCk', 'https://www.youtube.com/v/3_yD_cEKoCk?fs=1&hl=en_US', 'http://www.youtube.com/v/3_yD_cEKoCk?fs=1&hl=en_US', '//www.youtube.com/v/3_yD_cEKoCk?fs=1&hl=en_US', 'www.youtube.com/v/3_yD_cEKoCk?fs=1&hl=en_US', 'youtube.com/v/3_yD_cEKoCk?fs=1&hl=en_US', 'https://www.youtube.com/embed/3_yD_cEKoCk?autoplay=1', 'https://www.youtube.com/embed/3_yD_cEKoCk', 'http://www.youtube.com/embed/3_yD_cEKoCk', '//www.youtube.com/embed/3_yD_cEKoCk', 'www.youtube.com/embed/3_yD_cEKoCk', 'https://youtube.com/embed/3_yD_cEKoCk', 'http://youtube.com/embed/3_yD_cEKoCk', '//youtube.com/embed/3_yD_cEKoCk', 'youtube.com/embed/3_yD_cEKoCk', 'https://youtu.be/3_yD_cEKoCk?t=120', 'https://youtu.be/3_yD_cEKoCk', 'http://youtu.be/3_yD_cEKoCk', '//youtu.be/3_yD_cEKoCk', 'youtu.be/3_yD_cEKoCk'];
      testURLs.forEach(url => {
        expect(api.parseYoutubeId(url)).toEqual(id);
      });
    });
    it('returns null if the url is not a youtube url', () => {
      const badURL = 'https://someothersite.com/3_yD_cEKoCk';
      expect(api.parseYoutubeId(badURL)).toEqual(null);
    });
  });
  describe('processLicense', () => {
    it('returns empty string when licenseType is empty or not a valid licnese type', () => {
      expect(api.processLicense('', {})).toEqual('');
      expect(api.processLicense('LiCeNsETYpe', {})).toEqual('');
    });
    it('returns empty string when licenseType equals creative commons', () => {
      const licenseType = 'creative-commons';
      const licenseDetails = {
        attribution: true,
        noncommercial: false,
        noDerivatives: true,
        shareAlike: false
      };
      expect(api.processLicense(licenseType, licenseDetails)).toEqual('creative-commons: ver=4.0 BY ND');
    });
    it('returns empty string when licenseType equals creative commons', () => {
      const licenseType = 'all-rights-reserved';
      const licenseDetails = {};
      expect(api.processLicense(licenseType, licenseDetails)).toEqual('all-rights-reserved');
    });
  });
  describe('checkMockApi', () => {
    const envTemp = process.env;
    beforeEach(() => {
      jest.resetModules();
      process.env = _objectSpread({}, envTemp);
    });
    afterEach(() => {
      process.env = envTemp;
    });
    describe('if REACT_APP_DEVGALLERY is true', () => {
      it('should return the mockApi version of a call when it exists', () => {
        process.env.REACT_APP_DEVGALLERY = true;
        expect(api.checkMockApi('fetchBlockById')).toEqual(mockApi.fetchBlockById);
      });
      it('should return an empty mock when the call does not exist', () => {
        process.env.REACT_APP_DEVGALLERY = true;
        expect(api.checkMockApi('someRAnDomThINg')).toEqual(mockApi.emptyMock);
      });
    });
    describe('if REACT_APP_DEVGALLERY is not true', () => {
      it('should return the appropriate call', () => {
        expect(api.checkMockApi('fetchBlockById')).toEqual(apiMethods.fetchBlockById);
      });
    });
  });
  describe('fetchVideoFeatures', () => {
    it('should call get with url.videoFeatures', () => {
      const args = {
        studioEndpointUrl
      };
      apiMethods.fetchVideoFeatures(_objectSpread({}, args));
      expect(_utils2.get).toHaveBeenCalledWith(urls.videoFeatures(_objectSpread({}, args)));
    });
  });
});
//# sourceMappingURL=api.test.js.map