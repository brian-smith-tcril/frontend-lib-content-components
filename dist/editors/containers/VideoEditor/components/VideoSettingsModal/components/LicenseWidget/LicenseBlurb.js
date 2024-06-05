"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LicenseBlurb = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _messages = _interopRequireDefault(require("./messages"));
var _licenses = require("../../../../../../data/constants/licenses");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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