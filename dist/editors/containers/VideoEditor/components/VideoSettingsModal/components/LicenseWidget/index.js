"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.default = exports.LicenseWidget = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
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