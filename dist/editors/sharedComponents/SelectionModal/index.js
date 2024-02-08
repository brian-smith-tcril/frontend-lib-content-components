"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SelectionModal = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var _BaseModal = _interopRequireDefault(require("../BaseModal"));
var _SearchSort = _interopRequireDefault(require("./SearchSort"));
var _Gallery = _interopRequireDefault(require("./Gallery"));
var _FileInput = _interopRequireDefault(require("../FileInput"));
var _ErrorAlert = _interopRequireDefault(require("../ErrorAlerts/ErrorAlert"));
var _FetchErrorAlert = _interopRequireDefault(require("../ErrorAlerts/FetchErrorAlert"));
var _UploadErrorAlert = _interopRequireDefault(require("../ErrorAlerts/UploadErrorAlert"));
require("./index.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const SelectionModal = _ref => {
  let {
    isOpen,
    close,
    size,
    isFullscreenScroll,
    galleryError,
    inputError,
    fileInput,
    galleryProps,
    searchSortProps,
    selectBtnProps,
    acceptedFiles,
    modalMessages,
    isLoaded,
    isFetchError,
    isUploadError
  } = _ref;
  const intl = (0, _i18n.useIntl)();
  const {
    confirmMsg,
    uploadButtonMsg,
    titleMsg,
    fetchError,
    uploadError
  } = modalMessages;
  let background = '#FFFFFF';
  let showGallery = true;
  if (isLoaded && !isFetchError && !isUploadError && !inputError.show) {
    background = '#E9E6E4';
  } else if (isLoaded) {
    showGallery = false;
  }
  const galleryPropsValues = _objectSpread({
    isLoaded
  }, galleryProps);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_BaseModal.default, {
    close: close,
    confirmAction: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, _objectSpread(_objectSpread({}, selectBtnProps), {}, {
      variant: "primary",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, confirmMsg))
    })),
    isOpen: isOpen,
    size: size,
    isFullscreenScroll: isFullscreenScroll,
    footerAction: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
      className: "text-primary-500",
      iconBefore: _icons.Add,
      onClick: fileInput.click,
      variant: "link",
      style: {
        textDecoration: 'none'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, uploadButtonMsg))
    }),
    title: intl.formatMessage(titleMsg),
    bodyStyle: {
      background,
      padding: '3px 24px'
    },
    headerComponent: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        margin: '18px 0'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SearchSort.default, _objectSpread({}, searchSortProps))
    }),
    className: "selection-modal",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Stack, {
      gap: 2,
      style: {
        minHeight: '1px'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FetchErrorAlert.default, {
        isFetchError: isFetchError,
        message: fetchError
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_UploadErrorAlert.default, {
        isUploadError: isUploadError,
        message: uploadError
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorAlert.default, {
        dismissError: inputError.dismiss,
        hideHeading: true,
        isError: inputError.show,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, inputError.message))
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorAlert.default, {
        dismissError: galleryError.dismiss,
        hideHeading: true,
        isError: galleryError.show,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, galleryError.message))
      }), showGallery && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Gallery.default, _objectSpread({}, galleryPropsValues)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FileInput.default, {
        fileInput: fileInput,
        acceptedFiles: Object.values(acceptedFiles).join()
      })]
    })
  });
};
exports.SelectionModal = SelectionModal;
SelectionModal.defaultProps = {
  size: 'lg',
  isFullscreenScroll: true
};
SelectionModal.propTypes = {
  isOpen: _propTypes.default.bool.isRequired,
  close: _propTypes.default.func.isRequired,
  size: _propTypes.default.string,
  isFullscreenScroll: _propTypes.default.bool,
  galleryError: _propTypes.default.shape({
    dismiss: _propTypes.default.func.isRequired,
    show: _propTypes.default.bool.isRequired,
    set: _propTypes.default.func.isRequired,
    message: _propTypes.default.shape({}).isRequired
  }).isRequired,
  inputError: _propTypes.default.shape({
    dismiss: _propTypes.default.func.isRequired,
    show: _propTypes.default.bool.isRequired,
    set: _propTypes.default.func.isRequired,
    message: _propTypes.default.shape({}).isRequired
  }).isRequired,
  fileInput: _propTypes.default.shape({
    click: _propTypes.default.func.isRequired
  }).isRequired,
  galleryProps: _propTypes.default.shape({}).isRequired,
  searchSortProps: _propTypes.default.shape({}).isRequired,
  selectBtnProps: _propTypes.default.shape({}).isRequired,
  acceptedFiles: _propTypes.default.shape({}).isRequired,
  modalMessages: _propTypes.default.shape({
    confirmMsg: _propTypes.default.shape({}).isRequired,
    uploadButtonMsg: _propTypes.default.shape({}).isRequired,
    titleMsg: _propTypes.default.shape({}).isRequired,
    fetchError: _propTypes.default.shape({}).isRequired,
    uploadError: _propTypes.default.shape({}).isRequired
  }).isRequired,
  isLoaded: _propTypes.default.bool.isRequired,
  isFetchError: _propTypes.default.bool.isRequired,
  isUploadError: _propTypes.default.bool.isRequired
};
var _default = exports.default = SelectionModal;
//# sourceMappingURL=index.js.map