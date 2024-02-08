"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statusSelector = exports.requestStatus = exports.isPending = exports.isInactive = exports.isFinished = exports.isFailed = exports.isCompleted = exports.errorStatus = exports.errorCode = exports.error = exports.default = exports.data = exports.connectedStatusSelectors = void 0;
var _utils = require("../../../utils");
var _requests = require("../../constants/requests");
var _module = _interopRequireWildcard(require("./selectors"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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