"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CollapsibleFormWidget = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Simple Wrapper for a Form Widget component in the Video Settings modal
 * Takes a title element and children, and produces a collapsible widget container
 * <CollapsibleFormWidget title={<h1>My Title</h1>}>
 *   <div>My Widget</div>
 * </CollapsibleFormWidget>
 */
const CollapsibleFormWidget = _ref => {
  let {
    children,
    isError,
    subtitle,
    title,
    fontSize,
    // injected
    intl
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Collapsible.Advanced, {
    className: "collapsible-card rounded mx-4 my-3 px-4 text-primary-500",
    defaultOpen: true,
    open: isError || undefined,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Collapsible.Trigger, {
      className: "collapsible-trigger d-flex border-0 align-items-center pt-4 p-0",
      style: {
        justifyContent: 'unset'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Collapsible.Visible, {
        whenClosed: true,
        className: "p-0 pb-3",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "d-flex flex-column flex-grow-1",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "d-flex flex-grow-1 w-75 x-small",
            children: title
          }), subtitle ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: `${fontSize} mb-4 mt-3`,
            children: subtitle
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "mb-4"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "d-flex flex-row align-self-start",
          children: [isError && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
            className: "alert-icon",
            src: _icons.InfoOutline
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.IconButton, {
            alt: intl.formatMessage(_messages.default.expandAltText),
            src: _icons.ExpandMore,
            iconAs: _paragon.Icon,
            variant: "dark"
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Collapsible.Visible, {
        whenOpen: true,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "d-flex flex-grow-1 w-75 x-small",
          children: title
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "align-self-start",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.IconButton, {
            alt: intl.formatMessage(_messages.default.collapseAltText),
            src: _icons.ExpandLess,
            iconAs: _paragon.Icon,
            variant: "dark"
          })
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Collapsible.Body, {
      className: `collapsible-body rounded px-0 ${fontSize} pb-4`,
      children: children
    })]
  });
};
exports.CollapsibleFormWidget = CollapsibleFormWidget;
CollapsibleFormWidget.defaultProps = {
  subtitle: null,
  fontSize: ''
};
CollapsibleFormWidget.propTypes = {
  children: _propTypes.default.node.isRequired,
  isError: _propTypes.default.bool.isRequired,
  subtitle: _propTypes.default.node,
  title: _propTypes.default.node.isRequired,
  fontSize: _propTypes.default.string,
  // injected
  intl: _i18n.intlShape.isRequired
};
var _default = exports.default = (0, _i18n.injectIntl)(CollapsibleFormWidget);
//# sourceMappingURL=CollapsibleFormWidget.js.map