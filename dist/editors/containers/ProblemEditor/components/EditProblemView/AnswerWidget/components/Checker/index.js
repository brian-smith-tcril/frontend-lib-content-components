"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@openedx/paragon");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Checker = _ref => {
  let {
    hasSingleAnswer,
    answer,
    setAnswer,
    disabled
  } = _ref;
  let CheckerType = _paragon.Form.Checkbox;
  if (hasSingleAnswer) {
    CheckerType = _paragon.Form.Radio;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(CheckerType, {
      className: "pt-2.5",
      value: answer.id,
      onChange: e => setAnswer({
        correct: e.target.checked
      }),
      checked: answer.correct,
      isValid: answer.correct,
      disabled: disabled
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Label, {
      className: "pt-2",
      children: answer.id
    })]
  });
};
Checker.defaultProps = {
  disabled: false
};
Checker.propTypes = {
  hasSingleAnswer: _propTypes.default.bool.isRequired,
  answer: _propTypes.default.shape({
    correct: _propTypes.default.bool,
    id: _propTypes.default.number
  }).isRequired,
  setAnswer: _propTypes.default.func.isRequired,
  disabled: _propTypes.default.bool
};
var _default = exports.default = Checker;
//# sourceMappingURL=index.js.map