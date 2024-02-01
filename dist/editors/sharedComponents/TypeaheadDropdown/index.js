"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _paragon = require("@openedx/paragon");
var _icons = require("@openedx/paragon/icons");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _lodashEs = require("lodash-es");
var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));
var _FormGroup = _interopRequireDefault(require("./FormGroup"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // eslint-disable-next-line import/no-unresolved
class TypeaheadDropdown extends _react.default.Component {
  constructor(props) {
    super(props);
    _defineProperty(this, "handleClick", e => {
      const dropDownItems = this.getItems(e.target.value);
      if (dropDownItems.length > 1) {
        this.setState({
          dropDownItems,
          icon: this.expandLessButton()
        });
      }
      if (this.state.dropDownItems.length > 0) {
        this.setState({
          dropDownItems: '',
          icon: this.expandMoreButton()
        });
      }
    });
    _defineProperty(this, "handleOnChange", e => {
      const findstr = e.target.value;
      if (findstr.length) {
        const filteredItems = this.getItems(findstr);
        this.setState({
          dropDownItems: filteredItems,
          icon: this.expandLessButton()
        });
      } else {
        this.setState({
          dropDownItems: '',
          icon: this.expandMoreButton()
        });
      }
      this.setDisplayValue(e.target.value);
    });
    // eslint-disable-next-line react/no-unused-class-component-methods
    _defineProperty(this, "handleClickOutside", () => {
      if (this.state.dropDownItems.length > 0) {
        this.setState(() => ({
          icon: this.expandMoreButton(),
          dropDownItems: ''
        }));
      }
    });
    this.state = {
      isFocused: false,
      displayValue: '',
      icon: this.expandMoreButton(),
      dropDownItems: []
    };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }
  shouldComponentUpdate(nextProps) {
    if (this.props.value !== nextProps.value && nextProps.value !== '') {
      const opt = this.props.options.find(o => o === nextProps.value);
      if (opt && opt !== this.state.displayValue) {
        this.setState({
          displayValue: opt
        });
      }
      return false;
    }
    return true;
  }

  // eslint-disable-next-line react/sort-comp
  getItems() {
    let strToFind = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    let {
      options
    } = this.props;
    if (strToFind.length > 0) {
      options = options.filter(option => option.toLowerCase().includes(strToFind.toLowerCase()));
    }
    const sortedOptions = (0, _lodashEs.sortBy)(options, option => option.toLowerCase());
    return sortedOptions.map(opt => {
      let value = opt;
      if (value.length > 30) {
        value = value.substring(0, 30).concat('...');
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        type: "button",
        className: "dropdown-item data-hj-suppress",
        value: value,
        onClick: e => {
          this.handleItemClick(e);
        },
        children: value
      }, value);
    });
  }
  setValue(value) {
    if (this.props.value === value) {
      return;
    }
    if (this.props.handleChange) {
      this.props.handleChange(value);
    }
    const opt = this.props.options.find(o => o === value);
    if (opt && opt !== this.state.displayValue) {
      this.setState({
        displayValue: opt
      });
    }
  }
  setDisplayValue(value) {
    const normalized = value.toLowerCase();
    const opt = this.props.options.find(o => o.toLowerCase() === normalized);
    if (opt) {
      this.setValue(opt);
      this.setState({
        displayValue: opt
      });
    } else {
      this.setValue('');
      this.setState({
        displayValue: value
      });
    }
  }
  handleExpandLess() {
    this.setState({
      dropDownItems: '',
      icon: this.expandMoreButton()
    });
  }
  handleExpandMore(e) {
    const dropDownItems = this.getItems(e.target.value);
    this.setState({
      dropDownItems,
      icon: this.expandLessButton()
    });
  }
  handleFocus(e) {
    this.setState({
      isFocused: true
    });
    if (this.props.handleFocus) {
      this.props.handleFocus(e);
    }
  }
  handleOnBlur(e) {
    this.setState({
      isFocused: false
    });
    if (this.props.handleBlur) {
      this.props.handleBlur(e);
    }
  }
  handleItemClick(e) {
    this.setValue(e.target.value);
    this.setState({
      dropDownItems: '',
      icon: this.expandMoreButton()
    });
  }
  expandMoreButton() {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.IconButton, {
      className: "expand-more",
      "data-testid": "expand-more-button",
      src: _icons.ExpandMore,
      iconAs: _paragon.Icon,
      size: "sm",
      variant: "secondary",
      alt: "expand-more",
      onClick: e => {
        this.handleExpandMore(e);
      }
    });
  }
  expandLessButton() {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.IconButton, {
      className: "expand-less",
      "data-testid": "expand-less-button",
      src: _icons.ExpandLess,
      iconAs: _paragon.Icon,
      size: "sm",
      variant: "secondary",
      alt: "expand-less",
      onClick: e => {
        this.handleExpandLess(e);
      }
    });
  }
  render() {
    const noOptionsMessage = /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.ActionRow, {
      className: "p-2 pl-3",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "muted",
        children: this.props.noOptionsMessage
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.ActionRow.Spacer, {}), this.props.allowNewOption && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
        "data-testid": "add-option-button",
        iconBefore: _icons.Add,
        onClick: this.props.addNewOption,
        children: this.props.newOptionButtonLabel
      })]
    });
    const dropDownEmptyList = this.state.dropDownItems && this.state.isFocused ? noOptionsMessage : null;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "dropdown-group-wrapper",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormGroup.default, {
        name: this.props.name,
        type: "text",
        value: this.state.displayValue,
        readOnly: this.props.readOnly,
        controlClassName: this.props.controlClassName,
        errorMessage: this.props.errorMessage,
        trailingElement: this.state.icon,
        floatingLabel: this.props.floatingLabel,
        placeholder: this.props.placeholder,
        helpText: this.props.helpMessage,
        handleChange: this.handleOnChange,
        handleClick: this.handleClick,
        handleBlur: this.handleOnBlur,
        handleFocus: this.handleFocus,
        isFocused: this.state.isFocused,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          "data-testid": "dropdown-container",
          className: "dropdown-container mt-2 rounded bg-light-100 box-shadow-centered-1 mr-2",
          style: {
            maxHeight: '300px',
            overflowY: 'scroll'
          },
          children: this.state.dropDownItems.length > 0 ? this.state.dropDownItems : dropDownEmptyList
        })
      })
    });
  }
}
TypeaheadDropdown.defaultProps = {
  options: null,
  floatingLabel: null,
  handleFocus: null,
  handleChange: null,
  handleBlur: null,
  helpMessage: '',
  placeholder: '',
  value: null,
  errorMessage: null,
  readOnly: false,
  controlClassName: '',
  allowNewOption: false,
  newOptionButtonLabel: '',
  addNewOption: null
};
TypeaheadDropdown.propTypes = {
  noOptionsMessage: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  options: _propTypes.default.arrayOf(_propTypes.default.string),
  floatingLabel: _propTypes.default.string,
  handleFocus: _propTypes.default.func,
  handleChange: _propTypes.default.func,
  handleBlur: _propTypes.default.func,
  helpMessage: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  value: _propTypes.default.string,
  errorMessage: _propTypes.default.string,
  readOnly: _propTypes.default.bool,
  controlClassName: _propTypes.default.string,
  allowNewOption: _propTypes.default.bool,
  newOptionButtonLabel: _propTypes.default.string,
  addNewOption: _propTypes.default.func
};
var _default = exports.default = (0, _reactOnclickoutside.default)(TypeaheadDropdown);
//# sourceMappingURL=index.js.map