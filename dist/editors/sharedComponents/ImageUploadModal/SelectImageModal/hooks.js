"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = exports.searchAndSortHooks = exports.imgListHooks = exports.imgHooks = exports.filteredList = exports.fileInputHooks = exports.displayList = exports.default = exports.checkValidFileSize = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _redux = require("../../../data/redux");
var _module = _interopRequireWildcard(require("./hooks"));
var _utils = require("./utils");
var _messages = _interopRequireDefault(require("./messages"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const state = exports.state = {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  highlighted: val => _react.default.useState(val),
  // eslint-disable-next-line react-hooks/rules-of-hooks
  showSelectImageError: val => _react.default.useState(val),
  // eslint-disable-next-line react-hooks/rules-of-hooks
  searchString: val => _react.default.useState(val),
  // eslint-disable-next-line react-hooks/rules-of-hooks
  sortBy: val => _react.default.useState(val),
  // eslint-disable-next-line react-hooks/rules-of-hooks
  showSizeError: val => _react.default.useState(val)
};
const searchAndSortHooks = () => {
  const [searchString, setSearchString] = _module.state.searchString('');
  const [sortBy, setSortBy] = _module.state.sortBy(_utils.sortKeys.dateNewest);
  return {
    searchString,
    onSearchChange: e => setSearchString(e.target.value),
    clearSearchString: () => setSearchString(''),
    sortBy,
    onSortClick: key => () => setSortBy(key),
    sortKeys: _utils.sortKeys,
    sortMessages: _utils.sortMessages
  };
};
exports.searchAndSortHooks = searchAndSortHooks;
const filteredList = _ref => {
  let {
    searchString,
    imageList
  } = _ref;
  return imageList.filter(_ref2 => {
    let {
      displayName
    } = _ref2;
    return displayName?.toLowerCase().includes(searchString?.toLowerCase());
  });
};
exports.filteredList = filteredList;
const displayList = _ref3 => {
  let {
    sortBy,
    searchString,
    images
  } = _ref3;
  return _module.filteredList({
    searchString,
    imageList: images
  }).sort(_utils.sortFunctions[sortBy in _utils.sortKeys ? _utils.sortKeys[sortBy] : _utils.sortKeys.dateNewest]);
};
exports.displayList = displayList;
const imgListHooks = _ref4 => {
  let {
    searchSortProps,
    setSelection,
    images
  } = _ref4;
  const [highlighted, setHighlighted] = _module.state.highlighted(null);
  const [showSelectImageError, setShowSelectImageError] = _module.state.showSelectImageError(false);
  const [showSizeError, setShowSizeError] = _module.state.showSizeError(false);
  const list = _module.displayList(_objectSpread(_objectSpread({}, searchSortProps), {}, {
    images
  }));
  return {
    galleryError: {
      show: showSelectImageError,
      set: () => setShowSelectImageError(true),
      dismiss: () => setShowSelectImageError(false),
      message: _messages.default.selectImageError
    },
    inputError: {
      show: showSizeError,
      set: () => setShowSizeError(true),
      dismiss: () => setShowSizeError(false),
      message: _messages.default.fileSizeError
    },
    images,
    galleryProps: {
      galleryIsEmpty: Object.keys(images).length === 0,
      searchIsEmpty: list.length === 0,
      displayList: list,
      highlighted,
      onHighlightChange: e => setHighlighted(e.target.value),
      emptyGalleryLabel: _messages.default.emptyGalleryLabel
    },
    // highlight by id
    selectBtnProps: {
      onClick: () => {
        if (highlighted) {
          const highlightedImage = images.find(image => image.id === highlighted);
          setSelection(highlightedImage);
        } else {
          setShowSelectImageError(true);
        }
      }
    }
  };
};
exports.imgListHooks = imgListHooks;
const checkValidFileSize = _ref5 => {
  let {
    selectedFile,
    clearSelection,
    onSizeFail
  } = _ref5;
  // Check if the file size is greater than 10 MB, upload size limit
  if (selectedFile.size > 10000000) {
    clearSelection();
    onSizeFail();
    return false;
  }
  return true;
};
exports.checkValidFileSize = checkValidFileSize;
const fileInputHooks = _ref6 => {
  let {
    setSelection,
    clearSelection,
    imgList
  } = _ref6;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = (0, _reactRedux.useDispatch)();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ref = _react.default.useRef();
  const click = () => ref.current.click();
  const addFile = e => {
    const selectedFile = e.target.files[0];
    if (selectedFile && _module.checkValidFileSize({
      selectedFile,
      clearSelection,
      onSizeFail: () => {
        imgList.inputError.set();
      }
    })) {
      dispatch(_redux.thunkActions.app.uploadImage({
        file: selectedFile,
        setSelection
      }));
    }
  };
  return {
    click,
    addFile,
    ref
  };
};
exports.fileInputHooks = fileInputHooks;
const imgHooks = _ref7 => {
  let {
    setSelection,
    clearSelection,
    images
  } = _ref7;
  const searchSortProps = _module.searchAndSortHooks();
  const imgList = _module.imgListHooks({
    setSelection,
    searchSortProps,
    images
  });
  const fileInput = _module.fileInputHooks({
    setSelection,
    clearSelection,
    imgList
  });
  const {
    galleryError,
    galleryProps,
    inputError,
    selectBtnProps
  } = imgList;
  return {
    galleryError,
    inputError,
    fileInput,
    galleryProps,
    searchSortProps,
    selectBtnProps
  };
};
exports.imgHooks = imgHooks;
var _default = exports.default = {
  imgHooks
};
//# sourceMappingURL=hooks.js.map