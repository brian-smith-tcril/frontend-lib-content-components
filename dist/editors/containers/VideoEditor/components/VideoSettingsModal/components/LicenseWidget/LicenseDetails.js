"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.default = exports.LicenseDetails = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _redux = require("../../../../../../data/redux");
var _licenses = require("../../../../../../data/constants/licenses");
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const LicenseDetails = _ref => {
  let {
    license,
    details,
    level,
    // redux
    updateField
  } = _ref;
  return level !== _licenses.LicenseLevel.course && details && license !== 'select' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "x-small border-primary-100 border-bottom m-0 pr-1",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Form.Group, {
      className: "pb-2",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "mb-3",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.detailsSubsectionTitle))
      }), license === _licenses.LicenseTypes.allRightsReserved ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "mt-2",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.allRightsReservedSectionMessage))
      }) : null, license === _licenses.LicenseTypes.creativeCommons ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Stack, {
        gap: 4,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "border-primary-100 border-bottom pb-4",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Group, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
                className: "text-primary-500",
                src: _icons.Attribution
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Label, {
                className: "my-0 text-primary-500",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.attributionCheckboxLabel))
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.CheckboxControl, {
                disabled: true,
                checked: true,
                "aria-label": "Checkbox"
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.attributionSectionDescription))
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "border-primary-100 border-bottom pb-4",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Group, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
                src: _icons.Nc
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Label, {
                className: "my-0 text-primary-500",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.noncommercialCheckboxLabel))
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.CheckboxControl, {
                checked: details.noncommercial,
                disabled: level === _licenses.LicenseLevel.course,
                onChange: e => updateField({
                  licenseDetails: _objectSpread(_objectSpread({}, details), {}, {
                    noncommercial: e.target.checked
                  })
                }),
                "aria-label": "Checkbox"
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.noncommercialSectionDescription))
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "border-primary-100 border-bottom pb-4",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Group, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
                src: _icons.Nd
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Label, {
                className: "my-0 text-primary-500",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.noDerivativesCheckboxLabel))
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.CheckboxControl, {
                checked: details.noDerivatives,
                disabled: level === _licenses.LicenseLevel.course,
                onChange: e => updateField({
                  licenseDetails: _objectSpread(_objectSpread({}, details), {}, {
                    noDerivatives: e.target.checked,
                    shareAlike: e.target.checked ? false : details.shareAlike
                  })
                }),
                "aria-label": "Checkbox"
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.noDerivativesSectionDescription))
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Group, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
                src: _icons.Sa
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Label, {
                className: "my-0 text-primary-500",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.shareAlikeCheckboxLabel))
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.CheckboxControl, {
                cchecked: details.shareAlike,
                disabled: level === _licenses.LicenseLevel.course,
                onChange: e => updateField({
                  licenseDetails: _objectSpread(_objectSpread({}, details), {}, {
                    shareAlike: e.target.checked,
                    noDerivatives: e.target.checked ? false : details.noDerivatives
                  })
                }),
                "aria-label": "Checkbox"
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.shareAlikeSectionDescription))
          })]
        })]
      }) : null]
    })
  }) : null;
};
exports.LicenseDetails = LicenseDetails;
LicenseDetails.propTypes = {
  license: _propTypes.default.string.isRequired,
  details: _propTypes.default.shape({
    attribution: _propTypes.default.bool.isRequired,
    noncommercial: _propTypes.default.bool.isRequired,
    noDerivatives: _propTypes.default.bool.isRequired,
    shareAlike: _propTypes.default.bool.isRequired
  }).isRequired,
  level: _propTypes.default.string.isRequired,
  // redux
  updateField: _propTypes.default.func.isRequired
};
const mapStateToProps = () => ({});
exports.mapStateToProps = mapStateToProps;
const mapDispatchToProps = dispatch => ({
  updateField: stateUpdate => dispatch(_redux.actions.video.updateField(stateUpdate))
});
exports.mapDispatchToProps = mapDispatchToProps;
var _default = exports.default = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LicenseDetails));
//# sourceMappingURL=LicenseDetails.js.map