"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.initialState = exports.actions = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _utils = require("../../../utils");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const initialState = exports.initialState = {
  videoSource: '',
  videoId: '',
  fallbackVideos: ['', ''],
  allowVideoDownloads: false,
  allowVideoSharing: {
    level: 'block',
    value: false
  },
  videoSharingEnabledForAll: false,
  videoSharingEnabledForCourse: false,
  videoSharingLearnMoreLink: '',
  thumbnail: null,
  transcripts: [],
  selectedVideoTranscriptUrls: {},
  allowTranscriptDownloads: false,
  duration: {
    startTime: '00:00:00',
    stopTime: '00:00:00',
    total: '00:00:00'
  },
  showTranscriptByDefault: false,
  handout: null,
  licenseType: null,
  licenseDetails: {
    attribution: true,
    noncommercial: false,
    noDerivatives: false,
    shareAlike: false
  },
  courseLicenseType: null,
  courseLicenseDetails: {
    attribution: true,
    noncommercial: false,
    noDerivatives: false,
    shareAlike: false
  },
  allowThumbnailUpload: null,
  allowTranscriptImport: false
};

// eslint-disable-next-line no-unused-vars
const video = (0, _toolkit.createSlice)({
  name: 'video',
  initialState,
  reducers: {
    updateField: (state, _ref) => {
      let {
        payload
      } = _ref;
      return _objectSpread(_objectSpread({}, state), payload);
    },
    load: (state, _ref2) => {
      let {
        payload
      } = _ref2;
      return _objectSpread({}, payload);
    }
  }
});
const actions = exports.actions = (0, _utils.StrictDict)(video.actions);
const {
  reducer
} = video;
exports.reducer = reducer;
//# sourceMappingURL=reducer.js.map