"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUploadVideo = exports.useHistoryGoBack = exports.postUploadRedirect = exports.onVideoUpload = exports.navigateTo = exports.default = void 0;
var _module = _interopRequireWildcard(require("./hooks"));
var _redux = require("../../data/redux");
var _store = _interopRequireDefault(require("../../data/store"));
var appHooks = _interopRequireWildcard(require("../../hooks"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const {
  navigateTo
} = appHooks;
exports.navigateTo = navigateTo;
const postUploadRedirect = function (storeState) {
  let uploadType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'selectedVideoUrl';
  const learningContextId = _redux.selectors.app.learningContextId(storeState);
  const blockId = _redux.selectors.app.blockId(storeState);
  return videoUrl => navigateTo(`/course/${learningContextId}/editor/video/${blockId}?${uploadType}=${videoUrl}`);
};
exports.postUploadRedirect = postUploadRedirect;
const onVideoUpload = uploadType => {
  const storeState = _store.default.getState();
  return _module.postUploadRedirect(storeState, uploadType);
};
exports.onVideoUpload = onVideoUpload;
const useUploadVideo = async _ref => {
  let {
    dispatch,
    supportedFiles,
    setLoadSpinner,
    postUploadRedirectFunction
  } = _ref;
  dispatch(_redux.thunkActions.video.uploadVideo({
    supportedFiles,
    setLoadSpinner,
    postUploadRedirectFunction
  }));
};
exports.useUploadVideo = useUploadVideo;
const useHistoryGoBack = () => () => window.history.back();
exports.useHistoryGoBack = useHistoryGoBack;
var _default = exports.default = {
  postUploadRedirect,
  onVideoUpload,
  useUploadVideo,
  useHistoryGoBack
};
//# sourceMappingURL=hooks.js.map