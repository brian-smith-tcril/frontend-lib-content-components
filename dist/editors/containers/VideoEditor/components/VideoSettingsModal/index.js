"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VideoSettingsModal = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var _ErrorSummary = _interopRequireDefault(require("./ErrorSummary"));
var _DurationWidget = _interopRequireDefault(require("./components/DurationWidget"));
var _HandoutWidget = _interopRequireDefault(require("./components/HandoutWidget"));
var _LicenseWidget = _interopRequireDefault(require("./components/LicenseWidget"));
var _ThumbnailWidget = _interopRequireDefault(require("./components/ThumbnailWidget"));
var _TranscriptWidget = _interopRequireDefault(require("./components/TranscriptWidget"));
var _VideoSourceWidget = _interopRequireDefault(require("./components/VideoSourceWidget"));
var _VideoPreviewWidget = _interopRequireDefault(require("./components/VideoPreviewWidget"));
require("./index.scss");
var _SocialShareWidget = _interopRequireDefault(require("./components/SocialShareWidget"));
var _messages = _interopRequireDefault(require("../../messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } // import VideoPreview from './components/VideoPreview';
const VideoSettingsModal = _ref => {
  let {
    onReturn,
    isLibrary
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [!isLibrary && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Button, {
      variant: "link",
      className: "text-primary-500",
      size: "sm",
      onClick: onReturn,
      style: {
        textDecoration: 'none',
        marginLeft: '3px'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
        src: _icons.ArrowBackIos,
        style: {
          height: '13px'
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.replaceVideoButtonLabel))]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorSummary.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VideoPreviewWidget.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_VideoSourceWidget.default, {}), !isLibrary && /*#__PURE__*/(0, _jsxRuntime.jsx)(_SocialShareWidget.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ThumbnailWidget.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TranscriptWidget.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DurationWidget.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_HandoutWidget.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LicenseWidget.default, {})]
  });
};
exports.VideoSettingsModal = VideoSettingsModal;
VideoSettingsModal.propTypes = {
  onReturn: _propTypes.default.func.isRequired,
  isLibrary: _propTypes.default.func.isRequired
};
var _default = exports.default = (0, _i18n.injectIntl)(VideoSettingsModal);
//# sourceMappingURL=index.js.map