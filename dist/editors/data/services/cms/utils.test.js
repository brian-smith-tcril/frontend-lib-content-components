"use strict";

var _auth = require("@edx/frontend-platform/auth");
var utils = _interopRequireWildcard(require("./utils"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
jest.mock('@edx/frontend-platform/auth', () => ({
  getAuthenticatedHttpClient: jest.fn()
}));
describe('cms service utils', () => {
  describe('get', () => {
    it('forwards arguments to authenticatedHttpClient().get', () => {
      const get = jest.fn(function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return {
          get: args
        };
      });
      _auth.getAuthenticatedHttpClient.mockReturnValue({
        get
      });
      const args = ['some', 'args', 'for', 'the', 'test'];
      expect(utils.get(...args)).toEqual(get(...args));
    });
  });
  describe('post', () => {
    it('forwards arguments to authenticatedHttpClient().post', () => {
      const post = jest.fn(function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        return {
          post: args
        };
      });
      _auth.getAuthenticatedHttpClient.mockReturnValue({
        post
      });
      const args = ['some', 'args', 'for', 'the', 'test'];
      expect(utils.post(...args)).toEqual(post(...args));
    });
  });
  // describe('deleteObject', () => {
  //   it('forwards arguments to authenticatedHttpClient().delete', () => {
  //     const deleteObject = jest.fn((...args) => ({ delete: args }));
  //     getAuthenticatedHttpClient.mockReturnValue({ deleteObject });
  //     const args = ['some', 'args', 'for', 'the', 'test'];
  //     expect(utils.deleteObject(...args)).toEqual(deleteObject(...args));
  //   });
  // });
});
//# sourceMappingURL=utils.test.js.map