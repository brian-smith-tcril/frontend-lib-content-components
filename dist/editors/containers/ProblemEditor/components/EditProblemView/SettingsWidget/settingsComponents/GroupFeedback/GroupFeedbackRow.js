"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GroupFeedbackRow = void 0;
var _react = _interopRequireDefault(require("react"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _messages = _interopRequireDefault(require("../../messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const GroupFeedbackRow = _ref => {
  let {
    value,
    handleAnswersSelectedChange,
    handleFeedbackChange,
    handleDelete,
    answers,
    // injected
    intl
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "mb-4",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
      className: "mb-2",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
        value: value.feedback,
        onChange: handleFeedbackChange
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "d-flex flex-row flex-nowrap",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.IconButton, {
          src: _icons.DeleteOutline,
          iconAs: _paragon.Icon,
          alt: intl.formatMessage(_messages.default.settingsDeleteIconAltText),
          onClick: handleDelete,
          variant: "primary"
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.CheckboxSet, {
      onChange: handleAnswersSelectedChange,
      value: value.answers,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Row, {
        className: "mx-0",
        children: answers.map(letter => /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Checkbox, {
          className: "mr-4 mt-1",
          value: letter.id,
          checked: value.answers.indexOf(letter.id),
          isValid: value.answers.indexOf(letter.id) >= 0,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "x-small",
            children: letter.id
          })
        }))
      })
    })]
  });
};
exports.GroupFeedbackRow = GroupFeedbackRow;
GroupFeedbackRow.propTypes = {
  answers: _propTypes.default.arrayOf(_propTypes.default.shape({
    correct: _propTypes.default.bool,
    id: _propTypes.default.string,
    selectedFeedback: _propTypes.default.string,
    title: _propTypes.default.string,
    unselectedFeedback: _propTypes.default.string
  })).isRequired,
  handleAnswersSelectedChange: _propTypes.default.func.isRequired,
  handleFeedbackChange: _propTypes.default.func.isRequired,
  handleDelete: _propTypes.default.func.isRequired,
  value: _propTypes.default.shape({
    id: _propTypes.default.number.isRequired,
    answers: _propTypes.default.arrayOf(_propTypes.default.string),
    feedback: _propTypes.default.string
  }).isRequired,
  // injected
  intl: _i18n.intlShape.isRequired
};
var _default = exports.default = (0, _i18n.injectIntl)(GroupFeedbackRow);
//# sourceMappingURL=GroupFeedbackRow.js.map