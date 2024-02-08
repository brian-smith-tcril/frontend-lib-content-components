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
var _module = _interopRequireWildcard(require("./VideoEditorModal"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import SelectVideoModal from './SelectVideoModal';

const {
  navigateTo
} = appHooks;
exports.navigateTo = navigateTo;
const hooks = exports.hooks = {
  initialize: (dispatch, selectedVideoId, selectedVideoUrl) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    _react.default.useEffect(() => {
      dispatch(_redux.thunkActions.video.loadVideoData(selectedVideoId, selectedVideoUrl));
    }, []);
  },
  returnToGallery: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const learningContextId = (0, _reactRedux.useSelector)(_redux.selectors.app.learningContextId);
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  const onReturn = _module.hooks.returnToGallery();
  _module.hooks.initialize(dispatch, selectedVideoId, selectedVideoUrl);
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