"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BaseModal = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseModal = _ref => {
  let {
    isOpen,
    close,
    title,
    children,
    confirmAction
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ModalDialog, {
    title: "My dialog",
    isOpen: isOpen,
    onClose: close,
    size: "lg",
    variant: "default",
    hasCloseButton: true,
    isFullscreenOnMobile: true,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ModalDialog.Header, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ModalDialog.Title, {
        children: title
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ModalDialog.Body, {
      children: children
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ModalDialog.Footer, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ModalDialog.CloseButton, {
          variant: "tertiary",
          onClick: close,
          children: "Cancel"
        }), confirmAction]
      })
    })]
  });
};
exports.BaseModal = BaseModal;
BaseModal.propTypes = {
  isOpen: _propTypes.default.bool.isRequired,
  close: _propTypes.default.func.isRequired,
  title: _propTypes.default.node.isRequired,
  children: _propTypes.default.node.isRequired,
  confirmAction: _propTypes.default.node.isRequired
};
var _default = exports.default = BaseModal;
//# sourceMappingURL=BaseModal.js.map