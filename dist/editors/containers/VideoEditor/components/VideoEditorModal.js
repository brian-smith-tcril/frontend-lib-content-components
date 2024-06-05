"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigateTo = exports.hooks = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var appHooks = _interopRequireWildcard(require("../../../hooks"));
var _redux = require("../../../data/redux");
var _VideoSettingsModal = _interopRequireDefault(require("./VideoSettingsModal"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import SelectVideoModal from './SelectVideoModal';

const {
  navigateTo
} = appHooks;
exports.navigateTo = navigateTo;
const hooks = exports.hooks = {
  initialize: (dispatch, selectedVideoId, selectedVideoUrl) => {
    dispatch(_redux.thunkActions.video.loadVideoData(selectedVideoId, selectedVideoUrl));
  },
  useReturnToGallery: () => {
    const learningContextId = (0, _reactRedux.useSelector)(_redux.selectors.app.learningContextId);
    const blockId = (0, _reactRedux.useSelector)(_redux.selectors.app.blockId);
    return () => navigateTo(`/course/${learningContextId}/editor/course-videos/${blockId}`);
  }
};
const VideoEditorModal = _ref => {
  let {
    close,
    isOpen,
    isLibrary
  } = _ref;
  const dispatch = (0, _reactRedux.useDispatch)();
  const searchParams = new URLSearchParams(document.location.search);
  const selectedVideoId = searchParams.get('selectedVideoId');
  const selectedVideoUrl = searchParams.get('selectedVideoUrl');
  const onReturn = hooks.useReturnToGallery();
  hooks.initialize(dispatch, selectedVideoId, selectedVideoUrl);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_VideoSettingsModal.default, {
    close,
    isOpen,
    onReturn,
    isLibrary
  });
  // TODO: add logic to show SelectVideoModal if no selection
};
VideoEditorModal.defaultProps = {};
VideoEditorModal.propTypes = {
  close: _propTypes.default.func.isRequired,
  isOpen: _propTypes.default.bool.isRequired,
  isLibrary: _propTypes.default.bool.isRequired
};
var _default = exports.default = VideoEditorModal;
//# sourceMappingURL=VideoEditorModal.js.map