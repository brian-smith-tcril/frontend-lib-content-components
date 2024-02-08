"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onSelectLicense = exports.determineText = exports.determineLicense = exports.default = void 0;
var _i18n = require("@edx/frontend-platform/i18n");
var _messages = _interopRequireDefault(require("./messages"));
var _redux = require("../../../../../../data/redux");
var _licenses = require("../../../../../../data/constants/licenses");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const determineLicense = _ref => {
  let {
    isLibrary,
    licenseType,
    licenseDetails,
    courseLicenseType,
    courseLicenseDetails
  } = _ref;
  let level = _licenses.LicenseLevel.course;
  if (licenseType) {
    if (isLibrary) {
      level = _licenses.LicenseLevel.library;
    } else {
      level = _licenses.LicenseLevel.block;
    }
  }
  return {
    license: licenseType || courseLicenseType,
    details: licenseType ? licenseDetails : courseLicenseDetails,
    level
  };
};
exports.determineLicense = determineLicense;
const determineText = _ref2 => {
  let {
    level
  } = _ref2;
  let levelDescription = '';
  let licenseDescription = '';
  switch (level) {
    case _licenses.LicenseLevel.course:
      levelDescription = /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.courseLevelDescription));
      licenseDescription = /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.courseLicenseDescription));
      break;
    case _licenses.LicenseLevel.library:
      levelDescription = /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.libraryLevelDescription));
      licenseDescription = /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.libraryLicenseDescription));
      break;
    default:
      // default to block
      levelDescription = /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.defaultLevelDescription));
      licenseDescription = /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.defaultLicenseDescription));
      break;
  }
  return {
    levelDescription,
    licenseDescription
  };
};
exports.determineText = determineText;
const onSelectLicense = _ref3 => {
  let {
    dispatch
  } = _ref3;
  return license => {
    switch (license) {
      case _licenses.LicenseTypes.allRightsReserved:
        dispatch(_redux.actions.video.updateField({
          licenseType: _licenses.LicenseTypes.allRightsReserved,
          licenseDetails: {}
        }));
        break;
      case _licenses.LicenseTypes.creativeCommons:
        dispatch(_redux.actions.video.updateField({
          licenseType: _licenses.LicenseTypes.creativeCommons,
          licenseDetails: {
            attribution: true,
            noncommercial: true,
            noDerivatives: true,
            shareAlike: false
          }
        }));
        break;
      default:
        dispatch(_redux.actions.video.updateField({
          licenseType: _licenses.LicenseTypes.select
        }));
        break;
    }
  };
};
exports.onSelectLicense = onSelectLicense;
var _default = exports.default = {
  determineLicense,
  determineText,
  onSelectLicense
};
//# sourceMappingURL=hooks.js.map