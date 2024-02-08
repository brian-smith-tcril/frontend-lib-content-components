"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadVideo = exports.uploadTranscript = exports.uploadThumbnail = exports.uploadAsset = exports.updateTranscriptLanguage = exports.saveBlock = exports.networkRequest = exports.importTranscript = exports.getTranscriptFile = exports.fetchVideos = exports.fetchVideoFeatures = exports.fetchUnit = exports.fetchStudioView = exports.fetchCourseDetails = exports.fetchBlock = exports.fetchAssets = exports.fetchAdvancedSettings = exports.deleteTranscript = exports.default = exports.checkTranscriptsForImport = exports.allowThumbnailUpload = void 0;
var _utils = require("../../../utils");
var _requests = require("../../constants/requests");
var _ = require("..");
var _api = _interopRequireWildcard(require("../../services/cms/api"));
var _module = _interopRequireWildcard(require("./requests"));
const _excluded = ["content"],
  _excluded2 = ["asset"],
  _excluded3 = ["thumbnail", "videoId"],
  _excluded4 = ["videoId", "youTubeId"],
  _excluded5 = ["youTubeId"],
  _excluded6 = ["language", "videoId"],
  _excluded7 = ["transcript", "videoId", "language"],
  _excluded8 = ["file", "languageBeforeChange", "newLanguageCode", "videoId"],
  _excluded9 = ["language", "videoId"],
  _excluded10 = ["data"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); } /* eslint-disable import/no-cycle */
/**
 * Wrapper around a network request promise, that sends actions to the redux store to
 * track the state of that promise.
 * Tracks the promise by requestKey, and sends an action when it is started, succeeds, or
 * fails.  It also accepts onSuccess and onFailure methods to be called with the output
 * of failure or success of the promise.
 * @param {string} requestKey - request tracking identifier
 * @param {Promise} promise - api event promise
 * @param {[func]} onSuccess - onSuccess method ((response) => { ... })
 * @param {[func]} onFailure - onFailure method ((error) => { ... })
 */
const networkRequest = _ref => {
  let {
    requestKey,
    promise,
    onSuccess,
    onFailure
  } = _ref;
  return dispatch => {
    dispatch(_.actions.requests.startRequest(requestKey));
    return promise.then(response => {
      if (onSuccess) {
        onSuccess(response);
      }
      dispatch(_.actions.requests.completeRequest({
        requestKey,
        response
      }));
    }).catch(error => {
      if (onFailure) {
        onFailure(error);
      }
      dispatch(_.actions.requests.failRequest({
        requestKey,
        error
      }));
    });
  };
};

/**
 * Tracked fetchByBlockId api method.
 * Tracked to the `fetchBlock` request key.
 * @param {[func]} onSuccess - onSuccess method ((response) => { ... })
 * @param {[func]} onFailure - onFailure method ((error) => { ... })
 */
exports.networkRequest = networkRequest;
const fetchBlock = _ref2 => {
  let rest = Object.assign({}, (_objectDestructuringEmpty(_ref2), _ref2));
  return (dispatch, getState) => {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.fetchBlock,
      promise: _api.default.fetchBlockById({
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState()),
        blockId: _.selectors.app.blockId(getState())
      })
    }, rest)));
  };
};

/**

 * Tracked fetchStudioView api method.
 * Tracked to the `fetchBlock` request key.
 * @param {[func]} onSuccess - onSuccess method ((response) => { ... })
 * @param {[func]} onFailure - onFailure method ((error) => { ... })
 */
exports.fetchBlock = fetchBlock;
const fetchStudioView = _ref3 => {
  let rest = Object.assign({}, (_objectDestructuringEmpty(_ref3), _ref3));
  return (dispatch, getState) => {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.fetchStudioView,
      promise: _api.default.fetchStudioView({
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState()),
        blockId: _.selectors.app.blockId(getState())
      })
    }, rest)));
  };
};

/**
 * Tracked fetchByUnitId api method.
 * Tracked to the `fetchUnit` request key.
 * @param {[func]} onSuccess - onSuccess method ((response) => { ... })
 * @param {[func]} onFailure - onFailure method ((error) => { ... })
 */
exports.fetchStudioView = fetchStudioView;
const fetchUnit = _ref4 => {
  let rest = Object.assign({}, (_objectDestructuringEmpty(_ref4), _ref4));
  return (dispatch, getState) => {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.fetchUnit,
      promise: _api.default.fetchByUnitId({
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState()),
        blockId: _.selectors.app.blockId(getState())
      })
    }, rest)));
  };
};

/**
 * Tracked saveBlock api method.  Tracked to the `saveBlock` request key.
 * @param {string} content
 * @param {[func]} onSuccess - onSuccess method ((response) => { ... })
 * @param {[func]} onFailure - onFailure method ((error) => { ... })
 */
exports.fetchUnit = fetchUnit;
const saveBlock = _ref5 => {
  let {
      content
    } = _ref5,
    rest = _objectWithoutProperties(_ref5, _excluded);
  return (dispatch, getState) => {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.saveBlock,
      promise: _api.default.saveBlock({
        blockId: _.selectors.app.blockId(getState()),
        blockType: _.selectors.app.blockType(getState()),
        learningContextId: _.selectors.app.learningContextId(getState()),
        content,
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState()),
        title: _.selectors.app.blockTitle(getState())
      })
    }, rest)));
  };
};
exports.saveBlock = saveBlock;
const uploadAsset = _ref6 => {
  let {
      asset
    } = _ref6,
    rest = _objectWithoutProperties(_ref6, _excluded2);
  return (dispatch, getState) => {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.uploadAsset,
      promise: _api.default.uploadAsset({
        learningContextId: _.selectors.app.learningContextId(getState()),
        asset,
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState())
      })
    }, rest)));
  };
};
exports.uploadAsset = uploadAsset;
const fetchAssets = _ref7 => {
  let rest = Object.assign({}, (_objectDestructuringEmpty(_ref7), _ref7));
  return (dispatch, getState) => {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.fetchAssets,
      promise: _api.default.fetchAssets({
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState()),
        learningContextId: _.selectors.app.learningContextId(getState())
      }).then(response => (0, _api.loadImages)(response.data.assets))
    }, rest)));
  };
};
exports.fetchAssets = fetchAssets;
const fetchVideos = _ref8 => {
  let rest = Object.assign({}, (_objectDestructuringEmpty(_ref8), _ref8));
  return (dispatch, getState) => {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.fetchVideos,
      promise: _api.default.fetchVideos({
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState()),
        learningContextId: _.selectors.app.learningContextId(getState())
      })
    }, rest)));
  };
};
exports.fetchVideos = fetchVideos;
const allowThumbnailUpload = _ref9 => {
  let rest = Object.assign({}, (_objectDestructuringEmpty(_ref9), _ref9));
  return (dispatch, getState) => {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.allowThumbnailUpload,
      promise: _api.default.allowThumbnailUpload({
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState())
      })
    }, rest)));
  };
};
exports.allowThumbnailUpload = allowThumbnailUpload;
const uploadThumbnail = _ref10 => {
  let {
      thumbnail,
      videoId
    } = _ref10,
    rest = _objectWithoutProperties(_ref10, _excluded3);
  return (dispatch, getState) => {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.uploadThumbnail,
      promise: _api.default.uploadThumbnail({
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState()),
        learningContextId: _.selectors.app.learningContextId(getState()),
        thumbnail,
        videoId
      })
    }, rest)));
  };
};
exports.uploadThumbnail = uploadThumbnail;
const checkTranscriptsForImport = _ref11 => {
  let {
      videoId,
      youTubeId
    } = _ref11,
    rest = _objectWithoutProperties(_ref11, _excluded4);
  return (dispatch, getState) => {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.checkTranscriptsForImport,
      promise: _api.default.checkTranscriptsForImport({
        blockId: _.selectors.app.blockId(getState()),
        videoId,
        youTubeId,
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState())
      })
    }, rest)));
  };
};
exports.checkTranscriptsForImport = checkTranscriptsForImport;
const importTranscript = _ref12 => {
  let {
      youTubeId
    } = _ref12,
    rest = _objectWithoutProperties(_ref12, _excluded5);
  return (dispatch, getState) => {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.importTranscript,
      promise: _api.default.importTranscript({
        blockId: _.selectors.app.blockId(getState()),
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState()),
        youTubeId
      })
    }, rest)));
  };
};
exports.importTranscript = importTranscript;
const deleteTranscript = _ref13 => {
  let {
      language,
      videoId
    } = _ref13,
    rest = _objectWithoutProperties(_ref13, _excluded6);
  return (dispatch, getState) => {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.deleteTranscript,
      promise: _api.default.deleteTranscript({
        blockId: _.selectors.app.blockId(getState()),
        language,
        videoId,
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState())
      })
    }, rest)));
  };
};
exports.deleteTranscript = deleteTranscript;
const uploadTranscript = _ref14 => {
  let {
      transcript,
      videoId,
      language
    } = _ref14,
    rest = _objectWithoutProperties(_ref14, _excluded7);
  return (dispatch, getState) => {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.uploadTranscript,
      promise: _api.default.uploadTranscript({
        blockId: _.selectors.app.blockId(getState()),
        transcript,
        videoId,
        language,
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState())
      })
    }, rest)));
  };
};
exports.uploadTranscript = uploadTranscript;
const updateTranscriptLanguage = _ref15 => {
  let {
      file,
      languageBeforeChange,
      newLanguageCode,
      videoId
    } = _ref15,
    rest = _objectWithoutProperties(_ref15, _excluded8);
  return (dispatch, getState) => {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.updateTranscriptLanguage,
      promise: _api.default.uploadTranscript({
        blockId: _.selectors.app.blockId(getState()),
        transcript: file,
        videoId,
        language: languageBeforeChange,
        newLanguage: newLanguageCode,
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState())
      })
    }, rest)));
  };
};
exports.updateTranscriptLanguage = updateTranscriptLanguage;
const getTranscriptFile = _ref16 => {
  let {
      language,
      videoId
    } = _ref16,
    rest = _objectWithoutProperties(_ref16, _excluded9);
  return (dispatch, getState) => {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.getTranscriptFile,
      promise: _api.default.getTranscript({
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState()),
        blockId: _.selectors.app.blockId(getState()),
        videoId,
        language
      })
    }, rest)));
  };
};
exports.getTranscriptFile = getTranscriptFile;
const fetchCourseDetails = _ref17 => {
  let rest = Object.assign({}, (_objectDestructuringEmpty(_ref17), _ref17));
  return (dispatch, getState) => {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.fetchCourseDetails,
      promise: _api.default.fetchCourseDetails({
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState()),
        learningContextId: _.selectors.app.learningContextId(getState())
      })
    }, rest)));
  };
};
exports.fetchCourseDetails = fetchCourseDetails;
const fetchAdvancedSettings = _ref18 => {
  let rest = Object.assign({}, (_objectDestructuringEmpty(_ref18), _ref18));
  return (dispatch, getState) => {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.fetchAdvancedSettings,
      promise: _api.default.fetchAdvancedSettings({
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState()),
        learningContextId: _.selectors.app.learningContextId(getState())
      })
    }, rest)));
  };
};
exports.fetchAdvancedSettings = fetchAdvancedSettings;
const fetchVideoFeatures = _ref19 => {
  let rest = Object.assign({}, (_objectDestructuringEmpty(_ref19), _ref19));
  return (dispatch, getState) => {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.fetchVideoFeatures,
      promise: _api.default.fetchVideoFeatures({
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState())
      })
    }, rest)));
  };
};
exports.fetchVideoFeatures = fetchVideoFeatures;
const uploadVideo = _ref20 => {
  let {
      data
    } = _ref20,
    rest = _objectWithoutProperties(_ref20, _excluded10);
  return (dispatch, getState) => {
    dispatch(_module.networkRequest(_objectSpread({
      requestKey: _requests.RequestKeys.uploadVideo,
      promise: _api.default.uploadVideo({
        data,
        studioEndpointUrl: _.selectors.app.studioEndpointUrl(getState()),
        learningContextId: _.selectors.app.learningContextId(getState())
      })
    }, rest)));
  };
};
exports.uploadVideo = uploadVideo;
var _default = exports.default = (0, _utils.StrictDict)({
  fetchBlock,
  fetchStudioView,
  fetchUnit,
  saveBlock,
  fetchAssets,
  fetchVideos,
  uploadAsset,
  allowThumbnailUpload,
  uploadThumbnail,
  deleteTranscript,
  uploadTranscript,
  updateTranscriptLanguage,
  fetchCourseDetails,
  getTranscriptFile,
  checkTranscriptsForImport,
  importTranscript,
  fetchAdvancedSettings,
  fetchVideoFeatures,
  uploadVideo
});
//# sourceMappingURL=requests.js.map