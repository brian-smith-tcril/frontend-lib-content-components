"use strict";

var _reducers = require("./reducers");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
describe('insertlink reducer', () => {
  it('should return the initial state', () => {
    expect((0, _reducers.reducer)(undefined, {})).toEqual(_reducers.initialState);
  });
  it('should handle addBlock', () => {
    const payload = {
      block123: {
        id: 'block123',
        content: 'Block 123 content'
      },
      block456: {
        id: 'block456',
        content: 'Block 456 content'
      }
    };
    const action = _reducers.actions.addBlock(payload);
    const previousState = {
      selectedBlocks: {
        block789: {
          id: 'block789',
          content: 'Block 789 content'
        }
      }
    };
    const expectedState = {
      selectedBlocks: _objectSpread(_objectSpread({}, previousState.selectedBlocks), payload)
    };
    expect((0, _reducers.reducer)(previousState, action)).toEqual(expectedState);
  });
});
//# sourceMappingURL=reducers.test.js.map