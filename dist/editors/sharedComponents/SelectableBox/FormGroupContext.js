"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFormGroupContext = exports.FormGroupContextProvider = exports.FormGroupContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _newId = _interopRequireDefault(require("./newId"));
var _fieldUtils = require("./fieldUtils");
var _constants = require("./constants");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const identityFn = props => props;
const noop = () => {};
const FormGroupContext = exports.FormGroupContext = /*#__PURE__*/_react.default.createContext({
  getControlProps: identityFn,
  useSetIsControlGroupEffect: noop,
  getLabelProps: identityFn,
  getDescriptorProps: identityFn,
  hasFormGroupProvider: false
});
const useFormGroupContext = () => _react.default.useContext(FormGroupContext);
exports.useFormGroupContext = useFormGroupContext;
const useStateEffect = initialState => {
  const [state, setState] = (0, _react.useState)(initialState);
  const useSetStateEffect = newState => {
    (0, _react.useEffect)(() => setState(newState), [newState]);
  };
  return [state, useSetStateEffect];
};
const FormGroupContextProvider = _ref => {
  let {
    children,
    controlId: explicitControlId,
    isInvalid,
    isValid,
    size
  } = _ref;
  const controlId = (0, _react.useMemo)(() => explicitControlId || (0, _newId.default)('form-field'), [explicitControlId]);
  const [describedByIds, registerDescriptorId] = (0, _fieldUtils.useIdList)(controlId);
  const [labelledByIds, registerLabelerId] = (0, _fieldUtils.useIdList)(controlId);
  const [isControlGroup, useSetIsControlGroupEffect] = useStateEffect(false);
  const getControlProps = (0, _react.useCallback)(controlProps => {
    // labelledByIds from the list above should only be added to a control
    // if it the control is a group. We prefer adding a condition here because:
    //    - Hooks cannot be called inside conditionals
    //    - The getLabelProps function below is forced to generate an id
    //      whether it is needed or not.
    //    - This is what allows consumers of Paragon to use <Form.Label>
    //      interchangeably between ControlGroup type controls and regular Controls
    const labelledByIdsForControl = isControlGroup ? labelledByIds : undefined;
    return (0, _fieldUtils.omitUndefinedProperties)(_objectSpread(_objectSpread({}, controlProps), {}, {
      'aria-describedby': (0, _classnames.default)(controlProps['aria-describedby'], describedByIds) || undefined,
      'aria-labelledby': (0, _classnames.default)(controlProps['aria-labelledby'], labelledByIdsForControl) || undefined,
      id: controlId
    }));
  }, [isControlGroup, describedByIds, labelledByIds, controlId]);
  const getLabelProps = labelProps => {
    const id = registerLabelerId(labelProps?.id);
    if (isControlGroup) {
      return _objectSpread(_objectSpread({}, labelProps), {}, {
        id
      });
    }
    return _objectSpread(_objectSpread({}, labelProps), {}, {
      htmlFor: controlId
    });
  };
  const getDescriptorProps = descriptorProps => {
    const id = registerDescriptorId(descriptorProps?.id);
    return _objectSpread(_objectSpread({}, descriptorProps), {}, {
      id
    });
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = {
    getControlProps,
    getLabelProps,
    getDescriptorProps,
    useSetIsControlGroupEffect,
    isControlGroup,
    controlId,
    isInvalid,
    isValid,
    size,
    hasFormGroupProvider: true
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(FormGroupContext.Provider, {
    value: contextValue,
    children: children
  });
};
exports.FormGroupContextProvider = FormGroupContextProvider;
FormGroupContextProvider.propTypes = {
  children: _propTypes.default.node.isRequired,
  controlId: _propTypes.default.string,
  isInvalid: _propTypes.default.bool,
  isValid: _propTypes.default.bool,
  size: _propTypes.default.oneOf([_constants.FORM_CONTROL_SIZES.SMALL, _constants.FORM_CONTROL_SIZES.LARGE])
};
FormGroupContextProvider.defaultProps = {
  controlId: undefined,
  isInvalid: undefined,
  isValid: undefined,
  size: undefined
};
//# sourceMappingURL=FormGroupContext.js.map