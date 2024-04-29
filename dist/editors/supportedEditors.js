"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TextEditor = _interopRequireDefault(require("./containers/TextEditor"));
var _VideoEditor = _interopRequireDefault(require("./containers/VideoEditor"));
var _ProblemEditor = _interopRequireDefault(require("./containers/ProblemEditor"));
var _VideoUploadEditor = _interopRequireDefault(require("./containers/VideoUploadEditor"));
var _GameEditor = _interopRequireDefault(require("./containers/GameEditor"));
var _app = require("./data/constants/app");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// ADDED_EDITOR_IMPORTS GO HERE

const supportedEditors = {
  [_app.blockTypes.html]: _TextEditor.default,
  [_app.blockTypes.video]: _VideoEditor.default,
  [_app.blockTypes.problem]: _ProblemEditor.default,
  [_app.blockTypes.video_upload]: _VideoUploadEditor.default,
  // ADDED_EDITORS GO BELOW
  [_app.blockTypes.game]: _GameEditor.default
};
var _default = exports.default = supportedEditors;
//# sourceMappingURL=supportedEditors.js.map