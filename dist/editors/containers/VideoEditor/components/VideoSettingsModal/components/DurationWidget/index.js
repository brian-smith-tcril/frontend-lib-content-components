"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.default = exports.DurationWidget = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _redux = require("../../../../../../data/redux");
var _utils = require("../../../../../../utils");
var _CollapsibleFormWidget = _interopRequireDefault(require("../CollapsibleFormWidget"));
var _hooks = _interopRequireDefault(require("./hooks"));
var _messages = _interopRequireDefault(require("../messages"));
require("./index.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
 * Collapsible Form widget controlling video start and end times
 * Also displays the total run time of the video.
 */
const DurationWidget = _ref => {
  let {
    // redux
    duration,
    updateField,
    // injected
    intl
  } = _ref;
  const {
    unsavedDuration,
    onBlur,
    onChange,
    onKeyDown,
    getTotalLabel
  } = _hooks.default.durationWidget({
    duration,
    updateField
  });
  const timeKeys = (0, _utils.keyStore)(duration);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_CollapsibleFormWidget.default, {
    fontSize: "x-small",
    title: intl.formatMessage(_messages.default.durationTitle),
    subtitle: getTotalLabel({
      durationString: duration,
      subtitle: true,
      intl
    }),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.durationDescription)), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Form.Row, {
      className: "mt-4.5",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Form.Group, {
        as: _paragon.Col,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
          floatingLabel: intl.formatMessage(_messages.default.startTimeLabel),
          onBlur: onBlur(timeKeys.startTime),
          onChange: onChange(timeKeys.startTime),
          onKeyDown: onKeyDown(timeKeys.startTime),
          value: unsavedDuration.startTime
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control.Feedback, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.durationHint))
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Form.Group, {
        as: _paragon.Col,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
          floatingLabel: intl.formatMessage(_messages.default.stopTimeLabel),
          onBlur: onBlur(timeKeys.stopTime),
          onChange: onChange(timeKeys.stopTime),
          onKeyDown: onKeyDown(timeKeys.stopTime),
          value: unsavedDuration.stopTime
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control.Feedback, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.durationHint))
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "mt-4 mx-2 text-right",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "p-2 total-label rounded",
        children: getTotalLabel({
          durationString: duration,
          subtitle: false,
          intl
        })
      })
    })]
  });
};
exports.DurationWidget = DurationWidget;
DurationWidget.propTypes = {
  // redux
  duration: _propTypes.default.objectOf(_propTypes.default.number).isRequired,
  updateField: _propTypes.default.func.isRequired,
  // injected
  intl: _i18n.intlShape.isRequired
};
const mapStateToProps = state => ({
  duration: _redux.selectors.video.duration(state)
});
exports.mapStateToProps = mapStateToProps;
const mapDispatchToProps = exports.mapDispatchToProps = {
  updateField: _redux.actions.video.updateField
};
var _default = exports.default = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DurationWidget));
//# sourceMappingURL=index.js.map