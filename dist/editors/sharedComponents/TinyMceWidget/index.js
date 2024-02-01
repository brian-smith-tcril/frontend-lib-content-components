"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.default = exports.TinyMceWidget = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _tinymceReact = require("@tinymce/tinymce-react");
require("tinymce");
require("tinymce/themes/silver");
require("tinymce/skins/ui/oxide/skin.css");
require("tinymce/icons/default");
require("frontend-components-tinymce-advanced-plugins");
var _store = _interopRequireDefault(require("../../data/store"));
var _redux = require("../../data/redux");
var _ImageUploadModal = _interopRequireDefault(require("../ImageUploadModal"));
var _SourceCodeModal = _interopRequireDefault(require("../SourceCodeModal"));
var hooks = _interopRequireWildcard(require("./hooks"));
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = ["editorType", "editorRef", "disabled", "id", "editorContentHtml", "assets", "isLibrary", "lmsEndpointUrl", "studioEndpointUrl", "onChange"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const editorConfigDefaultProps = {
  setEditorRef: undefined,
  placeholder: undefined,
  initializeEditor: undefined,
  updateContent: undefined,
  content: undefined,
  minHeight: undefined
};
const editorConfigPropTypes = {
  setEditorRef: _propTypes.default.func,
  placeholder: _propTypes.default.any,
  initializeEditor: _propTypes.default.func,
  updateContent: _propTypes.default.func,
  content: _propTypes.default.any,
  minHeight: _propTypes.default.any
};
const TinyMceWidget = _ref => {
  let {
      editorType,
      editorRef,
      disabled,
      id,
      editorContentHtml,
      // editorContent in html form
      // redux
      assets,
      isLibrary,
      lmsEndpointUrl,
      studioEndpointUrl,
      onChange
    } = _ref,
    editorConfig = _objectWithoutProperties(_ref, _excluded);
  const {
    isImgOpen,
    openImgModal,
    closeImgModal
  } = hooks.imgModalToggle();
  const {
    isSourceCodeOpen,
    openSourceCodeModal,
    closeSourceCodeModal
  } = hooks.sourceCodeModalToggle(editorRef);
  const {
    imagesRef
  } = hooks.useImages({
    assets,
    editorContentHtml
  });
  const imageSelection = hooks.selectedImage(null);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRedux.Provider, {
    store: _store.default,
    children: [isLibrary ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)(_ImageUploadModal.default, _objectSpread({
      isOpen: isImgOpen,
      close: closeImgModal,
      editorRef: editorRef,
      images: imagesRef,
      editorType: editorType,
      lmsEndpointUrl: lmsEndpointUrl
    }, imageSelection)), editorType === 'text' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_SourceCodeModal.default, {
      isOpen: isSourceCodeOpen,
      close: closeSourceCodeModal,
      editorRef: editorRef
    }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_tinymceReact.Editor, _objectSpread({
      id: id,
      disabled: disabled,
      onEditorChange: onChange
    }, hooks.editorConfig(_objectSpread(_objectSpread({
      openImgModal,
      openSourceCodeModal,
      editorType,
      editorRef,
      isLibrary,
      lmsEndpointUrl,
      studioEndpointUrl,
      images: imagesRef,
      editorContentHtml
    }, imageSelection), editorConfig))))]
  });
};
exports.TinyMceWidget = TinyMceWidget;
TinyMceWidget.defaultProps = _objectSpread({
  isLibrary: null,
  editorType: null,
  editorRef: null,
  lmsEndpointUrl: null,
  studioEndpointUrl: null,
  assets: null,
  id: null,
  disabled: false,
  editorContentHtml: undefined,
  updateContent: undefined,
  onChange: () => ({})
}, editorConfigDefaultProps);
TinyMceWidget.propTypes = _objectSpread({
  editorType: _propTypes.default.string,
  isLibrary: _propTypes.default.bool,
  assets: _propTypes.default.shape({}),
  editorRef: _propTypes.default.shape({}),
  lmsEndpointUrl: _propTypes.default.string,
  studioEndpointUrl: _propTypes.default.string,
  id: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  editorContentHtml: _propTypes.default.string,
  updateContent: _propTypes.default.func,
  onChange: _propTypes.default.func
}, editorConfigPropTypes);
const mapStateToProps = state => ({
  assets: _redux.selectors.app.assets(state),
  lmsEndpointUrl: _redux.selectors.app.lmsEndpointUrl(state),
  studioEndpointUrl: _redux.selectors.app.studioEndpointUrl(state),
  isLibrary: _redux.selectors.app.isLibrary(state)
});
exports.mapStateToProps = mapStateToProps;
var _default = exports.default = (0, _reactRedux.connect)(mapStateToProps)(TinyMceWidget);
//# sourceMappingURL=index.js.map