"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _logging = require("@edx/frontend-platform/logging");
var _ErrorPage = _interopRequireDefault(require("./ErrorPage"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Error boundary component used to log caught errors and display the error page.
 *
 * @memberof module:React
 * @extends {Component}
 */class ErrorBoundary extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true
    };
  }
  componentDidCatch(error, info) {
    (0, _logging.logError)(error, {
      stack: info.componentStack
    });
  }
  render() {
    if (this.state.hasError) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorPage.default, {
        learningContextId: this.props.learningContextId,
        studioEndpointUrl: this.props.studioEndpointUrl
      });
    }
    return this.props.children;
  }
}
exports.default = ErrorBoundary;
ErrorBoundary.propTypes = {
  children: _propTypes.default.node,
  learningContextId: _propTypes.default.string,
  studioEndpointUrl: _propTypes.default.string
};
ErrorBoundary.defaultProps = {
  children: null,
  learningContextId: null,
  studioEndpointUrl: null
};
//# sourceMappingURL=index.js.map