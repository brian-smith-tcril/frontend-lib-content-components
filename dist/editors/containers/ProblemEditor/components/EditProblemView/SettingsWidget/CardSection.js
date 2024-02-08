"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _paragon = require("@edx/paragon");
var _propTypes = require("prop-types");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CardSection = _ref => {
  let {
    children,
    none,
    isCardCollapsibleOpen,
    summary
  } = _ref;
  const show = isCardCollapsibleOpen || summary;
  if (!show) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Card.Section, {
    className: "pt-0",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Collapsible.Advanced, {
      open: !isCardCollapsibleOpen,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Collapsible.Body, {
        className: "collapsible-body",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: `small ${none ? 'text-gray-500' : 'text-primary-500'}`,
          children: summary
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Collapsible.Advanced, {
      open: isCardCollapsibleOpen,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Collapsible.Body, {
        className: "collapsible-body text-primary-500 x-small",
        children: children
      })
    })]
  });
};
CardSection.propTypes = {
  none: _propTypes.bool,
  children: _propTypes.node.isRequired,
  summary: _propTypes.string,
  isCardCollapsibleOpen: _propTypes.bool.isRequired
};
CardSection.defaultProps = {
  none: false,
  summary: null
};
var _default = exports.default = CardSection;
//# sourceMappingURL=CardSection.js.map