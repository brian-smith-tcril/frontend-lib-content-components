"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nullMethod = exports.navigateTo = exports.navigateCallback = exports.getContent = void 0;
var appHooks = _interopRequireWildcard(require("../../hooks"));
var _hooks2 = require("../../sharedComponents/TinyMceWidget/hooks");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const {
  nullMethod,
  navigateCallback,
  navigateTo
} = appHooks;
exports.navigateTo = navigateTo;
exports.navigateCallback = navigateCallback;
exports.nullMethod = nullMethod;
const getContent = _ref => {
  let {
    editorRef,
    isRaw,
    assets
  } = _ref;
  return () => {
    const content = isRaw && editorRef && editorRef.current ? editorRef.current.state.doc.toString() : editorRef.current?.getContent();
    return (0, _hooks2.setAssetToStaticUrl)({
      editorValue: content,
      assets
    });
  };
};
exports.getContent = getContent;
//# sourceMappingURL=hooks.js.map