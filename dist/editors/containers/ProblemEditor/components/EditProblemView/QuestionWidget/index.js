"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.default = exports.QuestionWidget = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _i18n = require("@edx/frontend-platform/i18n");
var _redux = require("../../../../../data/redux");
var _messages = _interopRequireDefault(require("./messages"));
var _TinyMceWidget = _interopRequireDefault(require("../../../../../sharedComponents/TinyMceWidget"));
var _hooks = require("../../../../../sharedComponents/TinyMceWidget/hooks");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const QuestionWidget = _ref => {
  let {
    // redux
    question,
    // injected
    intl
  } = _ref;
  const {
    editorRef,
    refReady,
    setEditorRef
  } = (0, _hooks.prepareEditorRef)();
  if (!refReady) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "tinyMceWidget",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "h4 mb-3",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.questionWidgetTitle))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TinyMceWidget.default, {
      id: "question",
      editorType: "question",
      editorRef: editorRef,
      editorContentHtml: question,
      setEditorRef: setEditorRef,
      minHeight: 150,
      placeholder: intl.formatMessage(_messages.default.placeholder)
    })]
  });
};
exports.QuestionWidget = QuestionWidget;
QuestionWidget.propTypes = {
  // redux
  question: _propTypes.default.string.isRequired,
  // injected
  intl: _i18n.intlShape.isRequired
};
const mapStateToProps = state => ({
  question: _redux.selectors.problem.question(state)
});
exports.mapStateToProps = mapStateToProps;
var _default = exports.default = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps)(QuestionWidget));
//# sourceMappingURL=index.js.map