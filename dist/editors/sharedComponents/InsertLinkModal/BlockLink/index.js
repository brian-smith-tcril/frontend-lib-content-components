"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _formatBlockPath = _interopRequireDefault(require("../formatBlockPath"));
require("./index.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BlockLink = _ref => {
  let {
    path,
    onCloseLink
  } = _ref;
  const {
    title,
    subTitle
  } = (0, _formatBlockPath.default)(path);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "link-container d-flex row p-4 rounded border border-gray-400 mx-4 mt-3",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "col-10",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "text-left",
        children: subTitle
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "h2 w-20 title",
        children: title
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "col-2",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
        variant: "tertiary",
        className: "d-flex justify-content-center align-items-center",
        "data-testid": "close-link-button",
        size: "lg",
        iconBefore: _icons.LinkOff,
        onClick: onCloseLink,
        children: "\xA0"
      })
    })]
  });
};
BlockLink.propTypes = {
  path: _propTypes.default.string.isRequired,
  onCloseLink: _propTypes.default.func.isRequired
};
var _default = exports.default = BlockLink;
//# sourceMappingURL=index.js.map