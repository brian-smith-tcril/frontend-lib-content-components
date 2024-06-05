"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SettingsOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _propTypes = require("prop-types");
var _hooks = require("./hooks");
var _CardSection = _interopRequireDefault(require("./CardSection"));
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = ["title", "className", "extraSections", "children", "summary", "hasExpandableTextArea"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const SettingsOption = _ref => {
  let {
      title,
      className,
      extraSections,
      children,
      summary,
      hasExpandableTextArea
    } = _ref,
    passThroughProps = _objectWithoutProperties(_ref, _excluded);
  const {
    isCardCollapsibleOpen,
    toggleCardCollapse
  } = (0, _hooks.showFullCard)(hasExpandableTextArea);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Card, {
    className: `${className} settingsOption border border-light-700 shadow-none`,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Card.Section, {
      className: "settingsCardTitleSection",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Collapsible.Advanced, {
        open: isCardCollapsibleOpen,
        onToggle: toggleCardCollapse,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Collapsible.Trigger, {
          className: "collapsible-trigger d-flex",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "flex-grow-1 text-primary-500 x-small",
            children: title
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Collapsible.Visible, {
            whenClosed: true,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
              src: _icons.KeyboardArrowDown
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Collapsible.Visible, {
            whenOpen: true,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
              src: _icons.KeyboardArrowUp
            })
          })]
        })
      })
    }, `settingsOption-${title}-header`), /*#__PURE__*/(0, _react.createElement)(_CardSection.default, _objectSpread(_objectSpread({}, passThroughProps), {}, {
      isCardCollapsibleOpen: isCardCollapsibleOpen,
      summary: summary,
      key: `settingsOption-${title}-children`
    }), children), extraSections.map((section, index) => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [isCardCollapsibleOpen && /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {}), /*#__PURE__*/(0, _react.createElement)(_CardSection.default, _objectSpread(_objectSpread({}, passThroughProps), {}, {
        isCardCollapsibleOpen: isCardCollapsibleOpen,
        key: `settingsOption-${title}-${index}`
      }), section.children)]
    }))]
  });
};
exports.SettingsOption = SettingsOption;
SettingsOption.propTypes = {
  title: _propTypes.string.isRequired,
  children: _propTypes.node.isRequired,
  className: _propTypes.string,
  summary: _propTypes.string.isRequired,
  extraSections: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
    children: _propTypes.node
  })),
  hasExpandableTextArea: _propTypes.bool
};
SettingsOption.defaultProps = {
  className: '',
  extraSections: [],
  hasExpandableTextArea: false
};
var _default = exports.default = SettingsOption;
//# sourceMappingURL=SettingsOption.js.map