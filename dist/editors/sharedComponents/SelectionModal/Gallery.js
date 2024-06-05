"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Gallery = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@openedx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _SelectableBox = _interopRequireDefault(require("../SelectableBox"));
var _messages = _interopRequireDefault(require("./messages"));
var _GalleryCard = _interopRequireDefault(require("./GalleryCard"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // SelectableBox in paragon has a bug where you can't change selection. So we override it
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "p-4 gallery bg-light-400",
    style: {
      height,
      margin: '0 -1.5rem'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectableBox.default.Set, {
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