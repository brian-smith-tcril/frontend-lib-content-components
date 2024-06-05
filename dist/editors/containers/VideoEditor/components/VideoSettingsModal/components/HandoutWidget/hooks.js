"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = exports.parseHandoutName = exports.fileSizeError = exports.fileInput = exports.default = exports.checkValidFileSize = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _redux = require("../../../../../../data/redux");
var _module = _interopRequireWildcard(require("./hooks"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const state = exports.state = {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  showSizeError: args => _react.default.useState(args)
};
const parseHandoutName = _ref => {
  let {
    handout
  } = _ref;
  if (handout) {
    const handoutName = handout.slice(handout.lastIndexOf('@') + 1);
    return handoutName;
  }
  return 'None';
};
exports.parseHandoutName = parseHandoutName;
const checkValidFileSize = _ref2 => {
  let {
    file,
    onSizeFail
  } = _ref2;
  // Check if the file size is greater than 20 MB, upload size limit
  if (file.size > 20000000) {
    onSizeFail();
    return false;
  }
  return true;
};
exports.checkValidFileSize = checkValidFileSize;
const fileInput = _ref3 => {
  let {
    fileSizeError
  } = _ref3;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = (0, _reactRedux.useDispatch)();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ref = _react.default.useRef();
  const click = () => ref.current.click();
  const addFile = e => {
    const file = e.target.files[0];
    if (file && _module.checkValidFileSize({
      file,
      onSizeFail: () => {
        fileSizeError.set();
      }
    })) {
      dispatch(_redux.thunkActions.video.uploadHandout({
        file
      }));
    }
  };
  return {
    click,
    addFile,
    ref
  };
};
exports.fileInput = fileInput;
const fileSizeError = () => {
  const [showSizeError, setShowSizeError] = _module.state.showSizeError(false);
  return {
    fileSizeError: {
      show: showSizeError,
      set: () => setShowSizeError(true),
      dismiss: () => setShowSizeError(false)
    }
  };
};
exports.fileSizeError = fileSizeError;
var _default = exports.default = {
  fileInput,
  fileSizeError,
  parseHandoutName
};
//# sourceMappingURL=hooks.js.map