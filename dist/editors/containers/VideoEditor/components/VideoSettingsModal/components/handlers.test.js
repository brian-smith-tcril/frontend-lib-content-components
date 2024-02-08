"use strict";

var handlers = _interopRequireWildcard(require("./handlers"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const handler = jest.fn(cb => ({
  handler: cb
}));
const transform = jest.fn(function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return {
    transform: args
  };
});
const setter = jest.fn(val => ({
  setter: val
}));
const index = 'test-index';
const val = 'TEST value';
const local = 'local-test-value';
describe('Video Settings Modal event handler methods', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('handleIndexEvent', () => {
    describe('returned method', () => {
      it('takes index and calls handler with transform handler based on index', () => {
        expect(handlers.handleIndexEvent({
          handler,
          transform
        })(index).handler(val)).toEqual(transform(index, val));
      });
    });
  });
  describe('handleIndexTransformEvent', () => {
    describe('returned method', () => {
      it('takes index and calls handler with setter(transform(local, index, val))', () => {
        expect(handlers.handleIndexTransformEvent({
          handler,
          setter,
          local,
          transform
        })(index).handler(val)).toEqual(setter(transform(local, index, val)));
      });
    });
  });
  describe('onValue', () => {
    describe('returned method', () => {
      it('calls handler with event.target.value', () => {
        expect(handlers.onValue(handler)({
          target: {
            value: val
          }
        })).toEqual(handler(val));
      });
    });
  });
  describe('onChecked', () => {
    describe('returned method', () => {
      it('calls handler with event.target.checked', () => {
        expect(handlers.onChecked(handler)({
          target: {
            checked: val
          }
        })).toEqual(handler(val));
      });
    });
  });
  describe('onEvent', () => {
    describe('returned method', () => {
      it('calls handler with event', () => {
        expect(handlers.onEvent(handler)(val)).toEqual(handler(val));
      });
    });
  });
});
//# sourceMappingURL=handlers.test.js.map