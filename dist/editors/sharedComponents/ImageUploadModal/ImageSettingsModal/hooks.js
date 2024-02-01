"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = exports.reduceDimensions = exports.onSaveClick = exports.onInputChange = exports.onCheckboxChange = exports.getValidDimensions = exports.findGcd = exports.dimensionLockHooks = exports.dimensionHooks = exports.dimKeys = exports.default = exports.checkFormValidation = exports.altTextHooks = void 0;
var _react = _interopRequireDefault(require("react"));
var _utils = require("../../../utils");
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Simple wrappers for useState to allow easy mocking for tests.
const state = exports.state = {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  altText: val => _react.default.useState(val),
  // eslint-disable-next-line react-hooks/rules-of-hooks
  dimensions: val => _react.default.useState(val),
  // eslint-disable-next-line react-hooks/rules-of-hooks
  showAltTextDismissibleError: val => _react.default.useState(val),
  // eslint-disable-next-line react-hooks/rules-of-hooks
  showAltTextSubmissionError: val => _react.default.useState(val),
  // eslint-disable-next-line react-hooks/rules-of-hooks
  isDecorative: val => _react.default.useState(val),
  // eslint-disable-next-line react-hooks/rules-of-hooks
  isLocked: val => _react.default.useState(val),
  // eslint-disable-next-line react-hooks/rules-of-hooks
  local: val => _react.default.useState(val),
  // eslint-disable-next-line react-hooks/rules-of-hooks
  lockAspectRatio: val => _react.default.useState(val)
};
const dimKeys = exports.dimKeys = (0, _utils.StrictDict)({
  height: 'height',
  width: 'width'
});

/**
 * findGcd(numerator, denominator)
 * Find the greatest common denominator of a ratio or fraction, which may be 1.
 * @param {number} numerator - ratio numerator
 * @param {number} denominator - ratio denominator
 * @return {number} - ratio greatest common denominator
 */
const findGcd = (a, b) => {
  const gcd = b ? findGcd(b, a % b) : a;
  if (gcd === 1 || [a, b].some(v => !Number.isInteger(v / gcd))) {
    return 1;
  }
  return gcd;
};
exports.findGcd = findGcd;
const checkEqual = (d1, d2) => d1.height === d2.height && d1.width === d2.width;

/**
 * getValidDimensions({ dimensions, local, locked })
 * Find valid ending dimensions based on start state, request, and lock state
 * @param {obj} dimensions - current stored dimensions
 * @param {obj} local - local (active) dimensions in the inputs
 * @param {obj} locked - locked dimensions
 * @return {obj} - output dimensions after move ({ height, width })
 */
const getValidDimensions = _ref => {
  let {
    dimensions,
    local,
    isLocked,
    lockAspectRatio
  } = _ref;
  // if lock is not active, just return new dimensions.
  // If lock is active, but dimensions have not changed, also just return new dimensions.
  if (!isLocked || checkEqual(local, dimensions)) {
    return local;
  }
  const out = {};

  // changed key is value of local height if that has changed, otherwise width.
  const keys = local.height !== dimensions.height ? {
    changed: dimKeys.height,
    other: dimKeys.width
  } : {
    changed: dimKeys.width,
    other: dimKeys.height
  };
  out[keys.changed] = local[keys.changed];
  out[keys.other] = Math.round(local[keys.changed] * lockAspectRatio[keys.other] / lockAspectRatio[keys.changed]);
  return out;
};

/**
 * reduceDimensions(width, height)
 * reduces both values by dividing by their greates common denominator (which can simply be 1).
 * @return {Array} [width, height]
 */
exports.getValidDimensions = getValidDimensions;
const reduceDimensions = (width, height) => {
  const gcd = _module.findGcd(width, height);
  return [width / gcd, height / gcd];
};

/**
 * dimensionLockHooks({ dimensions })
 * Returns a set of hooks pertaining to the dimension locks.
 * Locks the dimensions initially, on lock initialization.
 * @param {obj} dimensions - current stored dimensions
 * @return {obj} - dimension lock hooks
 *   {func} initializeLock - enable the lock mechanism
 *   {bool} isLocked - are dimensions locked?
 *   {obj} lockAspectRatio - image dimensions ({ height, width })
 *   {func} lock - lock the dimensions
 *   {func} unlock - unlock the dimensions
 */
exports.reduceDimensions = reduceDimensions;
const dimensionLockHooks = () => {
  const [lockAspectRatio, setLockAspectRatio] = _module.state.lockAspectRatio(null);
  const [isLocked, setIsLocked] = _module.state.isLocked(true);
  const initializeLock = _ref2 => {
    let {
      width,
      height
    } = _ref2;
    // width and height are treated as a fraction and reduced.
    const [w, h] = reduceDimensions(width, height);
    setLockAspectRatio({
      width: w,
      height: h
    });
  };
  return {
    initializeLock,
    isLocked,
    lock: () => setIsLocked(true),
    lockAspectRatio,
    unlock: () => setIsLocked(false)
  };
};

/**
 * dimensionHooks()
 * Returns an object of dimension-focused react hooks.
 * @return {obj} - dimension hooks
 *   {func} onImgLoad - initializes image dimension fields
 *     @param {object} selection - selected image object with possible override dimensions.
 *     @return {callback} - image load event callback that loads dimensions.
 *   {object} locked - current locked state
 *   {func} lock - lock current dimensions
 *   {func} unlock - unlock dimensions
 *   {object} value - current dimension values
 *   {func} setHeight - set height
 *     @param {string} - new height string
 *   {func} setWidth - set width
 *     @param {string} - new width string
 *   {func} updateDimensions - set dimensions based on state
 *   {obj} errorProps - props for user feedback error
 *     {bool} isError - true if dimensions are blank
 *     {func} setError - sets isError to true
 *     {func} dismissError - sets isError to false
 *     {bool} isHeightValid - true if height field is ready to save
 *     {func} setHeightValid - sets isHeightValid to true
 *     {func} setHeightNotValid - sets isHeightValid to false
 *     {bool} isWidthValid - true if width field is ready to save
 *     {func} setWidthValid - sets isWidthValid to true
 *     {func} setWidthNotValid - sets isWidthValid to false
 */
exports.dimensionLockHooks = dimensionLockHooks;
const dimensionHooks = altTextHook => {
  const [dimensions, setDimensions] = _module.state.dimensions(null);
  const [local, setLocal] = _module.state.local(null);
  const setAll = _ref3 => {
    let {
      height,
      width,
      altText
    } = _ref3;
    if (altText === '' || altText) {
      if (altText === '') {
        altTextHook.setIsDecorative(true);
      }
      altTextHook.setValue(altText);
    }
    setDimensions({
      height,
      width
    });
    setLocal({
      height,
      width
    });
  };
  const setHeight = height => {
    if (height.match(/[0-9]+[%]{1}/)) {
      const heightPercent = height.match(/[0-9]+[%]{1}/)[0];
      setLocal(_objectSpread(_objectSpread({}, local), {}, {
        height: heightPercent
      }));
    } else if (height.match(/[0-9]/)) {
      setLocal(_objectSpread(_objectSpread({}, local), {}, {
        height: parseInt(height, 10)
      }));
    }
  };
  const setWidth = width => {
    if (width.match(/[0-9]+[%]{1}/)) {
      const widthPercent = width.match(/[0-9]+[%]{1}/)[0];
      setLocal(_objectSpread(_objectSpread({}, local), {}, {
        width: widthPercent
      }));
    } else if (width.match(/[0-9]/)) {
      setLocal(_objectSpread(_objectSpread({}, local), {}, {
        width: parseInt(width, 10)
      }));
    }
  };
  const {
    initializeLock,
    isLocked,
    lock,
    lockAspectRatio,
    unlock
  } = _module.dimensionLockHooks({
    dimensions
  });
  return {
    onImgLoad: selection => _ref4 => {
      let {
        target: img
      } = _ref4;
      const imageDims = {
        height: img.naturalHeight,
        width: img.naturalWidth
      };
      setAll(selection.height ? selection : imageDims);
      initializeLock(selection.height ? selection : imageDims);
    },
    isLocked,
    lock,
    unlock,
    value: local,
    setHeight,
    setWidth,
    updateDimensions: () => setAll(_module.getValidDimensions({
      dimensions,
      local,
      isLocked,
      lockAspectRatio
    }))
  };
};

/**
 * altTextHooks(savedText)
 * Returns a set of react hooks focused around alt text
 * @return {obj} - alt text hooks
 *   {string} value - alt text value
 *   {func} setValue - set alt test value
 *     @param {string} - new alt text
 *   {bool} isDecorative - is the image decorative?
 *   {func} setIsDecorative - set isDecorative field
 *   {obj} error - error at top of page
 *     {bool} show - is error being displayed?
 *     {func} set - set show to true
 *     {func} dismiss - set show to false
 *   {obj} validation - local alt text error
 *     {bool} show - is validation error being displayed?
 *     {func} set - set validation to true
 *     {func} dismiss - set validation to false
 */
exports.dimensionHooks = dimensionHooks;
const altTextHooks = savedText => {
  const [value, setValue] = _module.state.altText(savedText || '');
  const [isDecorative, setIsDecorative] = _module.state.isDecorative(false);
  const [showAltTextDismissibleError, setShowAltTextDismissibleError] = _module.state.showAltTextDismissibleError(false);
  const [showAltTextSubmissionError, setShowAltTextSubmissionError] = _module.state.showAltTextSubmissionError(false);
  const validateAltText = (newVal, newDecorative) => {
    if (showAltTextSubmissionError) {
      if (newVal || newDecorative) {
        setShowAltTextSubmissionError(false);
      }
    }
  };
  return {
    value,
    setValue: val => {
      setValue(val);
      validateAltText(val, null);
    },
    isDecorative,
    setIsDecorative: decorative => {
      setIsDecorative(decorative);
      validateAltText(null, decorative);
    },
    error: {
      show: showAltTextDismissibleError,
      set: () => setShowAltTextDismissibleError(true),
      dismiss: () => setShowAltTextDismissibleError(false)
    },
    validation: {
      show: showAltTextSubmissionError,
      set: () => setShowAltTextSubmissionError(true),
      dismiss: () => setShowAltTextSubmissionError(false)
    }
  };
};

/**
 * onInputChange(handleValue)
 * Simple event handler forwarding the event target value to a given callback
 * @param {func} handleValue - event value handler
 * @return {func} - evt callback that will call handleValue with the event target value.
 */
exports.altTextHooks = altTextHooks;
const onInputChange = handleValue => e => handleValue(e.target.value);

/**
 * onCheckboxChange(handleValue)
 * Simple event handler forwarding the event target checked prop to a given callback
 * @param {func} handleValue - event value handler
 * @return {func} - evt callback that will call handleValue with the event target checked prop.
 */
exports.onInputChange = onInputChange;
const onCheckboxChange = handleValue => e => handleValue(e.target.checked);

/**
 * checkFormValidation({ altText, isDecorative, onAltTextFail })
 * Handle saving the image context to the text editor
 * @param {string} altText - image alt text
 * @param {bool} isDecorative - is the image decorative?
 * @param {func} onAltTextFail - called if alt text validation fails
 */
exports.onCheckboxChange = onCheckboxChange;
const checkFormValidation = _ref5 => {
  let {
    altText,
    isDecorative,
    onAltTextFail
  } = _ref5;
  if (!isDecorative && altText === '') {
    onAltTextFail();
    return false;
  }
  return true;
};

/**
 * onSave({ altText, dimensions, isDecorative, saveToEditor })
 * Handle saving the image context to the text editor
 * @param {string} altText - image alt text
 * @param {object} dimensions - image dimensions ({ width, height })
 * @param {bool} isDecorative - is the image decorative?
 * @param {func} saveToEditor - save method for submitting image settings.
 */
exports.checkFormValidation = checkFormValidation;
const onSaveClick = _ref6 => {
  let {
    altText,
    dimensions,
    isDecorative,
    saveToEditor
  } = _ref6;
  return () => {
    if (_module.checkFormValidation({
      altText: altText.value,
      isDecorative,
      onAltTextFail: () => {
        altText.error.set();
        altText.validation.set();
      }
    })) {
      altText.error.dismiss();
      altText.validation.dismiss();
      saveToEditor({
        altText: altText.value,
        dimensions,
        isDecorative
      });
    }
  };
};
exports.onSaveClick = onSaveClick;
var _default = exports.default = {
  altText: altTextHooks,
  dimensions: dimensionHooks,
  onCheckboxChange,
  onInputChange,
  onSaveClick,
  checkFormValidation
};
//# sourceMappingURL=hooks.js.map