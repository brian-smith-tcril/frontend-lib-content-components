"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useArrowNav = exports.state = exports.selectHooks = exports.onSelect = exports.default = void 0;
var _react = require("react");
var _problem = require("../../../../data/constants/problem");
var _utils = require("../../../../utils");
var _module = _interopRequireWildcard(require("./hooks"));
var _problem2 = require("../../../../data/redux/thunkActions/problem");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const state = exports.state = (0, _utils.StrictDict)({
  // eslint-disable-next-line react-hooks/rules-of-hooks
  selected: val => (0, _react.useState)(val)
});
const selectHooks = () => {
  const [selected, setSelected] = _module.state.selected(_problem.ProblemTypeKeys.SINGLESELECT);
  return {
    selected,
    setSelected
  };
};
exports.selectHooks = selectHooks;
const onSelect = _ref => {
  let {
    selected,
    updateField,
    setBlockTitle,
    defaultSettings
  } = _ref;
  return () => {
    if (Object.values(_problem.AdvanceProblemKeys).includes(selected)) {
      updateField({
        problemType: _problem.ProblemTypeKeys.ADVANCED,
        rawOLX: _problem.AdvanceProblems[selected].template
      });
      setBlockTitle(_problem.AdvanceProblems[selected].title);
    } else {
      const newOLX = _problem.ProblemTypes[selected].template;
      const newState = (0, _problem2.getDataFromOlx)({
        rawOLX: newOLX,
        rawSettings: {
          weight: 1,
          attempts_before_showanswer_button: 0,
          show_reset_button: null,
          showanswer: null
        },
        defaultSettings: (0, _utils.snakeCaseKeys)(defaultSettings)
      });
      updateField(newState);
      setBlockTitle(_problem.ProblemTypes[selected].title);
    }
  };
};
exports.onSelect = onSelect;
const useArrowNav = (selected, setSelected) => {
  const detectKeyDown = e => {
    const problemTypeValues = Object.values(_problem.ProblemTypeKeys);
    switch (e.key) {
      case 'ArrowUp':
        if (problemTypeValues.includes(selected) && _problem.ProblemTypes[selected].prev) {
          setSelected(_problem.ProblemTypes[selected].prev);
          document.getElementById(_problem.ProblemTypes[selected].prev).focus();
        }
        break;
      case 'ArrowDown':
        if (problemTypeValues.includes(selected) && _problem.ProblemTypes[selected].next) {
          setSelected(_problem.ProblemTypes[selected].next);
          document.getElementById(_problem.ProblemTypes[selected].next).focus();
        }
        break;
      default:
    }
  };
  (0, _react.useEffect)(() => {
    document.addEventListener('keydown', detectKeyDown, true);
    return () => {
      document.removeEventListener('keydown', detectKeyDown, true);
    };
  }, [selected, setSelected]);
};
exports.useArrowNav = useArrowNav;
var _default = exports.default = {
  state,
  selectHooks,
  onSelect,
  useArrowNav
};
//# sourceMappingURL=hooks.js.map