"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveBlock = exports.nullMethod = exports.navigateTo = exports.navigateCallback = exports.initializeApp = exports.clearSaveError = void 0;
var _react = require("react");
var _analytics = require("@edx/frontend-platform/analytics");
var _analyticsEvt = _interopRequireDefault(require("./data/constants/analyticsEvt"));
var _redux = require("./data/redux");
var _module = _interopRequireWildcard(require("./hooks"));
var _requests = require("./data/constants/requests");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// eslint-disable-next-line react-hooks/rules-of-hooks
const initializeApp = _ref => {
  let {
    dispatch,
    data
  } = _ref;
  return (0, _react.useEffect)(() => dispatch(_redux.thunkActions.app.initialize(data)), [data]);
};
exports.initializeApp = initializeApp;
const navigateTo = destination => {
  window.location.assign(destination);
};
exports.navigateTo = navigateTo;
const navigateCallback = _ref2 => {
  let {
    returnFunction,
    destination,
    analyticsEvent,
    analytics
  } = _ref2;
  return response => {
    if (process.env.NODE_ENV !== 'development' && analyticsEvent && analytics) {
      (0, _analytics.sendTrackEvent)(analyticsEvent, analytics);
    }
    if (returnFunction) {
      returnFunction()(response);
      return;
    }
    _module.navigateTo(destination);
  };
};
exports.navigateCallback = navigateCallback;
const nullMethod = () => ({});
exports.nullMethod = nullMethod;
const saveBlock = _ref3 => {
  let {
    analytics,
    content,
    destination,
    dispatch,
    returnFunction,
    validateEntry
  } = _ref3;
  if (!content) {
    return;
  }
  let attemptSave = false;
  if (validateEntry) {
    if (validateEntry()) {
      attemptSave = true;
    }
  } else {
    attemptSave = true;
  }
  if (attemptSave) {
    dispatch(_redux.thunkActions.app.saveBlock(content, _module.navigateCallback({
      destination,
      analyticsEvent: _analyticsEvt.default.editorSaveClick,
      analytics,
      returnFunction
    })));
  }
};
exports.saveBlock = saveBlock;
const clearSaveError = _ref4 => {
  let {
    dispatch
  } = _ref4;
  return () => dispatch(_redux.actions.requests.clearRequest({
    requestKey: _requests.RequestKeys.saveBlock
  }));
};
exports.clearSaveError = clearSaveError;
//# sourceMappingURL=hooks.js.map