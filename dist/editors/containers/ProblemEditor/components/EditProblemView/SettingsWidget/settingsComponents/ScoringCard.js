"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.default = exports.ScoringCard = void 0;
var _react = _interopRequireDefault(require("react"));
var _lodashEs = _interopRequireDefault(require("lodash-es"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _redux = require("../../../../../../data/redux");
var _SettingsOption = _interopRequireDefault(require("../SettingsOption"));
var _messages = _interopRequireDefault(require("../messages"));
var _hooks = require("../hooks");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const ScoringCard = _ref => {
  let {
    scoring,
    defaultValue,
    updateSettings,
    // inject
    intl,
    // redux
    studioEndpointUrl,
    learningContextId,
    isLibrary
  } = _ref;
  const {
    handleUnlimitedChange,
    handleMaxAttemptChange,
    handleWeightChange,
    handleOnChange,
    attemptDisplayValue
  } = (0, _hooks.scoringCardHooks)(scoring, updateSettings, defaultValue);
  const getScoringSummary = (weight, attempts, unlimited) => {
    let summary = intl.formatMessage(_messages.default.weightSummary, {
      weight
    });
    summary += ` ${String.fromCharCode(183)} `;
    summary += unlimited ? intl.formatMessage(_messages.default.unlimitedAttemptsSummary) : intl.formatMessage(_messages.default.attemptsSummary, {
      attempts: attempts || defaultValue
    });
    return summary;
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_SettingsOption.default, {
    title: intl.formatMessage(_messages.default.scoringSettingsTitle),
    summary: getScoringSummary(scoring.weight, scoring.attempts.number, scoring.attempts.unlimited),
    className: "scoringCard",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "mb-4",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.scoringSettingsLabel))
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Form.Group, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
        type: "number",
        value: scoring.weight,
        onChange: handleWeightChange,
        floatingLabel: intl.formatMessage(_messages.default.scoringWeightInputLabel)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control.Feedback, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.weightHint))
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Form.Group, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
        value: attemptDisplayValue,
        onChange: handleOnChange,
        onBlur: handleMaxAttemptChange,
        floatingLabel: intl.formatMessage(_messages.default.scoringAttemptsInputLabel),
        disabled: scoring.attempts.unlimited
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control.Feedback, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.attemptsHint))
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Checkbox, {
        className: "mt-3 decoration-control-label",
        checked: scoring.attempts.unlimited,
        onChange: handleUnlimitedChange,
        disabled: !_lodashEs.default.isNil(defaultValue),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "x-small",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.unlimitedAttemptsCheckboxLabel))
        })
      })]
    }), !isLibrary && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Hyperlink, {
      destination: `${studioEndpointUrl}/settings/advanced/${learningContextId}#max_attempts`,
      target: "_blank",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.advancedSettingsLinkText))
    })]
  });
};
exports.ScoringCard = ScoringCard;
ScoringCard.propTypes = {
  intl: _i18n.intlShape.isRequired,
  // eslint-disable-next-line
  scoring: _propTypes.default.any.isRequired,
  updateSettings: _propTypes.default.func.isRequired,
  defaultValue: _propTypes.default.number,
  // redux
  studioEndpointUrl: _propTypes.default.string.isRequired,
  learningContextId: _propTypes.default.string,
  isLibrary: _propTypes.default.bool.isRequired
};
ScoringCard.defaultProps = {
  learningContextId: null,
  defaultValue: null
};
const mapStateToProps = state => ({
  studioEndpointUrl: _redux.selectors.app.studioEndpointUrl(state),
  learningContextId: _redux.selectors.app.learningContextId(state),
  isLibrary: _redux.selectors.app.isLibrary(state)
});
exports.mapStateToProps = mapStateToProps;
const mapDispatchToProps = exports.mapDispatchToProps = {};
var _default = exports.default = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ScoringCard));
//# sourceMappingURL=ScoringCard.js.map