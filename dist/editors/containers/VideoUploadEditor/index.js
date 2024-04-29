"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VideoUploadEditor = void 0;
var _react = _interopRequireDefault(require("react"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
require("./index.scss");
var _messages = _interopRequireDefault(require("./messages"));
var _VideoUploader = require("./VideoUploader");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const VideoUploadEditor = () => {
  const [loading, setLoading] = _react.default.useState(false);
  const intl = (0, _i18n.useIntl)();
  return !loading ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "d-flex marked-area flex-column p-3",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VideoUploader.VideoUploader, {
      setLoading: setLoading
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
  });
};
exports.VideoUploadEditor = VideoUploadEditor;
var _default = exports.default = VideoUploadEditor;
//# sourceMappingURL=index.js.map