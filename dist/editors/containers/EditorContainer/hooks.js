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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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