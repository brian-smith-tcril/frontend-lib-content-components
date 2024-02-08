"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ProblemTypeSelect = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _problem = require("../../../../../data/constants/problem");
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const ProblemTypeSelect = _ref => {
  let {
    selected,
    setSelected
  } = _ref;
  const handleChange = e => setSelected(e.target.value);
  const handleClick = () => setSelected(_problem.AdvanceProblemKeys.BLANK);
  const settings = {
    'aria-label': 'checkbox',
    type: 'radio'
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Container, {
    style: {
      width: '494px',
      height: '400px'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.SelectableBox.Set, {
      columns: 1,
      onChange: handleChange,
      type: settings.type,
      value: selected,
      children: Object.values(_problem.ProblemTypeKeys).map(key => key !== 'advanced' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.SelectableBox, _objectSpread(_objectSpread({
        className: "border border-light-400 text-primary-500 shadow-none",
        id: key,
        value: key
      }, settings), {}, {
        children: _problem.ProblemTypes[key].title
      })) : null)
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
      variant: "link",
      className: "pl-0 mt-2",
      onClick: handleClick,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.advanceProblemButtonLabel))
    })]
  });
};
exports.ProblemTypeSelect = ProblemTypeSelect;
ProblemTypeSelect.propTypes = {
  selected: _propTypes.default.string.isRequired,
  setSelected: _propTypes.default.func.isRequired
};
var _default = exports.default = (0, _i18n.injectIntl)(ProblemTypeSelect);
//# sourceMappingURL=ProblemTypeSelect.js.map