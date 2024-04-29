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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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