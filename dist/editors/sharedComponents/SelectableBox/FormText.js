"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "FORM_TEXT_TYPES", {
  enumerable: true,
  get: function () {
    return _constants.FORM_TEXT_TYPES;
  }
});
exports.resolveTextType = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _constants = require("./constants");
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = ["children", "type", "icon", "muted", "hasIcon"]; // import Icon from '../Icon';
// import {
//   Check, Close, Cancel, CheckCircle, RadioButtonUnchecked, WarningFilled,
// } from '../../icons';
// const FORM_TEXT_ICONS = {
//   [FORM_TEXT_TYPES.DEFAULT]: null,
//   [FORM_TEXT_TYPES.VALID]: Check,
//   [FORM_TEXT_TYPES.INVALID]: Close,
//   [FORM_TEXT_TYPES.WARNING]: WarningFilled,
//   [FORM_TEXT_TYPES.CRITERIA_EMPTY]: RadioButtonUnchecked,
//   [FORM_TEXT_TYPES.CRITERIA_VALID]: CheckCircle,
//   [FORM_TEXT_TYPES.CRITERIA_INVALID]: Cancel,
// };
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const resolveTextType = _ref => {
  let {
    isInvalid,
    isValid
  } = _ref;
  if (isValid) {
    return _constants.FORM_TEXT_TYPES.VALID;
  }
  if (isInvalid) {
    return _constants.FORM_TEXT_TYPES.INVALID;
  }
  return _constants.FORM_TEXT_TYPES.DEFAULT;
};

// const FormTextIcon = ({ type, customIcon }) => {
//   if (customIcon) {
//     return customIcon;
//   }

//   const typeIcon = FORM_TEXT_ICONS[type];
//   if (typeIcon) {
//     return <Icon src={typeIcon} />;
//   }

//   return null;
// };

// FormTextIcon.propTypes = {
//   type: PropTypes.oneOf(Object.values(FORM_TEXT_TYPES)),
//   customIcon: PropTypes.node,
// };

// FormTextIcon.defaultProps = {
//   type: undefined,
//   customIcon: undefined,
// };
exports.resolveTextType = resolveTextType;
const FormText = _ref2 => {
  let {
      children,
      type,
      icon,
      muted,
      hasIcon
    } = _ref2,
    props = _objectWithoutProperties(_ref2, _excluded);
  const className = (0, _classnames.default)(props.className, 'pgn__form-text', `pgn__form-text-${type}`, {
    'text-muted': muted
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread({}, props), {}, {
    className: className,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: children
    })
  }));
};
const FORM_TEXT_TYPE_CHOICES = ['default', 'valid', 'invalid', 'warning', 'criteria-empty', 'criteria-valid', 'criteria-invalid'];
FormText.propTypes = {
  /** Specifies contents of the component. */
  children: _propTypes.default.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: _propTypes.default.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: _propTypes.default.bool,
  /** Specifies text type, this affects styling. */
  type: _propTypes.default.oneOf(FORM_TEXT_TYPE_CHOICES),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: _propTypes.default.node,
  /** Specifies whether to show text with muted styling. */
  muted: _propTypes.default.bool
};
FormText.defaultProps = {
  hasIcon: true,
  type: 'default',
  icon: undefined,
  className: undefined,
  muted: false
};
var _default = exports.default = FormText;
//# sourceMappingURL=FormText.js.map