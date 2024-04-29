"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.videoDataProps = exports.singleVideoData = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _licenses = require("../../constants/licenses");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const videoDataProps = exports.videoDataProps = {
  videoSource: _propTypes.default.string,
  videoId: _propTypes.default.string,
  fallbackVideos: _propTypes.default.arrayOf(_propTypes.default.string),
  allowVideoDownloads: _propTypes.default.bool,
  allowVideoSharing: _propTypes.default.bool,
  thumbnail: _propTypes.default.string,
  transcripts: _propTypes.default.objectOf(_propTypes.default.string),
  allowTranscriptDownloads: _propTypes.default.bool,
  duration: _propTypes.default.shape({
    startTime: _propTypes.default.number,
    stopTime: _propTypes.default.number,
    total: _propTypes.default.number
  }),
  showTranscriptByDefult: _propTypes.default.bool,
  handout: _propTypes.default.string,
  licenseType: _propTypes.default.string,
  licenseDetails: _propTypes.default.shape({
    attribution: _propTypes.default.bool,
    noncommercial: _propTypes.default.bool,
    noDerivatives: _propTypes.default.bool,
    shareAlike: _propTypes.default.bool
  })
};
const singleVideoData = exports.singleVideoData = {
  videoSource: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  videoId: '7c12381b-6503-4d52-82bd-6ad01b902220',
  fallbackVideos: ['https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
  allowVideoDownloads: true,
  allowVideoSharing: true,
  thumbnail: 'someString',
  // filename
  transcripts: {
    en: {
      filename: 'my-transcript-url'
    }
  },
  allowTranscriptDownloads: false,
  duration: {
    startTime: 0,
    stopTime: 0,
    total: 0
  },
  showTranscriptByDefault: false,
  handout: 'my-handout-url',
  licenseType: _licenses.LicenseTypes.creativeCommons,
  licenseDetails: {
    attribution: true,
    noncommercial: false,
    noDerivatives: false,
    shareAlike: false
  }
};
//# sourceMappingURL=mockVideoData.js.map