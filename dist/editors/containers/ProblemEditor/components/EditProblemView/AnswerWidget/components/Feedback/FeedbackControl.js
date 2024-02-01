"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _types = require("../../../../../../../data/services/cms/types");
var _ExpandableTextArea = _interopRequireDefault(require("../../../../../../../sharedComponents/ExpandableTextArea"));
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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