"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = exports.default = exports.SocialShareWidget = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _redux = require("../../../../../../data/redux");
var _CollapsibleFormWidget = _interopRequireDefault(require("../CollapsibleFormWidget"));
var _messages = _interopRequireDefault(require("./messages"));
var hooks = _interopRequireWildcard(require("./hooks"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
 * Collapsible Form widget controlling video thumbnail
 */
const SocialShareWidget = _ref => {
  let {
    // injected
    intl,
    // redux
    allowVideoSharing,
    isLibrary,
    videoSharingEnabledForAll,
    videoSharingEnabledForCourse,
    videoSharingLearnMoreLink,
    updateField
  } = _ref;
  const isSetByCourse = allowVideoSharing.level === 'course';
  const videoSharingEnabled = isLibrary ? videoSharingEnabledForAll : videoSharingEnabledForCourse;
  const learnMoreLink = videoSharingLearnMoreLink || 'http://edx.readthedocs.io/projects/open-edx-building-and-running-a-course/en/latest/developing_course/social_sharing.html';
  const onSocialSharingCheckboxChange = hooks.useTrackSocialSharingChange({
    updateField
  });
  const getSubtitle = () => {
    if (allowVideoSharing.value) {
      return intl.formatMessage(_messages.default.enabledSubtitle);
    }
    return intl.formatMessage(_messages.default.disabledSubtitle);
  };
  return videoSharingEnabled ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_CollapsibleFormWidget.default, {
    fontSize: "x-small",
    title: intl.formatMessage(_messages.default.title),
    subtitle: getSubtitle(),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.socialSharingDescription))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Checkbox, {
      className: "mt-3",
      checked: allowVideoSharing.value,
      disabled: isSetByCourse,
      onChange: onSocialSharingCheckboxChange,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "small text-gray-700",
        children: intl.formatMessage(_messages.default.socialSharingCheckboxLabel)
      })
    }), isSetByCourse && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "mt-2",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.overrideSocialSharingNote))
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.disclaimerSettingLocation))
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "mt-3",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Hyperlink, {
        className: "text-primary-500",
        destination: learnMoreLink,
        target: "_blank",
        children: intl.formatMessage(_messages.default.learnMoreLinkLabel)
      })
    })]
  }) : null;
};
exports.SocialShareWidget = SocialShareWidget;
SocialShareWidget.defaultProps = {
  allowVideoSharing: {
    level: 'block',
    value: false
  },
  videoSharingEnabledForCourse: false,
  videoSharingEnabledForAll: false
};
SocialShareWidget.propTypes = {
  // injected
  intl: _i18n.intlShape.isRequired,
  // redux
  allowVideoSharing: _propTypes.default.shape({
    level: _propTypes.default.string.isRequired,
    value: _propTypes.default.bool.isRequired
  }),
  isLibrary: _propTypes.default.bool.isRequired,
  videoSharingEnabledForAll: _propTypes.default.bool,
  videoSharingEnabledForCourse: _propTypes.default.bool,
  videoSharingLearnMoreLink: _propTypes.default.string.isRequired,
  updateField: _propTypes.default.func.isRequired
};
const mapStateToProps = state => ({
  allowVideoSharing: _redux.selectors.video.allowVideoSharing(state),
  isLibrary: _redux.selectors.app.isLibrary(state),
  videoSharingLearnMoreLink: _redux.selectors.video.videoSharingLearnMoreLink(state),
  videoSharingEnabledForAll: _redux.selectors.video.videoSharingEnabledForAll(state),
  videoSharingEnabledForCourse: _redux.selectors.video.videoSharingEnabledForCourse(state)
});
exports.mapStateToProps = mapStateToProps;
const mapDispatchToProps = dispatch => ({
  updateField: stateUpdate => dispatch(_redux.actions.video.updateField(stateUpdate))
});
exports.mapDispatchToProps = mapDispatchToProps;
var _default = exports.default = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SocialShareWidget));
//# sourceMappingURL=index.js.map