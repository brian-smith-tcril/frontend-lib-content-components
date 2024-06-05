"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.hooks = exports.default = exports.LanguageSelector = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _reactRedux = require("react-redux");
var _i18n = require("@edx/frontend-platform/i18n");
var _redux = require("../../../../../../data/redux");
var _video = require("../../../../../../data/constants/video");
var _FileInput = require("../../../../../../sharedComponents/FileInput");
var _messages = _interopRequireDefault(require("./messages"));
var _module = _interopRequireWildcard(require("./LanguageSelector"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const hooks = exports.hooks = {
  onSelectLanguage: _ref => {
    let {
      dispatch,
      languageBeforeChange,
      triggerupload,
      setLocalLang
    } = _ref;
    return _ref2 => {
      let {
        newLang
      } = _ref2;
      // IF Language is unset, set language and begin upload prompt.
      setLocalLang(newLang);
      if (languageBeforeChange === '') {
        triggerupload();
        return;
      }
      // Else: update language
      dispatch(_redux.thunkActions.video.updateTranscriptLanguage({
        newLanguageCode: newLang,
        languageBeforeChange
      }));
    };
  },
  addFileCallback: _ref3 => {
    let {
      dispatch,
      localLang
    } = _ref3;
    return file => {
      dispatch(_redux.thunkActions.video.uploadTranscript({
        file,
        filename: file.name,
        language: localLang
      }));
    };
  }
};
const LanguageSelector = _ref4 => {
  let {
    index,
    // For a unique id for the form control
    language,
    // Redux
    openLanguages,
    // Only allow those languages not already associated with a transcript to be selected
    // intl
    intl
  } = _ref4;
  const [localLang, setLocalLang] = _react.default.useState(language);
  const input = (0, _FileInput.fileInput)({
    onAddFile: hooks.addFileCallback({
      dispatch: (0, _reactRedux.useDispatch)(),
      localLang
    })
  });
  const onLanguageChange = _module.hooks.onSelectLanguage({
    dispatch: (0, _reactRedux.useDispatch)(),
    languageBeforeChange: localLang,
    setLocalLang,
    triggerupload: input.click
  });
  const getTitle = () => {
    if (Object.prototype.hasOwnProperty.call(_video.videoTranscriptLanguages, language)) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
        children: [_video.videoTranscriptLanguages[language], /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
          className: "text-primary-500",
          src: _icons.Check
        })]
      });
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
      children: [intl.formatMessage(_messages.default.languageSelectPlaceholder), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {})]
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Dropdown, {
      className: "w-100 mb-2",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Toggle, {
        iconAs: _paragon.Button,
        "aria-label": intl.formatMessage(_messages.default.languageSelectLabel),
        block: true,
        id: `selectLanguage-form-${index}`,
        className: "w-100",
        variant: "outline-primary",
        children: getTitle()
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Menu, {
        children: Object.entries(_video.videoTranscriptLanguages).map(_ref5 => {
          let [lang, text] = _ref5;
          if (language === lang) {
            return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Dropdown.Item, {
              children: [text, /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
                className: "text-primary-500",
                src: _icons.Check
              })]
            });
          }
          if (openLanguages.some(row => row.includes(lang))) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Item, {
              onClick: () => onLanguageChange({
                newLang: lang
              }),
              children: text
            });
          }
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Item, {
            className: "disabled",
            children: text
          });
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FileInput.FileInput, {
      fileInput: input,
      acceptedFiles: ".srt"
    })]
  });
};
exports.LanguageSelector = LanguageSelector;
LanguageSelector.defaultProps = {
  openLanguages: []
};
LanguageSelector.propTypes = {
  openLanguages: _propTypes.default.arrayOf(_propTypes.default.string),
  index: _propTypes.default.number.isRequired,
  language: _propTypes.default.string.isRequired,
  intl: _i18n.intlShape.isRequired
};
const mapStateToProps = state => ({
  openLanguages: _redux.selectors.video.openLanguages(state)
});
exports.mapStateToProps = mapStateToProps;
const mapDispatchToProps = exports.mapDispatchToProps = {};
var _default = exports.default = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LanguageSelector));
//# sourceMappingURL=LanguageSelector.js.map