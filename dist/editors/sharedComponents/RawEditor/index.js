"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RawEditor = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@openedx/paragon");
var _CodeEditor = _interopRequireDefault(require("../CodeEditor"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function getValue(content) {
  if (!content) {
    return null;
  }
  if (typeof content === 'string') {
    return content;
  }
  return content.data?.data;
}
const RawEditor = _ref => {
  let {
    editorRef,
    content,
    lang
  } = _ref;
  const value = getValue(content);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [lang === 'xml' ? null : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Alert, {
      variant: "danger",
      children: ["You are using the raw ", lang, " editor."]
    }), value ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_CodeEditor.default, {
      innerRef: editorRef,
      value: value,
      lang: lang
    }) : null]
  });
};
exports.RawEditor = RawEditor;
RawEditor.defaultProps = {
  editorRef: null,
  content: null,
  lang: 'html'
};
RawEditor.propTypes = {
  editorRef: _propTypes.default.oneOfType([_propTypes.default.func,
  // eslint-disable-next-line react/forbid-prop-types
  _propTypes.default.shape({
    current: _propTypes.default.any
  })]),
  content: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
    data: _propTypes.default.shape({
      data: _propTypes.default.string
    })
  })]),
  lang: _propTypes.default.string
};
var _default = exports.default = RawEditor;
//# sourceMappingURL=index.js.map