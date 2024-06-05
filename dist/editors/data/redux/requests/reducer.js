"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.initialState = exports.actions = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _utils = require("../../../utils");
var _requests = require("../../constants/requests");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const initialState = exports.initialState = {
  [_requests.RequestKeys.fetchUnit]: {
    status: _requests.RequestStates.inactive
  },
  [_requests.RequestKeys.fetchBlock]: {
    status: _requests.RequestStates.inactive
  },
  [_requests.RequestKeys.fetchStudioView]: {
    status: _requests.RequestStates.inactive
  },
  [_requests.RequestKeys.saveBlock]: {
    status: _requests.RequestStates.inactive
  },
  [_requests.RequestKeys.uploadAsset]: {
    status: _requests.RequestStates.inactive
  },
  [_requests.RequestKeys.allowThumbnailUpload]: {
    status: _requests.RequestStates.inactive
  },
  [_requests.RequestKeys.uploadThumbnail]: {
    status: _requests.RequestStates.inactive
  },
  [_requests.RequestKeys.uploadTranscript]: {
    status: _requests.RequestStates.inactive
  },
  [_requests.RequestKeys.deleteTranscript]: {
    status: _requests.RequestStates.inactive
  },
  [_requests.RequestKeys.fetchCourseDetails]: {
    status: _requests.RequestStates.inactive
  },
  [_requests.RequestKeys.fetchAssets]: {
    status: _requests.RequestStates.inactive
  },
  [_requests.RequestKeys.fetchVideos]: {
    status: _requests.RequestStates.inactive
  },
  [_requests.RequestKeys.uploadVideo]: {
    status: _requests.RequestStates.inactive
  },
  [_requests.RequestKeys.checkTranscriptsForImport]: {
    status: _requests.RequestStates.inactive
  },
  [_requests.RequestKeys.importTranscript]: {
    status: _requests.RequestStates.inactive
  },
  [_requests.RequestKeys.fetchVideoFeatures]: {
    status: _requests.RequestStates.inactive
  },
  [_requests.RequestKeys.fetchAdvancedSettings]: {
    status: _requests.RequestStates.inactive
  }
};

// eslint-disable-next-line no-unused-vars
const requests = (0, _toolkit.createSlice)({
  name: 'requests',
  initialState,
  reducers: {
    startRequest: (state, _ref) => {
      let {
        payload
      } = _ref;
      return _objectSpread(_objectSpread({}, state), {}, {
        [payload]: {
          status: _requests.RequestStates.pending
        }
      });
    },
    completeRequest: (state, _ref2) => {
      let {
        payload
      } = _ref2;
      return _objectSpread(_objectSpread({}, state), {}, {
        [payload.requestKey]: {
          status: _requests.RequestStates.completed,
          response: payload.response
        }
      });
    },
    failRequest: (state, _ref3) => {
      let {
        payload
      } = _ref3;
      return _objectSpread(_objectSpread({}, state), {}, {
        [payload.requestKey]: {
          status: _requests.RequestStates.failed,
          error: payload.error
        }
      });
    },
    clearRequest: (state, _ref4) => {
      let {
        payload
      } = _ref4;
      return _objectSpread(_objectSpread({}, state), {}, {
        [payload.requestKey]: {}
      });
    }
  }
});
const actions = exports.actions = (0, _utils.StrictDict)(requests.actions);
const {
  reducer
} = requests;
exports.reducer = reducer;
//# sourceMappingURL=reducer.js.map