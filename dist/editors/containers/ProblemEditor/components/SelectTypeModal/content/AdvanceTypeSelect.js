"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AdvanceTypeSelect = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var _problem = require("../../../../../data/constants/problem");
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const AdvanceTypeSelect = _ref => {
  let {
    selected,
    setSelected,
    // injected
    intl
  } = _ref;
  const handleChange = e => {
    setSelected(e.target.value);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Col, {
    xs: 12,
    md: 8,
    className: "justify-content-center",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Form.Group, {
      className: "border rounded text-primary-500 p-0",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
        className: "border-primary-100 border-bottom py-3 pl-2.5 pr-4",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.IconButton, {
          src: _icons.ArrowBack,
          iconAs: _paragon.Icon,
          onClick: () => setSelected(_problem.ProblemTypeKeys.SINGLESELECT)
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Label, {
          className: "h4",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.advanceMenuTitle))
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {})]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.RadioSet, {
        name: "advanceTypes",
        onChange: handleChange,
        value: selected,
        className: "px-4",
        children: Object.entries(_problem.AdvanceProblems).map(_ref2 => {
          let [type, data] = _ref2;
          if (data.status !== '') {
            return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
              className: "border-primary-100 border-bottom m-0 py-3 w-100",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Radio, {
                id: type,
                value: type,
                children: intl.formatMessage(_messages.default.advanceProblemTypeLabel, {
                  problemType: data.title
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.OverlayTrigger, {
                placement: "right",
                overlay: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Tooltip, {
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "text-left",
                    children: intl.formatMessage(_messages.default.supportStatusTooltipMessage, {
                      supportStatus: data.status.replace(' ', '_')
                    })
                  })
                }),
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "text-gray-500",
                  children: intl.formatMessage(_messages.default.problemSupportStatus, {
                    supportStatus: data.status
                  })
                })
              })]
            });
          }
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
            className: "border-primary-100 border-bottom m-0 py-3 w-100",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Form.Radio, {
              id: type,
              value: type,
              children: intl.formatMessage(_messages.default.advanceProblemTypeLabel, {
                problemType: data.title
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {})]
          });
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Hyperlink, {
      destination: "https://edx.readthedocs.io/projects/edx-partner-course-staff/en/latest/exercises_tools/create_exercises_and_tools.html#advanced",
      target: "_blank",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, _objectSpread({}, _messages.default.learnMoreAdvancedButtonLabel))
    })]
  });
};
exports.AdvanceTypeSelect = AdvanceTypeSelect;
AdvanceTypeSelect.defaultProps = {
  selected: null
};
AdvanceTypeSelect.propTypes = {
  selected: _propTypes.default.string,
  setSelected: _propTypes.default.func.isRequired,
  // injected
  intl: _i18n.intlShape.isRequired
};
var _default = exports.default = (0, _i18n.injectIntl)(AdvanceTypeSelect);
//# sourceMappingURL=AdvanceTypeSelect.js.map