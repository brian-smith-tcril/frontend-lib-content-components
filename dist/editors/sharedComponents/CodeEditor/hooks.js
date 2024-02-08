"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syntaxChecker = exports.state = exports.prepareShowBtnEscapeHTML = exports.escapeHTMLSpecialChars = exports.createCodeMirrorDomNode = exports.cleanHTML = void 0;
var _react = _interopRequireWildcard(require("react"));
var _xmlchecker = _interopRequireDefault(require("xmlchecker"));
var _codemirror = require("codemirror");
var _state = require("@codemirror/state");
var _view = require("@codemirror/view");
var _langHtml = require("@codemirror/lang-html");
var _langXml = require("@codemirror/lang-xml");
var _lint = require("@codemirror/lint");
var _constants = _interopRequireDefault(require("./constants"));
require("./index.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const CODEMIRROR_LANGUAGES = {
  HTML: 'html',
  XML: 'xml'
};
const state = exports.state = {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  showBtnEscapeHTML: val => _react.default.useState(val)
};
const prepareShowBtnEscapeHTML = () => {
  const [visibility, setVisibility] = state.showBtnEscapeHTML(true);
  const hide = () => setVisibility(false);
  return {
    showBtnEscapeHTML: visibility,
    hideBtn: hide
  };
};
exports.prepareShowBtnEscapeHTML = prepareShowBtnEscapeHTML;
const cleanHTML = _ref => {
  let {
    initialText
  } = _ref;
  const translateRegex = new RegExp(`&(${Object.keys(_constants.default).join('|')});`, 'g');
  const translator = ($0, $1) => _constants.default[$1];
  return initialText.replace(translateRegex, translator);
};
exports.cleanHTML = cleanHTML;
const syntaxChecker = _ref2 => {
  let {
    textArr,
    lang
  } = _ref2;
  const diagnostics = [];
  if (lang === 'xml' && textArr) {
    const docString = textArr.join('\n');
    const xmlDoc = `<?xml version="1.0" encoding="UTF-8"?> ${docString}`;
    try {
      _xmlchecker.default.check(xmlDoc);
    } catch (error) {
      let errorStart = 0;
      for (let i = 0; i < error.line - 1; i++) {
        errorStart += textArr[i].length;
      }
      const errorLine = error.line;
      const errorEnd = errorStart + textArr[errorLine - 1].length;
      diagnostics.push({
        from: errorStart,
        to: errorEnd,
        severity: 'error',
        message: `${error.name}: ${error.message}`
      });
    }
  }
  return diagnostics;
};
exports.syntaxChecker = syntaxChecker;
const createCodeMirrorDomNode = _ref3 => {
  let {
    ref,
    initialText,
    upstreamRef,
    lang
  } = _ref3;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  (0, _react.useEffect)(() => {
    const languageExtension = lang === CODEMIRROR_LANGUAGES.HTML ? (0, _langHtml.html)() : (0, _langXml.xml)();
    const cleanText = cleanHTML({
      initialText
    });
    const newState = _state.EditorState.create({
      doc: cleanText,
      extensions: [_codemirror.basicSetup, languageExtension, _view.EditorView.lineWrapping, (0, _lint.linter)(view => {
        const textArr = view.state.doc.text;
        return syntaxChecker({
          textArr,
          lang
        });
      })]
    });
    const view = new _view.EditorView({
      state: newState,
      parent: ref.current
    });
    // eslint-disable-next-line no-param-reassign
    upstreamRef.current = view;
    view.focus();
    return () => {
      // called on cleanup
      view.destroy();
    };
  }, []);
};
exports.createCodeMirrorDomNode = createCodeMirrorDomNode;
const escapeHTMLSpecialChars = _ref4 => {
  let {
    ref,
    hideBtn
  } = _ref4;
  const text = ref.current.state.doc.toString();
  let pos = 0;
  const changes = [];
  Object.keys(_constants.default).forEach(escapedKeyword => {
    // eslint-disable-next-line no-cond-assign
    for (let next; (next = text.indexOf(_constants.default[escapedKeyword], pos)) > -1;) {
      changes.push({
        from: next,
        to: next + 1,
        insert: `&${escapedKeyword};`
      });
      pos = next + 1;
    }
  });
  ref.current.dispatch({
    changes
  });
  hideBtn();
};
exports.escapeHTMLSpecialChars = escapeHTMLSpecialChars;
//# sourceMappingURL=hooks.js.map