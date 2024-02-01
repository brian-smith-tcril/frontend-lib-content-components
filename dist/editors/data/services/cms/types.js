"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.videoDataProps = exports.problemDataProps = exports.default = exports.answerOptionProps = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _problem = require("../../constants/problem");
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
const answerOptionProps = exports.answerOptionProps = _propTypes.default.shape({
  id: _propTypes.default.string,
  title: _propTypes.default.string,
  correct: _propTypes.default.bool,
  feedback: _propTypes.default.string,
  selectedFeedback: _propTypes.default.string,
  unselectedFeedback: _propTypes.default.string
});
const problemDataProps = exports.problemDataProps = {
  rawOLX: _propTypes.default.string,
  problemType: _propTypes.default.instanceOf(_problem.ProblemTypes),
  question: _propTypes.default.string,
  answers: _propTypes.default.arrayOf(answerOptionProps),
  settings: _propTypes.default.shape({
    scoring: _propTypes.default.shape({
      advanced: _propTypes.default.bool,
      scoring: _propTypes.default.shape({
        weight: _propTypes.default.number,
        attempts: _propTypes.default.shape({
          unlimited: _propTypes.default.bool,
          number: _propTypes.default.number
        })
      })
    }),
    hints: _propTypes.default.arrayOf(_propTypes.default.string),
    timeBetween: _propTypes.default.number,
    showAnswer: _propTypes.default.shape({
      on: _propTypes.default.instanceOf(_problem.ShowAnswerTypes),
      afterAtempts: _propTypes.default.number
    }),
    showResetButton: _propTypes.default.bool,
    defaultSettings: _propTypes.default.shape({
      max_attempts: _propTypes.default.number,
      showanswer: _propTypes.default.string,
      show_reset_button: _propTypes.default.bool,
      rerandomize: _propTypes.default.string
    })
  })
};
var _default = exports.default = {
  videoDataProps,
  problemDataProps,
  answerOptionProps
};
//# sourceMappingURL=types.js.map