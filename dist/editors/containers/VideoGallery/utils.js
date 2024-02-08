"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortMessages = exports.sortKeys = exports.sortFunctions = exports.filterMessages = exports.filterKeys = exports.acceptedImgKeys = void 0;
var _utils = require("../../utils");
var _messages = _interopRequireDefault(require("./messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const messageKeys = (0, _utils.keyStore)(_messages.default);
const sortKeys = exports.sortKeys = (0, _utils.StrictDict)({
  dateNewest: 'dateNewest',
  dateOldest: 'dateOldest',
  nameAscending: 'nameAscending',
  nameDescending: 'nameDescending',
  durationShortest: 'durationShortest',
  durationLongest: 'durationLongest'
});
const sortMessages = exports.sortMessages = (0, _utils.StrictDict)({
  dateNewest: _messages.default[messageKeys.sortByDateNewest],
  dateOldest: _messages.default[messageKeys.sortByDateOldest],
  nameAscending: _messages.default[messageKeys.sortByNameAscending],
  nameDescending: _messages.default[messageKeys.sortByNameDescending],
  durationShortest: _messages.default[messageKeys.sortByDurationShortest],
  durationLongest: _messages.default[messageKeys.sortByDurationLongest]
});
const filterKeys = exports.filterKeys = (0, _utils.StrictDict)({
  anyStatus: 'anyStatus',
  uploading: 'Uploading',
  processing: 'In Progress',
  ready: 'Ready',
  failed: 'Failed'
});
const filterMessages = exports.filterMessages = (0, _utils.StrictDict)({
  anyStatus: _messages.default[messageKeys.filterByVideoStatusAny],
  uploading: _messages.default[messageKeys.filterByVideoStatusUploading],
  processing: _messages.default[messageKeys.filterByVideoStatusProcessing],
  ready: _messages.default[messageKeys.filterByVideoStatusReady],
  failed: _messages.default[messageKeys.filterByVideoStatusFailed]
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
  },
  durationShortest: (a, b) => a.duration - b.duration,
  durationLongest: (a, b) => b.duration - a.duration
});
const acceptedImgKeys = exports.acceptedImgKeys = (0, _utils.StrictDict)({
  mp4: '.mp4'
});
//# sourceMappingURL=utils.js.map