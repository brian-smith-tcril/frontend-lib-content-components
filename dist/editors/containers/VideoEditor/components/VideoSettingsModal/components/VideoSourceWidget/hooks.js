"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.videoIdChangeAlert = exports.state = exports.sourceHooks = exports.fallbackHooks = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _redux = require("../../../../../../data/redux");
var _api = require("../../../../../../data/services/cms/api");
var requests = _interopRequireWildcard(require("../../../../../../data/redux/thunkActions/requests"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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