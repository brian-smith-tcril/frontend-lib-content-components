"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.hooks = exports.default = exports.Transcript = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var _redux = require("../../../../../../data/redux");
var _TranscriptActionMenu = _interopRequireDefault(require("./TranscriptActionMenu"));
var _LanguageSelector = _interopRequireDefault(require("./LanguageSelector"));
var _module = _interopRequireWildcard(require("./Transcript"));
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