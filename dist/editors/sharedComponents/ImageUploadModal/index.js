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