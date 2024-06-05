"use strict";

var _react = _interopRequireDefault(require("react"));
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
  useRef: jest.fn(val => ({
    current: val
  })),
  useEffect: jest.fn(),
  useCallback: (cb, prereqs) => ({
    cb,
    prereqs
  })
}));
describe('SourceCodeModal hooks', () => {
  const mockContent = 'sOmEMockHtML';
  const mockSetContent = jest.fn();
  const mockEditorRef = {
    current: {
      setContent: mockSetContent,
      getContent: jest.fn(() => mockContent)
    }
  };
  const mockClose = jest.fn();
  test('getSaveBtnProps', () => {
    const mockRef = {
      current: {
        state: {
          doc: mockContent
        }
      }
    };
    const input = {
      ref: mockRef,
      editorRef: mockEditorRef,
      close: mockClose
    };
    const resultProps = _module.getSaveBtnProps(input);
    resultProps.onClick();
    expect(mockSetContent).toHaveBeenCalledWith(mockContent);
    expect(mockClose).toHaveBeenCalled();
  });
  test('prepareSourceCodeModal', () => {
    const props = {
      close: mockClose,
      editorRef: mockEditorRef
    };
    const mockRef = {
      current: 'rEf'
    };
    const spyRef = jest.spyOn(_react.default, 'useRef').mockReturnValueOnce(mockRef);
    const mockButton = 'mOcKBuTton';
    const spyButtons = jest.spyOn(_module, 'getSaveBtnProps').mockImplementation(() => mockButton);
    const result = _module.prepareSourceCodeModal(props);
    expect(spyRef).toHaveBeenCalled();
    expect(spyButtons).toHaveBeenCalled();
    expect(result).toStrictEqual({
      saveBtnProps: mockButton,
      value: mockEditorRef.current.getContent(),
      ref: mockRef
    });
  });
});
//# sourceMappingURL=hooks.test.js.map