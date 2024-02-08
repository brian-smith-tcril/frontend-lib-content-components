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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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