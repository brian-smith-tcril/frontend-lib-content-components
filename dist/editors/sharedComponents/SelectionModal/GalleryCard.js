"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GalleryCard = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _messages = _interopRequireDefault(require("./messages"));
var _utils = require("../../utils");
var _LanguageNamesWidget = _interopRequireDefault(require("../../containers/VideoEditor/components/VideoSettingsModal/components/VideoPreviewWidget/LanguageNamesWidget"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const GalleryCard = _ref => {
  let {
    asset,
    thumbnailFallback
  } = _ref;
  const [thumbnailError, setThumbnailError] = _react.default.useState(false);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.SelectableBox, {
    className: "card bg-white shadow-none border-0 py-0",
    type: "radio",
    value: asset.id,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "card-div d-flex flex-row flex-nowrap align-items-center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "position-relative",
        style: {
          width: '200px',
          height: '100px'
        },
        children: [thumbnailError && thumbnailFallback ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: {
            width: '200px',
            height: '100px'
          },
          children: thumbnailFallback
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Image, {
          style: {
            border: 'none',
            width: '200px',
            height: '100px'
          },
          src: asset.externalUrl,
          onError: thumbnailFallback && (() => setThumbnailError(true))
        }), asset.status && asset.statusBadgeVariant && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Badge, {
          variant: asset.statusBadgeVariant,
          style: {
            position: 'absolute',
            left: '6px',
            top: '6px'
          },
          children: asset.status
        }), asset.duration >= 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Badge, {
          variant: "dark",
          style: {
            position: 'absolute',
            right: '6px',
            bottom: '6px',
            backgroundColor: 'black'
          },
          children: (0, _utils.formatDuration)(asset.duration)
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "card-text px-3 py-2",
        style: {
          marginTop: '10px'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          className: "text-primary-500",
          children: asset.displayName
        }), asset.transcripts && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: {
            margin: '0 0 5px 0'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LanguageNamesWidget.default, {
            transcripts: asset.transcripts
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-gray-500",
          style: {
            fontSize: '11px'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread(_objectSpread({}, _messages.default.addedDate), {}, {
            values: {
              date: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedDate, {
                value: asset.dateAdded
              }),
              time: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedTime, {
                value: asset.dateAdded
              })
            }
          }))
        })]
      })]
    })
  }, asset.externalUrl);
};
exports.GalleryCard = GalleryCard;
GalleryCard.defaultProps = {
  thumbnailFallback: undefined
};
GalleryCard.propTypes = {
  asset: _propTypes.default.shape({
    contentType: _propTypes.default.string,
    displayName: _propTypes.default.string,
    externalUrl: _propTypes.default.string,
    id: _propTypes.default.string,
    dateAdded: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.instanceOf(Date)]),
    locked: _propTypes.default.bool,
    portableUrl: _propTypes.default.string,
    thumbnail: _propTypes.default.string,
    url: _propTypes.default.string,
    duration: _propTypes.default.number,
    status: _propTypes.default.string,
    statusBadgeVariant: _propTypes.default.string,
    transcripts: _propTypes.default.arrayOf(_propTypes.default.string)
  }).isRequired,
  thumbnailFallback: _propTypes.default.element
};
var _default = exports.default = GalleryCard;
//# sourceMappingURL=GalleryCard.js.map