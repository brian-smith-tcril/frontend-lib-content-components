"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTrackSocialSharingChange = exports.default = void 0;
var _reactRedux = require("react-redux");
var _analytics = require("@edx/frontend-platform/analytics");
var _redux = require("../../../../../../data/redux");
var _constants = _interopRequireDefault(require("./constants"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const useTrackSocialSharingChange = _ref => {
  let {
    updateField
  } = _ref;
  const analytics = (0, _reactRedux.useSelector)(_redux.selectors.app.analytics);
  const allowVideoSharing = (0, _reactRedux.useSelector)(_redux.selectors.video.allowVideoSharing);
  return event => {
    (0, _analytics.sendTrackEvent)(_constants.default.socialSharingSettingChanged, _objectSpread(_objectSpread({}, analytics), {}, {
      value: event.target.checked
    }));
    updateField({
      allowVideoSharing: _objectSpread(_objectSpread({}, allowVideoSharing), {}, {
        value: event.target.checked
      })
    });
  };
};
exports.useTrackSocialSharingChange = useTrackSocialSharingChange;
var _default = exports.default = useTrackSocialSharingChange;
//# sourceMappingURL=hooks.js.map