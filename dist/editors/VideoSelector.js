"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VideoSelector = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _VideoGallery = _interopRequireDefault(require("./containers/VideoGallery"));
var hooks = _interopRequireWildcard(require("./hooks"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const VideoSelector = _ref => {
  let {
    blockId,
    learningContextId,
    lmsEndpointUrl,
    studioEndpointUrl
  } = _ref;
  const dispatch = (0, _reactRedux.useDispatch)();
  hooks.initializeApp({
    dispatch,
    data: {
      blockId,
      blockType: 'video',
      learningContextId,
      lmsEndpointUrl,
      studioEndpointUrl
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_VideoGallery.default, {});
};
exports.VideoSelector = VideoSelector;
VideoSelector.propTypes = {
  blockId: _propTypes.default.string.isRequired,
  learningContextId: _propTypes.default.string.isRequired,
  lmsEndpointUrl: _propTypes.default.string.isRequired,
  studioEndpointUrl: _propTypes.default.string.isRequired
};
var _default = exports.default = VideoSelector;
//# sourceMappingURL=VideoSelector.js.map