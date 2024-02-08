"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SearchSort = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var _messages = _interopRequireDefault(require("./messages"));
require("./index.scss");
var _utils = require("../../containers/VideoGallery/utils");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const SearchSort = _ref => {
  let {
    searchString,
    onSearchChange,
    clearSearchString,
    sortBy,
    onSortClick,
    filterBy,
    onFilterClick,
    filterKeys,
    filterMessages,
    showSwitch,
    switchMessage,
    onSwitchClick
  } = _ref;
  const intl = (0, _i18n.useIntl)();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Group, {
      style: {
        margin: 0
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Control, {
        autoFocus: true,
        onChange: onSearchChange,
        placeholder: intl.formatMessage(_messages.default.searchPlaceholder),
        trailingElement: searchString ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.IconButton, {
          alt: intl.formatMessage(_messages.default.clearSearch),
          iconAs: _paragon.Icon,
          invertColors: true,
          isActive: true,
          onClick: clearSearchString,
          size: "sm",
          src: _icons.Close
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
          src: _icons.Search
        }),
        value: searchString
      })
    }), !showSwitch && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.SelectMenu, {
      variant: "link",
      className: "search-sort-menu",
      children: Object.keys(_utils.sortKeys).map(key => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.MenuItem, {
        onClick: onSortClick(key),
        defaultSelected: key === sortBy,
        iconAfter: key === sortBy ? _icons.Check : null,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
          className: "search-sort-menu-by",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.sortBy)), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            style: {
              whiteSpace: 'pre-wrap'
            },
            children: " "
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _utils.sortMessages[key]))]
      }, key))
    }), onFilterClick && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Dropdown, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Toggle, {
        "data-testid": "dropdown-filter",
        className: "text-gray-700",
        id: "gallery-filter-button",
        variant: "tertiary",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, filterMessages[filterBy]))
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Menu, {
        children: Object.keys(filterKeys).map(key => /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropdown.Item, {
          "data-testid": `dropdown-filter-${key}`,
          onClick: onFilterClick(key),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, filterMessages[key]))
        }, key))
      })]
    }), showSwitch && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.SwitchSet, {
        name: "switch",
        onChange: onSwitchClick,
        isInline: true,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Switch, {
          className: "text-gray-700",
          value: "switch-value",
          floatLabelLeft: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, switchMessage))
        })
      })]
    })]
  });
};
exports.SearchSort = SearchSort;
SearchSort.defaultProps = {
  filterBy: '',
  onFilterClick: null,
  filterKeys: null,
  filterMessages: null,
  showSwitch: false,
  onSwitchClick: null
};
SearchSort.propTypes = {
  searchString: _propTypes.default.string.isRequired,
  onSearchChange: _propTypes.default.func.isRequired,
  clearSearchString: _propTypes.default.func.isRequired,
  sortBy: _propTypes.default.string.isRequired,
  onSortClick: _propTypes.default.func.isRequired,
  filterBy: _propTypes.default.string,
  onFilterClick: _propTypes.default.func,
  filterKeys: _propTypes.default.shape({}),
  filterMessages: _propTypes.default.shape({}),
  showSwitch: _propTypes.default.bool,
  switchMessage: _propTypes.default.shape({}).isRequired,
  onSwitchClick: _propTypes.default.func
};
var _default = exports.default = SearchSort;
//# sourceMappingURL=SearchSort.js.map