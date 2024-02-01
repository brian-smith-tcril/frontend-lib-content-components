"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareSourceCodeModal = exports.getSaveBtnProps = exports.default = void 0;
var _react = require("react");
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const getSaveBtnProps = _ref => {
  let {
    editorRef,
    ref,
    close
  } = _ref;
  return {
    onClick: () => {
      if (editorRef && editorRef.current && ref && ref.current) {
        const content = ref.current.state.doc.toString();
        editorRef.current.setContent(content);
        close();
      }
    }
  };
};
exports.getSaveBtnProps = getSaveBtnProps;
const prepareSourceCodeModal = _ref2 => {
  let {
    editorRef,
    close
  } = _ref2;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ref = (0, _react.useRef)();
  const saveBtnProps = _module.getSaveBtnProps({
    editorRef,
    ref,
    close
  });
  if (editorRef && editorRef.current && typeof editorRef.current.getContent === 'function') {
    const value = editorRef?.current?.getContent();
    return {
      saveBtnProps,
      value,
      ref
    };
  }
  return {
    saveBtnProps,
    value: null,
    ref
  };
};
exports.prepareSourceCodeModal = prepareSourceCodeModal;
var _default = exports.default = {
  prepareSourceCodeModal
};
//# sourceMappingURL=hooks.js.map