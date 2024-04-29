"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RadioControl = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _FormRadioSetContext = require("./FormRadioSetContext");
var _FormGroupContext = require("./FormGroupContext");
var _FormLabel = _interopRequireDefault(require("./FormLabel"));
var _FormControlFeedback = _interopRequireDefault(require("./FormControlFeedback"));
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = ["children", "className", "controlClassName", "labelClassName", "description", "isInvalid", "isValid"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const RadioControl = exports.RadioControl = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const {
    getControlProps
  } = (0, _FormGroupContext.useFormGroupContext)();
  const {
    getRadioControlProps,
    hasRadioSetProvider
  } = (0, _FormRadioSetContext.useRadioSetContext)();
  let radioProps = getControlProps(_objectSpread(_objectSpread({}, props), {}, {
    className: (0, _classnames.default)('pgn__form-radio-input', props.className)
  }));
  if (hasRadioSetProvider) {
    radioProps = getRadioControlProps(radioProps);
  }
  const onChange = function () {
    if (radioProps.onChange) {
      radioProps.onChange(...arguments);
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread(_objectSpread({}, _objectSpread(_objectSpread({}, radioProps), {}, {
    onChange
  })), {}, {
    type: "radio",
    ref: ref
  }));
});
RadioControl.propTypes = {
  className: _propTypes.default.string
};
RadioControl.defaultProps = {
  className: undefined
};
const FormRadio = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
      children,
      className,
      controlClassName,
      labelClassName,
      description,
      isInvalid,
      isValid
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormGroupContext.FormGroupContextProvider, {
    controlId: props.id,
    isInvalid: isInvalid,
    isValid: isValid,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _classnames.default)('pgn__form-radio', className, {
        'pgn__form-control-valid': isValid,
        'pgn__form-control-invalid': isInvalid,
        'pgn__form-control-disabled': props.disabled
      }),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(RadioControl, _objectSpread({
        ref: ref,
        className: controlClassName
      }, props)), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FormLabel.default, {
          className: labelClassName,
          children: children
        }), description && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlFeedback.default, {
          hasIcon: false,
          children: description
        })]
      })]
    })
  });
});
FormRadio.propTypes = {
  /** Specifies id of the FormRadio component. */
  id: _propTypes.default.string,
  /** Specifies contents of the component. */
  children: _propTypes.default.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: _propTypes.default.string,
  /** Specifies class name for control component. */
  controlClassName: _propTypes.default.string,
  /** Specifies class name for label component. */
  labelClassName: _propTypes.default.string,
  /** Specifies description to show under the radio's value. */
  description: _propTypes.default.node,
  /** Specifies whether to display component in invalid state, this affects styling. */
  isInvalid: _propTypes.default.bool,
  /** Specifies whether to display component in valid state, this affects styling. */
  isValid: _propTypes.default.bool,
  /** Specifies whether the `FormRadio` is disabled. */
  disabled: _propTypes.default.bool
};
FormRadio.defaultProps = {
  id: undefined,
  className: undefined,
  controlClassName: undefined,
  labelClassName: undefined,
  description: undefined,
  isInvalid: false,
  isValid: false,
  disabled: false
};
var _default = exports.default = FormRadio;
//# sourceMappingURL=FormRadio.js.map