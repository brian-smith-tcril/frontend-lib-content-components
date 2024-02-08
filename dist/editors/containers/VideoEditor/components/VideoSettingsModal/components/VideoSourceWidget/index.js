"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VideoSourceWidget = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var widgetHooks = _interopRequireWildcard(require("../hooks"));
var hooks = _interopRequireWildcard(require("./hooks"));
var _messages = _interopRequireDefault(require("./messages"));
var _ErrorAlert = require("../../../../../../sharedComponents/ErrorAlerts/ErrorAlert");
var _CollapsibleFormWidget = _interopRequireDefault(require("../CollapsibleFormWidget"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
 * Collapsible Form widget controlling video source as well as fallback sources
 */
const VideoSourceWidget = _ref => {
  let {
    // injected
    intl
  } = _ref;
  const dispatch = (0, _reactRedux.useDispatch)();
  const {
    videoId,
    videoSource: source,
    fallbackVideos,
    allowVideoDownloads: allowDownload
  } = widgetHooks.widgetValues({
    dispatch,
    fields: {
      [widgetHooks.selectorKeys.videoSource]: widgetHooks.genericWidget,
      [widgetHooks.selectorKeys.videoId]: widgetHooks.genericWidget,
      [widgetHooks.selectorKeys.fallbackVideos]: widgetHooks.arrayWidget,
      [widgetHooks.selectorKeys.allowVideoDownloads]: widgetHooks.genericWidget
    }
  });
  const {
    videoIdChangeAlert
  } = hooks.videoIdChangeAlert();
  const {
    updateVideoId,
    updateVideoURL
  } = hooks.sourceHooks({
    dispatch,
    previousVideoId: videoId.formValue,
    setAlert: videoIdChangeAlert.set
  });
  const {
    addFallbackVideo,
    deleteFallbackVideo
  } = hooks.fallbackHooks({
    fallbackVideos: fallbackVideos.formValue,
    dispatch
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_CollapsibleFormWidget.default, {
    fontSize: "x-small",
    title: intl.formatMessage(_messages.default.titleLabel),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorAlert.ErrorAlert, {
      dismissError: videoIdChangeAlert.dismiss,
      hideHeading: true,
      isError: videoIdChangeAlert.show,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.videoIdChangeAlert))
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Form.Group, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "border-primary-100 border-bottom pb-4",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
          floatingLabel: intl.formatMessage(_messages.default.videoIdLabel),
          onChange: videoId.onChange,
          onBlur: updateVideoId,
          value: videoId.local
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control.Feedback, {
          className: "text-primary-300 mb-4",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.videoIdFeedback))
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
          floatingLabel: intl.formatMessage(_messages.default.videoUrlLabel),
          onChange: source.onChange,
          onBlur: e => updateVideoURL(e, videoId.local),
          value: source.local
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control.Feedback, {
          className: "text-primary-300",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.videoUrlFeedback))
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "mt-4",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.fallbackVideoTitle))
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "mt-3",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.fallbackVideoMessage))
      }), fallbackVideos.formValue.length > 0 ? fallbackVideos.formValue.map((videoUrl, index) => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Form.Row, {
        className: "mt-3.5 mx-0 flex-nowrap",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
          floatingLabel: intl.formatMessage(_messages.default.fallbackVideoLabel),
          onChange: fallbackVideos.onChange(index),
          value: fallbackVideos.local[index],
          onBlur: fallbackVideos.onBlur(index)
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.IconButtonWithTooltip, {
          tooltipPlacement: "top",
          tooltipContent: intl.formatMessage(_messages.default.deleteFallbackVideo),
          src: _icons.DeleteOutline,
          iconAs: _paragon.Icon,
          alt: intl.formatMessage(_messages.default.deleteFallbackVideo),
          onClick: () => deleteFallbackVideo(videoUrl)
        }, `top-delete-${videoUrl}`)]
      })) : null, /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
        className: "mt-4.5",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Checkbox, {
          checked: allowDownload.local,
          className: "decorative-control-label",
          onChange: allowDownload.onCheckedChange,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "small text-gray-700",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.allowDownloadCheckboxLabel))
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.OverlayTrigger, {
          placement: "top",
          overlay: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Tooltip, {
            id: "tooltip-top",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.allowDownloadTooltipMessage))
          }),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
            src: _icons.InfoOutline,
            style: {
              height: '16px',
              width: '16px'
            }
          })
        }, "top"), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {})]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "my-4 border-primary-100 border-bottom"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
      className: "text-primary-500 font-weight-bold pl-0",
      size: "sm",
      iconBefore: _icons.Add,
      variant: "link",
      onClick: () => addFallbackVideo(),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.addButtonLabel))
    })]
  });
};
exports.VideoSourceWidget = VideoSourceWidget;
VideoSourceWidget.propTypes = {
  // injected
  intl: _i18n.intlShape.isRequired
};
var _default = exports.default = (0, _i18n.injectIntl)(VideoSourceWidget);
//# sourceMappingURL=index.js.map