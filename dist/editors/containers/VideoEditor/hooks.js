"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = exports.fetchVideoContent = exports.errorsHook = exports.ErrorContext = void 0;
var _react = require("react");
var _redux = require("../../data/redux");
var _utils = require("../../utils");
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ErrorContext = exports.ErrorContext = /*#__PURE__*/(0, _react.createContext)();
const state = exports.state = (0, _utils.StrictDict)({
  /* eslint-disable react-hooks/rules-of-hooks */
  durationErrors: val => (0, _react.useState)(val),
  handoutErrors: val => (0, _react.useState)(val),
  licenseErrors: val => (0, _react.useState)(val),
  thumbnailErrors: val => (0, _react.useState)(val),
  transcriptsErrors: val => (0, _react.useState)(val),
  videoSourceErrors: val => (0, _react.useState)(val)
  /* eslint-enable react-hooks/rules-of-hooks */
});
const errorsHook = () => {
  const [durationErrors, setDurationErrors] = _module.state.durationErrors({});
  const [handoutErrors, setHandoutErrors] = _module.state.handoutErrors({});
  const [licenseErrors, setLicenseErrors] = _module.state.licenseErrors({});
  const [thumbnailErrors, setThumbnailErrors] = _module.state.thumbnailErrors({});
  const [transcriptsErrors, setTranscriptsErrors] = _module.state.transcriptsErrors({});
  const [videoSourceErrors, setVideoSourceErrors] = _module.state.videoSourceErrors({});
  return {
    error: {
      duration: [durationErrors, setDurationErrors],
      handout: [handoutErrors, setHandoutErrors],
      license: [licenseErrors, setLicenseErrors],
      thumbnail: [thumbnailErrors, setThumbnailErrors],
      transcripts: [transcriptsErrors, setTranscriptsErrors],
      videoSource: [videoSourceErrors, setVideoSourceErrors]
    },
    validateEntry: () => {
      if (Object.keys(durationErrors).length > 0) {
        return false;
      }
      if (Object.keys(handoutErrors).length > 0) {
        return false;
      }
      if (Object.keys(licenseErrors).length > 0) {
        return false;
      }
      if (Object.keys(thumbnailErrors).length > 0) {
        return false;
      }
      if (Object.keys(transcriptsErrors).length > 0) {
        return false;
      }
      if (Object.keys(videoSourceErrors).length > 0) {
        return false;
      }
      return true;
    }
  };
};
exports.errorsHook = errorsHook;
const fetchVideoContent = () => _ref => {
  let {
    dispatch
  } = _ref;
  return dispatch(_redux.thunkActions.video.saveVideoData());
};
exports.fetchVideoContent = fetchVideoContent;
//# sourceMappingURL=hooks.js.map