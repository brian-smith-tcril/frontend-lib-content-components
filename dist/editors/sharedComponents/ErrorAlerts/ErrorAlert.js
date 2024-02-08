"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hooks = exports.default = exports.ErrorAlert = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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