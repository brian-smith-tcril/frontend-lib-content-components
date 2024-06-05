"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateReactState = exports.updateImagesRef = exports.saveToEditor = exports.propsString = exports.imgProps = exports.hooks = exports.default = exports.ImageUploadModal = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _tinyMCE = _interopRequireDefault(require("../../data/constants/tinyMCE"));
var _ImageSettingsModal = _interopRequireDefault(require("./ImageSettingsModal"));
var _SelectImageModal = _interopRequireDefault(require("./SelectImageModal"));
var _module = _interopRequireWildcard(require("."));
var _hooks = require("../TinyMceWidget/hooks");
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = ["close"];
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
const propsString = props => Object.keys(props).map(key => `${key}="${props[key]}"`).join(' ');
exports.propsString = propsString;
const imgProps = _ref => {
  let {
    settings,
    selection,
    lmsEndpointUrl,
    editorType
  } = _ref;
  let url = selection?.externalUrl;
  if (url?.startsWith(lmsEndpointUrl) && editorType !== 'expandable') {
    const sourceEndIndex = lmsEndpointUrl.length;
    url = url.substring(sourceEndIndex);
  }
  return {
    src: url,
    alt: settings.isDecorative ? '' : settings.altText,
    width: settings.dimensions.width,
    height: settings.dimensions.height
  };
};
exports.imgProps = imgProps;
const saveToEditor = _ref2 => {
  let {
    settings,
    selection,
    lmsEndpointUrl,
    editorType,
    editorRef
  } = _ref2;
  const newImgTag = _module.hooks.imgTag({
    settings,
    selection,
    lmsEndpointUrl,
    editorType
  });
  editorRef.current.execCommand(_tinyMCE.default.commands.insertContent, false, newImgTag);
};
exports.saveToEditor = saveToEditor;
const updateImagesRef = _ref3 => {
  let {
    images,
    selection,
    height,
    width,
    newImage
  } = _ref3;
  const {
    result: mappedImages,
    foundMatch: imageAlreadyExists
  } = (0, _hooks.updateImageDimensions)({
    images: images.current,
    url: selection.externalUrl,
    height,
    width
  });
  images.current = imageAlreadyExists ? mappedImages : [...images.current, newImage];
};
exports.updateImagesRef = updateImagesRef;
const updateReactState = _ref4 => {
  let {
    settings,
    selection,
    setSelection,
    images
  } = _ref4;
  const {
    height,
    width
  } = settings.dimensions;
  const newImage = {
    externalUrl: selection.externalUrl,
    altText: settings.altText,
    width,
    height
  };
  updateImagesRef({
    images,
    selection,
    height,
    width,
    newImage
  });
  setSelection(newImage);
};
exports.updateReactState = updateReactState;
const hooks = exports.hooks = {
  createSaveCallback: _ref5 => {
    let {
        close
      } = _ref5,
      args = _objectWithoutProperties(_ref5, _excluded);
    return settings => {
      saveToEditor(_objectSpread({
        settings
      }, args));
      updateReactState(_objectSpread({
        settings
      }, args));
      close();
    };
  },
  onClose: _ref6 => {
    let {
      clearSelection,
      close
    } = _ref6;
    return () => {
      clearSelection();
      close();
    };
  },
  imgTag: _ref7 => {
    let {
      settings,
      selection,
      lmsEndpointUrl,
      editorType
    } = _ref7;
    const props = _module.imgProps({
      settings,
      selection,
      lmsEndpointUrl,
      editorType
    });
    return `<img ${propsString(props)} />`;
  },
  updateReactState,
  updateImagesRef,
  saveToEditor,
  imgProps,
  propsString
};
const ImageUploadModal = _ref8 => {
  let {
    // eslint-disable-next-line
    editorRef,
    isOpen,
    close,
    clearSelection,
    selection,
    setSelection,
    images,
    editorType,
    lmsEndpointUrl
  } = _ref8;
  if (selection && selection.externalUrl) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ImageSettingsModal.default, {
      isOpen,
      close: _module.hooks.onClose({
        editorRef,
        clearSelection,
        close
      }),
      selection,
      images,
      saveToEditor: _module.hooks.createSaveCallback({
        close,
        images,
        editorRef,
        editorType,
        selection,
        setSelection,
        lmsEndpointUrl
      }),
      returnToSelection: clearSelection
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectImageModal.default, {
    isOpen,
    close,
    setSelection,
    clearSelection,
    images
  });
};
exports.ImageUploadModal = ImageUploadModal;
ImageUploadModal.defaultProps = {
  editorRef: null,
  editorType: null,
  selection: null
};
ImageUploadModal.propTypes = {
  clearSelection: _propTypes.default.func.isRequired,
  close: _propTypes.default.func.isRequired,
  editorRef: _propTypes.default.oneOfType([_propTypes.default.func,
  // eslint-disable-next-line react/forbid-prop-types
  _propTypes.default.shape({
    current: _propTypes.default.any
  })]),
  isOpen: _propTypes.default.bool.isRequired,
  selection: _propTypes.default.shape({
    url: _propTypes.default.string,
    externalUrl: _propTypes.default.string,
    altText: _propTypes.default.bool
  }),
  setSelection: _propTypes.default.func.isRequired,
  images: _propTypes.default.shape({}).isRequired,
  lmsEndpointUrl: _propTypes.default.string.isRequired,
  editorType: _propTypes.default.string
};
var _default = exports.default = (0, _i18n.injectIntl)(ImageUploadModal);
//# sourceMappingURL=index.js.map