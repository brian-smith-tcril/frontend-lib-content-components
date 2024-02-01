"use strict";

var handlers = _interopRequireWildcard(require("./handlers"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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