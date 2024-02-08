"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchToAdvancedEditor = exports.loadProblem = exports.isBlankProblem = exports.initializeProblem = exports.getDataFromOlx = exports.fetchAdvancedSettings = exports.default = void 0;
var _lodashEs = _interopRequireDefault(require("lodash-es"));
var _2 = require("..");
var requests = _interopRequireWildcard(require("./requests"));
var _OLXParser = require("../../../containers/ProblemEditor/data/OLXParser");
var _SettingsParser = require("../../../containers/ProblemEditor/data/SettingsParser");
var _problem = require("../../constants/problem");
var _ReactStateOLXParser = _interopRequireDefault(require("../../../containers/ProblemEditor/data/ReactStateOLXParser"));
var _olxTestData = require("../../../containers/ProblemEditor/data/mockData/olxTestData");
var _utils = require("../../../utils");
var _hooks = require("../../../containers/ProblemEditor/components/EditProblemView/hooks");
const _excluded = ["settings"];
/* eslint-disable import/no-cycle */
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const switchToAdvancedEditor = () => (dispatch, getState) => {
  const state = getState();
  const editorObject = (0, _hooks.fetchEditorContent)({
    format: ''
  });
  const reactOLXParser = new _ReactStateOLXParser.default({
    problem: state.problem,
    editorObject
  });
  const rawOLX = reactOLXParser.buildOLX();
  dispatch(_2.actions.problem.updateField({
    problemType: _problem.ProblemTypeKeys.ADVANCED,
    rawOLX
  }));
};
exports.switchToAdvancedEditor = switchToAdvancedEditor;
const isBlankProblem = _ref => {
  let {
    rawOLX
  } = _ref;
  if (rawOLX.replace(/\s/g, '') === _olxTestData.blankProblemOLX.rawOLX) {
    return true;
  }
  return false;
};
exports.isBlankProblem = isBlankProblem;
const getDataFromOlx = _ref2 => {
  let {
    rawOLX,
    rawSettings,
    defaultSettings
  } = _ref2;
  let olxParser;
  let parsedProblem;
  try {
    olxParser = new _OLXParser.OLXParser(rawOLX);
    parsedProblem = olxParser.getParsedOLXData();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('The Problem Could Not Be Parsed from OLX. redirecting to Advanced editor.', error);
    return {
      problemType: _problem.ProblemTypeKeys.ADVANCED,
      rawOLX,
      settings: (0, _SettingsParser.parseSettings)(rawSettings, defaultSettings)
    };
  }
  if (parsedProblem?.problemType === _problem.ProblemTypeKeys.ADVANCED) {
    return {
      problemType: _problem.ProblemTypeKeys.ADVANCED,
      rawOLX,
      settings: (0, _SettingsParser.parseSettings)(rawSettings, defaultSettings)
    };
  }
  const {
      settings
    } = parsedProblem,
    data = _objectWithoutProperties(parsedProblem, _excluded);
  const parsedSettings = _objectSpread(_objectSpread({}, settings), (0, _SettingsParser.parseSettings)(rawSettings, defaultSettings));
  if (!_lodashEs.default.isEmpty(rawOLX) && !_lodashEs.default.isEmpty(data)) {
    return _objectSpread(_objectSpread({}, data), {}, {
      rawOLX,
      settings: parsedSettings
    });
  }
  return {
    settings: parsedSettings
  };
};
exports.getDataFromOlx = getDataFromOlx;
const loadProblem = _ref3 => {
  let {
    rawOLX,
    rawSettings,
    defaultSettings
  } = _ref3;
  return dispatch => {
    if (isBlankProblem({
      rawOLX
    })) {
      dispatch(_2.actions.problem.setEnableTypeSelection((0, _utils.camelizeKeys)(defaultSettings)));
    } else {
      dispatch(_2.actions.problem.load(getDataFromOlx({
        rawOLX,
        rawSettings,
        defaultSettings
      })));
    }
  };
};
exports.loadProblem = loadProblem;
const fetchAdvancedSettings = _ref4 => {
  let {
    rawOLX,
    rawSettings
  } = _ref4;
  return dispatch => {
    const advancedProblemSettingKeys = ['max_attempts', 'showanswer', 'show_reset_button', 'rerandomize'];
    dispatch(requests.fetchAdvancedSettings({
      onSuccess: response => {
        const defaultSettings = {};
        Object.entries(response.data).forEach(_ref5 => {
          let [key, value] = _ref5;
          if (advancedProblemSettingKeys.includes(key)) {
            defaultSettings[key] = value.value;
          }
        });
        dispatch(_2.actions.problem.updateField({
          defaultSettings: (0, _utils.camelizeKeys)(defaultSettings)
        }));
        loadProblem({
          rawOLX,
          rawSettings,
          defaultSettings
        })(dispatch);
      },
      onFailure: () => {
        loadProblem({
          rawOLX,
          rawSettings,
          defaultSettings: {}
        })(dispatch);
      }
    }));
  };
};
exports.fetchAdvancedSettings = fetchAdvancedSettings;
const initializeProblem = blockValue => dispatch => {
  const rawOLX = _lodashEs.default.get(blockValue, 'data.data', {});
  const rawSettings = _lodashEs.default.get(blockValue, 'data.metadata', {});
  dispatch(fetchAdvancedSettings({
    rawOLX,
    rawSettings
  }));
};
exports.initializeProblem = initializeProblem;
var _default = exports.default = {
  initializeProblem,
  switchToAdvancedEditor,
  fetchAdvancedSettings
};
//# sourceMappingURL=problem.js.map