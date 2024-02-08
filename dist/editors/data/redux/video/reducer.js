"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.initialState = exports.actions = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _utils = require("../../../utils");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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