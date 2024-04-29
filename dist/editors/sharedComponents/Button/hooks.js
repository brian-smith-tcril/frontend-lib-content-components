"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isVariantAdd = exports.getButtonProps = void 0;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* eslint-disable import/prefer-default-export */
const isVariantAdd = variant => variant === 'add';
exports.isVariantAdd = isVariantAdd;
const getButtonProps = _ref => {
  let {
    variant,
    className,
    Add
  } = _ref;
  const variantClasses = {
    default: 'shared-button',
    add: 'shared-button pl-0 text-primary-500 button-variant-add'
  };
  const variantMap = {
    add: 'tertiary'
  };
  const classes = [variantClasses[variant]];
  if (className) {
    classes.push(className);
  }
  const iconProps = {};
  if (isVariantAdd(variant)) {
    iconProps.iconBefore = Add;
  }
  return _objectSpread({
    className: classes.join(' '),
    variant: variantMap[variant] || variant
  }, iconProps);
};
exports.getButtonProps = getButtonProps;
//# sourceMappingURL=hooks.js.map