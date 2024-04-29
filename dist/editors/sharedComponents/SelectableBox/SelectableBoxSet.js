"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _utils = require("./utils");
const _excluded = ["children", "name", "value", "defaultValue", "onChange", "type", "columns", "className", "ariaLabel", "ariaLabelledby"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
// import { requiredWhenNot } from '../utils/propTypes';

const INPUT_TYPES = ['radio', 'checkbox'];
const DEFAULT_COLUMNS_NUMBER = 2;
const SelectableBoxSet = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
      children,
      name,
      value,
      defaultValue,
      onChange,
      type,
      columns,
      className,
      ariaLabel,
      ariaLabelledby
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const inputType = (0, _utils.getInputType)('SelectableBoxSet', type);
  return /*#__PURE__*/_react.default.createElement(inputType, _objectSpread({
    name,
    value,
    defaultValue,
    onChange,
    ref,
    className: (0, _classnames.default)('pgn__selectable_box-set', `pgn__selectable_box-set--${columns || DEFAULT_COLUMNS_NUMBER}`, className),
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby
  }, props), children);
});
SelectableBoxSet.propTypes = {
  /** Specifies a name for the group of `SelectableBox`'es. */
  name: _propTypes.default.string.isRequired,
  /** Content of the `SelectableBoxSet`. */
  children: _propTypes.default.node,
  /** A function that receives event of the clicked `SelectableBox` and can be used to handle the value change. */
  onChange: _propTypes.default.func,
  /** Indicates selected `SelectableBox`'es. */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.array]),
  /** Specifies default values for the `SelectableBox`'es. */
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  /** Indicates the input type: checkbox or radio. */
  type: _propTypes.default.oneOf(INPUT_TYPES),
  /**
   * Specifies number of `SelectableBox`'es in a row.
   *
   * Class that is responsible for the columns number: `pgn__selectable_box-set--{columns}`.
   * Max number of columns: `12`.
   */
  columns: _propTypes.default.number,
  /** A class that is be appended to the base element. */
  className: _propTypes.default.string,
  /**
   * The ID of the label for the `SelectableBoxSet`.
   *
   * An accessible label must be provided to the `SelectableBoxSet`.
   */
  ariaLabelledby: _propTypes.default.string,
  /**
   * A label for the `SelectableBoxSet`.
   *
   * If not using `ariaLabelledby`, then `ariaLabel` must be provided */
  // eslint-disable-next-line react/forbid-prop-types
  ariaLabel: _propTypes.default.any // requiredWhenNot(PropTypes.string, 'ariaLabelledby'),
};
SelectableBoxSet.defaultProps = {
  children: undefined,
  onChange: () => {},
  value: undefined,
  defaultValue: undefined,
  type: 'radio',
  columns: DEFAULT_COLUMNS_NUMBER,
  className: undefined,
  ariaLabelledby: undefined,
  ariaLabel: undefined
};
var _default = exports.default = SelectableBoxSet;
//# sourceMappingURL=SelectableBoxSet.js.map