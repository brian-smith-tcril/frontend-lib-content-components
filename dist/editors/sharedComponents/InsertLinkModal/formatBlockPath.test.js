"use strict";

var _formatBlockPath = _interopRequireDefault(require("./formatBlockPath"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('formatBlockPath function', () => {
  test('formats a simple path with title and subtitle', () => {
    const path = 'Root / Child 1 / Grandchild';
    const formattedPath = (0, _formatBlockPath.default)(path);
    expect(formattedPath).toEqual({
      title: 'Grandchild',
      subTitle: 'Root / Child 1'
    });
  });
  test('handles an empty title by using the previous part as title', () => {
    const path = 'Root / Child 1 / ';
    const formattedPath = (0, _formatBlockPath.default)(path);
    expect(formattedPath).toEqual({
      title: 'Child 1',
      subTitle: 'Root / Child 1'
    });
  });
  test('handles an empty path by returning an empty title and subtitle', () => {
    const path = '';
    const formattedPath = (0, _formatBlockPath.default)(path);
    expect(formattedPath).toEqual({
      title: '',
      subTitle: ''
    });
  });
  test('handles whitespace in the title by using the previous part as title', () => {
    const path = 'Root / Child 1 /   ';
    const formattedPath = (0, _formatBlockPath.default)(path);
    expect(formattedPath).toEqual({
      title: 'Child 1',
      subTitle: 'Root / Child 1'
    });
  });
  test('handles a path with only one part by using it as the title', () => {
    const path = 'SinglePart';
    const formattedPath = (0, _formatBlockPath.default)(path);
    expect(formattedPath).toEqual({
      title: 'SinglePart',
      subTitle: ''
    });
  });
});
//# sourceMappingURL=formatBlockPath.test.js.map