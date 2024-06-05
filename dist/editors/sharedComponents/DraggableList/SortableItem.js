"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _sortable = require("@dnd-kit/sortable");
var _utilities = require("@dnd-kit/utilities");
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const SortableItem = _ref => {
  let {
    id,
    componentStyle,
    children,
    // injected
    intl
  } = _ref;
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = (0, _sortable.useSortable)({
    id
  });
  const style = _objectSpread({
    transform: _utilities.CSS.Transform.toString(transform),
    transition
  }, componentStyle);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Row, {
    ref: setNodeRef,
    style: style,
    className: "mx-0",
    children: [children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.IconButtonWithTooltip, _objectSpread(_objectSpread({
      tooltipPlacement: "top",
      tooltipContent: intl.formatMessage(_messages.default.tooltipContent),
      src: _icons.DragIndicator,
      iconAs: _paragon.Icon,
      variant: "secondary",
      alt: intl.formatMessage(_messages.default.tooltipContent)
    }, attributes), listeners), "drag-to-reorder-icon")]
  });
};
SortableItem.defaultProps = {
  componentStyle: null
};
SortableItem.propTypes = {
  id: _propTypes.default.string.isRequired,
  children: _propTypes.default.node.isRequired,
  componentStyle: _propTypes.default.shape({}),
  // injected
  intl: _i18n.intlShape.isRequired
};
var _default = exports.default = (0, _i18n.injectIntl)(SortableItem);
//# sourceMappingURL=SortableItem.js.map