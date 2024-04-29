"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRandomizationSettingStatus = exports.state = exports.default = void 0;
var _react = require("react");
var _problem = require("../../../../../../../data/constants/problem");
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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