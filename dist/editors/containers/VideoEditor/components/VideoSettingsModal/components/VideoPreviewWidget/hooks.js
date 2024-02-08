"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _messages = _interopRequireDefault(require("../messages"));
var _api = require("../../../../../../data/services/cms/api");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function getVideoType(videoSource) {
  if ((0, _api.parseYoutubeId)(videoSource) !== null) {
    return _messages.default.videoTypeYoutube;
  }
  return _messages.default.videoTypeOther;
}
var _default = exports.default = {
  getVideoType
};
//# sourceMappingURL=hooks.js.map