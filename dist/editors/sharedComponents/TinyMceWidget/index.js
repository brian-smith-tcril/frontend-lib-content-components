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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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