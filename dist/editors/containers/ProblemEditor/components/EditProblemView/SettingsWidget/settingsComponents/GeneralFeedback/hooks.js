"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = exports.generalFeedbackHooks = void 0;
var _react = require("react");
var _lodashEs = _interopRequireDefault(require("lodash-es"));
var _messages = _interopRequireDefault(require("./messages"));
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const state = exports.state = {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  summary: val => (0, _react.useState)(val)
};
const generalFeedbackHooks = (generalFeedback, updateSettings) => {
  const [summary, setSummary] = _module.state.summary({
    message: _messages.default.noGeneralFeedbackSummary,
    values: {},
    intl: true
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  (0, _react.useEffect)(() => {
    if (_lodashEs.default.isEmpty(generalFeedback)) {
      setSummary({
        message: _messages.default.noGeneralFeedbackSummary,
        values: {},
        intl: true
      });
    } else {
      setSummary({
        message: generalFeedback,
        values: {},
        intl: false
      });
    }
  }, [generalFeedback]);
  const handleChange = event => {
    updateSettings({
      generalFeedback: event.target.value
    });
  };
  return {
    summary,
    handleChange
  };
};
exports.generalFeedbackHooks = generalFeedbackHooks;
//# sourceMappingURL=hooks.js.map