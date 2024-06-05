"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _testUtils = require("../../../../testUtils");
var _utils = require("../../../utils");
var _redux = require("../../../data/redux");
var hooks = _interopRequireWildcard(require("./hooks"));
var _utils2 = require("./utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
jest.mock('react', () => _objectSpread(_objectSpread({}, jest.requireActual('react')), {}, {
  useRef: jest.fn(val => ({
    current: val
  })),
  useEffect: jest.fn(),
  useCallback: (cb, prereqs) => ({
    cb,
    prereqs
  })
}));
jest.mock('react-redux', () => {
  const dispatchFn = jest.fn();
  return _objectSpread(_objectSpread({}, jest.requireActual('react-redux')), {}, {
    dispatch: dispatchFn,
    useDispatch: jest.fn(() => dispatchFn)
  });
});
jest.mock('../../../data/redux', () => ({
  thunkActions: {
    app: {
      uploadImage: jest.fn()
    }
  }
}));
const state = new _testUtils.MockUseState(hooks);
const hookKeys = (0, _utils.keyStore)(hooks);
let hook;
const testValue = 'testVALUEVALIDIMAGE';
const testValueInvalidImage = {
  value: 'testVALUEVALIDIMAGE',
  size: 90000000
};
describe('SelectImageModal hooks', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('state hooks', () => {
    state.testGetter(state.keys.highlighted);
    state.testGetter(state.keys.showSelectImageError);
    state.testGetter(state.keys.searchString);
    state.testGetter(state.keys.sortBy);
    state.testGetter(state.keys.showSizeError);
  });
  describe('using state', () => {
    beforeEach(() => {
      state.mock();
    });
    afterEach(() => {
      state.restore();
    });
    describe('searchAndSortHooks', () => {
      beforeEach(() => {
        hook = hooks.searchAndSortHooks();
      });
      it('returns searchString value, initialized to an empty string', () => {
        expect(state.stateVals.searchString).toEqual(hook.searchString);
        expect(state.stateVals.searchString).toEqual('');
      });
      it('returns highlighted value, initialized to dateNewest', () => {
        expect(state.stateVals.sortBy).toEqual(hook.sortBy);
        expect(state.stateVals.sortBy).toEqual(_utils2.sortKeys.dateNewest);
      });
      test('onSearchChange sets searchString with event target value', () => {
        hook.onSearchChange({
          target: {
            value: testValue
          }
        });
        expect(state.setState.searchString).toHaveBeenCalledWith(testValue);
      });
      test('clearSearchString sets search string to empty string', () => {
        hook.clearSearchString();
        expect(state.setState.searchString).toHaveBeenCalledWith('');
      });
      test('onSortClick takes a key and returns callback to set sortBY to that key', () => {
        hook.onSortClick(testValue);
        expect(state.setState.sortBy).not.toHaveBeenCalled();
        hook.onSortClick(testValue)();
        expect(state.setState.sortBy).toHaveBeenCalledWith(testValue);
      });
    });
    describe('filteredList', () => {
      const matching = ['test', 'TEst', 'eeees', 'essSSSS'];
      const notMatching = ['bad', 'other', 'bad stuff'];
      const searchString = 'eS';
      test('returns list filtered lowercase by displayName', () => {
        const filter = jest.fn(cb => ({
          filter: cb
        }));
        hook = hooks.filteredList({
          searchString,
          imageList: {
            filter
          }
        });
        expect(filter).toHaveBeenCalled();
        const [[filterCb]] = filter.mock.calls;
        matching.forEach(val => expect(filterCb({
          displayName: val
        })).toEqual(true));
        notMatching.forEach(val => expect(filterCb({
          displayName: val
        })).toEqual(false));
      });
    });
    describe('displayList', () => {
      const props = {
        images: ['data1', 'data2', 'other distinct data'],
        sortBy: _utils2.sortKeys.dateNewest,
        searchString: 'test search string'
      };
      const load = function () {
        let loadProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        jest.spyOn(hooks, hookKeys.filteredList).mockImplementationOnce(_ref => {
          let {
            searchString,
            imageList
          } = _ref;
          return {
            sort: cb => ({
              filteredList: {
                searchString,
                imageList
              },
              sort: {
                cb
              }
            })
          };
        });
        hook = hooks.displayList(_objectSpread(_objectSpread({}, props), loadProps));
      };
      it('returns a sorted filtered list, based on the searchString and imageList values', () => {
        load();
        expect(hook.filteredList.searchString).toEqual(props.searchString);
        expect(hook.filteredList.imageList).toEqual(Object.values(props.images));
      });
      describe('sort behavior', () => {
        Object.keys(_utils2.sortKeys).forEach(key => {
          test(`it sorts by ${key} when selected`, () => {
            load({
              sortBy: _utils2.sortKeys[key]
            });
            expect(hook.sort).toEqual({
              cb: _utils2.sortFunctions[key]
            });
          });
        });
        test('defaults to sorting by dateNewest', () => {
          load();
          expect(hook.sort).toEqual({
            cb: _utils2.sortFunctions.dateNewest
          });
        });
      });
    });
    describe('imgListHooks outputs', () => {
      const props = {
        setSelection: jest.fn(),
        searchSortProps: {
          searchString: 'Es',
          sortBy: _utils2.sortKeys.dateNewest
        },
        images: [{
          displayName: 'sOmEuiMAge',
          staTICUrl: '/assets/sOmEuiMAge',
          id: 'sOmEuiMAgeURl'
        }]
      };
      const displayList = args => ({
        displayList: args
      });
      const load = () => {
        jest.spyOn(hooks, hookKeys.displayList).mockImplementationOnce(displayList);
        hook = hooks.imgListHooks(props);
      };
      beforeEach(() => {
        load();
      });
      describe('selectBtnProps', () => {
        test('on click, if sets selection to the image with the same id', () => {
          const highlighted = 'sOmEuiMAgeURl';
          const highlightedValue = {
            displayName: 'sOmEuiMAge',
            staTICUrl: '/assets/sOmEuiMAge',
            id: 'sOmEuiMAgeURl'
          };
          state.mockVal(state.keys.highlighted, highlighted);
          load();
          expect(props.setSelection).not.toHaveBeenCalled();
          hook.selectBtnProps.onClick();
          expect(props.setSelection).toHaveBeenCalledWith(highlightedValue);
        });
        test('on click, sets showSelectImageError to true if nothing is highlighted', () => {
          state.mockVal(state.keys.highlighted, null);
          load();
          hook.selectBtnProps.onClick();
          expect(props.setSelection).not.toHaveBeenCalled();
          expect(state.setState.showSelectImageError).toHaveBeenCalledWith(true);
        });
      });
      describe('galleryProps', () => {
        it('returns highlighted value, initialized to null', () => {
          expect(hook.galleryProps.highlighted).toEqual(state.stateVals.highlighted);
          expect(state.stateVals.highlighted).toEqual(null);
        });
        test('onHighlightChange sets highlighted with event target value', () => {
          hook.galleryProps.onHighlightChange({
            target: {
              value: testValue
            }
          });
          expect(state.setState.highlighted).toHaveBeenCalledWith(testValue);
        });
        test('displayList returns displayListhook called with searchSortProps and images', () => {
          expect(hook.galleryProps.displayList).toEqual(displayList(_objectSpread(_objectSpread({}, props.searchSortProps), {}, {
            images: props.images
          })));
        });
      });
      describe('galleryError', () => {
        test('show is initialized to false and returns properly', () => {
          const show = 'sHOWSelectiMaGEeRROr';
          expect(hook.galleryError.show).toEqual(false);
          state.mockVal(state.keys.showSelectImageError, show);
          hook = hooks.imgListHooks(props);
          expect(hook.galleryError.show).toEqual(show);
        });
        test('set sets showSelectImageError to true', () => {
          hook.galleryError.set();
          expect(state.setState.showSelectImageError).toHaveBeenCalledWith(true);
        });
        test('dismiss sets showSelectImageError to false', () => {
          hook.galleryError.dismiss();
          expect(state.setState.showSelectImageError).toHaveBeenCalledWith(false);
        });
        // TODO
        // it('returns selectImageError value, initialized to false', () => {
        //   expect(hook.selectImageErrorProps.isError).toEqual(state.stateVals.isSelectImageError);
        //   expect(state.stateVals.isSelectImageError).toEqual(false);
        // });
        // test('dismissError sets selectImageError to false', () => {
        //   hook.selectImageErrorProps.dismissError();
        //   expect(state.setState.isSelectImageError).toHaveBeenCalledWith(false);
        // });
      });
    });
  });
  describe('checkValidFileSize', () => {
    const selectedFileFail = testValueInvalidImage;
    const selectedFileSuccess = {
      value: testValue,
      size: 2000
    };
    const clearSelection = jest.fn();
    const onSizeFail = jest.fn();
    it('returns false for valid file size ', () => {
      hook = hooks.checkValidFileSize({
        selectedFile: selectedFileFail,
        clearSelection,
        onSizeFail
      });
      expect(clearSelection).toHaveBeenCalled();
      expect(onSizeFail).toHaveBeenCalled();
      expect(hook).toEqual(false);
    });
    it('returns true for valid file size', () => {
      hook = hooks.checkValidFileSize({
        selectedFile: selectedFileSuccess,
        clearSelection,
        onSizeFail
      });
      expect(hook).toEqual(true);
    });
  });
  describe('fileInputHooks', () => {
    const setSelection = jest.fn();
    const clearSelection = jest.fn();
    const imgList = {
      inputError: {
        show: true,
        dismiss: jest.fn(),
        set: jest.fn()
      }
    };
    const spies = {};
    beforeEach(() => {
      hook = hooks.fileInputHooks({
        setSelection,
        clearSelection,
        imgList
      });
    });
    it('returns a ref for the file input', () => {
      expect(hook.ref).toEqual({
        current: undefined
      });
    });
    test('click calls current.click on the ref', () => {
      const click = jest.fn();
      _react.default.useRef.mockReturnValueOnce({
        current: {
          click
        }
      });
      hook = hooks.fileInputHooks({
        setSelection
      });
      hook.click();
      expect(click).toHaveBeenCalled();
    });
    describe('addFile (uploadImage args)', () => {
      const eventSuccess = {
        target: {
          files: [{
            value: testValue,
            size: 2000
          }]
        }
      };
      const eventFailure = {
        target: {
          files: [testValueInvalidImage]
        }
      };
      it('image fails to upload if file size is greater than 1000000', () => {
        const checkValidFileSize = false;
        spies.checkValidFileSize = jest.spyOn(hooks, hookKeys.checkValidFileSize).mockReturnValueOnce(checkValidFileSize);
        hook.addFile(eventFailure);
        expect(spies.checkValidFileSize.mock.calls.length).toEqual(1);
        expect(spies.checkValidFileSize).toHaveReturnedWith(false);
      });
      it('dispatches uploadImage thunkAction with the first target file and setSelection', () => {
        const checkValidFileSize = true;
        spies.checkValidFileSize = jest.spyOn(hooks, hookKeys.checkValidFileSize).mockReturnValueOnce(checkValidFileSize);
        hook.addFile(eventSuccess);
        expect(spies.checkValidFileSize.mock.calls.length).toEqual(1);
        expect(spies.checkValidFileSize).toHaveReturnedWith(true);
        expect(_reactRedux.dispatch).toHaveBeenCalledWith(_redux.thunkActions.app.uploadImage({
          file: testValue,
          setSelection
        }));
      });
    });
  });
  describe('imgHooks wrapper', () => {
    const imgListHooks = {
      galleryProps: 'some gallery props',
      selectBtnProps: 'some select btn props'
    };
    const searchAndSortHooks = {
      search: 'props'
    };
    const fileInputHooks = {
      file: 'input hooks'
    };
    const images = {
      sOmEuiMAge: {
        staTICUrl: '/assets/sOmEuiMAge'
      }
    };
    const setSelection = jest.fn();
    const clearSelection = jest.fn();
    const spies = {};
    beforeEach(() => {
      spies.imgList = jest.spyOn(hooks, hookKeys.imgListHooks).mockReturnValueOnce(imgListHooks);
      spies.search = jest.spyOn(hooks, hookKeys.searchAndSortHooks).mockReturnValueOnce(searchAndSortHooks);
      spies.file = jest.spyOn(hooks, hookKeys.fileInputHooks).mockReturnValueOnce(fileInputHooks);
      hook = hooks.imgHooks({
        setSelection,
        clearSelection,
        images
      });
    });
    it('forwards fileInputHooks as fileInput, called with uploadImage prop', () => {
      expect(hook.fileInput).toEqual(fileInputHooks);
      expect(spies.file.mock.calls.length).toEqual(1);
      expect(spies.file).toHaveBeenCalledWith({
        setSelection,
        clearSelection,
        imgList: imgListHooks
      });
    });
    it('initializes imgListHooks with setSelection,searchAndSortHooks, and images', () => {
      expect(spies.imgList.mock.calls.length).toEqual(1);
      expect(spies.imgList).toHaveBeenCalledWith({
        setSelection,
        searchSortProps: searchAndSortHooks,
        images
      });
    });
    it('forwards searchAndSortHooks as searchSortProps', () => {
      expect(hook.searchSortProps).toEqual(searchAndSortHooks);
      expect(spies.file.mock.calls.length).toEqual(1);
      expect(spies.file).toHaveBeenCalledWith({
        setSelection,
        clearSelection,
        imgList: imgListHooks
      });
    });
    it('forwards galleryProps and selectBtnProps from the image list hooks', () => {
      expect(hook.galleryProps).toEqual(imgListHooks.galleryProps);
      expect(hook.selectBtnProps).toEqual(imgListHooks.selectBtnProps);
    });
  });
});
//# sourceMappingURL=hooks.test.js.map