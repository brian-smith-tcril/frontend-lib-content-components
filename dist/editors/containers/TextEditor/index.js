"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.default = exports.TextEditor = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@openedx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _redux = require("../../data/redux");
var _requests = require("../../data/constants/requests");
var _EditorContainer = _interopRequireDefault(require("../EditorContainer"));
var _RawEditor = _interopRequireDefault(require("../../sharedComponents/RawEditor"));
var hooks = _interopRequireWildcard(require("./hooks"));
var _messages = _interopRequireDefault(require("./messages"));
var _TinyMceWidget = _interopRequireDefault(require("../../sharedComponents/TinyMceWidget"));
var _hooks2 = require("../../sharedComponents/TinyMceWidget/hooks");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const TextEditor = _ref => {
  let {
    onClose,
    returnFunction,
    // redux
    isRaw,
    blockValue,
    blockFailed,
    initializeEditor,
    assetsFinished,
    assets,
    // inject
    intl
  } = _ref;
  const {
    editorRef,
    refReady,
    setEditorRef
  } = (0, _hooks2.prepareEditorRef)();
  if (!refReady) {
    return null;
  }
  const selectEditor = () => {
    if (isRaw) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RawEditor.default, {
        editorRef: editorRef,
        content: blockValue
      });
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TinyMceWidget.default, {
      editorType: "text",
      editorRef: editorRef,
      editorContentHtml: blockValue ? blockValue.data.data : '',
      setEditorRef: setEditorRef,
      minHeight: 500,
      height: "100%",
      initializeEditor: initializeEditor
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_EditorContainer.default, {
    getContent: hooks.getContent({
      editorRef,
      isRaw,
      assets
    }),
    onClose: onClose,
    returnFunction: returnFunction,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "editor-body h-75 overflow-auto",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Toast, {
        show: blockFailed,
        onClose: hooks.nullMethod,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.couldNotLoadTextContext))
      }), !assetsFinished ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "text-center p-6",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Spinner, {
          animation: "border",
          className: "m-3",
          screenreadertext: intl.formatMessage(_messages.default.spinnerScreenReaderText)
        })
      }) : selectEditor()]
    })
  });
};
exports.TextEditor = TextEditor;
TextEditor.defaultProps = {
  blockValue: null,
  isRaw: null,
  assetsFinished: null,
  assets: null,
  returnFunction: null
};
TextEditor.propTypes = {
  onClose: _propTypes.default.func.isRequired,
  returnFunction: _propTypes.default.func,
  // redux
  blockValue: _propTypes.default.shape({
    data: _propTypes.default.shape({
      data: _propTypes.default.string
    })
  }),
  blockFailed: _propTypes.default.bool.isRequired,
  initializeEditor: _propTypes.default.func.isRequired,
  isRaw: _propTypes.default.bool,
  assetsFinished: _propTypes.default.bool,
  assets: _propTypes.default.shape({}),
  // inject
  intl: _i18n.intlShape.isRequired
};
const mapStateToProps = state => ({
  blockValue: _redux.selectors.app.blockValue(state),
  blockFailed: _redux.selectors.requests.isFailed(state, {
    requestKey: _requests.RequestKeys.fetchBlock
  }),
  isRaw: _redux.selectors.app.isRaw(state),
  assetsFinished: _redux.selectors.requests.isFinished(state, {
    requestKey: _requests.RequestKeys.fetchAssets
  }),
  assets: _redux.selectors.app.assets(state)
});
exports.mapStateToProps = mapStateToProps;
const mapDispatchToProps = exports.mapDispatchToProps = {
  initializeEditor: _redux.actions.app.initializeEditor
};
var _default = exports.default = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TextEditor));
//# sourceMappingURL=index.js.map