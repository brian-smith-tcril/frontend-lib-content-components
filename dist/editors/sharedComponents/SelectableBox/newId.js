"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let lastId = 0;
const newId = function () {
  let prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'id';
  lastId += 1;
  return `${prefix}${lastId}`;
};
var _default = exports.default = newId;
//# sourceMappingURL=newId.js.map