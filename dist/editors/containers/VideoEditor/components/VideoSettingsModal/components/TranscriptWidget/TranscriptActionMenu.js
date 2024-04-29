"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.hooks = exports.default = exports.TranscriptActionMenu = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _redux = require("../../../../../../data/redux");
var _FileInput = require("../../../../../../sharedComponents/FileInput");
var _module = _interopRequireWildcard(require("./TranscriptActionMenu"));
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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