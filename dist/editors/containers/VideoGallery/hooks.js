"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useVideoUploadHandler = exports.useVideoProps = exports.useVideoListProps = exports.useSearchAndSortProps = exports.useCancelHandler = exports.navigateTo = exports.navigateCallback = exports.getstatusBadgeVariant = exports.filterListByStatus = exports.filterListBySearch = exports.filterListByHideSelectedCourse = exports.filterList = exports.default = exports.buildVideos = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _module = _interopRequireWildcard(require("./hooks"));
var _messages = _interopRequireDefault(require("./messages"));
var appHooks = _interopRequireWildcard(require("../../hooks"));
var _redux = require("../../data/redux");
var _analyticsEvt = _interopRequireDefault(require("../../data/constants/analyticsEvt"));
var _utils = require("./utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const {
  navigateCallback,
  navigateTo
} = appHooks;
exports.navigateTo = navigateTo;
exports.navigateCallback = navigateCallback;
const useSearchAndSortProps = () => {
  const [searchString, setSearchString] = _react.default.useState('');
  const [sortBy, setSortBy] = _react.default.useState(_utils.sortKeys.dateNewest);
  const [filterBy, setFilterBy] = _react.default.useState(_utils.filterKeys.anyStatus);
  const [hideSelectedVideos, setHideSelectedVideos] = _react.default.useState(false);
  return {
    searchString,
    onSearchChange: e => setSearchString(e.target.value),
    clearSearchString: () => setSearchString(''),
    sortBy,
    onSortClick: key => () => setSortBy(key),
    sortKeys: _utils.sortKeys,
    sortMessages: _utils.sortMessages,
    filterBy,
    onFilterClick: key => () => setFilterBy(key),
    filterKeys: _utils.filterKeys,
    filterMessages: _utils.filterMessages,
    showSwitch: false,
    hideSelectedVideos,
    switchMessage: _messages.default.hideSelectedCourseVideosSwitchLabel,
    onSwitchClick: () => setHideSelectedVideos(!hideSelectedVideos)
  };
};
exports.useSearchAndSortProps = useSearchAndSortProps;
const filterListBySearch = _ref => {
  let {
    searchString,
    videoList
  } = _ref;
  return videoList.filter(_ref2 => {
    let {
      displayName
    } = _ref2;
    return displayName.toLowerCase().includes(searchString.toLowerCase());
  });
};
exports.filterListBySearch = filterListBySearch;
const filterListByStatus = _ref3 => {
  let {
    statusFilter,
    videoList
  } = _ref3;
  if (statusFilter === _utils.filterKeys.anyStatus) {
    return videoList;
  }
  // TODO deal with translation mismatch because the video status is
  // already translated in the backend
  return videoList.filter(_ref4 => {
    let {
      status
    } = _ref4;
    return _utils.filterKeys[statusFilter] === status;
  });
};
exports.filterListByStatus = filterListByStatus;
const filterListByHideSelectedCourse = _ref5 => {
  let {
    videoList
  } = _ref5;
  return (
    // TODO Missing to implement this
    videoList
  );
};
exports.filterListByHideSelectedCourse = filterListByHideSelectedCourse;
const filterList = _ref6 => {
  let {
    sortBy,
    filterBy,
    searchString,
    videos
  } = _ref6;
  let filteredList = _module.filterListBySearch({
    searchString,
    videoList: videos
  });
  filteredList = _module.filterListByStatus({
    statusFilter: filterBy,
    videoList: filteredList
  });
  filteredList = _module.filterListByHideSelectedCourse({
    videoList: filteredList
  });
  return filteredList.sort(_utils.sortFunctions[sortBy in _utils.sortKeys ? _utils.sortKeys[sortBy] : _utils.sortKeys.dateNewest]);
};
exports.filterList = filterList;
const useVideoListProps = _ref7 => {
  let {
    searchSortProps,
    videos
  } = _ref7;
  const [highlighted, setHighlighted] = _react.default.useState(null);
  const [showSelectVideoError, setShowSelectVideoError] = _react.default.useState(false);
  const [showSizeError, setShowSizeError] = _react.default.useState(false);
  const filteredList = _module.filterList(_objectSpread(_objectSpread({}, searchSortProps), {}, {
    videos
  }));
  const learningContextId = (0, _reactRedux.useSelector)(_redux.selectors.app.learningContextId);
  const blockId = (0, _reactRedux.useSelector)(_redux.selectors.app.blockId);
  return {
    galleryError: {
      show: showSelectVideoError,
      set: () => setShowSelectVideoError(true),
      dismiss: () => setShowSelectVideoError(false),
      message: _messages.default.selectVideoError
    },
    // TODO We need to update this message when implementing the video upload screen
    inputError: {
      show: showSizeError,
      set: () => setShowSizeError(true),
      dismiss: () => setShowSelectVideoError(false),
      message: _messages.default.fileSizeError
    },
    galleryProps: {
      galleryIsEmpty: Object.keys(filteredList).length === 0,
      searchIsEmpty: filteredList.length === 0,
      displayList: filteredList,
      highlighted,
      onHighlightChange: e => setHighlighted(e.target.value),
      emptyGalleryLabel: _messages.default.emptyGalleryLabel,
      showIdsOnCards: true,
      height: '100%'
    },
    selectBtnProps: {
      onClick: () => {
        if (highlighted) {
          navigateTo(`/course/${learningContextId}/editor/video/${blockId}?selectedVideoId=${highlighted}`);
        } else {
          setShowSelectVideoError(true);
        }
      }
    }
  };
};
exports.useVideoListProps = useVideoListProps;
const useVideoUploadHandler = _ref8 => {
  let {
    replace
  } = _ref8;
  const learningContextId = (0, _reactRedux.useSelector)(_redux.selectors.app.learningContextId);
  const blockId = (0, _reactRedux.useSelector)(_redux.selectors.app.blockId);
  const path = `/course/${learningContextId}/editor/video_upload/${blockId}`;
  if (replace) {
    return () => window.location.replace(path);
  }
  return () => navigateTo(path);
};
exports.useVideoUploadHandler = useVideoUploadHandler;
const useCancelHandler = () => navigateCallback({
  destination: (0, _reactRedux.useSelector)(_redux.selectors.app.returnUrl),
  analytics: (0, _reactRedux.useSelector)(_redux.selectors.app.analytics),
  analyticsEvent: _analyticsEvt.default.videoGalleryCancelClick
});
exports.useCancelHandler = useCancelHandler;
const buildVideos = _ref9 => {
  let {
    rawVideos
  } = _ref9;
  let videos = [];
  const rawVideoList = Object.values(rawVideos);
  if (rawVideoList.length > 0) {
    videos = rawVideoList.map(video => ({
      id: video.edx_video_id,
      displayName: video.client_video_id,
      externalUrl: video.course_video_image_url,
      dateAdded: new Date(video.created),
      locked: false,
      thumbnail: video.course_video_image_url,
      status: video.status,
      statusBadgeVariant: _module.getstatusBadgeVariant({
        status: video.status
      }),
      duration: video.duration,
      transcripts: video.transcripts
    }));
  }
  return videos;
};
exports.buildVideos = buildVideos;
const getstatusBadgeVariant = _ref10 => {
  let {
    status
  } = _ref10;
  switch (status) {
    // TODO deal with translation mismatch
    case _utils.filterKeys.failed:
      return 'danger';
    case _utils.filterKeys.uploading:
    case _utils.filterKeys.processing:
      return 'light';
    default:
      return null;
  }
};
exports.getstatusBadgeVariant = getstatusBadgeVariant;
const useVideoProps = _ref11 => {
  let {
    videos
  } = _ref11;
  const searchSortProps = useSearchAndSortProps();
  const videoList = useVideoListProps({
    searchSortProps,
    videos
  });
  const {
    galleryError,
    galleryProps,
    inputError,
    selectBtnProps
  } = videoList;
  const fileInput = {
    click: useVideoUploadHandler({
      replace: false
    })
  };
  return {
    galleryError,
    inputError,
    fileInput,
    galleryProps,
    searchSortProps,
    selectBtnProps
  };
};
exports.useVideoProps = useVideoProps;
var _default = exports.default = {
  useVideoProps,
  buildVideos,
  useCancelHandler,
  useVideoUploadHandler
};
//# sourceMappingURL=hooks.js.map