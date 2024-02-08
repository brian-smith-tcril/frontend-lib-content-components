"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.default = exports.SelectTypeFooter = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _paragon = require("@edx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _messages = _interopRequireDefault(require("./messages"));
var _hooks = _interopRequireDefault(require("../hooks"));
var _redux = require("../../../../../data/redux");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const SelectTypeFooter = _ref => {
  let {
    onCancel,
    selected,
    // redux
    updateField,
    setBlockTitle,
    // injected,
    intl
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "editor-footer fixed-bottom",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ModalDialog.Footer, {
      className: "border-top-0",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
          "aria-label": intl.formatMessage(_messages.default.cancelButtonAriaLabel),
          variant: "tertiary",
          onClick: onCancel,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.cancelButtonLabel))
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
          "aria-label": intl.formatMessage(_messages.default.selectButtonAriaLabel),
          onClick: _hooks.default.onSelect({
            selected,
            updateField,
            setBlockTitle
          }),
          disabled: !selected,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.selectButtonLabel))
        })]
      })
    })
  });
};
exports.SelectTypeFooter = SelectTypeFooter;
SelectTypeFooter.defaultProps = {
  selected: null
};
SelectTypeFooter.propTypes = {
  onCancel: _propTypes.default.func.isRequired,
  selected: _propTypes.default.string,
  updateField: _propTypes.default.func.isRequired,
  setBlockTitle: _propTypes.default.func.isRequired,
  // injected
  intl: _i18n.intlShape.isRequired
};
const mapStateToProps = () => ({});
exports.mapStateToProps = mapStateToProps;
const mapDispatchToProps = exports.mapDispatchToProps = {
  updateField: _redux.actions.problem.updateField,
  setBlockTitle: _redux.actions.app.setBlockTitle
};
var _default = exports.default = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SelectTypeFooter));
//# sourceMappingURL=SelectTypeFooter.js.map