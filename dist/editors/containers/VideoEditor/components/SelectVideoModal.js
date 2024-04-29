"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.hooks = exports.default = exports.SelectVideoModal = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@openedx/paragon");
var _redux = require("../../../data/redux");
var _BaseModal = _interopRequireDefault(require("./BaseModal"));
var _module = _interopRequireWildcard(require("./SelectVideoModal"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const hooks = exports.hooks = {
  videoList: _ref => {
    let {
      fetchVideos
    } = _ref;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [videos, setVideos] = _react.default.useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    _react.default.useEffect(() => {
      fetchVideos({
        onSuccess: setVideos
      });
    }, []);
    return videos;
  },
  onSelectClick: _ref2 => {
    let {
      setSelection,
      videos
    } = _ref2;
    return () => setSelection(videos[0]);
  }
};
const SelectVideoModal = _ref3 => {
  let {
    fetchVideos,
    isOpen,
    close,
    setSelection
  } = _ref3;
  const videos = _module.hooks.videoList({
    fetchVideos
  });
  const onSelectClick = _module.hooks.onSelectClick({
    setSelection,
    videos
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_BaseModal.default, {
    isOpen: isOpen,
    close: close,
    title: "Add a video",
    confirmAction: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
      variant: "primary",
      onClick: onSelectClick,
      children: "Next"
    }),
    children: videos && videos.map(img => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {}, img.externalUrl))
  });
};
exports.SelectVideoModal = SelectVideoModal;
SelectVideoModal.propTypes = {
  isOpen: _propTypes.default.bool.isRequired,
  close: _propTypes.default.func.isRequired,
  setSelection: _propTypes.default.func.isRequired,
  // redux
  fetchVideos: _propTypes.default.func.isRequired
};
const mapStateToProps = () => ({});
exports.mapStateToProps = mapStateToProps;
const mapDispatchToProps = exports.mapDispatchToProps = {
  fetchVideos: _redux.thunkActions.app.fetchVideos
};
var _default = exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SelectVideoModal);
//# sourceMappingURL=SelectVideoModal.js.map