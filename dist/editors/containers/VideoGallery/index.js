"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VideoGallery = void 0;
var _react = _interopRequireWildcard(require("react"));
var _paragon = require("@openedx/paragon");
var _reactRedux = require("react-redux");
var _redux = require("../../data/redux");
var _hooks = _interopRequireDefault(require("./hooks"));
var _SelectionModal = _interopRequireDefault(require("../../sharedComponents/SelectionModal"));
var _utils = require("./utils");
var _messages = _interopRequireDefault(require("./messages"));
var _requests = require("../../data/constants/requests");
var _videoThumbnail = _interopRequireDefault(require("../../data/images/videoThumbnail.svg"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const VideoGallery = () => {
  const rawVideos = (0, _reactRedux.useSelector)(_redux.selectors.app.videos);
  const isLoaded = (0, _reactRedux.useSelector)(state => _redux.selectors.requests.isFinished(state, {
    requestKey: _requests.RequestKeys.fetchVideos
  }));
  const isFetchError = (0, _reactRedux.useSelector)(state => _redux.selectors.requests.isFailed(state, {
    requestKey: _requests.RequestKeys.fetchVideos
  }));
  const isUploadError = (0, _reactRedux.useSelector)(state => _redux.selectors.requests.isFailed(state, {
    requestKey: _requests.RequestKeys.uploadVideo
  }));
  const videos = _hooks.default.buildVideos({
    rawVideos
  });
  const handleVideoUpload = _hooks.default.useVideoUploadHandler({
    replace: true
  });
  (0, _react.useEffect)(() => {
    // If no videos exists redirects to the video upload screen
    if (isLoaded && videos.length === 0) {
      handleVideoUpload();
    }
  }, [isLoaded]);
  const {
    galleryError,
    inputError,
    fileInput,
    galleryProps,
    searchSortProps,
    selectBtnProps
  } = _hooks.default.useVideoProps({
    videos
  });
  const handleCancel = _hooks.default.useCancelHandler();
  const modalMessages = {
    confirmMsg: _messages.default.selectVideoButtonlabel,
    titleMsg: _messages.default.titleLabel,
    uploadButtonMsg: _messages.default.uploadButtonLabel,
    fetchError: _messages.default.fetchVideosError,
    uploadError: _messages.default.uploadVideoError
  };
  const thumbnailFallback = /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Image, {
    thumbnail: true,
    className: "px-6 py-4.5 h-100",
    src: _videoThumbnail.default
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectionModal.default, {
    isOpen: true,
    close: handleCancel,
    size: 'fullscreen',
    isFullscreenScroll: false,
    galleryError,
    inputError,
    fileInput,
    galleryProps: _objectSpread(_objectSpread({}, galleryProps), {}, {
      thumbnailFallback
    }),
    searchSortProps,
    selectBtnProps,
    acceptedFiles: _utils.acceptedImgKeys,
    modalMessages,
    isLoaded,
    isUploadError,
    isFetchError
  });
};
exports.VideoGallery = VideoGallery;
VideoGallery.propTypes = {};
var _default = exports.default = VideoGallery;
//# sourceMappingURL=index.js.map