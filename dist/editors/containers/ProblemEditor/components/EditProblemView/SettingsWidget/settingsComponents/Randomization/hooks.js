"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRandomizationSettingStatus = exports.state = exports.default = void 0;
var _react = require("react");
var _problem = require("../../../../../../../data/constants/problem");
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const state = exports.state = {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  summary: val => (0, _react.useState)(val)
};
const useRandomizationSettingStatus = _ref => {
  let {
    randomization,
    updateSettings
  } = _ref;
  const [summary, setSummary] = _module.state.summary({
    message: _problem.RandomizationTypes[_problem.RandomizationTypesKeys.NEVER],
    values: {}
  });
  (0, _react.useEffect)(() => {
    setSummary({
      message: randomization ? _problem.RandomizationTypes[randomization] : _problem.RandomizationTypes[_problem.RandomizationTypesKeys.NEVER]
    });
  }, [randomization]);
  const handleChange = event => {
    updateSettings({
      randomization: event.target.value
    });
  };
  return {
    summary,
    handleChange
  };
};
exports.useRandomizationSettingStatus = useRandomizationSettingStatus;
var _default = exports.default = useRandomizationSettingStatus;
//# sourceMappingURL=hooks.js.map