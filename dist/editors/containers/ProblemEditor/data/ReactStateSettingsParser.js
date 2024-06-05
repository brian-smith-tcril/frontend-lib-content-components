"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _fastXmlParser = require("fast-xml-parser");
var _lodashEs = _interopRequireDefault(require("lodash-es"));
var _problem = require("../../../data/constants/problem");
var _SettingsParser = require("./SettingsParser");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SETTING_KEYS = ['max_attempts', 'weight', 'showanswer', 'show_reset_button', 'rerandomize'];
class ReactStateSettingsParser {
  constructor(problemState) {
    this.problem = problemState.problem;
    this.rawOLX = problemState.rawOLX;
  }
  getSettings() {
    let settings = {};
    const {
      defaultSettings
    } = this.problem;
    const stateSettings = this.problem.settings;
    const numberOfAttemptsChoice = [_problem.ShowAnswerTypesKeys.AFTER_SOME_NUMBER_OF_ATTEMPTS, _problem.ShowAnswerTypesKeys.AFTER_ALL_ATTEMPTS, _problem.ShowAnswerTypesKeys.AFTER_ALL_ATTEMPTS_OR_CORRECT];
    settings = (0, _SettingsParser.popuplateItem)(settings, 'number', 'max_attempts', stateSettings.scoring.attempts, defaultSettings?.maxAttempts, true);
    settings = (0, _SettingsParser.popuplateItem)(settings, 'weight', 'weight', stateSettings.scoring);
    settings = (0, _SettingsParser.popuplateItem)(settings, 'on', 'showanswer', stateSettings.showAnswer, defaultSettings?.showanswer);
    if (_lodashEs.default.includes(numberOfAttemptsChoice, stateSettings.showAnswer.on)) {
      settings = (0, _SettingsParser.popuplateItem)(settings, 'afterAttempts', 'attempts_before_showanswer_button', stateSettings.showAnswer);
    }
    settings = (0, _SettingsParser.popuplateItem)(settings, 'showResetButton', 'show_reset_button', stateSettings, defaultSettings?.showResetButton);
    settings = (0, _SettingsParser.popuplateItem)(settings, 'timeBetween', 'submission_wait_seconds', stateSettings);
    settings = (0, _SettingsParser.popuplateItem)(settings, 'randomization', 'rerandomize', stateSettings, defaultSettings?.rerandomize);
    return settings;
  }
  parseRawOlxSettings() {
    const rawOlxSettings = this.getSettings();
    const parserOptions = {
      ignoreAttributes: false,
      alwaysCreateTextNode: true,
      numberParseOptions: {
        leadingZeros: false,
        hex: false
      }
    };
    const parser = new _fastXmlParser.XMLParser(parserOptions);
    const olx = parser.parse(this.rawOLX);
    const settingAttributes = Object.keys(olx.problem).filter(tag => tag.startsWith('@_'));
    settingAttributes.forEach(attribute => {
      const attributeKey = attribute.substring(2);
      if (SETTING_KEYS.includes(attributeKey)) {
        if (attributeKey === 'max_attempts' || attributeKey === 'weight') {
          rawOlxSettings[attributeKey] = parseInt(olx.problem[attribute]);
        } else {
          rawOlxSettings[attributeKey] = olx.problem[attribute];
        }
      }
    });
    return rawOlxSettings;
  }
}
var _default = exports.default = ReactStateSettingsParser;
//# sourceMappingURL=ReactStateSettingsParser.js.map