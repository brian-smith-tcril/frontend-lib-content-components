"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fileInput = exports.default = exports.FileInput = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const fileInput = _ref => {
  let {
    onAddFile
  } = _ref;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ref = _react.default.useRef();
  const click = () => ref.current.click();
  const addFile = e => {
    const file = e.target.files[0];
    if (file) {
      onAddFile(file);
    }
  };
  return {
    click,
    addFile,
    ref
  };
};
exports.fileInput = fileInput;
const FileInput = _ref2 => {
  let {
    fileInput: hook,
    acceptedFiles
  } = _ref2;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
    accept: acceptedFiles,
    className: "upload d-none",
    onChange: hook.addFile,
    ref: hook.ref,
    type: "file"
  });
};
exports.FileInput = FileInput;
FileInput.propTypes = {
  acceptedFiles: _propTypes.default.string.isRequired,
  fileInput: _propTypes.default.shape({
    addFile: _propTypes.default.func,
    ref: _propTypes.default.oneOfType([
    // Either a function
    _propTypes.default.func,
    // Or the instance of a DOM native element (see the note about SSR)
    _propTypes.default.shape({
      current: _propTypes.default.instanceOf(Element)
    })])
  }).isRequired
};
var _default = exports.default = FileInput;
//# sourceMappingURL=index.js.map