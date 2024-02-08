"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Editor = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _messages = _interopRequireDefault(require("./messages"));
var hooks = _interopRequireWildcard(require("./hooks"));
var _supportedEditors = _interopRequireDefault(require("./supportedEditors"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const Editor = _ref => {
  let {
    learningContextId,
    blockType,
    blockId,
    lmsEndpointUrl,
    studioEndpointUrl,
    onClose,
    returnFunction
  } = _ref;
  const dispatch = (0, _reactRedux.useDispatch)();
  hooks.initializeApp({
    dispatch,
    data: {
      blockId,
      blockType,
      learningContextId,
      lmsEndpointUrl,
      studioEndpointUrl
    }
  });
  const EditorComponent = _supportedEditors.default[blockType];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "d-flex flex-column",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "pgn__modal-fullscreen h-100",
      role: "dialog",
      "aria-label": blockType,
      children: EditorComponent !== undefined ? /*#__PURE__*/(0, _jsxRuntime.jsx)(EditorComponent, {
        onClose,
        returnFunction
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.couldNotFindEditor))
    })
  });
};
exports.Editor = Editor;
Editor.defaultProps = {
  blockId: null,
  learningContextId: null,
  lmsEndpointUrl: null,
  onClose: null,
  returnFunction: null,
  studioEndpointUrl: null
};
Editor.propTypes = {
  blockId: _propTypes.default.string,
  blockType: _propTypes.default.string.isRequired,
  learningContextId: _propTypes.default.string,
  lmsEndpointUrl: _propTypes.default.string,
  onClose: _propTypes.default.func,
  returnFunction: _propTypes.default.func,
  studioEndpointUrl: _propTypes.default.string
};
var _default = exports.default = Editor;
//# sourceMappingURL=Editor.js.map