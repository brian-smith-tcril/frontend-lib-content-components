"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.EditConfirmationButtons = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const EditConfirmationButtons = _ref => {
  let {
    updateTitle,
    cancelEdit,
    // injected
    intl
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ButtonGroup, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.IconButtonWithTooltip, {
      tooltipPlacement: "left",
      tooltipContent: intl.formatMessage(_messages.default.saveTitleEdit),
      src: _icons.Check,
      iconAs: _paragon.Icon,
      onClick: updateTitle
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.IconButtonWithTooltip, {
      tooltipPlacement: "right",
      tooltipContent: intl.formatMessage(_messages.default.cancelTitleEdit),
      src: _icons.Close,
      iconAs: _paragon.Icon,
      onClick: cancelEdit
    })]
  });
};
exports.EditConfirmationButtons = EditConfirmationButtons;
EditConfirmationButtons.propTypes = {
  updateTitle: _propTypes.default.func.isRequired,
  cancelEdit: _propTypes.default.func.isRequired,
  // injected
  intl: _i18n.intlShape.isRequired
};
var _default = exports.default = (0, _i18n.injectIntl)(EditConfirmationButtons);
//# sourceMappingURL=EditConfirmationButtons.js.map