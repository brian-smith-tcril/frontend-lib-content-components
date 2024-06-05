"use strict";

var _OLXParser = require("./OLXParser");
var _olxTestData = require("./mockData/olxTestData");
var _problem = require("../../../data/constants/problem");
const blankOlxParser = new _OLXParser.OLXParser(_olxTestData.blankProblemOLX.rawOLX);
const checkboxOlxParser = new _OLXParser.OLXParser(_olxTestData.checkboxesOLXWithFeedbackAndHintsOLX.rawOLX);
const numericOlxParser = new _OLXParser.OLXParser(_olxTestData.numericInputWithFeedbackAndHintsOLX.rawOLX);
const dropdownOlxParser = new _OLXParser.OLXParser(_olxTestData.dropdownOLXWithFeedbackAndHintsOLX.rawOLX);
const multipleChoiceOlxParser = new _OLXParser.OLXParser(_olxTestData.multipleChoiceWithFeedbackAndHintsOLX.rawOLX);
const multipleChoiceWithoutAnswersOlxParser = new _OLXParser.OLXParser(_olxTestData.multipleChoiceWithoutAnswers.rawOLX);
const multipleChoiceSingleAnswerOlxParser = new _OLXParser.OLXParser(_olxTestData.multipleChoiceSingleAnswer.rawOLX);
const textInputOlxParser = new _OLXParser.OLXParser(_olxTestData.textInputWithFeedbackAndHintsOLX.rawOLX);
const textInputMultipleAnswersOlxParser = new _OLXParser.OLXParser(_olxTestData.textInputWithFeedbackAndHintsOLXWithMultipleAnswers.rawOLX);
const advancedOlxParser = new _OLXParser.OLXParser(_olxTestData.advancedProblemOlX.rawOLX);
const multipleTextInputOlxParser = new _OLXParser.OLXParser(_olxTestData.multipleTextInputProblemOlX.rawOLX);
const multipleNumericOlxParser = new _OLXParser.OLXParser(_olxTestData.multipleNumericProblemOlX.rawOLX);
const numericAndTextInputOlxParser = new _OLXParser.OLXParser(_olxTestData.NumericAndTextInputProblemOlX.rawOLX);
const labelDescriptionQuestionOlxParser = new _OLXParser.OLXParser(_olxTestData.labelDescriptionQuestionOLX.rawOLX);
const shuffleOlxParser = new _OLXParser.OLXParser(_olxTestData.shuffleProblemOLX.rawOLX);
const multiSelectPartialCreditOlxParser = new _OLXParser.OLXParser(_olxTestData.multiSelectPartialCredit.rawOLX);
const singleSelectPartialCreditParser = new _OLXParser.OLXParser(_olxTestData.singleSelectPartialCredit.rawOLX);
const numericalProblemPartialCreditParser = new _OLXParser.OLXParser(_olxTestData.numericalProblemPartialCredit.rawOLX);
describe('OLXParser', () => {
  describe('throws error and redirects to advanced editor', () => {
    describe('when settings attributes are on problem tags', () => {
      it('should throw error and contain message regarding opening advanced editor', () => {
        try {
          labelDescriptionQuestionOlxParser.getParsedOLXData();
        } catch (e) {
          expect(e).toBeInstanceOf(Error);
          expect(e.message).toBe('Misc Attributes asscoiated with problem, opening in advanced editor');
        }
      });
    });
    describe('when settings attributes are on problem tags', () => {
      it('should throw error and contain message regarding opening advanced editor', () => {
        try {
          shuffleOlxParser.getParsedOLXData();
        } catch (e) {
          expect(e).toBeInstanceOf(Error);
          expect(e.message).toBe('Misc Tags, reverting to Advanced Editor');
        }
      });
    });
    describe('when question parser finds script tags', () => {
      it('should throw error and contain message regarding opening advanced editor', () => {
        const olxparser = new _OLXParser.OLXParser(_olxTestData.scriptProblemOlX.rawOLX);
        expect(() => olxparser.parseQuestions('numericalresponse')).toThrow(new Error('Script Tag, reverting to Advanced Editor'));
      });
    });
    describe('when multi select problem finds partial_credit attribute', () => {
      it('should throw error and contain message regarding opening advanced editor', () => {
        try {
          multiSelectPartialCreditOlxParser.getParsedOLXData();
        } catch (e) {
          expect(e).toBeInstanceOf(Error);
          expect(e.message).toBe('Partial credit not supported by GUI, reverting to Advanced Editor');
        }
      });
    });
    describe('when numerical problem finds partial_credit attribute', () => {
      it('should throw error and contain message regarding opening advanced editor', () => {
        try {
          numericalProblemPartialCreditParser.getParsedOLXData();
        } catch (e) {
          expect(e).toBeInstanceOf(Error);
          expect(e.message).toBe('Partial credit not supported by GUI, reverting to Advanced Editor');
        }
      });
    });
    describe('when single select problem finds partial_credit attribute', () => {
      it('should throw error and contain message regarding opening advanced editor', () => {
        try {
          singleSelectPartialCreditParser.getParsedOLXData();
        } catch (e) {
          expect(e).toBeInstanceOf(Error);
          expect(e.message).toBe('Partial credit not supported by GUI, reverting to Advanced Editor');
        }
      });
    });
    describe('when signle select problem has unexpected olx after multiplechoiceresponse tag', () => {
      it('should throw error and contain message regarding opening advanced editor', () => {
        const unexpectOlxAfterProblemTypeTagsParser = new _OLXParser.OLXParser(_olxTestData.unexpectOlxAfterProblemTypeTags.rawOLX);
        try {
          unexpectOlxAfterProblemTypeTagsParser.getParsedOLXData();
        } catch (e) {
          expect(e).toBeInstanceOf(Error);
          expect(e.message).toBe('OLX found after the multiplechoiceresponse tags, opening in advanced editor');
        }
      });
    });
  });
  describe('getProblemType()', () => {
    describe('given a blank problem', () => {
      const problemType = blankOlxParser.getProblemType();
      it('should equal ProblemTypeKeys.MULTISELECT', () => {
        expect(problemType).toEqual(null);
      });
    });
    describe('given checkbox olx with feedback and hints', () => {
      const problemType = checkboxOlxParser.getProblemType();
      it('should equal ProblemTypeKeys.MULTISELECT', () => {
        expect(problemType).toEqual(_problem.ProblemTypeKeys.MULTISELECT);
      });
    });
    describe('given numeric olx with feedback and hints', () => {
      const problemType = numericOlxParser.getProblemType();
      it('should equal ProblemTypeKeys.NUMERIC', () => {
        expect(problemType).toEqual(_problem.ProblemTypeKeys.NUMERIC);
      });
    });
    describe('given dropdown olx with feedback and hints', () => {
      const problemType = dropdownOlxParser.getProblemType();
      it('should equal ProblemTypeKeys.DROPDOWN', () => {
        expect(problemType).toEqual(_problem.ProblemTypeKeys.DROPDOWN);
      });
    });
    describe('given multiple choice olx with feedback and hints', () => {
      const problemType = multipleChoiceOlxParser.getProblemType();
      it('should equal ProblemTypeKeys.SINGLESELECT', () => {
        expect(problemType).toEqual(_problem.ProblemTypeKeys.SINGLESELECT);
      });
    });
    describe('given text input olx with feedback and hints', () => {
      const problemType = textInputOlxParser.getProblemType();
      it('should equal ProblemTypeKeys.TEXTINPUT', () => {
        expect(problemType).toEqual(_problem.ProblemTypeKeys.TEXTINPUT);
      });
    });
    describe('given an advanced problem', () => {
      const problemType = advancedOlxParser.getProblemType();
      it('should equal ProblemTypeKeys.ADVANCED', () => {
        expect(problemType).toEqual(_problem.ProblemTypeKeys.ADVANCED);
      });
    });
    describe('given a problem with multiple text inputs', () => {
      const problemType = multipleTextInputOlxParser.getProblemType();
      it('should equal ProblemTypeKeys.ADVANCED', () => {
        expect(problemType).toEqual(_problem.ProblemTypeKeys.ADVANCED);
      });
    });
    describe('given a problem with multiple numeric inputs', () => {
      const problemType = multipleNumericOlxParser.getProblemType();
      it('should equal ProblemTypeKeys.ADVANCED', () => {
        expect(problemType).toEqual(_problem.ProblemTypeKeys.ADVANCED);
      });
    });
    describe('given a problem with both a text and numeric input', () => {
      const problemType = numericAndTextInputOlxParser.getProblemType();
      it('should equal ProblemTypeKeys.ADVANCED', () => {
        expect(problemType).toEqual(_problem.ProblemTypeKeys.ADVANCED);
      });
    });
  });
  describe('getHints()', () => {
    describe('given a problem with no hints', () => {
      const hints = labelDescriptionQuestionOlxParser.getHints();
      it('should return an empty array', () => {
        expect(hints).toEqual([]);
      });
    });
    describe('given checkbox olx with feedback and hints', () => {
      const hints = checkboxOlxParser.getHints();
      it('should equal an array of hints', () => {
        expect(hints).toEqual(_olxTestData.checkboxesOLXWithFeedbackAndHintsOLX.hints);
      });
    });
    describe('given numeric olx with feedback and hints', () => {
      const hints = numericOlxParser.getHints();
      it('should equal an array of hints', () => {
        expect(hints).toEqual(_olxTestData.numericInputWithFeedbackAndHintsOLX.hints);
      });
    });
    describe('given dropdown olx with feedback and hints', () => {
      const hints = dropdownOlxParser.getHints();
      it('should equal an array of hints', () => {
        expect(hints).toEqual(_olxTestData.dropdownOLXWithFeedbackAndHintsOLX.hints);
      });
    });
    describe('given multiple choice olx with feedback and hints', () => {
      const hints = multipleChoiceOlxParser.getHints();
      it('should equal an array of hints', () => {
        expect(hints).toEqual(_olxTestData.multipleChoiceWithFeedbackAndHintsOLX.hints);
      });
    });
    describe('given text input olx with feedback and hints', () => {
      const hints = textInputOlxParser.getHints();
      it('should equal an array of hints', () => {
        expect(hints).toEqual(_olxTestData.textInputWithFeedbackAndHintsOLX.hints);
      });
    });
  });
  describe('parseMultipleChoiceAnswers()', () => {
    describe('given a problem with no answers', () => {
      const {
        answers
      } = multipleChoiceWithoutAnswersOlxParser.parseMultipleChoiceAnswers('multiplechoiceresponse', 'choicegroup', 'choice');
      it('should return a default answer', () => {
        expect(answers).toEqual(_olxTestData.multipleChoiceWithoutAnswers.data.answers);
        expect(answers).toHaveLength(1);
      });
    });
    describe('given a problem with one answer', () => {
      const {
        answers
      } = multipleChoiceSingleAnswerOlxParser.parseMultipleChoiceAnswers('multiplechoiceresponse', 'choicegroup', 'choice');
      it('should return a single answer', () => {
        expect(answers).toEqual(_olxTestData.multipleChoiceSingleAnswer.data.answers);
        expect(answers).toHaveLength(1);
      });
    });
    describe('given multiple choice olx with hex numbers and leading zeros', () => {
      const olxparser = new _OLXParser.OLXParser(_olxTestData.numberParseTestOLX.rawOLX);
      const {
        answers
      } = olxparser.parseMultipleChoiceAnswers('multiplechoiceresponse', 'choicegroup', 'choice');
      it('should not parse hex numbers and leading zeros', () => {
        expect(answers).toEqual(_olxTestData.numberParseTestOLX.data.answers);
      });
      it('should equal an array of objects with length four', () => {
        expect(answers).toHaveLength(4);
      });
    });
    describe('given checkbox olx with feedback and hints', () => {
      const {
        answers
      } = checkboxOlxParser.parseMultipleChoiceAnswers('choiceresponse', 'checkboxgroup', 'choice');
      it('should equal an array of objects with length four', () => {
        expect(answers).toEqual(_olxTestData.checkboxesOLXWithFeedbackAndHintsOLX.data.answers);
        expect(answers).toHaveLength(4);
      });
    });
    describe('given dropdown olx with feedback and hints', () => {
      const {
        answers
      } = dropdownOlxParser.parseMultipleChoiceAnswers('optionresponse', 'optioninput', 'option');
      it('should equal an array of objects with length three', () => {
        expect(answers).toEqual(_olxTestData.dropdownOLXWithFeedbackAndHintsOLX.data.answers);
        expect(answers).toHaveLength(3);
      });
    });
    describe('given multiple choice olx with feedback and hints', () => {
      const {
        answers
      } = multipleChoiceOlxParser.parseMultipleChoiceAnswers('multiplechoiceresponse', 'choicegroup', 'choice');
      it('should equal an array of objects with length three', () => {
        expect(answers).toEqual(_olxTestData.multipleChoiceWithFeedbackAndHintsOLX.data.answers);
        expect(answers).toHaveLength(3);
      });
    });
  });
  describe('parseStringResponse()', () => {
    // describe('given a problem with no answers', () => {
    //   // TODO
    // });
    describe('given text input olx with feedback and hints', () => {
      const {
        answers
      } = textInputOlxParser.parseStringResponse();
      it('should equal an array of objects with length three', () => {
        expect(answers).toEqual(_olxTestData.textInputWithFeedbackAndHintsOLX.data.answers);
        expect(answers).toHaveLength(3);
      });
    });
    describe('given text input olx with feedback and hints with multiple answers', () => {
      const {
        answers
      } = textInputMultipleAnswersOlxParser.parseStringResponse();
      it('should equal an array of objects with length four', () => {
        expect(answers).toEqual(_olxTestData.textInputWithFeedbackAndHintsOLXWithMultipleAnswers.data.answers);
        expect(answers).toHaveLength(4);
      });
    });
  });
  describe('parseNumericResponse()', () => {
    // describe('given a problem with no answers', () => {
    //   // TODDO
    // });
    describe('given numeric olx with feedback and hints', () => {
      const {
        answers
      } = numericOlxParser.parseNumericResponse();
      it('should equal an array of objects with length two', () => {
        expect(answers).toEqual(_olxTestData.numericInputWithFeedbackAndHintsOLX.data.answers);
        expect(answers).toHaveLength(2);
      });
    });
  });
  describe('parseQuestions()', () => {
    describe('given olx with no question content', () => {
      const olxparser = new _OLXParser.OLXParser(_olxTestData.blankQuestionOLX.rawOLX);
      const problemType = olxparser.getProblemType();
      const question = olxparser.parseQuestions(problemType);
      it('should return an empty string for question', () => {
        expect(question.trim()).toBe(_olxTestData.blankQuestionOLX.question);
      });
    });
    describe('given a simple problem olx', () => {
      const question = textInputOlxParser.parseQuestions('stringresponse');
      it('should return a string of HTML', () => {
        expect(question.trim()).toEqual(_olxTestData.textInputWithFeedbackAndHintsOLX.question);
      });
    });
    describe('given olx with html entities', () => {
      const olxparser = new _OLXParser.OLXParser(_olxTestData.htmlEntityTestOLX.rawOLX);
      const problemType = olxparser.getProblemType();
      const question = olxparser.parseQuestions(problemType);
      it('should not encode html entities', () => {
        expect(question.trim()).toEqual(_olxTestData.htmlEntityTestOLX.question);
      });
    });
    describe('given olx with styled content', () => {
      const olxparser = new _OLXParser.OLXParser(_olxTestData.styledQuestionOLX.rawOLX);
      const problemType = olxparser.getProblemType();
      const question = olxparser.parseQuestions(problemType);
      it('should pase/build correct styling', () => {
        expect(question.trim()).toBe(_olxTestData.styledQuestionOLX.question);
      });
    });
    describe('given olx with label and description tags inside response tag', () => {
      const olxparser = new _OLXParser.OLXParser(_olxTestData.labelDescriptionQuestionOLX.rawOLX);
      const problemType = olxparser.getProblemType();
      const question = olxparser.parseQuestions(problemType);
      it('should append the label/description to the question, converting description to <em> with "olx_description" class', () => {
        expect(question.trim()).toBe(_olxTestData.labelDescriptionQuestionOLX.question);
      });
    });
    describe('given olx with table tags', () => {
      const olxparser = new _OLXParser.OLXParser(_olxTestData.tablesInRichTextTest.rawOLX);
      const problemType = olxparser.getProblemType();
      const question = olxparser.parseQuestions(problemType);
      it('should append the table to the question', () => {
        expect(question.trim()).toBe(_olxTestData.tablesInRichTextTest.question);
      });
    });
  });
  describe('getSolutionExplanation()', () => {
    describe('for checkbox questions', () => {
      test('should parse text in p tags', () => {
        const olxparser = new _OLXParser.OLXParser(_olxTestData.checkboxesOLXWithFeedbackAndHintsOLX.rawOLX);
        const problemType = olxparser.getProblemType();
        const explanation = olxparser.getSolutionExplanation(problemType);
        const expected = _olxTestData.checkboxesOLXWithFeedbackAndHintsOLX.solutionExplanation;
        expect(explanation.replace(/\s/g, '')).toBe(expected.replace(/\s/g, ''));
      });
    });
    it('should parse text with proper spacing', () => {
      const olxparser = new _OLXParser.OLXParser(_olxTestData.solutionExplanationTest.rawOLX);
      const problemType = olxparser.getProblemType();
      const explanation = olxparser.getSolutionExplanation(problemType);
      expect(explanation).toBe(_olxTestData.solutionExplanationTest.solutionExplanation);
    });
    it('should parse solution fields without div', () => {
      const olxparser = new _OLXParser.OLXParser(_olxTestData.solutionExplanationWithoutDivTest.rawOLX);
      const problemType = olxparser.getProblemType();
      const explanation = olxparser.getSolutionExplanation(problemType);
      expect(explanation).toBe(_olxTestData.solutionExplanationWithoutDivTest.solutionExplanation);
    });
    it('should parse out <p>Explanation</p>', () => {
      const olxparser = new _OLXParser.OLXParser(_olxTestData.parseOutExplanationTests.rawOLX);
      const problemType = olxparser.getProblemType();
      const explanation = olxparser.getSolutionExplanation(problemType);
      expect(explanation).toBe(_olxTestData.parseOutExplanationTests.solutionExplanation);
    });
  });
});
//# sourceMappingURL=OLXParser.test.js.map