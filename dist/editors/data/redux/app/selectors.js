"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simpleSelectors = exports.returnUrl = exports.isRaw = exports.isLibrary = exports.isInitialized = exports.displayTitle = exports.default = exports.appSelector = exports.analytics = void 0;
var _reselect = require("reselect");
var _app = require("../../constants/app");
var urls = _interopRequireWildcard(require("../../services/cms/urls"));
var _module = _interopRequireWildcard(require("./selectors"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const appSelector = state => state.app;
exports.appSelector = appSelector;
const mkSimpleSelector = cb => (0, _reselect.createSelector)([_module.appSelector], cb);

// top-level app data selectors
const simpleSelectors = exports.simpleSelectors = {
  blockContent: mkSimpleSelector(app => app.blockContent),
  blockId: mkSimpleSelector(app => app.blockId),
  blockType: mkSimpleSelector(app => app.blockType),
  blockValue: mkSimpleSelector(app => app.blockValue),
  studioView: mkSimpleSelector(app => app.studioView),
  learningContextId: mkSimpleSelector(app => app.learningContextId),
  editorInitialized: mkSimpleSelector(app => app.editorInitialized),
  saveResponse: mkSimpleSelector(app => app.saveResponse),
  lmsEndpointUrl: mkSimpleSelector(app => app.lmsEndpointUrl),
  studioEndpointUrl: mkSimpleSelector(app => app.studioEndpointUrl),
  unitUrl: mkSimpleSelector(app => app.unitUrl),
  blockTitle: mkSimpleSelector(app => app.blockTitle),
  assets: mkSimpleSelector(app => app.assets),
  videos: mkSimpleSelector(app => app.videos)
};
const returnUrl = exports.returnUrl = (0, _reselect.createSelector)([_module.simpleSelectors.unitUrl, _module.simpleSelectors.studioEndpointUrl, _module.simpleSelectors.learningContextId, _module.simpleSelectors.blockId], (unitUrl, studioEndpointUrl, learningContextId, blockId) => urls.returnUrl({
  studioEndpointUrl,
  unitUrl,
  learningContextId,
  blockId
}));
const isInitialized = exports.isInitialized = (0, _reselect.createSelector)([_module.simpleSelectors.unitUrl, _module.simpleSelectors.blockValue], (unitUrl, blockValue) => !!(unitUrl && blockValue));
const displayTitle = exports.displayTitle = (0, _reselect.createSelector)([_module.simpleSelectors.blockType, _module.simpleSelectors.blockTitle], (blockType, blockTitle) => {
  if (blockType === null) {
    return null;
  }
  if (blockTitle !== null) {
    return blockTitle;
  }
  return blockType === _app.blockTypes.html ? 'Text' : blockType[0].toUpperCase() + blockType.substring(1);
});
const analytics = exports.analytics = (0, _reselect.createSelector)([_module.simpleSelectors.blockId, _module.simpleSelectors.blockType, _module.simpleSelectors.learningContextId], (blockId, blockType, learningContextId) => ({
  blockId,
  blockType,
  learningContextId
}));
const isRaw = exports.isRaw = (0, _reselect.createSelector)([_module.simpleSelectors.studioView], studioView => {
  if (!studioView?.data) {
    return null;
  }
  const {
    html,
    content
  } = studioView.data;
  if (html && html.includes('data-editor="raw"')) {
    return true;
  }
  if (content && content.includes('data-editor="raw"')) {
    return true;
  }
  return false;
});
const isLibrary = exports.isLibrary = (0, _reselect.createSelector)([_module.simpleSelectors.learningContextId, _module.simpleSelectors.blockId], (learningContextId, blockId) => {
  if (learningContextId && learningContextId.startsWith('library-v1')) {
    return true;
  }
  if (blockId && blockId.startsWith('lb:')) {
    return true;
  }
  return false;
});
var _default = exports.default = _objectSpread(_objectSpread({}, simpleSelectors), {}, {
  isInitialized,
  returnUrl,
  displayTitle,
  analytics,
  isRaw,
  isLibrary
});
//# sourceMappingURL=selectors.js.map