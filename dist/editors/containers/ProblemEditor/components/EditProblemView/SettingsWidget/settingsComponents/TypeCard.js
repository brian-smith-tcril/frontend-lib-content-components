"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TypeCard = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _SettingsOption = _interopRequireDefault(require("../SettingsOption"));
var _problem = require("../../../../../../data/constants/problem");
var _messages = _interopRequireDefault(require("../messages"));
var _TypeRow = _interopRequireDefault(require("./TypeRow"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const TypeCard = _ref => {
  let {
    answers,
    blockTitle,
    correctAnswerCount,
    problemType,
    setBlockTitle,
    updateField,
    updateAnswer,
    // inject
    intl
  } = _ref;
  const problemTypeKeysArray = Object.values(_problem.ProblemTypeKeys).filter(key => key !== _problem.ProblemTypeKeys.ADVANCED);
  if (problemType === _problem.ProblemTypeKeys.ADVANCED) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SettingsOption.default, {
    title: intl.formatMessage(_messages.default.typeSettingTitle),
    summary: _problem.ProblemTypes[problemType].title,
    children: problemTypeKeysArray.map((typeKey, i) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_TypeRow.default, {
      answers: answers,
      blockTitle: blockTitle,
      correctAnswerCount: correctAnswerCount,
      typeKey: typeKey,
      label: _problem.ProblemTypes[typeKey].title,
      selected: typeKey !== problemType,
      problemType: problemType,
      lastRow: i + 1 === problemTypeKeysArray.length,
      setBlockTitle: setBlockTitle,
      updateField: updateField,
      updateAnswer: updateAnswer
    }, typeKey))
  });
};
exports.TypeCard = TypeCard;
TypeCard.propTypes = {
  answers: _propTypes.default.arrayOf(_propTypes.default.shape({
    correct: _propTypes.default.bool,
    id: _propTypes.default.string,
    selectedFeedback: _propTypes.default.string,
    title: _propTypes.default.string,
    unselectedFeedback: _propTypes.default.string
  })).isRequired,
  blockTitle: _propTypes.default.string.isRequired,
  correctAnswerCount: _propTypes.default.number.isRequired,
  problemType: _propTypes.default.string.isRequired,
  setBlockTitle: _propTypes.default.func.isRequired,
  updateField: _propTypes.default.func.isRequired,
  updateAnswer: _propTypes.default.func.isRequired,
  // injected
  intl: _i18n.intlShape.isRequired
};
var _default = exports.default = (0, _i18n.injectIntl)(TypeCard);
//# sourceMappingURL=TypeCard.js.map