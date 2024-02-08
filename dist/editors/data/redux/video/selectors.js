"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.videoSettings = exports.video = exports.simpleSelectors = exports.openLanguages = exports.getTranscriptDownloadUrl = exports.getHandoutDownloadUrl = exports.default = exports.buildTranscriptUrl = void 0;
var _reselect = require("reselect");
var _utils = require("../../../utils");
var _video = require("../../constants/video");
var _reducer = require("./reducer");
var _module = _interopRequireWildcard(require("./selectors"));
var AppSelectors = _interopRequireWildcard(require("../app/selectors"));
var _urls = require("../../services/cms/urls");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const stateKeys = (0, _utils.keyStore)(_reducer.initialState);
const video = state => state.video;
exports.video = video;
const simpleSelectors = exports.simpleSelectors = [stateKeys.videoSource, stateKeys.videoId, stateKeys.fallbackVideos, stateKeys.allowVideoDownloads, stateKeys.videoSharingEnabledForCourse, stateKeys.videoSharingLearnMoreLink, stateKeys.videoSharingEnabledForAll, stateKeys.allowVideoSharing, stateKeys.thumbnail, stateKeys.transcripts, stateKeys.selectedVideoTranscriptUrls, stateKeys.allowTranscriptDownloads, stateKeys.duration, stateKeys.showTranscriptByDefault, stateKeys.handout, stateKeys.licenseType, stateKeys.licenseDetails, stateKeys.courseLicenseType, stateKeys.courseLicenseDetails, stateKeys.allowThumbnailUpload, stateKeys.allowTranscriptImport].reduce((obj, key) => _objectSpread(_objectSpread({}, obj), {}, {
  [key]: state => state.video[key]
}), {});
const openLanguages = exports.openLanguages = (0, _reselect.createSelector)([_module.simpleSelectors.transcripts], transcripts => {
  if (!transcripts) {
    return _video.videoTranscriptLanguages;
  }
  const open = Object.keys(_video.videoTranscriptLanguages).filter(lang => !transcripts.includes(lang));
  return open;
});
const getTranscriptDownloadUrl = exports.getTranscriptDownloadUrl = (0, _reselect.createSelector)([AppSelectors.simpleSelectors.studioEndpointUrl, AppSelectors.simpleSelectors.blockId], (studioEndpointUrl, blockId) => _ref => {
  let {
    language
  } = _ref;
  return (0, _urls.downloadVideoTranscriptURL)({
    studioEndpointUrl,
    blockId,
    language
  });
});
const buildTranscriptUrl = exports.buildTranscriptUrl = (0, _reselect.createSelector)([AppSelectors.simpleSelectors.studioEndpointUrl], studioEndpointUrl => _ref2 => {
  let {
    transcriptUrl
  } = _ref2;
  return (0, _urls.mediaTranscriptURL)({
    studioEndpointUrl,
    transcriptUrl
  });
});
const getHandoutDownloadUrl = exports.getHandoutDownloadUrl = (0, _reselect.createSelector)([AppSelectors.simpleSelectors.studioEndpointUrl], studioEndpointUrl => _ref3 => {
  let {
    handout
  } = _ref3;
  return (0, _urls.downloadVideoHandoutUrl)({
    studioEndpointUrl,
    handout
  });
});
const videoSettings = exports.videoSettings = (0, _reselect.createSelector)([_module.simpleSelectors.videoSource, _module.simpleSelectors.videoId, _module.simpleSelectors.fallbackVideos, _module.simpleSelectors.allowVideoDownloads, _module.simpleSelectors.allowVideoSharing, _module.simpleSelectors.thumbnail, _module.simpleSelectors.transcripts, _module.simpleSelectors.selectedVideoTranscriptUrls, _module.simpleSelectors.allowTranscriptDownloads, _module.simpleSelectors.duration, _module.simpleSelectors.showTranscriptByDefault, _module.simpleSelectors.handout, _module.simpleSelectors.licenseType, _module.simpleSelectors.licenseDetails], (videoSource, videoId, fallbackVideos, allowVideoDownloads, allowVideoSharing, thumbnail, transcripts, selectedVideoTranscriptUrls, allowTranscriptDownloads, duration, showTranscriptByDefault, handout, licenseType, licenseDetails) => ({
  videoSource,
  videoId,
  fallbackVideos,
  allowVideoDownloads,
  allowVideoSharing,
  thumbnail,
  transcripts,
  selectedVideoTranscriptUrls,
  allowTranscriptDownloads,
  duration,
  showTranscriptByDefault,
  handout,
  licenseType,
  licenseDetails
}));
var _default = exports.default = _objectSpread(_objectSpread({}, simpleSelectors), {}, {
  openLanguages,
  getTranscriptDownloadUrl,
  buildTranscriptUrl,
  getHandoutDownloadUrl,
  videoSettings
});
//# sourceMappingURL=selectors.js.map