"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LanguageNamesWidget = void 0;
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _messages = _interopRequireDefault(require("../messages"));
var _TranscriptWidget = require("../TranscriptWidget");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const LanguageNamesWidget = _ref => {
  let {
    transcripts,
    intl
  } = _ref;
  let icon = _icons.ClosedCaptionOff;
  const hasTranscripts = _TranscriptWidget.hooks.hasTranscripts(transcripts);
  let message = intl.formatMessage(_messages.default.noTranscriptsAdded);
  if (hasTranscripts) {
    message = _TranscriptWidget.hooks.transcriptLanguages(transcripts, intl);
    icon = _icons.ClosedCaption;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "d-flex flex-row align-items-center x-small",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
      className: "mr-1 text-primary-500",
      src: icon
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "text-gray-700",
      children: message
    })]
  });
};
exports.LanguageNamesWidget = LanguageNamesWidget;
LanguageNamesWidget.propTypes = {
  intl: _i18n.intlShape.isRequired,
  transcripts: _propTypes.default.arrayOf(_propTypes.default.string).isRequired
};
var _default = exports.default = (0, _i18n.injectIntl)(LanguageNamesWidget);
//# sourceMappingURL=LanguageNamesWidget.js.map