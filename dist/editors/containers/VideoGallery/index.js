"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VideoGallery = void 0;
var _react = _interopRequireWildcard(require("react"));
var _paragon = require("@edx/paragon");
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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