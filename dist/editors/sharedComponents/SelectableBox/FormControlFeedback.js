"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _FormGroupContext = require("./FormGroupContext");
var _FormText = _interopRequireWildcard(require("./FormText"));
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = ["children"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const FormControlFeedback = _ref => {
  let {
      children
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const {
    getDescriptorProps,
    isInvalid,
    isValid
  } = (0, _FormGroupContext.useFormGroupContext)();
  const descriptorProps = getDescriptorProps(props);
  const className = (0, _classnames.default)('pgn__form-control-description', props.className);
  const textType = props.type || (0, _FormText.resolveTextType)({
    isInvalid,
    isValid
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormText.default, _objectSpread(_objectSpread({}, descriptorProps), {}, {
    className: className,
    type: textType,
    children: children
  }));
};
const FEEDBACK_TYPES = ['default', 'valid', 'invalid', 'warning', 'criteria-empty', 'criteria-valid', 'criteria-invalid'];
FormControlFeedback.propTypes = {
  /** Specifies contents of the component. */
  children: _propTypes.default.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: _propTypes.default.string,
  /** Specifies whether to show an icon next to the text. */
  hasIcon: _propTypes.default.bool,
  /** Specifies feedback type, this affects styling. */
  type: _propTypes.default.oneOf(FEEDBACK_TYPES),
  /** Specifies icon to show, will only be shown if `hasIcon` prop is set to `true`. */
  icon: _propTypes.default.node,
  /** Specifies whether to show feedback with muted styling. */
  muted: _propTypes.default.bool
};
FormControlFeedback.defaultProps = {
  hasIcon: true,
  type: undefined,
  icon: undefined,
  className: undefined,
  muted: false
};
var _default = exports.default = FormControlFeedback;
//# sourceMappingURL=FormControlFeedback.js.map