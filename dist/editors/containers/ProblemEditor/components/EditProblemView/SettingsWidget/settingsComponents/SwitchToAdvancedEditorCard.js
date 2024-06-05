"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.default = exports.SwitchToAdvancedEditorCard = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _messages = _interopRequireDefault(require("../messages"));
var _redux = require("../../../../../../data/redux");
var _BaseModal = _interopRequireDefault(require("../../../../../../sharedComponents/BaseModal"));
var _Button = _interopRequireDefault(require("../../../../../../sharedComponents/Button"));
var _hooks = require("../hooks");
var _problem = require("../../../../../../data/constants/problem");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const SwitchToAdvancedEditorCard = _ref => {
  let {
    problemType,
    switchToAdvancedEditor
  } = _ref;
  const [isConfirmOpen, setConfirmOpen] = _react.default.useState(false);
  if (problemType === _problem.ProblemTypeKeys.ADVANCED) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Card, {
    className: "border border-light-700 shadow-none",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_BaseModal.default, {
      isOpen: isConfirmOpen,
      close: () => {
        setConfirmOpen(false);
      },
      title: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.ConfirmSwitchMessageTitle)),
      confirmAction: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        onClick: () => (0, _hooks.confirmSwitchToAdvancedEditor)({
          switchToAdvancedEditor,
          setConfirmOpen
        }),
        variant: "primary",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.ConfirmSwitchButtonLabel))
      }),
      size: "md",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.ConfirmSwitchMessage))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      className: "my-3 ml-2 py-0",
      variant: "link",
      size: "sm",
      onClick: () => {
        setConfirmOpen(true);
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.SwitchButtonLabel))
    })]
  });
};
exports.SwitchToAdvancedEditorCard = SwitchToAdvancedEditorCard;
SwitchToAdvancedEditorCard.propTypes = {
  switchToAdvancedEditor: _propTypes.default.func.isRequired,
  problemType: _propTypes.default.string.isRequired
};
const mapStateToProps = () => ({});
exports.mapStateToProps = mapStateToProps;
const mapDispatchToProps = exports.mapDispatchToProps = {
  switchToAdvancedEditor: _redux.thunkActions.problem.switchToAdvancedEditor
};
var _default = exports.default = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SwitchToAdvancedEditorCard));
//# sourceMappingURL=SwitchToAdvancedEditorCard.js.map