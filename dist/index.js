"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DraggableList", {
  enumerable: true,
  get: function () {
    return _DraggableList.default;
  }
});
Object.defineProperty(exports, "EditorPage", {
  enumerable: true,
  get: function () {
    return _EditorPage.default;
  }
});
Object.defineProperty(exports, "ErrorAlert", {
  enumerable: true,
  get: function () {
    return _ErrorAlert.default;
  }
});
Object.defineProperty(exports, "SortableItem", {
  enumerable: true,
  get: function () {
    return _DraggableList.SortableItem;
  }
});
Object.defineProperty(exports, "TinyMceWidget", {
  enumerable: true,
  get: function () {
    return _TinyMceWidget.TinyMceWidget;
  }
});
Object.defineProperty(exports, "TypeaheadDropdown", {
  enumerable: true,
  get: function () {
    return _TypeaheadDropdown.default;
  }
});
Object.defineProperty(exports, "VideoSelectorPage", {
  enumerable: true,
  get: function () {
    return _VideoSelectorPage.default;
  }
});
exports.default = void 0;
Object.defineProperty(exports, "messages", {
  enumerable: true,
  get: function () {
    return _index.default;
  }
});
Object.defineProperty(exports, "prepareEditorRef", {
  enumerable: true,
  get: function () {
    return _hooks.prepareEditorRef;
  }
});
var _Placeholder = _interopRequireDefault(require("./Placeholder"));
var _index = _interopRequireDefault(require("./i18n/index"));
var _EditorPage = _interopRequireDefault(require("./editors/EditorPage"));
var _VideoSelectorPage = _interopRequireDefault(require("./editors/VideoSelectorPage"));
var _DraggableList = _interopRequireWildcard(require("./editors/sharedComponents/DraggableList"));
var _ErrorAlert = _interopRequireDefault(require("./editors/sharedComponents/ErrorAlerts/ErrorAlert"));
var _TinyMceWidget = require("./editors/sharedComponents/TinyMceWidget");
var _hooks = require("./editors/sharedComponents/TinyMceWidget/hooks");
var _TypeaheadDropdown = _interopRequireDefault(require("./editors/sharedComponents/TypeaheadDropdown"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = _Placeholder.default;
//# sourceMappingURL=index.js.map