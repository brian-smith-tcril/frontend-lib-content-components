"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hooks = exports.default = exports.ErrorAlert = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const hooks = exports.hooks = {
  state: {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    isDismissed: val => _react.default.useState(val)
  },
  dismissalHooks: _ref => {
    let {
      dismissError,
      isError
    } = _ref;
    const [isDismissed, setIsDismissed] = hooks.state.isDismissed(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    _react.default.useEffect(() => {
      setIsDismissed(isDismissed && !isError);
    }, [isError]);
    return {
      isDismissed,
      dismissAlert: () => {
        setIsDismissed(true);
        if (dismissError) {
          dismissError();
        }
      }
    };
  }
};
const ErrorAlert = _ref2 => {
  let {
    dismissError,
    hideHeading,
    isError,
    children
  } = _ref2;
  const {
    isDismissed,
    dismissAlert
  } = hooks.dismissalHooks({
    dismissError,
    isError
  });
  if (!isError || isDismissed) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Alert, {
    variant: "danger",
    icon: _icons.Error,
    dismissible: true,
    onClose: dismissAlert,
    children: [!hideHeading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Alert.Heading, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.errorTitle))
    }), children]
  });
};
exports.ErrorAlert = ErrorAlert;
ErrorAlert.defaultProps = {
  dismissError: null,
  hideHeading: false
};
ErrorAlert.propTypes = {
  dismissError: _propTypes.default.func,
  hideHeading: _propTypes.default.bool,
  isError: _propTypes.default.bool.isRequired,
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]).isRequired
};
var _default = exports.default = ErrorAlert;
//# sourceMappingURL=ErrorAlert.js.map