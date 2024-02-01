"use strict";

var _reducer = require("./reducer");
var _requests = require("../../constants/requests");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
describe('requests reducer', () => {
  test('intial state generated on create', () => {
    expect((0, _reducer.reducer)(undefined, {})).toEqual(_reducer.initialState);
  });
  describe('handling actions', () => {
    const arbitraryKey = 'ArbItrAryKey';
    const requestsList = [_requests.RequestKeys.fetchUnit, _requests.RequestKeys.fetchBlock, _requests.RequestKeys.saveBlock, arbitraryKey];
    requestsList.forEach(requestKey => {
      describe(`${requestKey} lifecycle`, () => {
        const testAction = (action, args, expected) => {
          const testingState = _objectSpread(_objectSpread({}, _reducer.initialState), {}, {
            arbitraryField: 'arbitrary',
            [requestKey]: {
              arbitrary: 'state'
            }
          });
          expect((0, _reducer.reducer)(testingState, _reducer.actions[action](args))).toEqual(_objectSpread(_objectSpread({}, testingState), {}, {
            [requestKey]: expected
          }));
        };
        test('startRequest sets pending status', () => {
          testAction('startRequest', requestKey, {
            status: _requests.RequestStates.pending
          });
        });
        test('completeRequest sets completed status and loads response', () => {
          testAction('completeRequest', {
            requestKey
          }, {
            status: _requests.RequestStates.completed
          });
        });
        test('failRequest sets failed state and loads error', () => {
          testAction('failRequest', {
            requestKey
          }, {
            status: _requests.RequestStates.failed
          });
        });
        test('clearRequest clears request state', () => {
          testAction('clearRequest', {
            requestKey
          }, {});
        });
      });
    });
  });
});
//# sourceMappingURL=reducer.test.js.map