"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToleranceTypes = void 0;
var _messages = _interopRequireDefault(require("./messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable import/prefer-default-export */

const ToleranceTypes = exports.ToleranceTypes = {
  percent: {
    type: 'Percent',
    message: _messages.default.typesPercentage
  },
  number: {
    type: 'Number',
    message: _messages.default.typesNumber
  },
  none: {
    type: 'None',
    message: _messages.default.typesNone
  }
};
//# sourceMappingURL=constants.js.map