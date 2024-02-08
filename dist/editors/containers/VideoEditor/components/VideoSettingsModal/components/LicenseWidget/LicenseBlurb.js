"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LicenseBlurb = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _messages = _interopRequireDefault(require("./messages"));
var _licenses = require("../../../../../../data/constants/licenses");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const LicenseBlurb = _ref => {
  let {
    license,
    details
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "d-flex flex-row align-items-center mt-2",
    children: [license === _licenses.LicenseTypes.allRightsReserved ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
      src: _icons.Copyright,
      className: "mr-1",
      style: {
        height: '18px',
        width: '18px'
      }
    }) : null, license === _licenses.LicenseTypes.creativeCommons ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
      src: _icons.Cc,
      className: "mr-1",
      style: {
        height: '18px',
        width: '18px'
      }
    }) : null, details.attribution ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
      src: _icons.Attribution,
      className: "mr-1 text-primary-300",
      style: {
        height: '18px',
        width: '18px'
      }
    }) : null, details.noncommercial ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
      src: _icons.Nc,
      className: "mr-1",
      style: {
        height: '18px',
        width: '18px'
      }
    }) : null, details.noDerivatives ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
      src: _icons.Nd,
      className: "mr-1",
      style: {
        height: '18px',
        width: '18px'
      }
    }) : null, details.shareAlike ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
      src: _icons.Sa,
      className: "mr-1",
      style: {
        height: '18px',
        width: '18px'
      }
    }) : null, license === _licenses.LicenseTypes.allRightsReserved ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "small mx-1.5",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.allRightsReservedIconsLabel))
    }) : null, license === _licenses.LicenseTypes.creativeCommons ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "small mx-1.5",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.creativeCommonsIconsLabel))
    }) : null]
  });
};
exports.LicenseBlurb = LicenseBlurb;
LicenseBlurb.propTypes = {
  license: _propTypes.default.string.isRequired,
  details: _propTypes.default.shape({
    attribution: _propTypes.default.bool.isRequired,
    noncommercial: _propTypes.default.bool.isRequired,
    noDerivatives: _propTypes.default.bool.isRequired,
    shareAlike: _propTypes.default.bool.isRequired
  }).isRequired
};
var _default = exports.default = (0, _i18n.injectIntl)(LicenseBlurb);
//# sourceMappingURL=LicenseBlurb.js.map