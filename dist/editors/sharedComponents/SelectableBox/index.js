"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _SelectableBoxSet = _interopRequireDefault(require("./SelectableBoxSet"));
var _FormCheckboxSetContext = require("./FormCheckboxSetContext");
var _FormRadioSetContext = require("./FormRadioSetContext");
var _utils = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = ["type", "value", "checked", "children", "isIndeterminate", "isInvalid", "onClick", "onFocus", "inputHidden", "className"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const INPUT_TYPES = ['radio', 'checkbox'];
const SelectableBox = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
      type,
      value,
      checked,
      children,
      isIndeterminate,
      isInvalid,
      onClick,
      onFocus,
      inputHidden,
      className
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const inputType = (0, _utils.getInputType)('SelectableBox', type);
  const {
    value: radioValue
  } = (0, _FormRadioSetContext.useRadioSetContext)();
  const {
    value: checkboxValues = []
  } = (0, _FormCheckboxSetContext.useCheckboxSetContext)();
  const isChecked = () => {
    switch (type) {
      case 'radio':
        return radioValue === value;
      case 'checkbox':
        return checkboxValues.includes(value);
      default:
        return radioValue === value;
    }
  };
  const inputRef = (0, _react.useRef)(null);
  const input = /*#__PURE__*/_react.default.createElement(inputType, _objectSpread({
    value,
    checked,
    hidden: inputHidden,
    ref: inputRef,
    tabIndex: -1,
    onChange: () => {}
  }, type === 'checkbox' ? _objectSpread(_objectSpread({}, props), {}, {
    isIndeterminate
  }) : _objectSpread({}, props)), null);
  (0, _react.useEffect)(() => {
    if (onClick && inputRef.current) {
      inputRef.current.onclick = () => onClick(inputRef.current);
    }
  }, [onClick]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({
    role: "button",
    onKeyPress: () => inputRef.current.click(),
    onClick: () => inputRef.current.click(),
    onFocus: onFocus,
    className: (0, _classnames.default)('pgn__selectable_box', className, {
      'pgn__selectable_box-active': isChecked() || checked,
      'pgn__selectable_box-invalid': isInvalid
    }),
    tabIndex: 0,
    ref: ref
  }, props), {}, {
    children: [input, children]
  }));
});
SelectableBox.propTypes = {
  /** Content of the `SelectableBox`. */
  children: _propTypes.default.node.isRequired,
  /** A value that is passed to the input tag. */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  /** Controls whether `SelectableBox` is checked. */
  checked: _propTypes.default.bool,
  /** Indicates the input type: checkbox or radio. */
  type: _propTypes.default.oneOf(INPUT_TYPES),
  /** Function that is called when the `SelectableBox` is clicked. */
  onClick: _propTypes.default.func,
  /** Function that is called when the `SelectableBox` is focused. */
  onFocus: _propTypes.default.func,
  /** Controls display of the input (checkbox or radio button) on the `SelectableBox`. */
  inputHidden: _propTypes.default.bool,
  /** Indicates a state for the 'checkbox' `type` when `SelectableBox` is neither checked nor unchecked. */
  isIndeterminate: _propTypes.default.bool,
  /** Adds errors styles to the `SelectableBox`. */
  isInvalid: _propTypes.default.bool,
  /** A class that is appended to the base element. */
  className: _propTypes.default.string
};
SelectableBox.defaultProps = {
  value: undefined,
  checked: false,
  type: 'radio',
  onClick: () => {},
  onFocus: () => {},
  inputHidden: true,
  isIndeterminate: false,
  isInvalid: false,
  className: undefined
};
SelectableBox.Set = _SelectableBoxSet.default;
var _default = exports.default = SelectableBox;
//# sourceMappingURL=index.js.map