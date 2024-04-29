"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = require("../../../utils");
var _circuitschematic = _interopRequireDefault(require("./circuitschematic"));
var _customgrader = _interopRequireDefault(require("./customgrader"));
var _formularesponse = _interopRequireDefault(require("./formularesponse"));
var _imageresponse = _interopRequireDefault(require("./imageresponse"));
var _jsinput_response = _interopRequireDefault(require("./jsinput_response"));
var _problem_with_hint = _interopRequireDefault(require("./problem_with_hint"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = (0, _utils.StrictDict)({
  circuitSchematic: _circuitschematic.default,
  customGrader: _customgrader.default,
  formulaResponse: _formularesponse.default,
  imageResponse: _imageresponse.default,
  jsInputResponse: _jsinput_response.default,
  problemWithHint: _problem_with_hint.default
});
//# sourceMappingURL=index.js.map