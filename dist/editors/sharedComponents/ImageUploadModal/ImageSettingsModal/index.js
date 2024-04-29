"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ImageSettingsModal = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
require("./index.scss");
var _hooks = _interopRequireDefault(require("./hooks"));
var _messages = _interopRequireDefault(require("./messages"));
var _BaseModal = _interopRequireDefault(require("../../BaseModal"));
var _AltTextControls = _interopRequireDefault(require("./AltTextControls"));
var _DimensionControls = _interopRequireDefault(require("./DimensionControls"));
var _ErrorAlert = _interopRequireDefault(require("../../ErrorAlerts/ErrorAlert"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * Modal display wrapping the dimension and alt-text controls for image tags
 * inserted into the TextEditor TinyMCE context.
 * Provides a thumbnail and populates dimension and alt-text controls.
 * @param {bool} isOpen - is the modal open?
 * @param {func} close - close the modal
 * @param {obj} selection - current image selection object
 * @param {func} saveToEditor - save the current settings to the editor
 * @param {func} returnToSelection - return to image selection
 */
const ImageSettingsModal = _ref => {
  let {
    close,
    isOpen,
    returnToSelection,
    saveToEditor,
    selection,
    // inject
    intl
  } = _ref;
  const altText = _hooks.default.altText(selection.altText);
  const dimensions = _hooks.default.dimensions(altText);
  const onSaveClick = _hooks.default.onSaveClick({
    altText,
    dimensions: dimensions.value,
    isDecorative: altText.isDecorative,
    saveToEditor
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_BaseModal.default, {
    close: close,
    confirmAction: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
      variant: "primary",
      onClick: onSaveClick,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.saveButtonLabel))
    }),
    isOpen: isOpen,
    title: intl.formatMessage(_messages.default.titleLabel),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorAlert.default, {
      dismissError: altText.error.dismiss,
      hideHeading: true,
      isError: altText.error.show,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.altTextError))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
      iconBefore: _icons.ArrowBackIos,
      onClick: returnToSelection,
      size: "inline",
      variant: "link",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.replaceImageButtonLabel))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "d-flex flex-row m-2 img-settings-form-container",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "img-settings-thumbnail-container",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Image, {
          className: "img-settings-thumbnail",
          onError: dimensions.onImgLoad(selection),
          onLoad: dimensions.onImgLoad(selection),
          src: selection.externalUrl
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {
        className: "h-100 bg-primary-200 m-0"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "img-settings-form-controls",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DimensionControls.default, _objectSpread({}, dimensions)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_AltTextControls.default, _objectSpread({}, altText))]
      })]
    })]
  });
};
exports.ImageSettingsModal = ImageSettingsModal;
ImageSettingsModal.propTypes = {
  close: _propTypes.default.func.isRequired,
  isOpen: _propTypes.default.bool.isRequired,
  returnToSelection: _propTypes.default.func.isRequired,
  saveToEditor: _propTypes.default.func.isRequired,
  selection: _propTypes.default.shape({
    altText: _propTypes.default.string,
    externalUrl: _propTypes.default.string,
    url: _propTypes.default.string
  }).isRequired,
  // inject
  intl: _i18n.intlShape.isRequired
};
var _default = exports.default = (0, _i18n.injectIntl)(ImageSettingsModal);
//# sourceMappingURL=index.js.map