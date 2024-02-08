"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareSourceCodeModal = exports.getSaveBtnProps = exports.default = void 0;
var _react = require("react");
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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