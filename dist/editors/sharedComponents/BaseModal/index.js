"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BaseModal = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ModalDialog.Body, {
      style: bodyStyle,
      children: children
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