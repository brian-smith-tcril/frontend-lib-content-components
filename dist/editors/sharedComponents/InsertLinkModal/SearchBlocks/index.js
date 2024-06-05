"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SearchBlocks = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _FilteredBlock = _interopRequireDefault(require("../FilteredBlock"));
var _utils = require("./utils");
var _messages = _interopRequireDefault(require("./messages"));
require("./index.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SearchBlocks = _ref => {
  let {
    blocks,
    onSearchFilter,
    searchInputValue = '',
    onBlockSelected,
    disabledBlocks
  } = _ref;
  const intl = (0, _i18n.useIntl)();
  const [searchField, setSearchField] = (0, _react.useState)(searchInputValue);
  const [blocksFilteredItems, setBlocksFilteredItems] = (0, _react.useState)(null);
  const blocksFilteredItemsFormat = blocksFilteredItems ? Object.keys(blocksFilteredItems) : [];
  const handleSearchBlock = value => {
    setSearchField(value);
  };
  const handleSelectedBlock = block => {
    onBlockSelected(block);
  };
  (0, _react.useEffect)(() => {
    if (searchField.trim()) {
      const blockFilter = (0, _utils.filterBlocksByText)(searchField, blocks);
      setBlocksFilteredItems(blockFilter);
      onSearchFilter(true);
    } else {
      setBlocksFilteredItems(null);
      onSearchFilter(false);
    }
  }, [searchField]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.SearchField, {
      placeholder: "Search course pages",
      className: "my-4",
      onChange: handleSearchBlock,
      value: searchField,
      "data-testid": "search-field",
      onSubmit: () => null
    }), searchField.trim() && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "h5 ml-1 text-gray-500",
      "data-testid": "filtered-block-text",
      children: intl.formatMessage(_messages.default.searchBlocksResultMessages, {
        searchField: `"${searchField}"`
      })
    }), blocksFilteredItemsFormat.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "blocks-filter-container",
      children: blocksFilteredItemsFormat.map(key => /*#__PURE__*/(0, _jsxRuntime.jsx)(_FilteredBlock.default, {
        block: blocks[key],
        onBlockFilterClick: handleSelectedBlock,
        blockDisabled: disabledBlocks
      }, key))
    })]
  });
};
exports.SearchBlocks = SearchBlocks;
SearchBlocks.defaultProps = {
  searchInputValue: '',
  disabledBlocks: false
};
const blockShape = _propTypes.default.shape({
  id: _propTypes.default.string.isRequired,
  blockId: _propTypes.default.string.isRequired,
  lmsWebUrl: _propTypes.default.string.isRequired,
  legacyWebUrl: _propTypes.default.string.isRequired,
  studentViewUrl: _propTypes.default.string.isRequired,
  type: _propTypes.default.string.isRequired,
  displayName: _propTypes.default.string.isRequired,
  children: _propTypes.default.arrayOf(_propTypes.default.string)
});
SearchBlocks.propTypes = {
  blocks: _propTypes.default.objectOf(blockShape).isRequired,
  onSearchFilter: _propTypes.default.func.isRequired,
  searchInputValue: _propTypes.default.string,
  onBlockSelected: _propTypes.default.func.isRequired,
  disabledBlocks: _propTypes.default.bool
};
var _default = exports.default = SearchBlocks;
//# sourceMappingURL=index.js.map