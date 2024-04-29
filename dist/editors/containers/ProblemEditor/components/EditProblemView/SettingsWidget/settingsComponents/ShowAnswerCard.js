"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.default = exports.ShowAnswerCard = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _SettingsOption = _interopRequireDefault(require("../SettingsOption"));
var _problem = require("../../../../../../data/constants/problem");
var _redux = require("../../../../../../data/redux");
var _messages = _interopRequireDefault(require("../messages"));
var _hooks = require("../hooks");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const ShowAnswerCard = _ref => {
  let {
    showAnswer,
    updateSettings,
    defaultValue,
    // inject
    intl,
    // redux
    studioEndpointUrl,
    learningContextId,
    isLibrary
  } = _ref;
  const {
    handleShowAnswerChange,
    handleAttemptsChange,
    showAttempts
  } = (0, _hooks.useAnswerSettings)(showAnswer, updateSettings);
  const currentShowAnswer = showAnswer.on || defaultValue;
  const showAnswerSection = /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "pb-2",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.showAnswerSettingText))
      })
    }), !isLibrary && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "pb-4",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Hyperlink, {
        destination: `${studioEndpointUrl}/settings/advanced/${learningContextId}#showanswer`,
        target: "_blank",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.advancedSettingsLinkText))
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Group, {
      className: "pb-0 mb-0",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
        as: "select",
        value: currentShowAnswer,
        onChange: handleShowAnswerChange,
        children: Object.values(_problem.ShowAnswerTypesKeys).map(answerType => {
          let optionDisplayName = _problem.ShowAnswerTypes[answerType];
          if (answerType === defaultValue) {
            optionDisplayName = _objectSpread(_objectSpread({}, optionDisplayName), {}, {
              defaultMessage: `${optionDisplayName.defaultMessage} (Default)`
            });
          }
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
            value: answerType,
            children: intl.formatMessage(optionDisplayName)
          }, answerType);
        })
      })
    }), showAttempts && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Group, {
      className: "pb-0 mb-0 mt-4",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
        type: "number",
        value: showAnswer.afterAttempts,
        onChange: handleAttemptsChange,
        floatingLabel: intl.formatMessage(_messages.default.showAnswerAttemptsInputLabel)
      })
    })]
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SettingsOption.default, {
    title: intl.formatMessage(_messages.default.showAnswerSettingsTitle),
    summary: intl.formatMessage(_problem.ShowAnswerTypes[currentShowAnswer]),
    children: showAnswerSection
  });
};
exports.ShowAnswerCard = ShowAnswerCard;
ShowAnswerCard.propTypes = {
  intl: _i18n.intlShape.isRequired,
  // eslint-disable-next-line
  showAnswer: _propTypes.default.any.isRequired,
  solutionExplanation: _propTypes.default.string,
  updateSettings: _propTypes.default.func.isRequired,
  studioEndpointUrl: _propTypes.default.string.isRequired,
  learningContextId: _propTypes.default.string,
  isLibrary: _propTypes.default.bool.isRequired,
  defaultValue: _propTypes.default.string
};
ShowAnswerCard.defaultProps = {
  solutionExplanation: '',
  learningContextId: null,
  defaultValue: 'finished'
};
const mapStateToProps = state => ({
  studioEndpointUrl: _redux.selectors.app.studioEndpointUrl(state),
  learningContextId: _redux.selectors.app.learningContextId(state),
  isLibrary: _redux.selectors.app.isLibrary(state)
});
exports.mapStateToProps = mapStateToProps;
const mapDispatchToProps = exports.mapDispatchToProps = {};
var _default = exports.default = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ShowAnswerCard));
//# sourceMappingURL=ShowAnswerCard.js.map