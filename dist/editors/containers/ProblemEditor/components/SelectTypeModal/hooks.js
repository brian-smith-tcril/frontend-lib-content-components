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
const _excluded = ["settings"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
    setBlockTitle
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
      const _getDataFromOlx = (0, _problem2.getDataFromOlx)({
          rawOLX: newOLX,
          rawSettings: {},
          defaultSettings: {}
        }),
        {
          settings
        } = _getDataFromOlx,
        newState = _objectWithoutProperties(_getDataFromOlx, _excluded);
      updateField(_objectSpread({}, newState));
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