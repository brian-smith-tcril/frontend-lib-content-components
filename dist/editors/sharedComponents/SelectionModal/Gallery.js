"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Gallery = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _messages = _interopRequireDefault(require("./messages"));
var _GalleryCard = _interopRequireDefault(require("./GalleryCard"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const Gallery = _ref => {
  let {
    galleryIsEmpty,
    searchIsEmpty,
    displayList,
    highlighted,
    onHighlightChange,
    emptyGalleryLabel,
    showIdsOnCards,
    height,
    isLoaded,
    thumbnailFallback
  } = _ref;
  const intl = (0, _i18n.useIntl)();
  if (!isLoaded) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Spinner, {
        animation: "border",
        className: "mie-3",
        screenReaderText: intl.formatMessage(_messages.default.loading)
      })
    });
  }
  if (galleryIsEmpty) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "gallery p-4 bg-light-400",
      style: {
        height,
        margin: '0 -1.5rem'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, emptyGalleryLabel))
    });
  }
  if (searchIsEmpty) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "gallery p-4 bg-light-400",
      style: {
        height,
        margin: '0 -1.5rem'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.emptySearchLabel))
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Scrollable, {
    className: "gallery bg-light-400",
    style: {
      height,
      margin: '0 -1.5rem'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "p-4",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.SelectableBox.Set, {
        columns: 1,
        name: "images",
        onChange: onHighlightChange,
        type: "radio",
        value: highlighted,
        children: displayList.map(asset => /*#__PURE__*/(0, _jsxRuntime.jsx)(_GalleryCard.default, {
          asset: asset,
          showId: showIdsOnCards,
          thumbnailFallback: thumbnailFallback
        }, asset.id))
      })
    })
  });
};
exports.Gallery = Gallery;
Gallery.defaultProps = {
  highlighted: '',
  showIdsOnCards: false,
  height: '375px',
  show: true,
  thumbnailFallback: undefined
};
Gallery.propTypes = {
  show: _propTypes.default.bool,
  isLoaded: _propTypes.default.bool.isRequired,
  galleryIsEmpty: _propTypes.default.bool.isRequired,
  searchIsEmpty: _propTypes.default.bool.isRequired,
  displayList: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  highlighted: _propTypes.default.string,
  onHighlightChange: _propTypes.default.func.isRequired,
  emptyGalleryLabel: _propTypes.default.shape({}).isRequired,
  showIdsOnCards: _propTypes.default.bool,
  height: _propTypes.default.string,
  thumbnailFallback: _propTypes.default.element
};
var _default = exports.default = Gallery;
//# sourceMappingURL=Gallery.js.map