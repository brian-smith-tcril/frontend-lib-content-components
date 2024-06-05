"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCheckboxSetContext = exports.default = exports.FormCheckboxSetContextProvider = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _fieldUtils = require("./fieldUtils");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const identityFn = props => props;
const FormCheckboxSetContext = /*#__PURE__*/_react.default.createContext({
  getCheckboxControlProps: identityFn,
  hasCheckboxSetProvider: false
});
const useCheckboxSetContext = () => (0, _react.useContext)(FormCheckboxSetContext);
exports.useCheckboxSetContext = useCheckboxSetContext;
const FormCheckboxSetContextProvider = _ref => {
  let {
    children,
    name,
    onBlur,
    onFocus,
    onChange,
    value,
    defaultValue
  } = _ref;
  const isControlled = !defaultValue && Array.isArray(value);
  const getCheckboxControlProps = checkboxProps => _objectSpread(_objectSpread({}, checkboxProps), {}, {
    name,
    /* istanbul ignore next */
    onBlur: checkboxProps.onBlur ? (0, _fieldUtils.callAllHandlers)(onBlur, checkboxProps.onBlur) : onBlur,
    /* istanbul ignore next */
    onFocus: checkboxProps.onFocus ? (0, _fieldUtils.callAllHandlers)(onFocus, checkboxProps.onFocus) : onFocus,
    /* istanbul ignore next */
    onChange: checkboxProps.onChange ? (0, _fieldUtils.callAllHandlers)(onChange, checkboxProps.onChange) : onChange,
    checked: isControlled ? value.includes(checkboxProps.value) : undefined,
    defaultChecked: isControlled ? undefined : defaultValue && defaultValue.includes(checkboxProps.value)
  });
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = {
    name,
    value,
    defaultValue,
    getCheckboxControlProps,
    onBlur,
    onFocus,
    onChange,
    hasCheckboxSetProvider: true
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(FormCheckboxSetContext.Provider, {
    value: contextValue,
    children: children
  });
};
exports.FormCheckboxSetContextProvider = FormCheckboxSetContextProvider;
FormCheckboxSetContextProvider.propTypes = {
  children: _propTypes.default.node.isRequired,
  name: _propTypes.default.string,
  onBlur: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onChange: _propTypes.default.func,
  value: _propTypes.default.arrayOf(_propTypes.default.string),
  defaultValue: _propTypes.default.arrayOf(_propTypes.default.string)
};
FormCheckboxSetContextProvider.defaultProps = {
  onBlur: undefined,
  name: undefined,
  onFocus: undefined,
  onChange: undefined,
  value: undefined,
  defaultValue: undefined
};
var _default = exports.default = FormCheckboxSetContext;
//# sourceMappingURL=FormCheckboxSetContext.js.map