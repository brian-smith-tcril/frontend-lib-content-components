"use strict";

var _OLXParser = require("./OLXParser");
var _olxTestData = require("./mockData/olxTestData");
var _editorTestData = require("./mockData/editorTestData");
var _ReactStateOLXParser = _interopRequireDefault(require("./ReactStateOLXParser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('Check React State OLXParser problem', () => {
  test('for checkbox with feedback and hints problem type', () => {
    const olxparser = new _OLXParser.OLXParser(_olxTestData.checkboxesOLXWithFeedbackAndHintsOLX.rawOLX);
    const problem = olxparser.getParsedOLXData();
    const stateParser = new _ReactStateOLXParser.default({
      problem,
      editorObject: _editorTestData.checkboxesWithFeedbackAndHints
    });
    const buildOLX = stateParser.buildOLX();
    expect(buildOLX.replace(/\s/g, '')).toBe(_olxTestData.checkboxesOLXWithFeedbackAndHintsOLX.buildOLX.replace(/\s/g, ''));
  });
  test('Test dropdown with feedback and hints problem type', () => {
    const olxparser = new _OLXParser.OLXParser(_olxTestData.dropdownOLXWithFeedbackAndHintsOLX.rawOLX);
    const problem = olxparser.getParsedOLXData();
    const stateParser = new _ReactStateOLXParser.default({
      problem,
      editorObject: _editorTestData.dropdownWithFeedbackAndHints
    });
    const buildOLX = stateParser.buildOLX();
    expect(buildOLX.replace(/\s/g, '')).toEqual(_olxTestData.dropdownOLXWithFeedbackAndHintsOLX.buildOLX.replace(/\s/g, ''));
  });
  test('Test string response with feedback and hints problem type', () => {
    const olxparser = new _OLXParser.OLXParser(_olxTestData.textInputWithFeedbackAndHintsOLX.rawOLX);
    const problem = olxparser.getParsedOLXData();
    const stateParser = new _ReactStateOLXParser.default({
      problem,
      editorObject: _editorTestData.textInputWithFeedbackAndHints
    });
    const buildOLX = stateParser.buildOLX();
    expect(buildOLX.replace(/\s/g, '')).toEqual(_olxTestData.textInputWithFeedbackAndHintsOLX.buildOLX.replace(/\s/g, ''));
  });
  describe('Multiple choice with feedback and hints problem type', () => {
    const olxparser = new _OLXParser.OLXParser(_olxTestData.multipleChoiceWithFeedbackAndHintsOLX.rawOLX);
    const problem = olxparser.getParsedOLXData();
    const stateParser = new _ReactStateOLXParser.default({
      problem,
      editorObject: _editorTestData.multipleChoiceWithFeedbackAndHints
    });
    it('should parse correctly', () => {
      const buildOLX = stateParser.buildOLX();
      expect(buildOLX.replace(/\s/g, '')).toEqual(_olxTestData.multipleChoiceWithFeedbackAndHintsOLX.buildOLX.replace(/\s/g, ''));
    });
  });
  describe('with label and em tag wrapped in div: ', () => {
    const olxparser = new _OLXParser.OLXParser(_olxTestData.multipleChoiceWithFeedbackAndHintsOLX.rawOLX);
    const problem = olxparser.getParsedOLXData();
    const stateParser = new _ReactStateOLXParser.default({
      problem,
      editorObject: _editorTestData.multipleChoiceWithFeedbackAndHints
    });
    stateParser.editorObject.question = '<p>You can use this template as a guide to the simple editor markdown and OLX markup to use for multiple choice with hints and feedback problems. Edit this component to replace this template with your own assessment.</p>\n<div><label>Add the question text, or prompt, here. This text is required.</label> <em class="olx_description">You can add an optional tip or note related to the prompt like this. </em><em>Just a generic em tag</em></div>';
    it('parser should not delete <em> tags', () => {
      const buildOLX = stateParser.buildOLX();
      expect(buildOLX.replace(/\s/g, '')).toEqual(_olxTestData.multipleChoiceWithFeedbackAndHintsOLX.buildOLX.replace(/\s/g, ''));
    });
    it('addQuestion method should add a question to the problemState correctly', () => {
      const received = stateParser.addQuestion();
      expect(received).toEqual([{
        p: [{
          '#text': 'You can use this template as a guide to the simple editor markdown and OLX markup to use for multiple choice with hints and feedback problems. Edit this component to replace this template with your own assessment.'
        }]
      }, {
        label: [{
          '#text': 'Add the question text, or prompt, here. This text is required.'
        }]
      }, {
        '#text': ' '
      }, {
        em: [{
          '#text': 'You can add an optional tip or note related to the prompt like this. '
        }],
        ':@': {
          '@_class': 'olx_description'
        }
      }, {
        em: [{
          '#text': 'Just a generic em tag'
        }]
      }]);
    });
  });
  test('Test numerical response with feedback and hints problem type', () => {
    const olxparser = new _OLXParser.OLXParser(_olxTestData.numericInputWithFeedbackAndHintsOLX.rawOLX);
    const problem = olxparser.getParsedOLXData();
    const stateParser = new _ReactStateOLXParser.default({
      problem,
      editorObject: _editorTestData.numericInputWithFeedbackAndHints
    });
    const buildOLX = stateParser.buildOLX();
    expect(buildOLX.replace(/\s/g, '')).toEqual(_olxTestData.numericInputWithFeedbackAndHintsOLX.buildOLX.replace(/\s/g, ''));
  });
  test('Test numerical response with isAnswerRange true', () => {
    const olxparser = new _OLXParser.OLXParser(_olxTestData.numericInputWithAnswerRangeOLX.rawOLX);
    const problem = olxparser.getParsedOLXData();
    const stateParser = new _ReactStateOLXParser.default({
      problem,
      editorObject: _editorTestData.numericInputWithAnswerRange
    });
    const buildOLX = stateParser.buildOLX();
    expect(buildOLX.replace(/\s/g, '')).toEqual(_olxTestData.numericInputWithAnswerRangeOLX.buildOLX.replace(/\s/g, ''));
  });
  test('Test string response with feedback and hints, multiple answers', () => {
    const olxparser = new _OLXParser.OLXParser(_olxTestData.textInputWithFeedbackAndHintsOLXWithMultipleAnswers.rawOLX);
    const problem = olxparser.getParsedOLXData();
    const stateParser = new _ReactStateOLXParser.default({
      problem,
      editorObject: _editorTestData.textInputWithFeedbackAndHintsWithMultipleAnswers
    });
    const buildOLX = stateParser.buildOLX();
    expect(buildOLX.replace(/\s/g, '')).toEqual(_olxTestData.textInputWithFeedbackAndHintsOLXWithMultipleAnswers.buildOLX.replace(/\s/g, ''));
  });
  describe('encode/decode', () => {
    test('does not change hex values to dec and does not remove leading 0s', () => {
      const olxparser = new _OLXParser.OLXParser(_olxTestData.numberParseTestOLX.rawOLX);
      const problem = olxparser.getParsedOLXData();
      const stateParser = new _ReactStateOLXParser.default({
        problem,
        editorObject: _editorTestData.numberParseTest
      });
      const buildOLX = stateParser.buildOLX();
      expect(buildOLX.replace(/\s/g, '')).toEqual(_olxTestData.numberParseTestOLX.buildOLX.replace(/\s/g, ''));
    });
    test('correctly preserves whitespace inside pre tags', () => {
      const stateParser = new _ReactStateOLXParser.default({
        problem: {
          problemType: 'optionresponse',
          answers: []
        },
        editorObject: {
          question: '<pre>  1  a<br />  2  b<br /></pre>',
          hints: []
        }
      });
      const buildOLX = stateParser.buildOLX();
      expect(buildOLX).toEqual('<problem><optionresponse>\n<pre>  1  a<br/>  2  b<br/></pre><optioninput></optioninput></optionresponse>\n</problem>');
    });
  });
});
//# sourceMappingURL=ReactStateOLXParser.test.js.map