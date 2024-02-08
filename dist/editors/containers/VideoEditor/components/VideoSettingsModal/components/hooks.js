"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.widgetValues = exports.valueHooks = exports.updatedObject = exports.updatedArray = exports.updateFormField = exports.state = exports.selectorKeys = exports.objectWidget = exports.genericWidget = exports.default = exports.arrayWidget = void 0;
var _react = require("react");
var _reactRedux = require("react-redux");
var _utils = require("../../../../../utils");
var _redux = require("../../../../../data/redux");
var _handlers = require("./handlers");
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const selectorKeys = exports.selectorKeys = (0, _utils.keyStore)(_redux.selectors.video);
const state = exports.state = (0, _utils.StrictDict)([selectorKeys.videoSource, selectorKeys.videoId, selectorKeys.fallbackVideos, selectorKeys.allowVideoDownloads, selectorKeys.allowVideoSharing, selectorKeys.thumbnail, selectorKeys.transcripts, selectorKeys.allowTranscriptDownloads, selectorKeys.showTranscriptByDefault, selectorKeys.duration, selectorKeys.handout, selectorKeys.licenseType, selectorKeys.licenseDetails].reduce((obj, key) => _objectSpread(_objectSpread({}, obj), {}, {
  [key]: val => (0, _react.useState)(val)
}), {}));

/**
 * updateArray(array, index, val)
 * Returns a new array with the element at <index> replaced with <val>
 * @param {any[]} array - array of values
 * @param {number} index - array index to replace
 * @param {any} val - new value
 * @return {any[]} - new array with element at index replaced with val
 */
const updatedArray = (array, index, val) => {
  const newArray = [...array];
  newArray.splice(index, 1, val);
  return newArray;
};

/**
 * updateObject(object, index, val)
 * Returns a new object with the element at <index> replaced with <val>
 * @param {object} object - object of values
 * @param {string} index - object index to replace
 * @param {any} val - new value
 * @return {any[]} - new object with element at index replaced with val
 */
exports.updatedArray = updatedArray;
const updatedObject = (obj, index, val) => _objectSpread(_objectSpread({}, obj), {}, {
  [index]: val
});

/**
 * updateFormField({ dispatch, key })(val)
 * Creates a callback to update a given form field based on an incoming value.
 * @param {func} dispatch - redux dispatch method
 * @param {string} key - form key
 * @return {func} - callback taking a value and updating the video redux field
 */
// eslint-disable-next-line react-hooks/rules-of-hooks
exports.updatedObject = updatedObject;
const updateFormField = _ref => {
  let {
    dispatch,
    key
  } = _ref;
  return (0, _react.useCallback)(val => dispatch(_redux.actions.video.updateField({
    [key]: val
  })), []);
};

/**
 * valueHooks({ dispatch, key })
 * returns local and redux state associated with the given data key, as well as methods
 * to update either or both of those.
 * @param {string} key - redux video state key
 * @param {func} dispatch - redux dispatch method
 * @return {object} - hooks based on the local and redux value associated with the given key
 *   formValue - value state in redux
 *   setFormValue - sets form field in redux
 *   local - value state in hook
 *   setLocal - sets form field in hook
 *   setAll - sets form field in hook AND redux
 */
exports.updateFormField = updateFormField;
const valueHooks = _ref2 => {
  let {
    dispatch,
    key
  } = _ref2;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formValue = (0, _reactRedux.useSelector)(_redux.selectors.video[key]);
  const [local, setLocal] = _module.state[key](formValue);
  const setFormValue = _module.updateFormField({
    dispatch,
    key
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  (0, _react.useEffect)(() => {
    setLocal(formValue);
  }, [formValue]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const setAll = (0, _react.useCallback)(val => {
    setLocal(val);
    setFormValue(val);
  }, [setLocal, setFormValue]);
  return {
    formValue,
    local,
    setLocal,
    setFormValue,
    setAll
  };
};

/**
 * genericWidget({ dispatch, key })
 * Returns the value-tied hooks for inputs associated with a flat value in redux
 * Tied to redux video shape based on data key
 * includes onChange, onBlur, and onCheckedChange methods.  blur and checked change
 * instantly affect both redux and local, while change (while typing) only affects
 * the local component.
 * @param {func} dispatch - redux dispatch method
 * @param {string} key - redux video shape key
 * @return {object} - state hooks
 *   formValue - value state in redux
 *   setFormValue - sets form field in redux
 *   local - value state in hook
 *   setLocal - sets form field in hook
 *   setAll - sets form field in hook AND redux
 *   onChange - handle input change by updating local state
 *   onCheckedChange - handle checked change by updating local and redux state
 *   onBlur - handle input blur by updating local and redux states
 */
exports.valueHooks = valueHooks;
const genericWidget = _ref3 => {
  let {
    dispatch,
    key
  } = _ref3;
  const {
    formValue,
    local,
    setLocal,
    setFormValue,
    setAll
  } = _module.valueHooks({
    dispatch,
    key
  });
  return {
    formValue,
    local,
    setLocal,
    setAll,
    setFormValue,
    onChange: (0, _handlers.onValue)(setLocal),
    onCheckedChange: (0, _handlers.onChecked)(setAll),
    onBlur: (0, _handlers.onValue)(setAll)
  };
};

/**
 * arrayWidget({ dispatch, key })
 * Returns the value-tied hooks for inputs associated with a value in an array in the
 * video redux shape.
 * Tied to redux video shape based on data key
 * includes onChange, onBlur, and onClear methods.  blur changes local and redux state,
 * on change affects only local state, and onClear sets both to an empty string.
 * The creators from this widget will require an index to provide the final event-handler.
 * @param {func} dispatch - redux dispatch method
 * @param {string} key - redux video shape key
 * @return {object} - state hooks
 *   formValue - value state in redux
 *   setFormValue - sets form field in redux
 *   local - value state in hook
 *   setLocal - sets form field in hook
 *   setAll - sets form field in hook AND redux
 *   onChange(index) - handle input change by updating local state
 *   onBlur(index) - handle input blur by updating local and redux states
 *   onClear(index) - handle clear event by setting value to empty string
 */
exports.genericWidget = genericWidget;
const arrayWidget = _ref4 => {
  let {
    dispatch,
    key
  } = _ref4;
  const widget = _module.valueHooks({
    dispatch,
    key
  });
  return _objectSpread(_objectSpread({}, widget), {}, {
    onBlur: (0, _handlers.handleIndexTransformEvent)({
      handler: _handlers.onValue,
      setter: widget.setAll,
      transform: _module.updatedArray,
      local: widget.local
    }),
    onChange: (0, _handlers.handleIndexTransformEvent)({
      handler: _handlers.onValue,
      setter: widget.setLocal,
      transform: _module.updatedArray,
      local: widget.local
    }),
    onClear: index => () => widget.setAll(_module.updatedArray(widget.local, index, ''))
  });
};

/**
 * objectWidget({ dispatch, key })
 * Returns the value-tied hooks for inputs associated with a value in an object in the
 * video redux shape.
 * Tied to redux video shape based on data key
 * includes onChange and onBlur methods.  blur changes local and redux state,
 * on change affects only local state.
 * The creators from this widget will require an index to provide the final event-handler.
 * @param {func} dispatch - redux dispatch method
 * @param {string} key - redux video shape key
 * @return {object} - state hooks
 *   formValue - value state in redux
 *   setFormValue - sets form field in redux
 *   local - value state in hook
 *   setLocal - sets form field in hook
 *   setAll - sets form field in hook AND redux
 *   onChange(index) - handle input change by updating local state
 *   onBlur(index) - handle input blur by updating local and redux states
 *   onClear(index) - handle clear event by setting value to empty string
 */
exports.arrayWidget = arrayWidget;
const objectWidget = _ref5 => {
  let {
    dispatch,
    key
  } = _ref5;
  const widget = _module.valueHooks({
    dispatch,
    key
  });
  return _objectSpread(_objectSpread({}, widget), {}, {
    onChange: (0, _handlers.handleIndexTransformEvent)({
      handler: _handlers.onValue,
      setter: widget.setLocal,
      transform: _module.updatedObject,
      local: widget.local
    }),
    onBlur: (0, _handlers.handleIndexTransformEvent)({
      handler: _handlers.onValue,
      setter: widget.setAll,
      transform: _module.updatedObject,
      local: widget.local
    })
  });
};

/**
 * widgetValues({ fields, dispatch })
 * widget value populator, that takes a fields mapping (dataKey: widgetFn) and dispatch
 * method, and returns object of widget values.
 * @param {object} fields - object with video data keys for keys and widget methods for values
 * @param {func} dispatch - redux dispatch method
 * @return {object} - { <key>: <widgetFn({ key, dispatch })> }
 */
exports.objectWidget = objectWidget;
const widgetValues = _ref6 => {
  let {
    fields,
    dispatch
  } = _ref6;
  return Object.keys(fields).reduce((obj, key) => _objectSpread(_objectSpread({}, obj), {}, {
    [key]: fields[key]({
      key,
      dispatch
    })
  }), {});
};
exports.widgetValues = widgetValues;
var _default = exports.default = {
  arrayWidget,
  genericWidget,
  objectWidget,
  selectorKeys,
  widgetValues
};
//# sourceMappingURL=hooks.js.map