"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SelectTypeModal = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _ProblemTypeSelect = _interopRequireDefault(require("./content/ProblemTypeSelect"));
var _Preview = _interopRequireDefault(require("./content/Preview"));
var _AdvanceTypeSelect = _interopRequireDefault(require("./content/AdvanceTypeSelect"));
var _SelectTypeWrapper = _interopRequireDefault(require("./SelectTypeWrapper"));
var _hooks = _interopRequireDefault(require("./hooks"));
var _problem = require("../../../../data/constants/problem");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SelectTypeModal = _ref => {
  let {
    onClose
  } = _ref;
  const {
    selected,
    setSelected
  } = _hooks.default.selectHooks();
  _hooks.default.useArrowNav(selected, setSelected);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectTypeWrapper.default, {
    onClose: onClose,
    selected: selected,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Row, {
      className: "justify-content-center",
      children: !Object.values(_problem.AdvanceProblemKeys).includes(selected) ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Stack, {
        direction: "horizontal",
        gap: 4,
        className: "flex-wrap mb-6",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ProblemTypeSelect.default, {
          selected: selected,
          setSelected: setSelected
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Preview.default, {
          problemType: selected
        })]
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_AdvanceTypeSelect.default, {
        selected: selected,
        setSelected: setSelected
      })
    })
  });
};
exports.SelectTypeModal = SelectTypeModal;
SelectTypeModal.propTypes = {
  onClose: _propTypes.default.func.isRequired
};
var _default = exports.default = SelectTypeModal;
//# sourceMappingURL=index.js.map