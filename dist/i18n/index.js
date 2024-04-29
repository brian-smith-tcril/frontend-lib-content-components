"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ar = _interopRequireDefault(require("./messages/ar.json"));
var _es_ = _interopRequireDefault(require("./messages/es_419.json"));
var _fr = _interopRequireDefault(require("./messages/fr.json"));
var _ko_KR = _interopRequireDefault(require("./messages/ko_KR.json"));
var _pt_BR = _interopRequireDefault(require("./messages/pt_BR.json"));
var _zh_CN = _interopRequireDefault(require("./messages/zh_CN.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// no need to import en messages-- they are in the defaultMessage field

const messages = {
  ar: _ar.default,
  'es-419': _es_.default,
  fr: _fr.default,
  'zh-cn': _zh_CN.default,
  'ko-kr': _ko_KR.default,
  'pt-br': _pt_BR.default
};
var _default = exports.default = messages;
//# sourceMappingURL=index.js.map