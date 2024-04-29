"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.EditableHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@openedx/paragon");
var _EditConfirmationButtons = _interopRequireDefault(require("./EditConfirmationButtons"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const EditableHeader = _ref => {
  let {
    handleChange,
    updateTitle,
    handleKeyDown,
    inputRef,
    localTitle,
    cancelEdit
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Group, {
    onBlur: e => updateTitle(e),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
      style: {
        paddingInlineEnd: 'calc(1rem + 84px)'
      },
      autoFocus: true,
      trailingElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_EditConfirmationButtons.default, {
        updateTitle,
        cancelEdit
      }),
      onChange: handleChange,
      onKeyDown: handleKeyDown,
      placeholder: "Title",
      ref: inputRef,
      value: localTitle
    })
  });
};
exports.EditableHeader = EditableHeader;
EditableHeader.defaultProps = {
  inputRef: null
};
EditableHeader.propTypes = {
  inputRef: _propTypes.default.oneOfType([_propTypes.default.func,
  // eslint-disable-next-line react/forbid-prop-types
  _propTypes.default.shape({
    current: _propTypes.default.any
  })]),
  handleChange: _propTypes.default.func.isRequired,
  updateTitle: _propTypes.default.func.isRequired,
  handleKeyDown: _propTypes.default.func.isRequired,
  localTitle: _propTypes.default.string.isRequired,
  cancelEdit: _propTypes.default.func.isRequired
};
var _default = exports.default = EditableHeader;
//# sourceMappingURL=EditableHeader.js.map