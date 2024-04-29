"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.acceptedImgKeys = exports.MIN_WIDTH = exports.MIN_HEIGHT = exports.MIN_FILE_SIZE_KB = exports.MAX_WIDTH = exports.MAX_HEIGHT = exports.MAX_FILE_SIZE_MB = exports.ASPECT_RATIO_ERROR_MARGIN = exports.ASPECT_RATIO = void 0;
var _utils = require("../../../../../../utils");
const acceptedImgKeys = exports.acceptedImgKeys = (0, _utils.StrictDict)({
  gif: '.gif',
  jpg: '.jpg',
  jpeg: '.jpeg',
  png: '.png',
  bmp: '.bmp',
  bmp2: '.bmp2'
});
const MAX_FILE_SIZE_MB = exports.MAX_FILE_SIZE_MB = 2000000;
const MIN_FILE_SIZE_KB = exports.MIN_FILE_SIZE_KB = 2000;
const MAX_WIDTH = exports.MAX_WIDTH = 1280;
const MAX_HEIGHT = exports.MAX_HEIGHT = 720;
const MIN_WIDTH = exports.MIN_WIDTH = 640;
const MIN_HEIGHT = exports.MIN_HEIGHT = 360;
// eslint-disable-next-line no-loss-of-precision
const ASPECT_RATIO = exports.ASPECT_RATIO = 1.7777777777777777777;
const ASPECT_RATIO_ERROR_MARGIN = exports.ASPECT_RATIO_ERROR_MARGIN = 0.1;
var _default = exports.default = {
  acceptedImgKeys,
  MAX_FILE_SIZE_MB,
  MIN_FILE_SIZE_KB,
  MAX_WIDTH,
  MAX_HEIGHT,
  MIN_WIDTH,
  MIN_HEIGHT,
  ASPECT_RATIO,
  ASPECT_RATIO_ERROR_MARGIN
};
//# sourceMappingURL=constants.js.map