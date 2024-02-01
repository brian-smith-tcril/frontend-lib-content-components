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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = _Placeholder.default;
//# sourceMappingURL=index.js.map