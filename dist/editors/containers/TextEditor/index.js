"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.default = exports.TextEditor = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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