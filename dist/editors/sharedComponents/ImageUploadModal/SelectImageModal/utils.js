"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortMessages = exports.sortKeys = exports.sortFunctions = exports.acceptedImgKeys = void 0;
var _utils = require("../../../utils");
var _messages = _interopRequireDefault(require("./messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const sortKeys = exports.sortKeys = (0, _utils.StrictDict)({
  dateNewest: 'dateNewest',
  dateOldest: 'dateOldest',
  nameAscending: 'nameAscending',
  nameDescending: 'nameDescending'
});
const messageKeys = (0, _utils.keyStore)(_messages.default);
const sortMessages = exports.sortMessages = (0, _utils.StrictDict)({
  dateNewest: _messages.default[messageKeys.sortByDateNewest],
  dateOldest: _messages.default[messageKeys.sortByDateOldest],
  nameAscending: _messages.default[messageKeys.sortByNameAscending],
  nameDescending: _messages.default[messageKeys.sortByNameDescending]
});
const sortFunctions = exports.sortFunctions = (0, _utils.StrictDict)({
  dateNewest: (a, b) => b.dateAdded - a.dateAdded,
  dateOldest: (a, b) => a.dateAdded - b.dateAdded,
  nameAscending: (a, b) => {
    const nameA = a.displayName.toLowerCase();
    const nameB = b.displayName.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameB < nameA) {
      return 1;
    }
    return b.dateAdded - a.dateAdded;
  },
  nameDescending: (a, b) => {
    const nameA = a.displayName.toLowerCase();
    const nameB = b.displayName.toLowerCase();
    if (nameA < nameB) {
      return 1;
    }
    if (nameB < nameA) {
      return -1;
    }
    return b.dateAdded - a.dateAdded;
  }
});
const acceptedImgKeys = exports.acceptedImgKeys = (0, _utils.StrictDict)({
  gif: '.gif',
  jpg: '.jpg',
  jpeg: '.jpeg',
  png: '.png',
  tif: '.tif',
  tiff: '.tiff',
  ico: '.ico'
});
//# sourceMappingURL=utils.js.map