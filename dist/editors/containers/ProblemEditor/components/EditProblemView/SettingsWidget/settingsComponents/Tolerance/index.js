"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAnswerRangeSet = exports.handleToleranceValueChange = exports.handleToleranceTypeChange = exports.getSummary = exports.default = exports.ToleranceCard = void 0;
var _react = _interopRequireWildcard(require("react"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SettingsOption = _interopRequireDefault(require("../../SettingsOption"));
var _messages = _interopRequireDefault(require("./messages"));
var _constants = require("./constants");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // eslint-disable-next-line no-unused-vars
const isAnswerRangeSet = _ref => {
  let {
    answers
  } = _ref;
  return !!answers[0].isAnswerRange;
};
exports.isAnswerRangeSet = isAnswerRangeSet;
const handleToleranceTypeChange = _ref2 => {
  let {
    updateSettings,
    tolerance,
    answers
  } = _ref2;
  return event => {
    if (!isAnswerRangeSet({
      answers
    })) {
      let value;
      if (event.target.value === _constants.ToleranceTypes.none.type) {
        value = null;
      } else {
        value = tolerance.value || 0;
      }
      const newTolerance = {
        type: _constants.ToleranceTypes[Object.keys(_constants.ToleranceTypes)[event.target.selectedIndex]].type,
        value
      };
      updateSettings({
        tolerance: newTolerance
      });
    }
  };
};
exports.handleToleranceTypeChange = handleToleranceTypeChange;
const handleToleranceValueChange = _ref3 => {
  let {
    updateSettings,
    tolerance,
    answers
  } = _ref3;
  return event => {
    if (!isAnswerRangeSet({
      answers
    })) {
      const newTolerance = {
        value: event.target.value,
        type: tolerance.type
      };
      updateSettings({
        tolerance: newTolerance
      });
    }
  };
};
exports.handleToleranceValueChange = handleToleranceValueChange;
const getSummary = _ref4 => {
  let {
    tolerance,
    intl
  } = _ref4;
  switch (tolerance?.type) {
    case _constants.ToleranceTypes.percent.type:
      return `± ${tolerance.value}%`;
    case _constants.ToleranceTypes.number.type:
      return `± ${tolerance.value}`;
    case _constants.ToleranceTypes.none.type:
      return intl.formatMessage(_messages.default.noneToleranceSummary);
    default:
      return intl.formatMessage(_messages.default.noneToleranceSummary);
  }
};
exports.getSummary = getSummary;
const ToleranceCard = _ref5 => {
  let {
    tolerance,
    answers,
    updateSettings,
    // inject
    intl
  } = _ref5;
  const isAnswerRange = isAnswerRangeSet({
    answers
  });
  let summary = getSummary({
    tolerance,
    intl
  });
  (0, _react.useEffect)(() => {
    summary = getSummary({
      tolerance,
      intl
    });
  }, [tolerance]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_SettingsOption.default, {
    title: intl.formatMessage(_messages.default.toleranceSettingTitle),
    summary: summary,
    none: tolerance.type === _constants.ToleranceTypes.none.type,
    children: [isAnswerRange && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Alert, {
      varaint: "info",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.toleranceAnswerRangeWarning))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "mb-3",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.toleranceSettingText))
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Form.Group, {
      className: "pb-0 mb-0",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
        as: "select",
        onChange: handleToleranceTypeChange({
          updateSettings,
          tolerance,
          answers
        }),
        disabled: isAnswerRange,
        value: tolerance.type,
        children: Object.keys(_constants.ToleranceTypes).map(toleranceType => /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
          value: toleranceType.type,
          children: intl.formatMessage(_constants.ToleranceTypes[toleranceType].message)
        }, toleranceType.type))
      }), tolerance?.type !== _constants.ToleranceTypes.none.type && !isAnswerRange && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
        className: "mt-4",
        type: "number",
        value: tolerance.value,
        onChange: handleToleranceValueChange({
          updateSettings,
          tolerance,
          answers
        }),
        floatingLabel: intl.formatMessage(_messages.default.toleranceValueInputLabel)
      })]
    })]
  });
};
exports.ToleranceCard = ToleranceCard;
ToleranceCard.propTypes = {
  tolerance: _propTypes.default.shape({
    type: _propTypes.default.string,
    value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.any])
  }).isRequired,
  answers: _propTypes.default.arrayOf(_propTypes.default.shape({
    correct: _propTypes.default.bool,
    id: _propTypes.default.string,
    selectedFeedback: _propTypes.default.string,
    title: _propTypes.default.string,
    unselectedFeedback: _propTypes.default.string
  })).isRequired,
  updateSettings: _propTypes.default.func.isRequired,
  intl: _i18n.intlShape.isRequired
};
var _default = exports.default = (0, _i18n.injectIntl)(ToleranceCard);
//# sourceMappingURL=index.js.map