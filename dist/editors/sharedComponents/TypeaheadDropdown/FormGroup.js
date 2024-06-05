"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _lodashEs = _interopRequireDefault(require("lodash-es"));
var _paragon = require("@openedx/paragon");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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