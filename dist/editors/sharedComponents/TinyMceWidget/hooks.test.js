"use strict";

var _react = _interopRequireDefault(require("react"));
var _i18n = require("@edx/frontend-platform/i18n");
var _testUtils = require("../../../testUtils");
var _tinyMCE = _interopRequireDefault(require("../../data/constants/tinyMCE"));
var _utils = require("../../utils");
var _pluginConfig = _interopRequireDefault(require("./pluginConfig"));
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
jest.mock('react', () => _objectSpread(_objectSpread({}, jest.requireActual('react')), {}, {
  createRef: jest.fn(val => ({
    ref: val
  })),
  useRef: jest.fn(val => ({
    current: val
  })),
  useEffect: jest.fn(),
  useCallback: (cb, prereqs) => ({
    cb,
    prereqs
  })
}));
jest.mock('@edx/frontend-platform/i18n', () => _objectSpread(_objectSpread({}, jest.requireActual('@edx/frontend-platform/i18n')), {}, {
  useIntl: jest.fn()
}));
const state = new _testUtils.MockUseState(_module);
const moduleKeys = (0, _utils.keyStore)(_module);
let hook;
let output;
const editorImageWidth = 2022;
const editorImageHeight = 1619;
const mockNode = {
  src: 'http://localhost:18000/asset-v1:TestX+Test01+Test0101+type@asset+block/DALL_E_2023-03-10.png',
  alt: 'aLt tExt',
  width: editorImageWidth,
  height: editorImageHeight
};
const initialContentHeight = 150;
const initialContentWidth = 100;
const mockNodeWithInitialContentDimensions = _objectSpread(_objectSpread({}, mockNode), {}, {
  width: initialContentWidth,
  height: initialContentHeight
});
const mockEditorWithSelection = {
  selection: {
    getNode: () => mockNode
  }
};
const mockImage = {
  displayName: 'DALL·E 2023-03-10.png',
  contentType: 'image/png',
  dateAdded: 1682009100000,
  url: '/asset-v1:TestX+Test01+Test0101+type@asset+block@DALL_E_2023-03-10.png',
  externalUrl: 'http://localhost:18000/asset-v1:TestX+Test01+Test0101+type@asset+block@DALL_E_2023-03-10.png',
  portableUrl: '/static/DALL_E_2023-03-10.png',
  thumbnail: '/asset-v1:TestX+Test01+Test0101+type@thumbnail+block@DALL_E_2023-03-10.jpg',
  locked: false,
  staticFullUrl: '/assets/courseware/v1/af2bf9ac70804e54c534107160a8e51e/asset-v1:TestX+Test01+Test0101+type@asset+block@DALL_E_2023-03-10.png',
  id: 'asset-v1:TestX+Test01+Test0101+type@asset+block@DALL_E_2023-03-10.png',
  width: initialContentWidth,
  height: initialContentHeight
};
const mockAssets = {
  [mockImage.id]: mockImage
};
const mockEditorContentHtml = `
  <p>
    <img
      src="/assets/courseware/v1/7b41573468a356ca8dc975158e388386/asset-v1:TestX+Test01+Test0101+type@asset+block/DALL_E_2023-03-10.png"
      alt=""
      width="${initialContentWidth}"
      height="${initialContentHeight}">
    </img>
  </p>
`;
const mockImagesRef = {
  current: [mockImage]
};
describe('TinyMceEditor hooks', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockImagesRef.current = [mockImage];
  });
  describe('state hooks', () => {
    state.testGetter(state.keys.isImageModalOpen);
    state.testGetter(state.keys.isSourceCodeModalOpen);
    state.testGetter(state.keys.imageSelection);
    state.testGetter(state.keys.isInsertLinkModalOpen);
  });
  describe('non-state hooks', () => {
    beforeEach(() => {
      state.mock();
    });
    afterEach(() => {
      state.restore();
    });
    describe('detectImageMatchingError', () => {
      it('should detect an error if the matchingImages array is empty', () => {
        const matchingImages = [];
        const tinyMceHTML = mockNode;
        expect(_module.detectImageMatchingError({
          matchingImages,
          tinyMceHTML
        })).toBe(true);
      });
      it('should detect an error if the matchingImages array has more than one element', () => {
        const matchingImages = [mockImage, mockImage];
        const tinyMceHTML = mockNode;
        expect(_module.detectImageMatchingError({
          matchingImages,
          tinyMceHTML
        })).toBe(true);
      });
      it('should detect an error if the image id does not match the tinyMceHTML src', () => {
        const matchingImages = [_objectSpread(_objectSpread({}, mockImage), {}, {
          id: 'some-other-id'
        })];
        const tinyMceHTML = mockNode;
        expect(_module.detectImageMatchingError({
          matchingImages,
          tinyMceHTML
        })).toBe(true);
      });
      it('should detect an error if the image id matches the tinyMceHTML src, but width and height do not match', () => {
        const matchingImages = [_objectSpread(_objectSpread({}, mockImage), {}, {
          width: 100,
          height: 100
        })];
        const tinyMceHTML = mockNode;
        expect(_module.detectImageMatchingError({
          matchingImages,
          tinyMceHTML
        })).toBe(true);
      });
      it('should not detect any errors if id matches src, and width and height match', () => {
        const matchingImages = [_objectSpread(_objectSpread({}, mockImage), {}, {
          width: mockNode.width,
          height: mockNode.height
        })];
        const tinyMceHTML = mockNode;
        expect(_module.detectImageMatchingError({
          matchingImages,
          tinyMceHTML
        })).toBe(false);
      });
    });
    describe('setupCustomBehavior', () => {
      test('It calls addButton and addToggleButton in the editor, but openModal is not called', () => {
        const addButton = jest.fn();
        const addIcon = jest.fn();
        const addToggleButton = jest.fn();
        const openImgModal = jest.fn();
        const openSourceCodeModal = jest.fn();
        const openInsertLinkModal = jest.fn();
        const translations = {};
        const setImage = jest.fn();
        const updateContent = jest.fn();
        const editorType = 'expandable';
        const lmsEndpointUrl = 'sOmEvaLue.cOm';
        const editor = {
          ui: {
            registry: {
              addButton,
              addToggleButton,
              addIcon
            }
          },
          on: jest.fn()
        };
        const mockOpenModalWithImage = args => ({
          openModalWithSelectedImage: args
        });
        const expectedSettingsAction = mockOpenModalWithImage({
          editor,
          setImage,
          openImgModal
        });
        const toggleCodeFormatting = expect.any(Function);
        const toggleLabelFormatting = expect.any(Function);
        const setupCodeFormatting = expect.any(Function);
        jest.spyOn(_module, moduleKeys.openModalWithSelectedImage).mockImplementationOnce(mockOpenModalWithImage);
        output = _module.setupCustomBehavior({
          editorType,
          updateContent,
          openImgModal,
          openSourceCodeModal,
          openInsertLinkModal,
          translations,
          setImage,
          lmsEndpointUrl
        })(editor);
        expect(addIcon.mock.calls).toEqual([['textToSpeech', _tinyMCE.default.textToSpeechIcon]]);
        expect(addButton.mock.calls).toEqual(expect.arrayContaining([[_tinyMCE.default.buttons.imageUploadButton, {
          icon: 'image',
          tooltip: 'Add Image',
          onAction: openImgModal
        }], [_tinyMCE.default.buttons.editImageSettings, {
          icon: 'image',
          tooltip: 'Edit Image Settings',
          onAction: expectedSettingsAction
        }], [_tinyMCE.default.buttons.code, {
          text: 'HTML',
          tooltip: 'Source code',
          onAction: openSourceCodeModal
        }], ['customLabelButton', {
          icon: 'textToSpeech',
          text: 'Label',
          tooltip: 'Apply a "Question" label to specific text, recognized by screen readers. Recommended to improve accessibility.',
          onAction: toggleLabelFormatting
        }]]));
        expect(addToggleButton.mock.calls).toContainEqual(expect.arrayContaining([_tinyMCE.default.buttons.codeBlock, {
          icon: 'sourcecode',
          tooltip: 'Code Block',
          onAction: toggleCodeFormatting,
          onSetup: setupCodeFormatting
        }]));
        expect(openImgModal).not.toHaveBeenCalled();
        expect(editor.on).toHaveBeenCalled();
      });
    });
    describe('parseContentForLabels', () => {
      test('it calls getContent and updateQuestion for some content', () => {
        const editor = {
          getContent: jest.fn(() => '<p><label>Some question label</label></p><p>some content <label>around a label</label> followed by more text</p><img src="/static/soMEImagEURl1.jpeg"/>')
        };
        const updateContent = jest.fn();
        const content = '<p><label>Some question label</label></p><p>some content </p><p><label>around a label</label></p><p> followed by more text</p><img src="/static/soMEImagEURl1.jpeg"/>';
        _module.parseContentForLabels({
          editor,
          updateContent
        });
        expect(editor.getContent).toHaveBeenCalled();
        expect(updateContent).toHaveBeenCalledWith(content);
      });
      test('it calls getContent and updateQuestion for empty content', () => {
        const editor = {
          getContent: jest.fn(() => '')
        };
        const updateContent = jest.fn();
        const content = '';
        _module.parseContentForLabels({
          editor,
          updateContent
        });
        expect(editor.getContent).toHaveBeenCalled();
        expect(updateContent).toHaveBeenCalledWith(content);
      });
    });
    describe('replaceStaticwithAsset', () => {
      test('it calls getContent and setContent for text editor', () => {
        const editor = {
          getContent: jest.fn(() => '<img src="/static/soMEImagEURl1.jpeg"/>'),
          setContent: jest.fn()
        };
        const imageUrls = [{
          staticFullUrl: '/assets/soMEImagEURl1.jpeg',
          displayName: 'soMEImagEURl1.jpeg'
        }];
        const lmsEndpointUrl = 'sOmEvaLue.cOm';
        _module.replaceStaticwithAsset({
          editor,
          imageUrls,
          lmsEndpointUrl
        });
        expect(editor.getContent).toHaveBeenCalled();
        expect(editor.setContent).toHaveBeenCalled();
      });
      test('it calls getContent and updateContent for expandable editor', () => {
        const editor = {
          getContent: jest.fn(() => '<img src="/static/soMEImagEURl1.jpeg"/>')
        };
        const imageUrls = [{
          staticFullUrl: '/assets/soMEImagEURl1.jpeg',
          displayName: 'soMEImagEURl1.jpeg'
        }];
        const lmsEndpointUrl = 'sOmEvaLue.cOm';
        const editorType = 'expandable';
        const updateContent = jest.fn();
        _module.replaceStaticwithAsset({
          editor,
          imageUrls,
          editorType,
          lmsEndpointUrl,
          updateContent
        });
        expect(editor.getContent).toHaveBeenCalled();
        expect(updateContent).toHaveBeenCalled();
      });
    });
    describe('setAssetToStaticUrl', () => {
      it('returns content with updated img links', () => {
        const editorValue = '<img src="/asset@asset-block/soME_ImagE_URl1"/> <a href="/asset@soMEImagEURl">testing link</a>';
        const assets = [{
          portableUrl: '/static/soMEImagEURl',
          displayName: 'soMEImagEURl'
        }, {
          portableUrl: '/static/soME_ImagE_URl1',
          displayName: 'soME ImagE URl1'
        }];
        const lmsEndpointUrl = 'sOmEvaLue.cOm';
        const content = _module.setAssetToStaticUrl({
          editorValue,
          assets,
          lmsEndpointUrl
        });
        expect(content).toEqual('<img src="/static/soME_ImagE_URl1"/> <a href="/static/soMEImagEURl">testing link</a>');
      });
    });
    describe('editorConfig', () => {
      const props = {
        editorContentHtml: null,
        editorType: 'text',
        lmsEndpointUrl: 'sOmEuRl.cOm',
        studioEndpointUrl: 'sOmEoThEruRl.cOm',
        images: mockImagesRef,
        isLibrary: false,
        translations: {}
      };
      const evt = 'fakeEvent';
      const editor = 'myEditor';
      const setupCustomBehavior = args => ({
        setupCustomBehavior: args
      });
      beforeEach(() => {
        props.setEditorRef = jest.fn();
        props.openImgModal = jest.fn();
        props.openSourceCodeModal = jest.fn();
        props.initializeEditor = jest.fn();
        props.updateContent = jest.fn();
        props.openInsertLinkModal = jest.fn();
        jest.spyOn(_module, moduleKeys.setupCustomBehavior).mockImplementationOnce(setupCustomBehavior);
        output = _module.editorConfig(props);
      });
      describe('text editor plugins and toolbar', () => {
        test('It configures plugins and toolbars correctly', () => {
          const pluginProps = {
            isLibrary: props.isLibrary,
            editorType: props.editorType
          };
          expect(output.init.plugins).toEqual((0, _pluginConfig.default)(pluginProps).plugins);
          expect(output.init.imagetools_toolbar).toEqual((0, _pluginConfig.default)(pluginProps).imageToolbar);
          expect(output.init.toolbar).toEqual((0, _pluginConfig.default)(pluginProps).toolbar);
          Object.keys((0, _pluginConfig.default)(pluginProps).config).forEach(key => {
            expect(output.init[key]).toEqual((0, _pluginConfig.default)(pluginProps).config[key]);
          });
          // Commented out as we investigate whether this is only needed for image proxy
          // expect(output.init.imagetools_cors_hosts).toMatchObject([props.lmsEndpointUrl]);
        });
      });
      describe('text editor plugins and toolbar for content library', () => {
        test('It configures plugins and toolbars correctly', () => {
          const pluginProps = {
            isLibrary: true,
            editorType: props.editorType
          };
          output = _module.editorConfig(_objectSpread(_objectSpread({}, props), {}, {
            isLibrary: true
          }));
          expect(output.init.plugins).toEqual((0, _pluginConfig.default)(pluginProps).plugins);
          expect(output.init.imagetools_toolbar).toEqual((0, _pluginConfig.default)(pluginProps).imageToolbar);
          expect(output.init.toolbar).toEqual((0, _pluginConfig.default)(pluginProps).toolbar);
          expect(output.init.quickbars_insert_toolbar).toEqual((0, _pluginConfig.default)(pluginProps).quickbarsInsertToolbar);
          expect(output.init.quickbars_selection_toolbar).toEqual((0, _pluginConfig.default)(pluginProps).quickbarsSelectionToolbar);
          Object.keys((0, _pluginConfig.default)(pluginProps).config).forEach(key => {
            expect(output.init[key]).toEqual((0, _pluginConfig.default)(pluginProps).config[key]);
          });
        });
      });
      describe('problem editor question plugins and toolbar', () => {
        test('It configures plugins and toolbars correctly', () => {
          const pluginProps = {
            isLibrary: props.isLibrary,
            editorType: 'question',
            placeholder: 'soMEtExT'
          };
          output = _module.editorConfig(_objectSpread(_objectSpread({}, props), {}, {
            editorType: 'question',
            placeholder: 'soMEtExT'
          }));
          expect(output.init.plugins).toEqual((0, _pluginConfig.default)(pluginProps).plugins);
          expect(output.init.imagetools_toolbar).toEqual((0, _pluginConfig.default)(pluginProps).imageToolbar);
          expect(output.init.toolbar).toEqual((0, _pluginConfig.default)(pluginProps).toolbar);
          expect(output.init.quickbars_insert_toolbar).toEqual((0, _pluginConfig.default)(pluginProps).quickbarsInsertToolbar);
          expect(output.init.quickbars_selection_toolbar).toEqual((0, _pluginConfig.default)(pluginProps).quickbarsSelectionToolbar);
          Object.keys((0, _pluginConfig.default)(pluginProps).config).forEach(key => {
            expect(output.init[key]).toEqual((0, _pluginConfig.default)(pluginProps).config[key]);
          });
        });
      });
      describe('expandable text area plugins and toolbar', () => {
        test('It configures plugins, toolbars, and quick toolbars correctly', () => {
          const pluginProps = {
            isLibrary: props.isLibrary,
            editorType: 'expandable',
            placeholder: 'soMEtExT'
          };
          output = _module.editorConfig(_objectSpread(_objectSpread({}, props), {}, {
            editorType: 'expandable',
            placeholder: 'soMEtExT'
          }));
          expect(output.init.plugins).toEqual((0, _pluginConfig.default)(pluginProps).plugins);
          expect(output.init.imagetools_toolbar).toEqual((0, _pluginConfig.default)(pluginProps).imageToolbar);
          expect(output.init.toolbar).toEqual((0, _pluginConfig.default)(pluginProps).toolbar);
          expect(output.init.quickbars_insert_toolbar).toEqual((0, _pluginConfig.default)(pluginProps).quickbarsInsertToolbar);
          expect(output.init.quickbars_selection_toolbar).toEqual((0, _pluginConfig.default)(pluginProps).quickbarsSelectionToolbar);
          Object.keys((0, _pluginConfig.default)(pluginProps).config).forEach(key => {
            expect(output.init[key]).toEqual((0, _pluginConfig.default)(pluginProps).config[key]);
          });
        });
      });
      test('It creates an onInit which calls initializeEditor and setEditorRef', () => {
        output.onInit(evt, editor);
        expect(props.setEditorRef).toHaveBeenCalledWith(editor);
        expect(props.initializeEditor).toHaveBeenCalled();
      });
      test('It sets the blockvalue to be empty string by default', () => {
        expect(output.initialValue).toBe('');
      });
      test('It sets the blockvalue to be the blockvalue if nonempty', () => {
        const editorContentHtml = 'SomE hTML content';
        output = _module.editorConfig(_objectSpread(_objectSpread({}, props), {}, {
          editorContentHtml
        }));
        expect(output.initialValue).toBe(editorContentHtml);
      });
      it('calls setupCustomBehavior on setup', () => {
        expect(output.init.setup).toEqual(setupCustomBehavior({
          editorType: props.editorType,
          updateContent: props.updateContent,
          openImgModal: props.openImgModal,
          openSourceCodeModal: props.openSourceCodeModal,
          setImage: props.setSelection,
          imageUrls: _module.fetchImageUrls(props.images),
          images: mockImagesRef,
          lmsEndpointUrl: props.lmsEndpointUrl,
          openInsertLinkModal: props.openInsertLinkModal,
          translations: props.translations
        }));
      });
    });
    describe('filterAssets', () => {
      const emptyAssets = {};
      const assets = {
        sOmEaSsET: {
          contentType: 'image/'
        }
      };
      test('returns an empty array', () => {
        const emptyFilterAssets = _module.filterAssets({
          assets: emptyAssets
        });
        expect(emptyFilterAssets).toEqual([]);
      });
      test('returns filtered array of images', () => {
        const FilteredAssets = _module.filterAssets({
          assets
        });
        expect(FilteredAssets).toEqual([{
          contentType: 'image/'
        }]);
      });
    });
    describe('imgModalToggle', () => {
      const hookKey = state.keys.isImageModalOpen;
      beforeEach(() => {
        hook = _module.imgModalToggle();
      });
      test('isOpen: state value', () => {
        expect(hook.isImgOpen).toEqual(state.stateVals[hookKey]);
      });
      test('openModal: calls setter with true', () => {
        hook.openImgModal();
        expect(state.setState[hookKey]).toHaveBeenCalledWith(true);
      });
      test('closeModal: calls setter with false', () => {
        hook.closeImgModal();
        expect(state.setState[hookKey]).toHaveBeenCalledWith(false);
      });
    });
    describe('sourceCodeModalToggle', () => {
      const editorRef = {
        current: {
          focus: jest.fn()
        }
      };
      const hookKey = state.keys.isSourceCodeModalOpen;
      beforeEach(() => {
        hook = _module.sourceCodeModalToggle(editorRef);
      });
      test('isOpen: state value', () => {
        expect(hook.isSourceCodeOpen).toEqual(state.stateVals[hookKey]);
      });
      test('openModal: calls setter with true', () => {
        hook.openSourceCodeModal();
        expect(state.setState[hookKey]).toHaveBeenCalledWith(true);
      });
      test('closeModal: calls setter with false', () => {
        hook.closeSourceCodeModal();
        expect(state.setState[hookKey]).toHaveBeenCalledWith(false);
      });
    });
    describe('insertLinkModalToggle', () => {
      const hookKey = state.keys.isInsertLinkModalOpen;
      beforeEach(() => {
        hook = _module.insertLinkModalToggle();
      });
      test('isInsertLinkOpen: state value', () => {
        expect(hook.isInsertLinkOpen).toEqual(state.stateVals[hookKey]);
      });
      test('openInsertLinkModal: calls setter with true', () => {
        hook.openInsertLinkModal();
        expect(state.setState[hookKey]).toHaveBeenCalledWith(true);
      });
      test('closeInsertLinkModal: calls setter with false', () => {
        hook.closeInsertLinkModal();
        expect(state.setState[hookKey]).toHaveBeenCalledWith(false);
      });
    });
    describe('useTranslations', () => {
      beforeEach(() => {
        hook = _module.useTranslations;
        const intl = (0, _i18n.createIntl)({
          locale: 'en',
          messages: {
            'app.message1': 'This is message 1',
            'app.message2': 'This is message 2'
          }
        });
        jest.spyOn(_react.default, 'useContext').mockReturnValue(intl);
        const intlFormatMessage = {
          formatMessage: jest.fn(message => `Translated: ${message?.defaultMessage}`)
        };
        _i18n.useIntl.mockReturnValue(intlFormatMessage);
      });
      test('should translate messages correctly', () => {
        const testMessages = {
          message1: {
            id: 'app.message1',
            defaultMessage: 'This is message 1'
          },
          message2: {
            id: 'app.message2',
            defaultMessage: 'This is message 2'
          }
        };
        const result = hook(testMessages);
        expect(result.message1).toBe('Translated: This is message 1');
        expect(result.message2).toBe('Translated: This is message 2');
      });
      test('should return an empty object without messages', () => {
        const testMessages = {};
        const result = hook(testMessages);
        expect(result).toEqual({});
      });
      test('should handle undefined messages', () => {
        const testMessages = undefined;
        const result = hook(testMessages);
        expect(result).toEqual({});
      });
    });
    describe('openModalWithSelectedImage', () => {
      const setImage = jest.fn();
      const openImgModal = jest.fn();
      let editor;
      beforeEach(() => {
        editor = {
          selection: {
            getNode: () => mockNodeWithInitialContentDimensions
          }
        };
        _module.openModalWithSelectedImage({
          editor,
          images: mockImagesRef,
          openImgModal,
          setImage
        })();
      });
      afterEach(() => {
        jest.clearAllMocks();
      });
      test('updates React state for selected image to be value stored in editor, adding dimensions from images ref', () => {
        expect(setImage).toHaveBeenCalledWith({
          externalUrl: mockNode.src,
          altText: mockNode.alt,
          width: mockImage.width,
          height: mockImage.height
        });
      });
      test('opens image setting modal', () => {
        expect(openImgModal).toHaveBeenCalled();
      });
      describe('when images cannot be successfully matched', () => {
        beforeEach(() => {
          editor = {
            selection: {
              getNode: () => mockNode
            }
          };
          _module.openModalWithSelectedImage({
            editor,
            images: mockImagesRef,
            openImgModal,
            setImage
          })();
        });
        afterEach(() => {
          jest.clearAllMocks();
        });
        test('updates React state for selected image to be value stored in editor, setting dimensions to null', () => {
          expect(setImage).toHaveBeenCalledWith({
            externalUrl: mockNode.src,
            altText: mockNode.alt,
            width: null,
            height: null
          });
        });
      });
    });
    describe('selectedImage hooks', () => {
      const val = {
        a: 'VaLUe'
      };
      beforeEach(() => {
        hook = _module.selectedImage(val);
      });
      test('selection: state value', () => {
        expect(hook.selection).toEqual(state.stateVals[state.keys.imageSelection]);
      });
      test('setSelection: setter for value', () => {
        expect(hook.setSelection).toEqual(state.setState[state.keys.imageSelection]);
      });
      test('clearSelection: calls setter with null', () => {
        expect(hook.setSelection).not.toHaveBeenCalled();
        hook.clearSelection();
        expect(hook.setSelection).toHaveBeenCalledWith(null);
      });
    });
    describe('imageMatchRegex', () => {
      it('should match a valid image url using "@" separators', () => {
        expect('http://localhost:18000/asset-v1:TestX+Test01+Test0101+type@asset+block@image-name.png').toMatch(_module.imageMatchRegex);
      });
      it('should match a url including the keywords "asset-v1", "type", "block" in that order', () => {
        expect('https://some.completely/made.up///url-with.?!keywords/asset-v1:Some-asset-key?type=some.type.key!block@image-name.png').toMatch(_module.imageMatchRegex);
      });
      it('should not match a url excluding the keyword "asset-v1"', () => {
        expect('https://some.completely/made.up///url-with.?!keywords/Some-asset-key?type=some.type.key!block@image-name.png').not.toMatch(_module.imageMatchRegex);
      });
      it('should match an identifier including the keywords "asset-v1", "type", "block" using "/" separators', () => {
        expect('asset-v1:TestX+Test01+Test0101+type/asset+block/image-name.png').toMatch(_module.imageMatchRegex);
      });
      it('should capture values for the keys "asset-v1", "type", "block"', () => {
        const match = 'asset-v1:TestX+Test01+Test0101+type/asset+block/image-name.png'.match(_module.imageMatchRegex);
        expect(match[1]).toBe('TestX+Test01+Test0101');
        expect(match[2]).toBe('asset');
        expect(match[3]).toBe('image-name.png');
      });
    });
    describe('matchImageStringsByIdentifiers', () => {
      it('should be true for an image url and identifier that have the same values for asset-v1, type, and block', () => {
        const url = 'http://localhost:18000/asset-v1:TestX+Test01+Test0101+type@asset+block@image-name.png';
        const id = 'asset-v1:TestX+Test01+Test0101+type/asset+block/image-name.png';
        expect(_module.matchImageStringsByIdentifiers(url, id)).toBe(true);
      });
      it('should be false for an image url and identifier that have different values for block', () => {
        const url = 'http://localhost:18000/asset-v1:TestX+Test01+Test0101+type@asset+block@image-name.png';
        const id = 'asset-v1:TestX+Test01+Test0101+type/asset+block/different-image-name.png';
        expect(_module.matchImageStringsByIdentifiers(url, id)).toBe(false);
      });
      it('should return null if it doesnt receive two strings as input', () => {
        expect(_module.matchImageStringsByIdentifiers(['a'], {
          b: 'c '
        })).toBe(null);
      });
      it('should return undefined if the strings dont match the regex at all', () => {
        expect(_module.matchImageStringsByIdentifiers('wrong-url', 'blub')).toBe(undefined);
      });
    });
    describe('addImagesAndDimensionsToRef', () => {
      it('should add images to ref', () => {
        const imagesRef = {
          current: null
        };
        const assets = _objectSpread(_objectSpread({}, mockAssets), {}, {
          height: undefined,
          width: undefined
        });
        _module.addImagesAndDimensionsToRef({
          imagesRef,
          assets,
          editorContentHtml: mockEditorContentHtml
        });
        expect(imagesRef.current).toEqual([mockImage]);
        expect(imagesRef.current[0].width).toBe(initialContentWidth);
        expect(imagesRef.current[0].height).toBe(initialContentHeight);
      });
    });
    describe('getImageResizeHandler', () => {
      const setImage = jest.fn();
      it('sets image ref and state to new width', () => {
        expect(mockImagesRef.current[0].width).toBe(initialContentWidth);
        _module.getImageResizeHandler({
          editor: mockEditorWithSelection,
          imagesRef: mockImagesRef,
          setImage
        })();
        expect(setImage).toHaveBeenCalledTimes(1);
        expect(setImage).toHaveBeenCalledWith(expect.objectContaining({
          width: editorImageWidth
        }));
        expect(mockImagesRef.current[0].width).not.toBe(initialContentWidth);
        expect(mockImagesRef.current[0].width).toBe(editorImageWidth);
      });
    });
    describe('updateImageDimensions', () => {
      const unchangedImg = {
        id: 'asset-v1:TestX+Test01+Test0101+type@asset+block@unchanged-image.png',
        width: 3,
        height: 5
      };
      const images = [mockImage, unchangedImg];
      it('updates dimensions of correct image in images array', () => {
        const {
          result,
          foundMatch
        } = _module.updateImageDimensions({
          images,
          url: mockNode.src,
          width: 123,
          height: 321
        });
        const imageToHaveBeenUpdated = result.find(img => img.id === mockImage.id);
        const imageToHaveBeenUnchanged = result.find(img => img.id === unchangedImg.id);
        expect(imageToHaveBeenUpdated.width).toBe(123);
        expect(imageToHaveBeenUpdated.height).toBe(321);
        expect(imageToHaveBeenUnchanged.width).toBe(3);
        expect(imageToHaveBeenUnchanged.height).toBe(5);
        expect(foundMatch).toBe(true);
      });
      it('does not update images if id is not found', () => {
        const {
          result,
          foundMatch
        } = _module.updateImageDimensions({
          images,
          url: 'not_found',
          width: 123,
          height: 321
        });
        expect(result.find(img => img.width === 123 || img.height === 321)).toBeFalsy();
        expect(foundMatch).toBe(false);
      });
    });
  });
});
//# sourceMappingURL=hooks.test.js.map