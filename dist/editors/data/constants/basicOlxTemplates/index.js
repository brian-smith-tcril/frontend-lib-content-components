"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = require("../../../utils");
var _dropdown = _interopRequireDefault(require("./dropdown"));
var _multiSelect = _interopRequireDefault(require("./multiSelect"));
var _numeric = _interopRequireDefault(require("./numeric"));
var _singleSelect = _interopRequireDefault(require("./singleSelect"));
var _textInput = _interopRequireDefault(require("./textInput"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = (0, _utils.StrictDict)({
  dropdown: _dropdown.default,
  multiSelect: _multiSelect.default,
  numeric: _numeric.default,
  singleSelect: _singleSelect.default,
  textInput: _textInput.default
});
//# sourceMappingURL=index.js.map