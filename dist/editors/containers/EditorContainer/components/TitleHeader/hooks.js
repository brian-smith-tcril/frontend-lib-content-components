"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = exports.navigateCallback = exports.localTitleHooks = exports.hooks = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _redux = require("../../../../data/redux");
var textEditorHooks = _interopRequireWildcard(require("../../hooks"));
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  navigateCallback
} = textEditorHooks;
exports.navigateCallback = navigateCallback;
const state = exports.state = {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  localTitle: args => _react.default.useState(args)
};
const hooks = exports.hooks = {
  isEditing: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isEditing, setIsEditing] = _react.default.useState(false);
    return {
      isEditing,
      startEditing: () => setIsEditing(true),
      stopEditing: () => setIsEditing(false)
    };
  },
  localTitle: _ref => {
    let {
      dispatch,
      stopEditing
    } = _ref;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const title = (0, _reactRedux.useSelector)(_redux.selectors.app.displayTitle);
    const [localTitle, setLocalTitle] = _module.state.localTitle(title);
    return {
      updateTitle: e => {
        if (localTitle.length <= 0) {
          setLocalTitle(title);
          stopEditing();
        } else if (!e.currentTarget.contains(e.relatedTarget)) {
          dispatch(_redux.actions.app.setBlockTitle(localTitle));
          stopEditing();
        }
      },
      handleChange: e => setLocalTitle(e.target.value),
      cancelEdit: () => {
        setLocalTitle(title);
        stopEditing();
      },
      localTitle
    };
  }
};
const localTitleHooks = _ref2 => {
  let {
    dispatch
  } = _ref2;
  const {
    isEditing,
    startEditing,
    stopEditing
  } = _module.hooks.isEditing();
  const {
    localTitle,
    handleChange,
    updateTitle,
    cancelEdit
  } = _module.hooks.localTitle({
    dispatch,
    stopEditing
  });
  return {
    isEditing,
    startEditing,
    stopEditing,
    cancelEdit,
    localTitle,
    updateTitle,
    handleChange,
    inputRef: /*#__PURE__*/_react.default.createRef()
  };
};
exports.localTitleHooks = localTitleHooks;
//# sourceMappingURL=hooks.js.map