"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.default = exports.EditProblemView = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _AnswerWidget = _interopRequireDefault(require("./AnswerWidget"));
var _SettingsWidget = _interopRequireDefault(require("./SettingsWidget"));
var _QuestionWidget = _interopRequireDefault(require("./QuestionWidget"));
var _EditorContainer = _interopRequireDefault(require("../../../EditorContainer"));
var _redux = require("../../../../data/redux");
var _RawEditor = _interopRequireDefault(require("../../../../sharedComponents/RawEditor"));
var _problem = require("../../../../data/constants/problem");
var _hooks = require("./hooks");
require("./index.scss");
var _messages = _interopRequireDefault(require("./messages"));
var _ExplanationWidget = _interopRequireDefault(require("./ExplanationWidget"));
var _hooks2 = require("../../../../hooks");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const EditProblemView = _ref => {
  let {
    returnFunction,
    // redux
    problemType,
    problemState,
    assets,
    lmsEndpointUrl,
    returnUrl,
    analytics,
    // injected
    intl
  } = _ref;
  const dispatch = (0, _reactRedux.useDispatch)();
  const editorRef = (0, _react.useRef)(null);
  const isAdvancedProblemType = problemType === _problem.ProblemTypeKeys.ADVANCED;
  const {
    isSaveWarningModalOpen,
    openSaveWarningModal,
    closeSaveWarningModal
  } = (0, _hooks.saveWarningModalToggle)();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_EditorContainer.default, {
    getContent: () => (0, _hooks.getContent)({
      problemState,
      openSaveWarningModal,
      isAdvancedProblemType,
      editorRef,
      assets,
      lmsEndpointUrl
    }),
    returnFunction: returnFunction,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.AlertModal, {
      title: isAdvancedProblemType ? intl.formatMessage(_messages.default.olxSettingDiscrepancyTitle) : intl.formatMessage(_messages.default.noAnswerTitle),
      isOpen: isSaveWarningModalOpen,
      onClose: closeSaveWarningModal,
      footerNode: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
          variant: "tertiary",
          onClick: closeSaveWarningModal,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.saveWarningModalCancelButtonLabel))
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
          onClick: () => (0, _hooks2.saveBlock)({
            content: (0, _hooks.parseState)({
              problem: problemState,
              isAdvanced: isAdvancedProblemType,
              ref: editorRef,
              assets,
              lmsEndpointUrl
            })(),
            returnFunction,
            destination: returnUrl,
            dispatch,
            analytics
          }),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.saveWarningModalSaveButtonLabel))
        })]
      }),
      children: isAdvancedProblemType ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.olxSettingDiscrepancyBodyExplanation)) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.saveWarningModalBodyQuestion))
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.noAnswerBodyExplanation))
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "editProblemView d-flex flex-row flex-nowrap justify-content-end",
      children: [isAdvancedProblemType ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Container, {
        fluid: true,
        className: "advancedEditorTopMargin p-0",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RawEditor.default, {
          editorRef: editorRef,
          lang: "xml",
          content: problemState.rawOLX
        })
      }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        className: "flex-grow-1 mb-5",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_QuestionWidget.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExplanationWidget.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_AnswerWidget.default, {
          problemType: problemType
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "editProblemView-settingsColumn",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SettingsWidget.default, {
          problemType: problemType
        })
      })]
    })]
  });
};
exports.EditProblemView = EditProblemView;
EditProblemView.defaultProps = {
  assets: null,
  lmsEndpointUrl: null,
  returnFunction: null
};
EditProblemView.propTypes = {
  problemType: _propTypes.default.string.isRequired,
  returnFunction: _propTypes.default.func,
  // eslint-disable-next-line
  problemState: _propTypes.default.any.isRequired,
  assets: _propTypes.default.shape({}),
  analytics: _propTypes.default.shape({}).isRequired,
  lmsEndpointUrl: _propTypes.default.string,
  returnUrl: _propTypes.default.string.isRequired,
  // injected
  intl: _i18n.intlShape.isRequired
};
const mapStateToProps = state => ({
  assets: _redux.selectors.app.assets(state),
  analytics: _redux.selectors.app.analytics(state),
  lmsEndpointUrl: _redux.selectors.app.lmsEndpointUrl(state),
  returnUrl: _redux.selectors.app.returnUrl(state),
  problemType: _redux.selectors.problem.problemType(state),
  problemState: _redux.selectors.problem.completeState(state)
});
exports.mapStateToProps = mapStateToProps;
var _default = exports.default = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps)(EditProblemView));
//# sourceMappingURL=index.js.map