"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.default = exports.LicenseWidget = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _redux = require("../../../../../../data/redux");
var _hooks = _interopRequireDefault(require("./hooks"));
var _messages = _interopRequireDefault(require("./messages"));
var _CollapsibleFormWidget = _interopRequireDefault(require("../CollapsibleFormWidget"));
var _LicenseBlurb = _interopRequireDefault(require("./LicenseBlurb"));
var _LicenseSelector = _interopRequireDefault(require("./LicenseSelector"));
var _LicenseDetails = _interopRequireDefault(require("./LicenseDetails"));
var _LicenseDisplay = _interopRequireDefault(require("./LicenseDisplay"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
 * Collapsible Form widget controlling video license type and details
 */
const LicenseWidget = _ref => {
  let {
    // injected
    intl,
    // redux
    isLibrary,
    licenseType,
    licenseDetails,
    courseLicenseType,
    courseLicenseDetails,
    updateField
  } = _ref;
  const {
    license,
    details,
    level
  } = _hooks.default.determineLicense({
    isLibrary,
    licenseType,
    licenseDetails,
    courseLicenseType,
    courseLicenseDetails
  });
  const {
    licenseDescription,
    levelDescription
  } = _hooks.default.determineText({
    level
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CollapsibleFormWidget.default, {
    subtitle: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_LicenseBlurb.default, {
        license: license,
        details: details
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "x-small mt-2",
        children: levelDescription
      })]
    }),
    title: intl.formatMessage(_messages.default.title),
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Stack, {
      gap: 4,
      children: [license ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_LicenseSelector.default, {
          license: license,
          level: level
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LicenseDetails.default, {
          license: license,
          details: details,
          level: level
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LicenseDisplay.default, {
          license: license,
          details: details,
          licenseDescription: licenseDescription
        })]
      }) : null, !licenseType ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "border-primary-100 border-bottom my-2"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
          className: "text-primary-500 font-weight-bold justify-content-start pl-0",
          size: "sm",
          iconBefore: _icons.Add,
          variant: "link",
          onClick: () => updateField({
            licenseType: 'select',
            licenseDetails: {}
          }),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.addLicenseButtonLabel))
        })]
      }) : null]
    })
  });
};
exports.LicenseWidget = LicenseWidget;
LicenseWidget.propTypes = {
  // injected
  intl: _i18n.intlShape.isRequired,
  // redux
  isLibrary: _propTypes.default.bool.isRequired,
  licenseType: _propTypes.default.string.isRequired,
  licenseDetails: _propTypes.default.shape({}).isRequired,
  courseLicenseType: _propTypes.default.string.isRequired,
  courseLicenseDetails: _propTypes.default.shape({}).isRequired,
  updateField: _propTypes.default.func.isRequired
};
const mapStateToProps = state => ({
  isLibrary: _redux.selectors.app.isLibrary(state),
  licenseType: _redux.selectors.video.licenseType(state),
  licenseDetails: _redux.selectors.video.licenseDetails(state),
  courseLicenseType: _redux.selectors.video.courseLicenseType(state),
  courseLicenseDetails: _redux.selectors.video.courseLicenseDetails(state)
});
exports.mapStateToProps = mapStateToProps;
const mapDispatchToProps = dispatch => ({
  updateField: stateUpdate => dispatch(_redux.actions.video.updateField(stateUpdate))
});
exports.mapDispatchToProps = mapDispatchToProps;
var _default = exports.default = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LicenseWidget));
//# sourceMappingURL=index.js.map