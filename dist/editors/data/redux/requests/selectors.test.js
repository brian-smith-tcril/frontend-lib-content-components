"use strict";

var _requests = require("../../constants/requests");
var selectors = _interopRequireWildcard(require("./selectors"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint-disable no-import-assign */

// import * in order to mock in-file references

jest.mock('reselect', () => ({
  createSelector: jest.fn((preSelectors, cb) => ({
    preSelectors,
    cb
  }))
}));
const testValue = 'my test VALUE';
const testKey = 'MY test key';
describe('request selectors', () => {
  describe('basic selectors', () => {
    describe('requestStatus', () => {
      it('returns the state associated with the given requestKey', () => {
        expect(selectors.requestStatus({
          requests: {
            [testKey]: testValue
          }
        }, {
          requestKey: testKey
        })).toEqual(testValue);
      });
    });
    describe('statusSelector', () => {
      it('returns a state selector that applies a fn against request state by requestKey', () => {
        const myMethod = _ref => {
          let {
            data
          } = _ref;
          return {
            myData: data
          };
        };
        expect(selectors.statusSelector(myMethod)({
          requests: {
            [testKey]: {
              data: testValue
            }
          }
        }, {
          requestKey: testKey
        })).toEqual({
          myData: testValue
        });
      });
    });
    describe('state selectors', () => {
      const testStateSelector = (selector, expected) => {
        describe(selector, () => {
          it(`returns true iff the request status equals ${expected}`, () => {
            expect(selectors[selector]({
              status: expected
            })).toEqual(true);
            expect(selectors[selector]({
              status: 'other'
            })).toEqual(false);
          });
        });
      };
      testStateSelector('isInactive', _requests.RequestStates.inactive);
      testStateSelector('isPending', _requests.RequestStates.pending);
      testStateSelector('isCompleted', _requests.RequestStates.completed);
      testStateSelector('isFailed', _requests.RequestStates.failed);
      describe('isFinished', () => {
        it('returns true iff the request is completed or failed', () => {
          expect(selectors.isFinished({
            status: _requests.RequestStates.completed
          })).toEqual(true);
          expect(selectors.isFinished({
            status: _requests.RequestStates.failed
          })).toEqual(true);
          expect(selectors.isFinished({
            status: 'other'
          })).toEqual(false);
        });
      });
    });
    describe('error selectors', () => {
      describe('error', () => {
        it('returns the error for the request', () => {
          expect(selectors.error({
            error: testValue
          })).toEqual(testValue);
        });
      });
      describe('errorStatus', () => {
        it('returns the status the error response iff one exists', () => {
          expect(selectors.errorStatus({})).toEqual(undefined);
          expect(selectors.errorStatus({
            error: {}
          })).toEqual(undefined);
          expect(selectors.errorStatus({
            error: {
              response: {}
            }
          })).toEqual(undefined);
          expect(selectors.errorStatus({
            error: {
              response: {
                status: testValue
              }
            }
          })).toEqual(testValue);
        });
      });
      describe('errorCode', () => {
        it('returns the status the error code iff one exists', () => {
          expect(selectors.errorCode({})).toEqual(undefined);
          expect(selectors.errorCode({
            error: {}
          })).toEqual(undefined);
          expect(selectors.errorCode({
            error: {
              response: {}
            }
          })).toEqual(undefined);
          expect(selectors.errorCode({
            error: {
              response: {
                data: testValue
              }
            }
          })).toEqual(testValue);
        });
      });
    });
    describe('data', () => {
      it('returns the data from the request', () => {
        expect(selectors.data({
          data: testValue
        })).toEqual(testValue);
      });
    });
  });
  describe('exported selectors', () => {
    test('requestStatus forwards basic selector', () => {
      expect(selectors.default.requestStatus).toEqual(selectors.requestStatus);
    });
    describe('statusSelector selectors', () => {
      let statusSelector;
      let connectedSelectors;
      beforeEach(() => {
        statusSelector = selectors.statusSelector;
        selectors.statusSelector = jest.fn(key => ({
          statusSelector: key
        }));
        connectedSelectors = selectors.connectedStatusSelectors();
      });
      afterEach(() => {
        selectors.statusSelector = statusSelector;
      });
      const testStatusSelector = name => {
        describe(name, () => {
          it(`returns a status selector keyed to the ${name} selector`, () => {
            expect(connectedSelectors[name].statusSelector).toEqual(selectors[name]);
          });
        });
      };
      ['isInactive', 'isPending', 'isCompleted', 'isFailed', 'error', 'errorCode', 'errorStatus', 'data'].map(testStatusSelector);
    });
  });
});
//# sourceMappingURL=selectors.test.js.map