"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VideoSettingsModal = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // import VideoPreview from './components/VideoPreview';
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