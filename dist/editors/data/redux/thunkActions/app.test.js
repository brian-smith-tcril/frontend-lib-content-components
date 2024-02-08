"use strict";

var _ = require("..");
var _utils = require("../../../utils");
var _requests = require("../../constants/requests");
var thunkActions = _interopRequireWildcard(require("./app"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* eslint-disable no-import-assign */
jest.mock('./requests', () => ({
  fetchBlock: args => ({
    fetchBlock: args
  }),
  fetchUnit: args => ({
    fetchUnit: args
  }),
  saveBlock: args => ({
    saveBlock: args
  }),
  uploadAsset: args => ({
    uploadAsset: args
  }),
  fetchStudioView: args => ({
    fetchStudioView: args
  }),
  fetchAssets: args => ({
    fetchAssets: args
  }),
  fetchVideos: args => ({
    fetchVideos: args
  }),
  fetchCourseDetails: args => ({
    fetchCourseDetails: args
  })
}));
jest.mock('../../../utils', () => _objectSpread({
  camelizeKeys: args => [{
    camelizeKeys: args
  }]
}, jest.requireActual('../../../utils')));
const testValue = {
  data: {
    assets: 'test VALUE',
    videos: 'vIDeO vALUe'
  }
};
describe('app thunkActions', () => {
  let dispatch;
  let dispatchedAction;
  beforeEach(() => {
    dispatch = jest.fn(action => ({
      dispatch: action
    }));
  });
  describe('fetchBlock', () => {
    beforeEach(() => {
      thunkActions.fetchBlock()(dispatch);
      [[dispatchedAction]] = dispatch.mock.calls;
    });
    it('dispatches fetchBlock action', () => {
      expect(dispatchedAction.fetchBlock).not.toEqual(undefined);
    });
    it('dispatches actions.app.setBlockValue on success', () => {
      dispatch.mockClear();
      dispatchedAction.fetchBlock.onSuccess(testValue);
      expect(dispatch).toHaveBeenCalledWith(_.actions.app.setBlockValue(testValue));
    });
    it('dispatches failRequest with fetchBlock requestKey on failure', () => {
      dispatch.mockClear();
      dispatchedAction.fetchBlock.onFailure(testValue);
      expect(dispatch).toHaveBeenCalledWith(_.actions.requests.failRequest({
        requestKey: _requests.RequestKeys.fetchBlock,
        error: testValue
      }));
    });
  });
  describe('fetchStudioView', () => {
    beforeEach(() => {
      thunkActions.fetchStudioView()(dispatch);
      [[dispatchedAction]] = dispatch.mock.calls;
    });
    it('dispatches fetchStudioView action', () => {
      expect(dispatchedAction.fetchStudioView).not.toEqual(undefined);
    });
    it('dispatches actions.app.setStudioViewe on success', () => {
      dispatch.mockClear();
      dispatchedAction.fetchStudioView.onSuccess(testValue);
      expect(dispatch).toHaveBeenCalledWith(_.actions.app.setStudioView(testValue));
    });
    it('dispatches failRequest with fetchStudioView requestKey on failure', () => {
      dispatch.mockClear();
      dispatchedAction.fetchStudioView.onFailure(testValue);
      expect(dispatch).toHaveBeenCalledWith(_.actions.requests.failRequest({
        requestKey: _requests.RequestKeys.fetchStudioView,
        error: testValue
      }));
    });
  });
  describe('fetchUnit', () => {
    beforeEach(() => {
      thunkActions.fetchUnit()(dispatch);
      [[dispatchedAction]] = dispatch.mock.calls;
    });
    it('dispatches fetchUnit action', () => {
      expect(dispatchedAction.fetchUnit).not.toEqual(undefined);
    });
    it('dispatches actions.app.setUnitUrl on success', () => {
      dispatch.mockClear();
      dispatchedAction.fetchUnit.onSuccess(testValue);
      expect(dispatch).toHaveBeenCalledWith(_.actions.app.setUnitUrl(testValue));
    });
    it('dispatches failRequest with fetchUnit requestKey on failure', () => {
      dispatch.mockClear();
      dispatchedAction.fetchUnit.onFailure(testValue);
      expect(dispatch).toHaveBeenCalledWith(_.actions.requests.failRequest({
        requestKey: _requests.RequestKeys.fetchUnit,
        error: testValue
      }));
    });
  });
  describe('fetchAssets', () => {
    beforeEach(() => {
      thunkActions.fetchAssets()(dispatch);
      [[dispatchedAction]] = dispatch.mock.calls;
    });
    it('dispatches fetchAssets action', () => {
      expect(dispatchedAction.fetchAssets).not.toEqual(undefined);
    });
    it('dispatches actions.app.setAssets on success', () => {
      dispatch.mockClear();
      dispatchedAction.fetchAssets.onSuccess(testValue);
      expect(dispatch).toHaveBeenCalledWith(_.actions.app.setAssets(testValue));
    });
    it('dispatches failRequest with fetchAssets requestKey on failure', () => {
      dispatch.mockClear();
      dispatchedAction.fetchAssets.onFailure(testValue);
      expect(dispatch).toHaveBeenCalledWith(_.actions.requests.failRequest({
        requestKey: _requests.RequestKeys.fetchAssets,
        error: testValue
      }));
    });
  });
  describe('fetchVideos', () => {
    beforeEach(() => {
      thunkActions.fetchVideos()(dispatch);
      [[dispatchedAction]] = dispatch.mock.calls;
    });
    it('dispatches fetchAssets action', () => {
      expect(dispatchedAction.fetchVideos).not.toEqual(undefined);
    });
    it('dispatches actions.app.setVideos on success', () => {
      dispatch.mockClear();
      dispatchedAction.fetchVideos.onSuccess(testValue);
      expect(dispatch).toHaveBeenCalledWith(_.actions.app.setVideos(testValue.data.videos));
    });
    it('dispatches failRequest with fetchVideos requestKey on failure', () => {
      dispatch.mockClear();
      dispatchedAction.fetchVideos.onFailure(testValue);
      expect(dispatch).toHaveBeenCalledWith(_.actions.requests.failRequest({
        requestKey: _requests.RequestKeys.fetchVideos,
        error: testValue
      }));
    });
  });
  describe('fetchCourseDetails', () => {
    beforeEach(() => {
      thunkActions.fetchCourseDetails()(dispatch);
      [[dispatchedAction]] = dispatch.mock.calls;
    });
    it('dispatches fetchUnit action', () => {
      expect(dispatchedAction.fetchCourseDetails).not.toEqual(undefined);
    });
    it('dispatches actions.app.setUnitUrl on success', () => {
      dispatch.mockClear();
      dispatchedAction.fetchCourseDetails.onSuccess(testValue);
      expect(dispatch).toHaveBeenCalledWith(_.actions.app.setCourseDetails(testValue));
    });
    it('dispatches failRequest with fetchCourseDetails requestKey on failure', () => {
      dispatch.mockClear();
      dispatchedAction.fetchCourseDetails.onFailure(testValue);
      expect(dispatch).toHaveBeenCalledWith(_.actions.requests.failRequest({
        requestKey: _requests.RequestKeys.fetchCourseDetails,
        error: testValue
      }));
    });
  });
  describe('initialize', () => {
    it('dispatches actions.app.initialize, and then fetches both block and unit', () => {
      const {
        fetchBlock,
        fetchUnit,
        fetchStudioView,
        fetchAssets,
        fetchVideos,
        fetchCourseDetails
      } = thunkActions;
      thunkActions.fetchBlock = () => 'fetchBlock';
      thunkActions.fetchUnit = () => 'fetchUnit';
      thunkActions.fetchStudioView = () => 'fetchStudioView';
      thunkActions.fetchAssets = () => 'fetchAssets';
      thunkActions.fetchVideos = () => 'fetchVideos';
      thunkActions.fetchCourseDetails = () => 'fetchCourseDetails';
      thunkActions.initialize(testValue)(dispatch);
      expect(dispatch.mock.calls).toEqual([[_.actions.app.initialize(testValue)], [thunkActions.fetchBlock()], [thunkActions.fetchUnit()], [thunkActions.fetchStudioView()], [thunkActions.fetchAssets()], [thunkActions.fetchVideos()], [thunkActions.fetchCourseDetails()]]);
      thunkActions.fetchBlock = fetchBlock;
      thunkActions.fetchUnit = fetchUnit;
      thunkActions.fetchStudioView = fetchStudioView;
      thunkActions.fetchAssets = fetchAssets;
      thunkActions.fetchVideos = fetchVideos;
      thunkActions.fetchCourseDetails = fetchCourseDetails;
    });
  });
  describe('saveBlock', () => {
    let returnToUnit;
    let calls;
    beforeEach(() => {
      returnToUnit = jest.fn();
      thunkActions.saveBlock(testValue, returnToUnit)(dispatch);
      calls = dispatch.mock.calls;
    });
    it('dispatches actions.app.setBlockContent with content, before dispatching saveBlock', () => {
      expect(calls[0]).toEqual([_.actions.app.setBlockContent(testValue)]);
      const saveCall = calls[1][0];
      expect(saveCall.saveBlock).not.toEqual(undefined);
    });
    it('dispatches saveBlock with passed content', () => {
      expect(calls[1][0].saveBlock.content).toEqual(testValue);
    });
    it('dispatches actions.app.setSaveResponse with response and then calls returnToUnit', () => {
      dispatch.mockClear();
      const response = 'testRESPONSE';
      calls[1][0].saveBlock.onSuccess(response);
      expect(dispatch).toHaveBeenCalledWith(_.actions.app.setSaveResponse(response));
      expect(returnToUnit).toHaveBeenCalled();
    });
  });
  describe('uploadImage', () => {
    const setSelection = jest.fn();
    beforeEach(() => {
      thunkActions.uploadImage({
        file: testValue,
        setSelection
      })(dispatch);
      [[dispatchedAction]] = dispatch.mock.calls;
    });
    it('dispatches uploadAsset action', () => {
      expect(dispatchedAction.uploadAsset).not.toBe(undefined);
    });
    test('passes file as image prop', () => {
      expect(dispatchedAction.uploadAsset.asset).toEqual(testValue);
    });
    test('onSuccess: calls setSelection with camelized response.data.asset', () => {
      dispatchedAction.uploadAsset.onSuccess({
        data: {
          asset: testValue
        }
      });
      expect(setSelection).toHaveBeenCalledWith((0, _utils.camelizeKeys)(testValue));
    });
  });
});
//# sourceMappingURL=app.test.js.map