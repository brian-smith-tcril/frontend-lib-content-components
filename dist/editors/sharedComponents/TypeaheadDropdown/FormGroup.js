"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _lodashEs = _interopRequireDefault(require("lodash-es"));
var _paragon = require("@edx/paragon");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const FormGroup = props => {
  const handleFocus = e => {
    if (props.handleFocus) {
      props.handleFocus(e);
    }
  };
  const handleClick = e => {
    if (props.handleClick) {
      props.handleClick(e);
    }
  };
  const handleOnBlur = e => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      if (props.handleBlur) {
        props.handleBlur(e);
      }
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Form.Group, {
    isInvalid: !!props.errorMessage,
    onBlur: handleOnBlur,
    className: props.className,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, _objectSpread(_objectSpread({
      "data-testid": "formControl",
      "aria-invalid": props.errorMessage,
      autoComplete: props.autoComplete ? 'on' : 'off',
      onChange: props.handleChange,
      onFocus: handleFocus,
      onClick: handleClick
    }, props), {}, {
      children: props.options ? props.options() : null
    })), props.children, props.helpText && _lodashEs.default.isEmpty(props.errorMessage) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control.Feedback, {
      type: "default",
      children: props.helpText
    }, "help-text"), !_lodashEs.default.isEmpty(props.errorMessage) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control.Feedback, {
      type: "invalid",
      "feedback-for": props.name,
      "data-testid": "errorMessage",
      children: props.errorMessage
    }, "error")]
  });
};
FormGroup.defaultProps = {
  as: 'input',
  errorMessage: '',
  autoComplete: null,
  readOnly: false,
  handleBlur: null,
  handleChange: () => {},
  handleFocus: null,
  handleClick: null,
  helpText: '',
  placeholder: '',
  options: null,
  trailingElement: null,
  type: 'text',
  children: null,
  className: '',
  controlClassName: ''
};
FormGroup.propTypes = {
  as: _propTypes.default.string,
  errorMessage: _propTypes.default.string,
  autoComplete: _propTypes.default.string,
  readOnly: _propTypes.default.bool,
  floatingLabel: _propTypes.default.string.isRequired,
  handleBlur: _propTypes.default.func,
  handleChange: _propTypes.default.func,
  handleFocus: _propTypes.default.func,
  handleClick: _propTypes.default.func,
  helpText: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  name: _propTypes.default.string.isRequired,
  options: _propTypes.default.func,
  trailingElement: _propTypes.default.element,
  type: _propTypes.default.string,
  value: _propTypes.default.string.isRequired,
  children: _propTypes.default.element,
  className: _propTypes.default.string,
  controlClassName: _propTypes.default.string
};
var _default = exports.default = FormGroup;
//# sourceMappingURL=FormGroup.js.map