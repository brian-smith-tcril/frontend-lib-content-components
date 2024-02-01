"use strict";

var _formatDuration = _interopRequireDefault(require("./formatDuration"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('formatDuration', () => {
  test.each([[60, '01:00'], [35, '00:35'], [60 * 10 + 15, '10:15'], [60 * 60 + 60 * 15 + 13, '01:15:13']])('correct functionality of formatDuration with duration as %p', (duration, expected) => {
    expect((0, _formatDuration.default)(duration)).toEqual(expected);
  });
});
//# sourceMappingURL=formatDuration.test.js.map