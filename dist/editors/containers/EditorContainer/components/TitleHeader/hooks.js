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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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