"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CheckboxControl = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _FormCheckboxSetContext = require("./FormCheckboxSetContext");
var _FormGroupContext = require("./FormGroupContext");
var _FormLabel = _interopRequireDefault(require("./FormLabel"));
var _FormControlFeedback = _interopRequireDefault(require("./FormControlFeedback"));
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = ["isIndeterminate"],
  _excluded2 = ["children", "className", "controlClassName", "labelClassName", "description", "isInvalid", "isValid", "controlAs", "floatLabelLeft"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const CheckboxControl = exports.CheckboxControl = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
      isIndeterminate
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const {
    getCheckboxControlProps,
    hasCheckboxSetProvider
  } = (0, _FormCheckboxSetContext.useCheckboxSetContext)();
  const defaultRef = _react.default.useRef();
  const resolvedRef = ref || defaultRef;
  const {
    getControlProps
  } = (0, _FormGroupContext.useFormGroupContext)();
  let checkboxProps = getControlProps(_objectSpread(_objectSpread({}, props), {}, {
    className: (0, _classnames.default)('pgn__form-checkbox-input', props.className)
  }));
  if (hasCheckboxSetProvider) {
    checkboxProps = getCheckboxControlProps(checkboxProps);
  }
  _react.default.useEffect(() => {
    // this if(resolvedRef.current) prevents console errors in testing
    if (resolvedRef.current) {
      resolvedRef.current.indeterminate = isIndeterminate;
    }
  }, [resolvedRef, isIndeterminate]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread(_objectSpread({
    type: "checkbox"
  }, checkboxProps), {}, {
    ref: resolvedRef
  }));
});
CheckboxControl.propTypes = {
  /** Specifies whether the checkbox should be rendered in indeterminate state. */
  isIndeterminate: _propTypes.default.bool,
  /** Specifies class name to append to the base element. */
  className: _propTypes.default.string
};
CheckboxControl.defaultProps = {
  isIndeterminate: false,
  className: undefined
};
const FormCheckbox = /*#__PURE__*/_react.default.forwardRef((_ref2, ref) => {
  let {
      children,
      className,
      controlClassName,
      labelClassName,
      description,
      isInvalid,
      isValid,
      controlAs,
      floatLabelLeft
    } = _ref2,
    props = _objectWithoutProperties(_ref2, _excluded2);
  const {
    hasCheckboxSetProvider
  } = (0, _FormCheckboxSetContext.useCheckboxSetContext)();
  const {
    hasFormGroupProvider,
    useSetIsControlGroupEffect,
    getControlProps
  } = (0, _FormGroupContext.useFormGroupContext)();
  useSetIsControlGroupEffect(true);
  const shouldActAsGroup = hasFormGroupProvider && !hasCheckboxSetProvider;
  const groupProps = shouldActAsGroup ? _objectSpread(_objectSpread({}, getControlProps({})), {}, {
    role: 'group'
  }) : {};
  const control = /*#__PURE__*/_react.default.createElement(controlAs, _objectSpread(_objectSpread({}, props), {}, {
    className: controlClassName,
    ref
  }));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormGroupContext.FormGroupContextProvider, {
    controlId: props.id,
    isInvalid: isInvalid,
    isValid: isValid,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({
      className: (0, _classnames.default)('pgn__form-checkbox', className, {
        'pgn__form-control-valid': isValid,
        'pgn__form-control-invalid': isInvalid,
        'pgn__form-control-disabled': props.disabled,
        'pgn__form-control-label-left': !!floatLabelLeft
      })
    }, groupProps), {}, {
      children: [control, /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FormLabel.default, {
          className: labelClassName,
          children: children
        }), description && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlFeedback.default, {
          hasIcon: false,
          children: description
        })]
      })]
    }))
  });
});
FormCheckbox.propTypes = {
  /** Specifies id of the FormCheckbox component. */
  id: _propTypes.default.string,
  /** Specifies contents of the component. */
  children: _propTypes.default.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: _propTypes.default.string,
  /** Specifies class name for control component. */
  controlClassName: _propTypes.default.string,
  /** Specifies class name for label component. */
  labelClassName: _propTypes.default.string,
  /** Specifies description to show under the checkbox. */
  description: _propTypes.default.node,
  /** Specifies whether to display checkbox in invalid state, this affects styling. */
  isInvalid: _propTypes.default.bool,
  /** Specifies whether to display checkbox in valid state, this affects styling. */
  isValid: _propTypes.default.bool,
  /** Specifies control element. */
  controlAs: _propTypes.default.elementType,
  /** Specifies whether the floating label should be aligned to the left. */
  floatLabelLeft: _propTypes.default.bool,
  /** Specifies whether the `FormCheckbox` is disabled. */
  disabled: _propTypes.default.bool
};
FormCheckbox.defaultProps = {
  id: undefined,
  className: undefined,
  controlClassName: undefined,
  labelClassName: undefined,
  description: undefined,
  isInvalid: false,
  isValid: false,
  controlAs: CheckboxControl,
  floatLabelLeft: false,
  disabled: false
};
var _default = exports.default = FormCheckbox;
//# sourceMappingURL=FormCheckbox.js.map