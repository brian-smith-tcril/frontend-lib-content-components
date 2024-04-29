"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textToSpeechIcon = exports.plugins = exports.default = exports.commands = exports.buttons = void 0;
var _utils = require("../../utils");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const listKeyStore = list => (0, _utils.StrictDict)(list.reduce((obj, val) => _objectSpread(_objectSpread({}, obj), {}, {
  [val]: val
}), {}));
const commands = exports.commands = (0, _utils.StrictDict)({
  insertContent: 'mceInsertContent'
});
const buttons = exports.buttons = (0, _utils.StrictDict)({
  addImageButton: 'addimagebutton',
  blockQuote: 'blockquote',
  codeBlock: 'codeBlock',
  align: (0, _utils.StrictDict)({
    center: 'aligncenter',
    justify: 'alignjustify',
    left: 'alignleft',
    right: 'alignright'
  }),
  foreColor: 'forecolor',
  backColor: 'backcolor',
  bold: 'bold',
  bullist: 'bullist',
  charmap: 'charmap',
  code: 'code-modified',
  // use a custom button name, consistently, for our text-only button
  codesample: 'codesample',
  customLabelButton: 'customLabelButton',
  editImageSettings: 'editimagesettings',
  emoticons: 'emoticons',
  flip: (0, _utils.StrictDict)({
    vert: 'flipv',
    horiz: 'fliph'
  }),
  formatSelect: 'formatSelect',
  hr: 'hr',
  imageUploadButton: 'imageuploadbutton',
  indent: 'indent',
  italic: 'italic',
  link: 'link',
  unlink: 'unlink',
  numlist: 'numlist',
  outdent: 'outdent',
  redo: 'redo',
  removeFormat: 'removeformat',
  rotate: (0, _utils.StrictDict)({
    left: 'rotateleft',
    right: 'rotateright'
  }),
  quickLink: 'quicklink',
  table: 'table',
  undo: 'undo',
  underline: 'underline',
  a11ycheck: 'a11ycheck',
  embediframe: 'embediframe'
});
const plugins = exports.plugins = listKeyStore(['link', 'lists', 'codesample', 'emoticons', 'table', 'hr', 'charmap', 'code', 'autoresize', 'image', 'imagetools', 'quickbars', 'a11ychecker', 'powerpaste', 'embediframe']);
const textToSpeechIcon = exports.textToSpeechIcon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 22C3.08333 22 2.72917 21.8542 2.4375 21.5625C2.14583 21.2708 2 20.9167 2 20.5V3.5C2 3.08333 2.14583 2.72917 2.4375 2.4375C2.72917 2.14583 3.08333 2 3.5 2H13L11.5 3.5H3.5V20.5H15.5V17H17V20.5C17 20.9167 16.8542 21.2708 16.5625 21.5625C16.2708 21.8542 15.9167 22 15.5 22H3.5ZM6 17.75V16.25H13V17.75H6ZM6 14.75V13.25H11V14.75H6ZM15.5 15L11.5 11H8V6H11.5L15.5 2V15ZM17 12.7V4.05C17.9333 4.4 18.6667 5.01667 19.2 5.9C19.7333 6.78333 20 7.65 20 8.5C20 9.35 19.7083 10.1917 19.125 11.025C18.5417 11.8583 17.8333 12.4167 17 12.7ZM17 16.25V14.7C18.1667 14.2833 19.2083 13.5333 20.125 12.45C21.0417 11.3667 21.5 10.05 21.5 8.5C21.5 6.95 21.0417 5.63333 20.125 4.55C19.2083 3.46667 18.1667 2.71667 17 2.3V0.75C18.7 1.2 20.125 2.1375 21.275 3.5625C22.425 4.9875 23 6.63333 23 8.5C23 10.3667 22.425 12.0125 21.275 13.4375C20.125 14.8625 18.7 15.8 17 16.25Z" fill="black"/></svg>';
var _default = exports.default = (0, _utils.StrictDict)({
  buttons,
  commands,
  plugins,
  textToSpeechIcon
});
//# sourceMappingURL=tinyMCE.js.map