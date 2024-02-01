"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.default = exports.VideoEditor = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@openedx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _redux = require("../../data/redux");
var _requests = require("../../data/constants/requests");
var _EditorContainer = _interopRequireDefault(require("../EditorContainer"));
var _VideoEditorModal = _interopRequireDefault(require("./components/VideoEditorModal"));
var _hooks = require("./hooks");
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const VideoEditor = _ref => {
  let {
    onClose,
    returnFunction,
    // injected
    intl,
    // redux
    studioViewFinished,
    isLibrary
  } = _ref;
  const {
    error,
    validateEntry
  } = (0, _hooks.errorsHook)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_hooks.ErrorContext.Provider, {
    value: error,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_EditorContainer.default, {
      getContent: (0, _hooks.fetchVideoContent)(),
      onClose: onClose,
      returnFunction: returnFunction,
      validateEntry: validateEntry,
      children: studioViewFinished ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "video-editor",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VideoEditorModal.default, {
          isLibrary
        })
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: {
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Spinner, {
          animation: "border",
          className: "m-3",
          screenreadertext: intl.formatMessage(_messages.default.spinnerScreenReaderText)
        })
      })
    })
  });
};
exports.VideoEditor = VideoEditor;
VideoEditor.defaultProps = {
  onClose: null,
  returnFunction: null
};
VideoEditor.propTypes = {
  onClose: _propTypes.default.func,
  returnFunction: _propTypes.default.func,
  // injected
  intl: _i18n.intlShape.isRequired,
  // redux
  studioViewFinished: _propTypes.default.bool.isRequired,
  isLibrary: _propTypes.default.bool.isRequired
};
const mapStateToProps = state => ({
  studioViewFinished: _redux.selectors.requests.isFinished(state, {
    requestKey: _requests.RequestKeys.fetchStudioView
  }),
  isLibrary: _redux.selectors.app.isLibrary(state)
});
exports.mapStateToProps = mapStateToProps;
const mapDispatchToProps = exports.mapDispatchToProps = {};
var _default = exports.default = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(VideoEditor));
//# sourceMappingURL=index.js.map