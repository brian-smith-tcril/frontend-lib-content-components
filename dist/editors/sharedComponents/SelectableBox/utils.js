"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInputType = void 0;
var _FormCheckbox = require("./FormCheckbox");
var _FormRadio = require("./FormRadio");
var _FormRadioSet = _interopRequireDefault(require("./FormRadioSet"));
var _FormCheckboxSet = _interopRequireDefault(require("./FormCheckboxSet"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// eslint-disable-next-line import/prefer-default-export,consistent-return
const getInputType = (component, type) => {
  if (component === 'SelectableBox') {
    switch (type) {
      case 'radio':
        return _FormRadio.RadioControl;
      case 'checkbox':
        return _FormCheckbox.CheckboxControl;
      default:
        return _FormRadio.RadioControl;
    }
  } else if (component === 'SelectableBoxSet') {
    switch (type) {
      case 'radio':
        return _FormRadioSet.default;
      case 'checkbox':
        return _FormCheckboxSet.default;
      default:
        return _FormRadioSet.default;
    }
  }
};
exports.getInputType = getInputType;
//# sourceMappingURL=utils.js.map