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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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