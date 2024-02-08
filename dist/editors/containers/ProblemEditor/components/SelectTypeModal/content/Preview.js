"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Preview = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _messages = _interopRequireDefault(require("./messages"));
var _problem = require("../../../../../data/constants/problem");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const Preview = _ref => {
  let {
    problemType,
    // injected
    intl
  } = _ref;
  if (problemType === null) {
    return null;
  }
  const data = _problem.ProblemTypes[problemType];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Container, {
    style: {
      width: '494px',
      height: '400px'
    },
    className: "bg-light-300 rounded p-4",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "small",
      children: intl.formatMessage(_messages.default.previewTitle, {
        previewTitle: data.title
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Image, {
      fluid: true,
      className: "my-3",
      src: data.preview,
      alt: intl.formatMessage(_messages.default.previewAltText, {
        problemType
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "mb-3",
      children: intl.formatMessage(_messages.default.previewDescription, {
        previewDescription: data.previewDescription
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Hyperlink, {
      destination: data.helpLink,
      target: "_blank",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.learnMoreButtonLabel))
    })]
  });
};
exports.Preview = Preview;
Preview.defaultProps = {
  problemType: null
};
Preview.propTypes = {
  problemType: _propTypes.default.string,
  // injected
  intl: _i18n.intlShape.isRequired
};
var _default = exports.default = (0, _i18n.injectIntl)(Preview);
//# sourceMappingURL=Preview.js.map