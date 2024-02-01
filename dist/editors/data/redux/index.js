"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectors = exports.default = exports.actions = void 0;
Object.defineProperty(exports, "thunkActions", {
  enumerable: true,
  get: function () {
    return _thunkActions.default;
  }
});
var _redux = require("redux");
var _utils = require("../../utils");
var app = _interopRequireWildcard(require("./app"));
var requests = _interopRequireWildcard(require("./requests"));
var video = _interopRequireWildcard(require("./video"));
var problem = _interopRequireWildcard(require("./problem"));
var game = _interopRequireWildcard(require("./game"));
var _thunkActions = _interopRequireDefault(require("./thunkActions"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* eslint-disable import/no-cycle */
const modules = {
  app,
  requests,
  video,
  problem,
  game
};
const moduleProps = propName => Object.keys(modules).reduce((obj, moduleKey) => _objectSpread(_objectSpread({}, obj), {}, {
  [moduleKey]: modules[moduleKey][propName]
}), {});
const rootReducer = (0, _redux.combineReducers)(moduleProps('reducer'));
const actions = exports.actions = (0, _utils.StrictDict)(moduleProps('actions'));
const selectors = exports.selectors = (0, _utils.StrictDict)(moduleProps('selectors'));
var _default = exports.default = rootReducer;
//# sourceMappingURL=index.js.map