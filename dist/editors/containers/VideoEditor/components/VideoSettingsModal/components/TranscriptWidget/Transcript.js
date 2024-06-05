"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.hooks = exports.default = exports.Transcript = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var _redux = require("../../../../../../data/redux");
var _TranscriptActionMenu = _interopRequireDefault(require("./TranscriptActionMenu"));
var _LanguageSelector = _interopRequireDefault(require("./LanguageSelector"));
var _module = _interopRequireWildcard(require("./Transcript"));
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
  state: {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    inDeleteConfirmation: args => _react.default.useState(args)
  },
  setUpDeleteConfirmation: () => {
    const [inDeleteConfirmation, setInDeleteConfirmation] = _module.hooks.state.inDeleteConfirmation(false);
    return {
      inDeleteConfirmation,
      launchDeleteConfirmation: () => setInDeleteConfirmation(true),
      cancelDelete: () => setInDeleteConfirmation(false)
    };
  }
};
const Transcript = _ref => {
  let {
    index,
    language,
    transcriptUrl,
    // redux
    deleteTranscript
  } = _ref;
  const {
    inDeleteConfirmation,
    launchDeleteConfirmation,
    cancelDelete
  } = _module.hooks.setUpDeleteConfirmation();
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/jsx-no-useless-fragment
    (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: inDeleteConfirmation ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Card, {
        className: "mb-2",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Card.Header, {
          title: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.deleteConfirmationHeader))
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Card.Body, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Card.Section, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.deleteConfirmationMessage))
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Card.Footer, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
              variant: "tertiary",
              className: "mb-2 mb-sm-0",
              onClick: cancelDelete,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.cancelDeleteLabel))
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
              variant: "danger",
              className: "mb-2 mb-sm-0",
              onClick: () => {
                deleteTranscript({
                  language
                });
                // stop showing the card
                cancelDelete();
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.confirmDeleteLabel))
            })]
          })]
        })]
      }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_LanguageSelector.default, {
          title: index,
          language: language
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {}), language === '' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.IconButton, {
          iconAs: _paragon.Icon,
          src: _icons.DeleteOutline,
          onClick: () => launchDeleteConfirmation()
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_TranscriptActionMenu.default, {
          index: index,
          language: language,
          transcriptUrl: transcriptUrl,
          launchDeleteConfirmation: launchDeleteConfirmation
        })]
      })
    })
  );
};
exports.Transcript = Transcript;
Transcript.defaultProps = {
  transcriptUrl: undefined
};
Transcript.propTypes = {
  index: _propTypes.default.number.isRequired,
  language: _propTypes.default.string.isRequired,
  transcriptUrl: _propTypes.default.string,
  deleteTranscript: _propTypes.default.func.isRequired
};
const mapStateToProps = () => ({});
exports.mapStateToProps = mapStateToProps;
const mapDispatchToProps = exports.mapDispatchToProps = {
  deleteTranscript: _redux.thunkActions.video.deleteTranscript
};
var _default = exports.default = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Transcript));
//# sourceMappingURL=Transcript.js.map