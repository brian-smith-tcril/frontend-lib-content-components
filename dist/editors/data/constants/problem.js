"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.settingsOlxAttributes = exports.ShowAnswerTypesKeys = exports.ShowAnswerTypes = exports.RichTextProblems = exports.RandomizationTypesKeys = exports.RandomizationTypes = exports.ProblemTypes = exports.ProblemTypeKeys = exports.GradingMethodKeys = exports.GradingMethod = exports.AdvanceProblems = exports.AdvanceProblemKeys = void 0;
var _utils = require("../../utils");
var _singleSelect = _interopRequireDefault(require("../images/singleSelect.png"));
var _multiSelect = _interopRequireDefault(require("../images/multiSelect.png"));
var _dropdown = _interopRequireDefault(require("../images/dropdown.png"));
var _numericalInput = _interopRequireDefault(require("../images/numericalInput.png"));
var _textInput = _interopRequireDefault(require("../images/textInput.png"));
var _advancedOlxTemplates = _interopRequireDefault(require("./advancedOlxTemplates"));
var _basicOlxTemplates = _interopRequireDefault(require("./basicOlxTemplates"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ProblemTypeKeys = exports.ProblemTypeKeys = (0, _utils.StrictDict)({
  SINGLESELECT: 'multiplechoiceresponse',
  MULTISELECT: 'choiceresponse',
  DROPDOWN: 'optionresponse',
  NUMERIC: 'numericalresponse',
  TEXTINPUT: 'stringresponse',
  ADVANCED: 'advanced'
});
const ProblemTypes = exports.ProblemTypes = (0, _utils.StrictDict)({
  [ProblemTypeKeys.SINGLESELECT]: {
    title: 'Single select',
    preview: _singleSelect.default,
    previewDescription: 'Learners must select the correct answer from a list of possible options.',
    description: 'Enter your single select answers below and select which choices are correct. Learners must choose one correct answer.',
    helpLink: 'https://edx.readthedocs.io/projects/edx-partner-course-staff/en/latest/exercises_tools/multiple_choice.html',
    prev: ProblemTypeKeys.TEXTINPUT,
    next: ProblemTypeKeys.MULTISELECT,
    template: _basicOlxTemplates.default.singleSelect
  },
  [ProblemTypeKeys.MULTISELECT]: {
    title: 'Multi-select',
    preview: _multiSelect.default,
    previewDescription: 'Learners must select all correct answers from a list of possible options.',
    description: 'Enter your multi select answers below and select which choices are correct. Learners must choose all correct answers.',
    helpLink: 'https://edx.readthedocs.io/projects/edx-partner-course-staff/en/latest/exercises_tools/checkbox.html',
    next: ProblemTypeKeys.DROPDOWN,
    prev: ProblemTypeKeys.SINGLESELECT,
    template: _basicOlxTemplates.default.multiSelect
  },
  [ProblemTypeKeys.DROPDOWN]: {
    title: 'Dropdown',
    preview: _dropdown.default,
    previewDescription: 'Learners must select the correct answer from a list of possible options',
    description: 'Enter your dropdown answers below and select which choice is correct. Learners must select one correct answer.',
    helpLink: 'https://edx.readthedocs.io/projects/edx-partner-course-staff/en/latest/exercises_tools/dropdown.html',
    next: ProblemTypeKeys.NUMERIC,
    prev: ProblemTypeKeys.MULTISELECT,
    template: _basicOlxTemplates.default.dropdown
  },
  [ProblemTypeKeys.NUMERIC]: {
    title: 'Numerical input',
    preview: _numericalInput.default,
    previewDescription: 'Specify one or more correct numeric answers, submitted in a response field.',
    description: 'Enter correct numerical input answers below. Learners must enter one correct answer.',
    helpLink: 'https://edx.readthedocs.io/projects/edx-partner-course-staff/en/latest/exercises_tools/numerical_input.html',
    next: ProblemTypeKeys.TEXTINPUT,
    prev: ProblemTypeKeys.DROPDOWN,
    template: _basicOlxTemplates.default.numeric
  },
  [ProblemTypeKeys.TEXTINPUT]: {
    title: 'Text input',
    preview: _textInput.default,
    previewDescription: 'Specify one or more correct text answers, including numbers and special characters, submitted in a response field.',
    description: 'Enter your text input answers below and select which choices are correct. Learners must enter one correct answer.',
    helpLink: 'https://edx.readthedocs.io/projects/edx-partner-course-staff/en/latest/exercises_tools/text_input.html',
    prev: ProblemTypeKeys.NUMERIC,
    next: ProblemTypeKeys.SINGLESELECT,
    template: _basicOlxTemplates.default.textInput
  },
  [ProblemTypeKeys.ADVANCED]: {
    title: 'Advanced Problem',
    preview: '<div />',
    description: 'An Advanced Problem Type',
    helpLink: 'something.com'
  }
});
const AdvanceProblemKeys = exports.AdvanceProblemKeys = (0, _utils.StrictDict)({
  BLANK: 'blankadvanced',
  CIRCUITSCHEMATIC: 'circuitschematic',
  JSINPUT: 'jsinputresponse',
  CUSTOMGRADER: 'customgrader',
  IMAGE: 'imageresponse',
  FORMULA: 'formularesponse',
  PROBLEMWITHHINT: 'problemwithhint'
});
const AdvanceProblems = exports.AdvanceProblems = (0, _utils.StrictDict)({
  [AdvanceProblemKeys.BLANK]: {
    title: 'Blank problem',
    status: '',
    template: '<problem></problem>'
  },
  [AdvanceProblemKeys.CIRCUITSCHEMATIC]: {
    title: 'Circuit schematic builder',
    status: 'Not supported',
    template: _advancedOlxTemplates.default.circuitSchematic
  },
  [AdvanceProblemKeys.JSINPUT]: {
    title: 'Custom JavaScript display and grading',
    status: '',
    template: _advancedOlxTemplates.default.jsInputResponse
  },
  [AdvanceProblemKeys.CUSTOMGRADER]: {
    title: 'Custom Python-evaluated input',
    status: 'Provisional',
    template: _advancedOlxTemplates.default.customGrader
  },
  [AdvanceProblemKeys.IMAGE]: {
    title: 'Image mapped input',
    status: 'Not supported',
    template: _advancedOlxTemplates.default.imageResponse
  },
  [AdvanceProblemKeys.FORMULA]: {
    title: 'Math expression input',
    status: '',
    template: _advancedOlxTemplates.default.formulaResponse
  },
  [AdvanceProblemKeys.PROBLEMWITHHINT]: {
    title: 'Problem with adaptive hint',
    status: 'Not supported',
    template: _advancedOlxTemplates.default.problemWithHint
  }
});
const ShowAnswerTypesKeys = exports.ShowAnswerTypesKeys = (0, _utils.StrictDict)({
  ALWAYS: 'always',
  ANSWERED: 'answered',
  ATTEMPTED: 'attempted',
  CLOSED: 'closed',
  FINISHED: 'finished',
  CORRECT_OR_PAST_DUE: 'correct_or_past_due',
  PAST_DUE: 'past_due',
  NEVER: 'never',
  AFTER_SOME_NUMBER_OF_ATTEMPTS: 'after_attempts',
  AFTER_ALL_ATTEMPTS: 'after_all_attempts',
  AFTER_ALL_ATTEMPTS_OR_CORRECT: 'after_all_attempts_or_correct',
  ATTEMPTED_NO_PAST_DUE: 'attempted_no_past_due'
});
const ShowAnswerTypes = exports.ShowAnswerTypes = (0, _utils.StrictDict)({
  [ShowAnswerTypesKeys.ALWAYS]: {
    id: 'authoring.problemeditor.settings.showanswertype.always',
    defaultMessage: 'Always'
  },
  [ShowAnswerTypesKeys.ANSWERED]: {
    id: 'authoring.problemeditor.settings.showanswertype.answered',
    defaultMessage: 'Answered'
  },
  [ShowAnswerTypesKeys.ATTEMPTED]: {
    id: 'authoring.problemeditor.settings.showanswertype.attempted',
    defaultMessage: 'Attempted or Past Due'
  },
  [ShowAnswerTypesKeys.CLOSED]: {
    id: 'authoring.problemeditor.settings.showanswertype.closed',
    defaultMessage: 'Closed'
  },
  [ShowAnswerTypesKeys.FINISHED]: {
    id: 'authoring.problemeditor.settings.showanswertype.finished',
    defaultMessage: 'Finished'
  },
  [ShowAnswerTypesKeys.CORRECT_OR_PAST_DUE]: {
    id: 'authoring.problemeditor.settings.showanswertype.correct_or_past_due',
    defaultMessage: 'Correct or Past Due'
  },
  [ShowAnswerTypesKeys.PAST_DUE]: {
    id: 'authoring.problemeditor.settings.showanswertype.past_due',
    defaultMessage: 'Past Due'
  },
  [ShowAnswerTypesKeys.NEVER]: {
    id: 'authoring.problemeditor.settings.showanswertype.never',
    defaultMessage: 'Never'
  },
  [ShowAnswerTypesKeys.AFTER_SOME_NUMBER_OF_ATTEMPTS]: {
    id: 'authoring.problemeditor.settings.showanswertype.after_attempts',
    defaultMessage: 'After Some Number of Attempts'
  },
  [ShowAnswerTypesKeys.AFTER_ALL_ATTEMPTS]: {
    id: 'authoring.problemeditor.settings.showanswertype.after_all_attempts',
    defaultMessage: 'After All Attempts'
  },
  [ShowAnswerTypesKeys.AFTER_ALL_ATTEMPTS_OR_CORRECT]: {
    id: 'authoring.problemeditor.settings.showanswertype.after_all_attempts_or_correct',
    defaultMessage: 'After All Attempts or Correct'
  },
  [ShowAnswerTypesKeys.ATTEMPTED_NO_PAST_DUE]: {
    id: 'authoring.problemeditor.settings.showanswertype.attempted_no_past_due',
    defaultMessage: 'Attempted'
  }
});
const RandomizationTypesKeys = exports.RandomizationTypesKeys = (0, _utils.StrictDict)({
  NEVER: 'never',
  ALWAYS: 'always',
  ONRESET: 'onreset',
  PERSTUDENT: 'per_student'
});
const RandomizationTypes = exports.RandomizationTypes = (0, _utils.StrictDict)({
  [RandomizationTypesKeys.ALWAYS]: {
    id: 'authoring.problemeditor.settings.RandomizationTypes.always',
    defaultMessage: 'Always'
  },
  [RandomizationTypesKeys.NEVER]: {
    id: 'authoring.problemeditor.settings.RandomizationTypes.never',
    defaultMessage: 'Never'
  },
  [RandomizationTypesKeys.ONRESET]: {
    id: 'authoring.problemeditor.settings.RandomizationTypes.onreset',
    defaultMessage: 'On Reset'
  },
  [RandomizationTypesKeys.PERSTUDENT]: {
    id: 'authoring.problemeditor.settings.RandomizationTypes.perstudent',
    defaultMessage: 'Per Student'
  }
});
const GradingMethodKeys = exports.GradingMethodKeys = (0, _utils.StrictDict)({
  LAST_SCORE: 'last_score',
  HIGHEST_SCORE: 'highest_score',
  AVERAGE_SCORE: 'average_score',
  FIRST_SCORE: 'first_score'
});
const GradingMethod = exports.GradingMethod = (0, _utils.StrictDict)({
  [GradingMethodKeys.LAST_SCORE]: {
    id: 'authoring.problemeditor.settings.gradingmethod.last_score',
    defaultMessage: 'Last Score'
  },
  [GradingMethodKeys.HIGHEST_SCORE]: {
    id: 'authoring.problemeditor.settings.gradingmethod.highest_score',
    defaultMessage: 'Highest Score'
  },
  [GradingMethodKeys.AVERAGE_SCORE]: {
    id: 'authoring.problemeditor.settings.gradingmethod.average_score',
    defaultMessage: 'Average Score'
  },
  [GradingMethodKeys.FIRST_SCORE]: {
    id: 'authoring.problemeditor.settings.gradingmethod.first_score',
    defaultMessage: 'First Score'
  }
});
const RichTextProblems = exports.RichTextProblems = [ProblemTypeKeys.SINGLESELECT, ProblemTypeKeys.MULTISELECT];
const settingsOlxAttributes = exports.settingsOlxAttributes = ['@_display_name', '@_weight', '@_max_atempts', '@_showanswer', '@_show_reset_button', '@_submission_wait_seconds', '@_attempts_before_showanswer_button', '@_grading_method'];
//# sourceMappingURL=problem.js.map