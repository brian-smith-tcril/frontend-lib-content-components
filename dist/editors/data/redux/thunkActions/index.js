"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = require("../../../utils");
var _app = _interopRequireDefault(require("./app"));
var _video = _interopRequireDefault(require("./video"));
var _problem = _interopRequireDefault(require("./problem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable import/no-cycle */
var _default = exports.default = (0, _utils.StrictDict)({
  app: _app.default,
  video: _video.default,
  problem: _problem.default
});
//# sourceMappingURL=index.js.map