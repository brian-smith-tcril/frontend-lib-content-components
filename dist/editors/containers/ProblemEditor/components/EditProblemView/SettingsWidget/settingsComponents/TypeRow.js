"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TypeRow = void 0;
var _react = _interopRequireDefault(require("react"));
var _paragon = require("@edx/paragon");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _icons = require("@edx/paragon/icons");
var _hooks = require("../hooks");
var _Button = _interopRequireDefault(require("../../../../../../sharedComponents/Button"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const TypeRow = _ref => {
  let {
    answers,
    blockTitle,
    correctAnswerCount,
    typeKey,
    label,
    selected,
    problemType,
    lastRow,
    setBlockTitle,
    updateField,
    updateAnswer
  } = _ref;
  const {
    onClick
  } = (0, _hooks.typeRowHooks)({
    answers,
    blockTitle,
    correctAnswerCount,
    problemType,
    setBlockTitle,
    typeKey,
    updateField,
    updateAnswer
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Button.default, {
      onClick: onClick,
      className: "d-flex p-0 flex-row justify-content-between w-100",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "small text-primary-500",
        children: label
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        hidden: selected,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
          src: _icons.Check,
          className: "text-success"
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {
      className: lastRow ? 'd-none' : 'd-block'
    })]
  });
};
exports.TypeRow = TypeRow;
TypeRow.propTypes = {
  answers: _propTypes.default.arrayOf(_propTypes.default.shape({
    correct: _propTypes.default.bool,
    id: _propTypes.default.string,
    selectedFeedback: _propTypes.default.string,
    title: _propTypes.default.string,
    unselectedFeedback: _propTypes.default.string
  })).isRequired,
  blockTitle: _propTypes.default.string.isRequired,
  correctAnswerCount: _propTypes.default.number.isRequired,
  typeKey: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  selected: _propTypes.default.bool.isRequired,
  lastRow: _propTypes.default.bool.isRequired,
  problemType: _propTypes.default.string.isRequired,
  setBlockTitle: _propTypes.default.func.isRequired,
  updateAnswer: _propTypes.default.func.isRequired,
  updateField: _propTypes.default.func.isRequired
};
var _default = exports.default = TypeRow;
//# sourceMappingURL=TypeRow.js.map