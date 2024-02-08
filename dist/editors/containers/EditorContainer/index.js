"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.EditorContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var _BaseModal = _interopRequireDefault(require("../../sharedComponents/BaseModal"));
var _EditorFooter = _interopRequireDefault(require("./components/EditorFooter"));
var _TitleHeader = _interopRequireDefault(require("./components/TitleHeader"));
var hooks = _interopRequireWildcard(require("./hooks"));
var _messages = _interopRequireDefault(require("./messages"));
require("./index.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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