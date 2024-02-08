"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = exports.generalFeedbackHooks = void 0;
var _react = require("react");
var _lodashEs = _interopRequireDefault(require("lodash-es"));
var _messages = _interopRequireDefault(require("./messages"));
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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