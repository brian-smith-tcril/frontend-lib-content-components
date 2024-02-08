"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ExpandableTextArea = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _TinyMceWidget = _interopRequireDefault(require("../TinyMceWidget"));
var _hooks = require("../TinyMceWidget/hooks");
require("./index.scss");
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = ["value", "setContent", "error", "errorMessage"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const ExpandableTextArea = _ref => {
  let {
      value,
      setContent,
      error,
      errorMessage
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const {
    editorRef,
    setEditorRef
  } = (0, _hooks.prepareEditorRef)();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "expandable-mce error",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TinyMceWidget.default, _objectSpread({
        editorContentHtml: value,
        editorRef: editorRef,
        editorType: "expandable",
        setEditorRef: setEditorRef,
        updateContent: setContent
      }, props))
    }), error && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "text-danger-500 x-small",
      children: props.errorMessage
    })]
  });
};
exports.ExpandableTextArea = ExpandableTextArea;
ExpandableTextArea.defaultProps = {
  value: null,
  placeholder: null,
  error: false,
  errorMessage: null
};
ExpandableTextArea.propTypes = {
  value: _propTypes.default.string,
  setContent: _propTypes.default.func.isRequired,
  placeholder: _propTypes.default.string,
  error: _propTypes.default.bool,
  errorMessage: _propTypes.default.string
};
var _default = exports.default = ExpandableTextArea;
//# sourceMappingURL=index.js.map