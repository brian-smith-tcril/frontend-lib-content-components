"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ErrorBoundary = _interopRequireDefault(require("./sharedComponents/ErrorBoundary"));
var _VideoSelector = _interopRequireDefault(require("./VideoSelector"));
var _store = _interopRequireDefault(require("./data/store"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const VideoSelectorPage = _ref => {
  let {
    blockId,
    courseId,
    lmsEndpointUrl,
    studioEndpointUrl
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRedux.Provider, {
    store: _store.default,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorBoundary.default, {
      learningContextId: courseId,
      studioEndpointUrl,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VideoSelector.default, {
        blockId,
        learningContextId: courseId,
        lmsEndpointUrl,
        studioEndpointUrl
      })
    })
  });
};
VideoSelectorPage.defaultProps = {
  blockId: null,
  courseId: null,
  lmsEndpointUrl: null,
  studioEndpointUrl: null
};
VideoSelectorPage.propTypes = {
  blockId: _propTypes.default.string,
  courseId: _propTypes.default.string,
  lmsEndpointUrl: _propTypes.default.string,
  studioEndpointUrl: _propTypes.default.string
};
var _default = exports.default = VideoSelectorPage;
//# sourceMappingURL=VideoSelectorPage.js.map