"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BaseModal = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@openedx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const BaseModal = _ref => {
  let {
    isOpen,
    close,
    title,
    children,
    headerComponent,
    confirmAction,
    footerAction,
    size,
    isFullscreenScroll,
    bodyStyle,
    className
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ModalDialog, {
    isOpen: isOpen,
    onClose: close,
    size: size,
    variant: "default",
    hasCloseButton: true,
    isFullscreenOnMobile: true,
    isFullscreenScroll: isFullscreenScroll,
    title: title,
    className: className,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ModalDialog.Header, {
      style: {
        zIndex: 1,
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ModalDialog.Title, {
        children: title
      }), headerComponent]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Scrollable, {
      style: bodyStyle,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ModalDialog.Body, {
        children: children
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ModalDialog.Footer, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
        children: [footerAction, /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ModalDialog.CloseButton, {
          variant: "tertiary",
          onClick: close,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.cancelButtonLabel))
        }), confirmAction]
      })
    })]
  });
};
exports.BaseModal = BaseModal;
BaseModal.defaultProps = {
  footerAction: null,
  headerComponent: null,
  size: 'lg',
  isFullscreenScroll: true,
  bodyStyle: null,
  className: undefined
};
BaseModal.propTypes = {
  isOpen: _propTypes.default.bool.isRequired,
  close: _propTypes.default.func.isRequired,
  title: _propTypes.default.node.isRequired,
  children: _propTypes.default.node.isRequired,
  confirmAction: _propTypes.default.node.isRequired,
  footerAction: _propTypes.default.node,
  headerComponent: _propTypes.default.node,
  size: _propTypes.default.string,
  isFullscreenScroll: _propTypes.default.bool,
  bodyStyle: _propTypes.default.shape({}),
  className: _propTypes.default.string
};
var _default = exports.default = BaseModal;
//# sourceMappingURL=index.js.map