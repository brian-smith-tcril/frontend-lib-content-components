"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SourceCodeModal = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _messages = _interopRequireDefault(require("./messages"));
var _hooks = _interopRequireDefault(require("./hooks"));
var _BaseModal = _interopRequireDefault(require("../BaseModal"));
var _CodeEditor = _interopRequireDefault(require("../CodeEditor"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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