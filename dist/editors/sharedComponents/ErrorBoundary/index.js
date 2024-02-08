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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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