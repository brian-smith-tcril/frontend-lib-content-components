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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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