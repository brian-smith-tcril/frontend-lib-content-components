"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.hooks = exports.default = exports.TranscriptActionMenu = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _redux = require("../../../../../../data/redux");
var _FileInput = require("../../../../../../sharedComponents/FileInput");
var _module = _interopRequireWildcard(require("./TranscriptActionMenu"));
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const hooks = exports.hooks = {
  replaceFileCallback: _ref => {
    let {
      language,
      dispatch
    } = _ref;
    return file => {
      dispatch(_redux.thunkActions.video.replaceTranscript({
        newFile: file,
        newFilename: file.name,
        language
      }));
    };
  }
};
const TranscriptActionMenu = _ref2 => {
  let {
    index,
    language,
    transcriptUrl,
    launchDeleteConfirmation,
    // redux
    getTranscriptDownloadUrl,
    buildTranscriptUrl
  } = _ref2;
  const input = (0, _FileInput.fileInput)({
    onAddFile: _module.hooks.replaceFileCallback({
      language,
      dispatch: (0, _reactRedux.useDispatch)()
    })
  });
  const downloadLink = transcriptUrl ? buildTranscriptUrl({
    transcriptUrl
  }) : getTranscriptDownloadUrl({
    language
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Dropdown, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Toggle, {
      id: "dropdown-toggle-with-iconbutton-video-transcript-widget",
      as: _paragon.IconButton,
      src: _icons.MoreHoriz,
      iconAs: _paragon.Icon,
      variant: "primary",
      alt: "Actions dropdown"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Dropdown.Menu, {
      className: "video_transcript Action Menu",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Item, {
        onClick: input.click,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.replaceTranscript))
      }, `transcript-actions-${index}-replace`), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Item, {
        href: downloadLink,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.downloadTranscript))
      }, `transcript-actions-${index}-download`), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Item, {
        onClick: launchDeleteConfirmation,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.deleteTranscript))
      }, `transcript-actions-${index}-delete`)]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FileInput.FileInput, {
      fileInput: input,
      acceptedFiles: ".srt"
    })]
  });
};
exports.TranscriptActionMenu = TranscriptActionMenu;
TranscriptActionMenu.defaultProps = {
  transcriptUrl: undefined
};
TranscriptActionMenu.propTypes = {
  index: _propTypes.default.number.isRequired,
  language: _propTypes.default.string.isRequired,
  transcriptUrl: _propTypes.default.string,
  launchDeleteConfirmation: _propTypes.default.func.isRequired,
  // redux
  getTranscriptDownloadUrl: _propTypes.default.func.isRequired,
  buildTranscriptUrl: _propTypes.default.func.isRequired
};
const mapStateToProps = state => ({
  getTranscriptDownloadUrl: _redux.selectors.video.getTranscriptDownloadUrl(state),
  buildTranscriptUrl: _redux.selectors.video.buildTranscriptUrl(state)
});
exports.mapStateToProps = mapStateToProps;
const mapDispatchToProps = exports.mapDispatchToProps = {
  downloadTranscript: _redux.thunkActions.video.downloadTranscript
};
var _default = exports.default = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TranscriptActionMenu));
//# sourceMappingURL=TranscriptActionMenu.js.map