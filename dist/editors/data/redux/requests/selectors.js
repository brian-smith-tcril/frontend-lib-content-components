"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statusSelector = exports.requestStatus = exports.isPending = exports.isInactive = exports.isFinished = exports.isFailed = exports.isCompleted = exports.errorStatus = exports.errorCode = exports.error = exports.default = exports.data = exports.connectedStatusSelectors = void 0;
var _utils = require("../../../utils");
var _requests = require("../../constants/requests");
var _module = _interopRequireWildcard(require("./selectors"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const requestStatus = (state, _ref) => {
  let {
    requestKey
  } = _ref;
  return state.requests[requestKey];
};
exports.requestStatus = requestStatus;
const statusSelector = fn => (state, _ref2) => {
  let {
    requestKey
  } = _ref2;
  return fn(state.requests[requestKey]);
};
exports.statusSelector = statusSelector;
const isInactive = _ref3 => {
  let {
    status
  } = _ref3;
  return status === _requests.RequestStates.inactive;
};
exports.isInactive = isInactive;
const isPending = _ref4 => {
  let {
    status
  } = _ref4;
  return status === _requests.RequestStates.pending;
};
exports.isPending = isPending;
const isCompleted = _ref5 => {
  let {
    status
  } = _ref5;
  return status === _requests.RequestStates.completed;
};
exports.isCompleted = isCompleted;
const isFailed = _ref6 => {
  let {
    status
  } = _ref6;
  return status === _requests.RequestStates.failed;
};
exports.isFailed = isFailed;
const isFinished = _ref7 => {
  let {
    status
  } = _ref7;
  return [_requests.RequestStates.failed, _requests.RequestStates.completed].includes(status);
};
exports.isFinished = isFinished;
const error = request => request.error;
exports.error = error;
const errorStatus = request => request.error?.response?.status;
exports.errorStatus = errorStatus;
const errorCode = request => request.error?.response?.data;
exports.errorCode = errorCode;
const data = request => request.data;
exports.data = data;
const connectedStatusSelectors = () => ({
  isInactive: _module.statusSelector(isInactive),
  isPending: _module.statusSelector(isPending),
  isCompleted: _module.statusSelector(isCompleted),
  isFailed: _module.statusSelector(isFailed),
  isFinished: _module.statusSelector(isFinished),
  error: _module.statusSelector(error),
  errorCode: _module.statusSelector(errorCode),
  errorStatus: _module.statusSelector(errorStatus),
  data: _module.statusSelector(data)
});
exports.connectedStatusSelectors = connectedStatusSelectors;
var _default = exports.default = (0, _utils.StrictDict)(_objectSpread({
  requestStatus
}, _module.connectedStatusSelectors()));
//# sourceMappingURL=selectors.js.map