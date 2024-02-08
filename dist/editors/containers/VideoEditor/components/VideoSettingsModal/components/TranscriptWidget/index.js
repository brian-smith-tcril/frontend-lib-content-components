"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.hooks = exports.default = exports.TranscriptWidget = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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