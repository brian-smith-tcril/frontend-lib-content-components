"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simpleSelectors = exports.returnUrl = exports.isRaw = exports.isLibrary = exports.isInitialized = exports.displayTitle = exports.default = exports.appSelector = exports.analytics = void 0;
var _reselect = require("reselect");
var _app = require("../../constants/app");
var urls = _interopRequireWildcard(require("../../services/cms/urls"));
var _module = _interopRequireWildcard(require("./selectors"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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