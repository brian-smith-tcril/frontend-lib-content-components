"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.default = exports.SelectImageModal = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _hooks = _interopRequireDefault(require("./hooks"));
var _utils = require("./utils");
var _SelectionModal = _interopRequireDefault(require("../../SelectionModal"));
var _messages = _interopRequireDefault(require("./messages"));
var _requests = require("../../../data/constants/requests");
var _redux = require("../../../data/redux");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SelectImageModal = _ref => {
  let {
    isOpen,
    close,
    setSelection,
    clearSelection,
    images,
    // redux
    isLoaded,
    isFetchError,
    isUploadError
  } = _ref;
  const {
    galleryError,
    inputError,
    fileInput,
    galleryProps,
    searchSortProps,
    selectBtnProps
  } = _hooks.default.imgHooks({
    setSelection,
    clearSelection,
    images: images.current
  });
  const modalMessages = {
    confirmMsg: _messages.default.nextButtonLabel,
    titleMsg: _messages.default.titleLabel,
    uploadButtonMsg: _messages.default.uploadButtonLabel,
    fetchError: _messages.default.fetchImagesError,
    uploadError: _messages.default.uploadImageError
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectionModal.default, {
    isOpen,
    close,
    galleryError,
    inputError,
    fileInput,
    galleryProps,
    searchSortProps,
    selectBtnProps,
    acceptedFiles: _utils.acceptedImgKeys,
    modalMessages,
    isLoaded,
    isFetchError,
    isUploadError
  });
};
exports.SelectImageModal = SelectImageModal;
SelectImageModal.propTypes = {
  isOpen: _propTypes.default.bool.isRequired,
  close: _propTypes.default.func.isRequired,
  setSelection: _propTypes.default.func.isRequired,
  clearSelection: _propTypes.default.func.isRequired,
  images: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  // redux
  isLoaded: _propTypes.default.bool.isRequired,
  isFetchError: _propTypes.default.bool.isRequired,
  isUploadError: _propTypes.default.bool.isRequired
};
const mapStateToProps = state => ({
  isLoaded: _redux.selectors.requests.isFinished(state, {
    requestKey: _requests.RequestKeys.fetchAssets
  }),
  isFetchError: _redux.selectors.requests.isFailed(state, {
    requestKey: _requests.RequestKeys.fetchAssets
  }),
  isUploadError: _redux.selectors.requests.isFailed(state, {
    requestKey: _requests.RequestKeys.uploadAsset
  })
});
exports.mapStateToProps = mapStateToProps;
const mapDispatchToProps = exports.mapDispatchToProps = {};
var _default = exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SelectImageModal);
//# sourceMappingURL=index.js.map