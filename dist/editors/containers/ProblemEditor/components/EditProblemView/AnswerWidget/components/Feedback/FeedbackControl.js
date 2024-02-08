"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _types = require("../../../../../../../data/services/cms/types");
var _ExpandableTextArea = _interopRequireDefault(require("../../../../../../../sharedComponents/ExpandableTextArea"));
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const FeedbackControl = _ref => {
  let {
    feedback,
    onChange,
    labelMessage,
    labelMessageBoldUnderline,
    answer,
    intl,
    type
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Form.Group, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Label, {
      className: "mb-3",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread(_objectSpread({}, labelMessage), {}, {
        values: {
          answerId: answer.id,
          boldunderline: /*#__PURE__*/(0, _jsxRuntime.jsx)("b", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("u", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, labelMessageBoldUnderline))
            })
          })
        }
      }))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExpandableTextArea.default, {
      id: `${type}Feedback-${answer.id}`,
      value: feedback,
      setContent: onChange,
      placeholder: intl.formatMessage(_messages.default.feedbackPlaceholder)
    })]
  });
};
FeedbackControl.propTypes = {
  feedback: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  labelMessage: _propTypes.default.string.isRequired,
  labelMessageBoldUnderline: _propTypes.default.string.isRequired,
  answer: _types.answerOptionProps.isRequired,
  type: _propTypes.default.string.isRequired,
  intl: _i18n.intlShape.isRequired
};
var _default = exports.default = FeedbackControl;
//# sourceMappingURL=FeedbackControl.js.map