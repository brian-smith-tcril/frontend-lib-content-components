"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var moment = _interopRequireWildcard(require("moment-shortformat"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const formatDuration = duration => {
  const d = moment.duration(duration, 'seconds');
  if (d.hours() > 0) {
    return `${d.hours().toString().padStart(2, '0')}:` + `${d.minutes().toString().padStart(2, '0')}:` + `${d.seconds().toString().padStart(2, '0')}`;
  }
  return `${d.minutes().toString().padStart(2, '0')}:` + `${d.seconds().toString().padStart(2, '0')}`;
};
var _default = exports.default = formatDuration;
//# sourceMappingURL=formatDuration.js.map