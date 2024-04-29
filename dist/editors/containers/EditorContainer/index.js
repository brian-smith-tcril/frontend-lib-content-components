"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.EditorContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var _BaseModal = _interopRequireDefault(require("../../sharedComponents/BaseModal"));
var _EditorFooter = _interopRequireDefault(require("./components/EditorFooter"));
var _TitleHeader = _interopRequireDefault(require("./components/TitleHeader"));
var hooks = _interopRequireWildcard(require("./hooks"));
var _messages = _interopRequireDefault(require("./messages"));
require("./index.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const EditorContainer = _ref => {
  let {
    children,
    getContent,
    onClose,
    validateEntry,
    returnFunction,
    // injected
    intl
  } = _ref;
  const dispatch = (0, _reactRedux.useDispatch)();
  const isInitialized = hooks.isInitialized();
  const {
    isCancelConfirmOpen,
    openCancelConfirmModal,
    closeCancelConfirmModal
  } = hooks.cancelConfirmModalToggle();
  const handleCancel = hooks.handleCancel({
    onClose,
    returnFunction
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "editor-container d-flex flex-column position-relative zindex-0",
    style: {
      minHeight: '100%'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_BaseModal.default, {
      size: "md",
      confirmAction: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
        variant: "primary",
        onClick: () => {
          handleCancel();
          if (returnFunction) {
            closeCancelConfirmModal();
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.okButtonLabel))
      }),
      isOpen: isCancelConfirmOpen,
      close: closeCancelConfirmModal,
      title: intl.formatMessage(_messages.default.cancelConfirmTitle),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.cancelConfirmDescription))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ModalDialog.Header, {
      className: "shadow-sm zindex-10",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "d-flex flex-row justify-content-between",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          className: "h3 col pl-0",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TitleHeader.default, {
            isInitialized: isInitialized
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.IconButton, {
          src: _icons.Close,
          iconAs: _paragon.Icon,
          onClick: openCancelConfirmModal
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ModalDialog.Body, {
      className: "pb-0 mb-6",
      children: isInitialized && children
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_EditorFooter.default, {
      clearSaveFailed: hooks.clearSaveError({
        dispatch
      }),
      disableSave: !isInitialized,
      onCancel: openCancelConfirmModal,
      onSave: hooks.handleSaveClicked({
        dispatch,
        getContent,
        validateEntry,
        returnFunction
      }),
      saveFailed: hooks.saveFailed()
    })]
  });
};
exports.EditorContainer = EditorContainer;
EditorContainer.defaultProps = {
  onClose: null,
  returnFunction: null,
  validateEntry: null
};
EditorContainer.propTypes = {
  children: _propTypes.default.node.isRequired,
  getContent: _propTypes.default.func.isRequired,
  onClose: _propTypes.default.func,
  returnFunction: _propTypes.default.func,
  validateEntry: _propTypes.default.func,
  // injected
  intl: _i18n.intlShape.isRequired
};
var _default = exports.default = (0, _i18n.injectIntl)(EditorContainer);
//# sourceMappingURL=index.js.map