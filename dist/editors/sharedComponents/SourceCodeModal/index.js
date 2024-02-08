"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SourceCodeModal = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _messages = _interopRequireDefault(require("./messages"));
var _hooks = _interopRequireDefault(require("./hooks"));
var _BaseModal = _interopRequireDefault(require("../BaseModal"));
var _CodeEditor = _interopRequireDefault(require("../CodeEditor"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const SourceCodeModal = _ref => {
  let {
    isOpen,
    close,
    editorRef,
    // injected
    intl
  } = _ref;
  const {
    saveBtnProps,
    value,
    ref
  } = _hooks.default.prepareSourceCodeModal({
    editorRef,
    close
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_BaseModal.default, {
    close: close,
    size: "xl",
    confirmAction: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, _objectSpread(_objectSpread({}, saveBtnProps), {}, {
      variant: "primary",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.saveButtonLabel))
    })),
    isOpen: isOpen,
    title: intl.formatMessage(_messages.default.titleLabel),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        padding: '10px 30px',
        height: '300px'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CodeEditor.default, {
        innerRef: ref,
        value: value
      })
    })
  });
};
exports.SourceCodeModal = SourceCodeModal;
SourceCodeModal.propTypes = {
  isOpen: _propTypes.default.bool.isRequired,
  close: _propTypes.default.func.isRequired,
  editorRef: _propTypes.default.oneOfType([_propTypes.default.func,
  // eslint-disable-next-line react/forbid-prop-types
  _propTypes.default.shape({
    current: _propTypes.default.any
  })]).isRequired,
  // injected
  intl: _i18n.intlShape.isRequired
};
var _default = exports.default = (0, _i18n.injectIntl)(SourceCodeModal);
//# sourceMappingURL=index.js.map