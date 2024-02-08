"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SettingsOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _propTypes = require("prop-types");
var _hooks = require("./hooks");
var _CardSection = _interopRequireDefault(require("./CardSection"));
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = ["title", "className", "extraSections", "children", "summary", "hasExpandableTextArea"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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