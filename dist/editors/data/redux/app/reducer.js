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
  blockValue: null,
  unitUrl: null,
  blockContent: null,
  studioView: null,
  saveResponse: null,
  blockId: null,
  blockTitle: null,
  blockType: null,
  learningContextId: null,
  editorInitialized: false,
  studioEndpointUrl: null,
  lmsEndpointUrl: null,
  assets: {},
  videos: {},
  courseDetails: {}
};

// eslint-disable-next-line no-unused-vars
const app = (0, _toolkit.createSlice)({
  name: 'app',
  initialState,
  reducers: {
    initialize: (state, _ref) => {
      let {
        payload
      } = _ref;
      return _objectSpread(_objectSpread({}, state), {}, {
        studioEndpointUrl: payload.studioEndpointUrl,
        lmsEndpointUrl: payload.lmsEndpointUrl,
        blockId: payload.blockId,
        learningContextId: payload.learningContextId,
        blockType: payload.blockType,
        blockValue: null
      });
    },
    setUnitUrl: (state, _ref2) => {
      let {
        payload
      } = _ref2;
      return _objectSpread(_objectSpread({}, state), {}, {
        unitUrl: payload
      });
    },
    setBlockValue: (state, _ref3) => {
      let {
        payload
      } = _ref3;
      return _objectSpread(_objectSpread({}, state), {}, {
        blockValue: payload,
        blockTitle: payload.data.display_name
      });
    },
    setStudioView: (state, _ref4) => {
      let {
        payload
      } = _ref4;
      return _objectSpread(_objectSpread({}, state), {}, {
        studioView: payload
      });
    },
    setBlockContent: (state, _ref5) => {
      let {
        payload
      } = _ref5;
      return _objectSpread(_objectSpread({}, state), {}, {
        blockContent: payload
      });
    },
    setBlockTitle: (state, _ref6) => {
      let {
        payload
      } = _ref6;
      return _objectSpread(_objectSpread({}, state), {}, {
        blockTitle: payload
      });
    },
    setSaveResponse: (state, _ref7) => {
      let {
        payload
      } = _ref7;
      return _objectSpread(_objectSpread({}, state), {}, {
        saveResponse: payload
      });
    },
    initializeEditor: state => _objectSpread(_objectSpread({}, state), {}, {
      editorInitialized: true
    }),
    setAssets: (state, _ref8) => {
      let {
        payload
      } = _ref8;
      return _objectSpread(_objectSpread({}, state), {}, {
        assets: payload
      });
    },
    setVideos: (state, _ref9) => {
      let {
        payload
      } = _ref9;
      return _objectSpread(_objectSpread({}, state), {}, {
        videos: payload
      });
    },
    setCourseDetails: (state, _ref10) => {
      let {
        payload
      } = _ref10;
      return _objectSpread(_objectSpread({}, state), {}, {
        courseDetails: payload
      });
    }
  }
});
const actions = exports.actions = (0, _utils.StrictDict)(app.actions);
const {
  reducer
} = app;
exports.reducer = reducer;
//# sourceMappingURL=reducer.js.map