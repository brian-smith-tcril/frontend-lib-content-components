"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VideoUploader = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _reactRedux = require("react-redux");
var _redux = require("../../data/redux");
var hooks = _interopRequireWildcard(require("./hooks"));
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const URLUploader = () => {
  const [textInputValue, setTextInputValue] = _react.default.useState('');
  const onURLUpload = hooks.onVideoUpload('selectedVideoUrl');
  const intl = (0, _i18n.useIntl)();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "d-flex flex-column",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "justify-content-center align-self-center rounded-circle bg-light-300 p-2.5",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
        src: _icons.FileUpload,
        className: "text-muted",
        style: {
          height: '2rem',
          width: '2rem'
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "d-flex align-self-center justify-content-center flex-wrap flex-column pt-3",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: intl.formatMessage(_messages.default.dropVideoFileHere)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "x-small align-self-center pt-2",
        children: intl.formatMessage(_messages.default.info)
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "small align-self-center justify-content-center mx-2 text-dark font-weight-normal pt-3",
      children: "OR"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "zindex-9 video-id-prompt py-3",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.InputGroup, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.FormControl, {
          className: "m-0",
          placeholder: intl.formatMessage(_messages.default.pasteURL),
          "aria-label": intl.formatMessage(_messages.default.pasteURL),
          "aria-describedby": "basic-addon2",
          borderless: true,
          onClick: event => {
            event.stopPropagation();
          },
          onChange: event => {
            setTextInputValue(event.target.value);
          },
          trailingElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.IconButton, {
            className: "url-submit-button",
            alt: intl.formatMessage(_messages.default.submitButtonAltText),
            src: _icons.ArrowForward,
            iconAs: _paragon.Icon,
            size: "inline",
            onClick: event => {
              event.stopPropagation();
              if (textInputValue.trim() !== '') {
                onURLUpload(textInputValue);
              }
            }
          })
        })
      })
    })]
  });
};
const VideoUploader = _ref => {
  let {
    setLoading
  } = _ref;
  const dispatch = (0, _reactRedux.useDispatch)();
  const intl = (0, _i18n.useIntl)();
  const goBack = hooks.useHistoryGoBack();
  const handleProcessUpload = _ref2 => {
    let {
      fileData
    } = _ref2;
    dispatch(_redux.thunkActions.video.uploadVideo({
      supportedFiles: [fileData],
      setLoadSpinner: setLoading,
      postUploadRedirect: hooks.onVideoUpload('selectedVideoId')
    }));
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "d-flex flex-column",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "d-flex justify-content-end flex-row",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.IconButton, {
        className: "position-absolute mr-2 mt-2",
        alt: intl.formatMessage(_messages.default.closeButtonAltText),
        src: _icons.Close,
        iconAs: _paragon.Icon,
        onClick: goBack
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Dropzone, {
      accept: {
        'video/*': ['.mp4', '.mov']
      },
      onProcessUpload: handleProcessUpload,
      inputComponent: /*#__PURE__*/(0, _jsxRuntime.jsx)(URLUploader, {})
    })]
  });
};
exports.VideoUploader = VideoUploader;
VideoUploader.propTypes = {
  setLoading: _propTypes.default.func.isRequired
};
var _default = exports.default = VideoUploader;
//# sourceMappingURL=VideoUploader.js.map