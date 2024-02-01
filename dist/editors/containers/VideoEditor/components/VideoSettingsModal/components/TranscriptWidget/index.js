"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.hooks = exports.default = exports.TranscriptWidget = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _redux = require("../../../../../../data/redux");
var _messages = _interopRequireDefault(require("./messages"));
var _requests = require("../../../../../../data/constants/requests");
var _video = require("../../../../../../data/constants/video");
var _ErrorAlert = _interopRequireDefault(require("../../../../../../sharedComponents/ErrorAlerts/ErrorAlert"));
var _CollapsibleFormWidget = _interopRequireDefault(require("../CollapsibleFormWidget"));
var _ImportTranscriptCard = _interopRequireDefault(require("./ImportTranscriptCard"));
var _Transcript = _interopRequireDefault(require("./Transcript"));
var _hooks = require("../../../../hooks");
var _module = _interopRequireWildcard(require("./index"));
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
  updateErrors: _ref => {
    let {
      isUploadError,
      isDeleteError
    } = _ref;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [error, setError] = _react.default.useContext(_hooks.ErrorContext).transcripts;
    if (isUploadError) {
      setError(_objectSpread(_objectSpread({}, error), {}, {
        uploadError: _messages.default.uploadTranscriptError.defaultMessage
      }));
    }
    if (isDeleteError) {
      setError(_objectSpread(_objectSpread({}, error), {}, {
        deleteError: _messages.default.deleteTranscriptError.defaultMessage
      }));
    }
  },
  transcriptLanguages: (transcripts, intl) => {
    const languages = [];
    if (transcripts && transcripts.length > 0) {
      const fullTextTranslatedStrings = (0, _video.in8lTranscriptLanguages)(intl);
      transcripts.forEach(transcript => {
        if (!(transcript === '')) {
          languages.push(fullTextTranslatedStrings[transcript]);
        }
      });
      return languages.join(', ');
    }
    return 'None';
  },
  hasTranscripts: transcripts => {
    if (transcripts && transcripts.length > 0) {
      return true;
    }
    return false;
  },
  onAddNewTranscript: _ref2 => {
    let {
      transcripts,
      updateField
    } = _ref2;
    // keep blank lang code for now, will be updated once lang is selected.
    if (!transcripts) {
      updateField({
        transcripts: ['']
      });
      return;
    }
    const newTranscripts = [...transcripts, ''];
    updateField({
      transcripts: newTranscripts
    });
  }
};

/**
 * Collapsible Form widget controlling video transcripts
 */
const TranscriptWidget = _ref3 => {
  let {
    // redux
    transcripts,
    selectedVideoTranscriptUrls,
    allowTranscriptDownloads,
    showTranscriptByDefault,
    allowTranscriptImport,
    updateField,
    isUploadError,
    isDeleteError,
    // injected
    intl
  } = _ref3;
  const [error] = _react.default.useContext(_hooks.ErrorContext).transcripts;
  const [showImportCard, setShowImportCard] = _react.default.useState(true);
  const fullTextLanguages = _module.hooks.transcriptLanguages(transcripts, intl);
  const hasTranscripts = _module.hooks.hasTranscripts(transcripts);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_CollapsibleFormWidget.default, {
    fontSize: "x-small",
    isError: Object.keys(error).length !== 0,
    subtitle: fullTextLanguages,
    title: intl.formatMessage(_messages.default.title),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorAlert.default, {
      hideHeading: true,
      isError: isUploadError,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.uploadTranscriptError))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorAlert.default, {
      hideHeading: true,
      isError: isDeleteError,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.deleteTranscriptError))
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Stack, {
      gap: 3,
      children: [hasTranscripts ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Form.Group, {
        className: "border-primary-100 border-bottom",
        children: [transcripts.map((language, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_Transcript.default, {
          language: language,
          transcriptUrl: selectedVideoTranscriptUrls[language],
          index: index
        })), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
          className: "mt-3.5",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Checkbox, {
            checked: allowTranscriptDownloads,
            className: "decorative-control-label",
            onChange: e => updateField({
              allowTranscriptDownloads: e.target.checked
            }),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "small text-gray-700",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.allowDownloadCheckboxLabel))
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.OverlayTrigger, {
            placement: "top",
            overlay: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Tooltip, {
              id: "tooltip-top",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.tooltipMessage))
            }),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
              src: _icons.InfoOutline,
              style: {
                height: '16px',
                width: '16px'
              }
            })
          }, "top"), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {})]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Checkbox, {
          checked: showTranscriptByDefault,
          className: "mt-3 decorative-control-label",
          onChange: e => updateField({
            showTranscriptByDefault: e.target.checked
          }),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "small text-gray-700",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.showByDefaultCheckboxLabel))
          })
        })]
      }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.addFirstTranscript)), showImportCard && allowTranscriptImport ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_ImportTranscriptCard.default, {
          setOpen: setShowImportCard
        }) : null]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "mt-2",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
          className: "text-primary-500 font-weight-bold justify-content-start pl-0",
          size: "sm",
          iconBefore: _icons.Add,
          variant: "link",
          onClick: () => _module.hooks.onAddNewTranscript({
            transcripts,
            updateField
          }),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.uploadButtonLabel))
        })
      })]
    })]
  });
};
exports.TranscriptWidget = TranscriptWidget;
TranscriptWidget.defaultProps = {
  selectedVideoTranscriptUrls: {}
};
TranscriptWidget.propTypes = {
  // redux
  transcripts: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  selectedVideoTranscriptUrls: _propTypes.default.shape(),
  allowTranscriptDownloads: _propTypes.default.bool.isRequired,
  showTranscriptByDefault: _propTypes.default.bool.isRequired,
  allowTranscriptImport: _propTypes.default.bool.isRequired,
  updateField: _propTypes.default.func.isRequired,
  isUploadError: _propTypes.default.bool.isRequired,
  isDeleteError: _propTypes.default.bool.isRequired,
  intl: _propTypes.default.shape(_i18n.intlShape).isRequired
};
const mapStateToProps = state => ({
  transcripts: _redux.selectors.video.transcripts(state),
  selectedVideoTranscriptUrls: _redux.selectors.video.selectedVideoTranscriptUrls(state),
  allowTranscriptDownloads: _redux.selectors.video.allowTranscriptDownloads(state),
  showTranscriptByDefault: _redux.selectors.video.showTranscriptByDefault(state),
  allowTranscriptImport: _redux.selectors.video.allowTranscriptImport(state),
  isUploadError: _redux.selectors.requests.isFailed(state, {
    requestKey: _requests.RequestKeys.uploadTranscript
  }),
  isDeleteError: _redux.selectors.requests.isFailed(state, {
    requestKey: _requests.RequestKeys.deleteTranscript
  })
});
exports.mapStateToProps = mapStateToProps;
const mapDispatchToProps = dispatch => ({
  updateField: stateUpdate => dispatch(_redux.actions.video.updateField(stateUpdate))
});
exports.mapDispatchToProps = mapDispatchToProps;
var _default = exports.default = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TranscriptWidget));
//# sourceMappingURL=index.js.map