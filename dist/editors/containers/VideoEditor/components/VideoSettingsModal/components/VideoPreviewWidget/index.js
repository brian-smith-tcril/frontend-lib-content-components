"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.default = exports.VideoPreviewWidget = void 0;
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _redux = require("../../../../../../data/redux");
var _messages = _interopRequireDefault(require("../ThumbnailWidget/messages"));
var _hooks = _interopRequireDefault(require("./hooks"));
var _LanguageNamesWidget = _interopRequireDefault(require("./LanguageNamesWidget"));
var _videoThumbnail = _interopRequireDefault(require("../../../../../../data/images/videoThumbnail.svg"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const VideoPreviewWidget = _ref => {
  let {
    thumbnail,
    videoSource,
    transcripts,
    blockTitle,
    intl
  } = _ref;
  const imgRef = _react.default.useRef();
  const videoType = intl.formatMessage(_hooks.default.getVideoType(videoSource));
  const thumbnailImage = thumbnail || _videoThumbnail.default;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Collapsible.Advanced, {
    className: "collapsible-card rounded mx-4 my-3 px-4",
    defaultOpen: true,
    open: true,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Collapsible.Body, {
      className: "collapsible-body rounded px-0 py-4",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "d-flex flex-row",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Image, {
          thumbnail: true,
          className: "mr-3 px-6 py-4.5",
          ref: imgRef,
          src: thumbnailImage,
          alt: intl.formatMessage(_messages.default.thumbnailAltText),
          style: {
            maxWidth: '200px',
            minWidth: '200px',
            minHeight: '112px',
            maxHeight: '112px'
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Stack, {
          gap: 1,
          className: "justify-content-center",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
            className: "text-primary mb-0",
            children: blockTitle
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LanguageNamesWidget.default, {
            transcripts: transcripts
          }), videoType && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Hyperlink, {
            className: "text-primary x-small",
            destination: videoSource,
            target: "_blank",
            rel: "noopener noreferrer",
            children: videoType
          })]
        })]
      })
    })
  });
};
exports.VideoPreviewWidget = VideoPreviewWidget;
VideoPreviewWidget.propTypes = {
  intl: _i18n.intlShape.isRequired,
  videoSource: _propTypes.default.string.isRequired,
  thumbnail: _propTypes.default.string.isRequired,
  transcripts: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  blockTitle: _propTypes.default.string.isRequired
};
const mapStateToProps = state => ({
  transcripts: _redux.selectors.video.transcripts(state),
  videoSource: _redux.selectors.video.videoSource(state),
  thumbnail: _redux.selectors.video.thumbnail(state),
  blockTitle: _redux.selectors.app.blockTitle(state)
});
exports.mapStateToProps = mapStateToProps;
var _default = exports.default = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps)(VideoPreviewWidget));
//# sourceMappingURL=index.js.map