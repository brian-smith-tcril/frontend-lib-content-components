"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createStore = void 0;
var redux = _interopRequireWildcard(require("redux"));
var _reduxThunk = _interopRequireDefault(require("redux-thunk"));
var _logOnlyInProduction = require("redux-devtools-extension/logOnlyInProduction");
var _reduxLogger = require("redux-logger");
var _redux2 = _interopRequireWildcard(require("./redux"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const createStore = () => {
  const loggerMiddleware = (0, _reduxLogger.createLogger)();
  const middleware = [_reduxThunk.default, loggerMiddleware];
  const store = redux.createStore(_redux2.default, (0, _logOnlyInProduction.composeWithDevTools)(redux.applyMiddleware(...middleware)));

  /**
   * Dev tools for redux work
   */
  if (process.env.NODE_ENV === 'development') {
    window.store = store;
    window.actions = _redux2.actions;
    window.selectors = _redux2.selectors;
  }
  return store;
};
exports.createStore = createStore;
const store = createStore();
var _default = exports.default = store;
//# sourceMappingURL=store.js.map