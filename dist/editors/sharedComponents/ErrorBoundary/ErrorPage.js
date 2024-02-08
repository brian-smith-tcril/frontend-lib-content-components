"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.default = exports.ErrorPage = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _messages = _interopRequireDefault(require("./messages"));
var _hooks = require("../../hooks");
var _redux = require("../../data/redux");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * An error page that displays a generic message for unexpected errors.  Also contains a "Try
 * Again" button to refresh the page.
 */
const ErrorPage = _ref => {
  let {
    message,
    studioEndpointUrl,
    learningContextId,
    // redux
    unitData,
    // injected
    intl
  } = _ref;
  const outlineType = learningContextId?.startsWith('library-v1') ? 'library' : 'course';
  const outlineUrl = `${studioEndpointUrl}/${outlineType}/${learningContextId}`;
  const unitUrl = unitData?.data ? `${studioEndpointUrl}/container/${unitData?.data.ancestors[0].id}` : null;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Container, {
    fluid: true,
    className: "py-5 justify-content-center align-items-start text-center",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Row, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Col, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-muted",
          children: intl.formatMessage(_messages.default.unexpectedError)
        }), message && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          role: "alert",
          className: "my-4",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: message
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Row, {
          className: "justify-content-center",
          children: [learningContextId && (unitUrl && outlineType !== 'library' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
            className: "mr-2",
            variant: "outline-primary",
            onClick: () => (0, _hooks.navigateTo)(unitUrl),
            children: intl.formatMessage(_messages.default.returnToUnitPageLabel)
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
            className: "mr-2",
            variant: "outline-primary",
            onClick: () => (0, _hooks.navigateTo)(outlineUrl),
            children: intl.formatMessage(_messages.default.returnToOutlineLabel, {
              outlineType
            })
          })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
            className: "ml-2",
            onClick: () => global.location.reload(),
            children: intl.formatMessage(_messages.default.unexpectedErrorButtonLabel)
          })]
        })]
      })
    })
  });
};
exports.ErrorPage = ErrorPage;
ErrorPage.propTypes = {
  message: _propTypes.default.string,
  learningContextId: _propTypes.default.string.isRequired,
  studioEndpointUrl: _propTypes.default.string.isRequired,
  // redux
  unitData: _propTypes.default.shape({
    data: _propTypes.default.shape({
      ancestors: _propTypes.default.arrayOf(_propTypes.default.shape({
        id: _propTypes.default.string
      }))
    })
  }),
  // injected
  intl: _i18n.intlShape.isRequired
};
ErrorPage.defaultProps = {
  message: null,
  unitData: null
};
const mapStateToProps = state => ({
  unitData: _redux.selectors.app.unitUrl(state)
});
exports.mapStateToProps = mapStateToProps;
var _default = exports.default = (0, _i18n.injectIntl)((0, _reactRedux.connect)(mapStateToProps)(ErrorPage));
//# sourceMappingURL=ErrorPage.js.map