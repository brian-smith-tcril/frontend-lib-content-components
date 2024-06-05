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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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