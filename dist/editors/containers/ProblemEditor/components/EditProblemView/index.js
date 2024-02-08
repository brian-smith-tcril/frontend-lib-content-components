"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.default = exports.EditProblemView = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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