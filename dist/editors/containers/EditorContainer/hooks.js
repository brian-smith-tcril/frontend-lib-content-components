"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = exports.saveFailed = exports.saveBlock = exports.nullMethod = exports.navigateCallback = exports.isInitialized = exports.handleSaveClicked = exports.handleCancel = exports.clearSaveError = exports.cancelConfirmModalToggle = void 0;
var _react = require("react");
var _reactRedux = require("react-redux");
var _analyticsEvt = _interopRequireDefault(require("../../data/constants/analyticsEvt"));
var _requests = require("../../data/constants/requests");
var _redux = require("../../data/redux");
var _utils = require("../../utils");
var appHooks = _interopRequireWildcard(require("../../hooks"));
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  clearSaveError,
  navigateCallback,
  nullMethod,
  saveBlock
} = appHooks;
exports.saveBlock = saveBlock;
exports.nullMethod = nullMethod;
exports.navigateCallback = navigateCallback;
exports.clearSaveError = clearSaveError;
const state = exports.state = (0, _utils.StrictDict)({
  // eslint-disable-next-line react-hooks/rules-of-hooks
  isCancelConfirmModalOpen: val => (0, _react.useState)(val)
});
const handleSaveClicked = _ref => {
  let {
    dispatch,
    getContent,
    validateEntry,
    returnFunction
  } = _ref;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const returnUrl = (0, _reactRedux.useSelector)(_redux.selectors.app.returnUrl);
  const destination = returnFunction ? '' : returnUrl;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const analytics = (0, _reactRedux.useSelector)(_redux.selectors.app.analytics);
  return () => saveBlock({
    analytics,
    content: getContent({
      dispatch
    }),
    destination,
    dispatch,
    returnFunction,
    validateEntry
  });
};
exports.handleSaveClicked = handleSaveClicked;
const cancelConfirmModalToggle = () => {
  const [isCancelConfirmOpen, setIsOpen] = _module.state.isCancelConfirmModalOpen(false);
  return {
    isCancelConfirmOpen,
    openCancelConfirmModal: () => setIsOpen(true),
    closeCancelConfirmModal: () => setIsOpen(false)
  };
};
exports.cancelConfirmModalToggle = cancelConfirmModalToggle;
const handleCancel = _ref2 => {
  let {
    onClose,
    returnFunction
  } = _ref2;
  if (onClose) {
    return onClose;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const returnUrl = (0, _reactRedux.useSelector)(_redux.selectors.app.returnUrl);
  return navigateCallback({
    returnFunction,
    // eslint-disable-next-line react-hooks/rules-of-hooks
    destination: returnFunction ? '' : returnUrl,
    analyticsEvent: _analyticsEvt.default.editorCancelClick,
    // eslint-disable-next-line react-hooks/rules-of-hooks
    analytics: (0, _reactRedux.useSelector)(_redux.selectors.app.analytics)
  });
};

// eslint-disable-next-line react-hooks/rules-of-hooks
exports.handleCancel = handleCancel;
const isInitialized = () => (0, _reactRedux.useSelector)(_redux.selectors.app.isInitialized);

// eslint-disable-next-line react-hooks/rules-of-hooks
exports.isInitialized = isInitialized;
const saveFailed = () => (0, _reactRedux.useSelector)(rootState => _redux.selectors.requests.isFailed(rootState, {
  requestKey: _requests.RequestKeys.saveBlock
}));
exports.saveFailed = saveFailed;
//# sourceMappingURL=hooks.js.map