"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/* eslint-disable no-console */
const strictGet = (target, name) => {
  if (name === Symbol.toStringTag) {
    return target;
  }
  if (name in target || name === '_reactFragment') {
    return target[name];
  }
  if (name === '$$typeof') {
    return typeof target;
  }
  console.log(name.toString());
  console.error({
    target,
    name
  });
  const e = Error(`invalid property "${name.toString()}"`);
  console.error(e.stack);
  return undefined;
};
const StrictDict = dict => new Proxy(dict, {
  get: strictGet
});
var _default = exports.default = StrictDict;
//# sourceMappingURL=StrictDict.js.map