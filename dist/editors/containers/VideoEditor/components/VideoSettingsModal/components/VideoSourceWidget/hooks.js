"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.videoIdChangeAlert = exports.state = exports.sourceHooks = exports.fallbackHooks = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _redux = require("../../../../../../data/redux");
var _api = require("../../../../../../data/services/cms/api");
var requests = _interopRequireWildcard(require("../../../../../../data/redux/thunkActions/requests"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const state = exports.state = {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  showVideoIdChangeAlert: args => _react.default.useState(args)
};
const sourceHooks = _ref => {
  let {
    dispatch,
    previousVideoId,
    setAlert
  } = _ref;
  return {
    updateVideoURL: (e, videoId) => {
      const videoUrl = e.target.value;
      dispatch(_redux.actions.video.updateField({
        videoSource: videoUrl
      }));
      const youTubeId = (0, _api.parseYoutubeId)(videoUrl);
      if (youTubeId) {
        dispatch(requests.checkTranscriptsForImport({
          videoId,
          youTubeId,
          onSuccess: response => {
            if (response.data.command === 'import') {
              dispatch(_redux.actions.video.updateField({
                allowTranscriptImport: true
              }));
            }
          }
        }));
      }
    },
    updateVideoId: e => {
      const updatedVideoId = e.target.value;
      if (previousVideoId !== updatedVideoId && updatedVideoId) {
        setAlert();
      }
      dispatch(_redux.actions.video.updateField({
        videoId: updatedVideoId
      }));
    }
  };
};
exports.sourceHooks = sourceHooks;
const fallbackHooks = _ref2 => {
  let {
    fallbackVideos,
    dispatch
  } = _ref2;
  return {
    addFallbackVideo: () => dispatch(_redux.actions.video.updateField({
      fallbackVideos: [...fallbackVideos, '']
    })),
    deleteFallbackVideo: videoUrl => {
      const updatedFallbackVideos = fallbackVideos.splice(fallbackVideos.indexOf(videoUrl), 1);
      dispatch(_redux.actions.video.updateField({
        fallbackVideos: updatedFallbackVideos
      }));
    }
  };
};
exports.fallbackHooks = fallbackHooks;
const videoIdChangeAlert = () => {
  const [showVideoIdChangeAlert, setShowVideoIdChangeAlert] = state.showVideoIdChangeAlert(false);
  return {
    videoIdChangeAlert: {
      show: showVideoIdChangeAlert,
      set: () => setShowVideoIdChangeAlert(true),
      dismiss: () => setShowVideoIdChangeAlert(false)
    }
  };
};
exports.videoIdChangeAlert = videoIdChangeAlert;
var _default = exports.default = {
  videoIdChangeAlert,
  sourceHooks,
  fallbackHooks
};
//# sourceMappingURL=hooks.js.map