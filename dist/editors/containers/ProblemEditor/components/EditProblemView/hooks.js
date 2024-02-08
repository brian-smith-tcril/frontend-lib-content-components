"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = exports.saveWarningModalToggle = exports.parseState = exports.getContent = exports.fetchEditorContent = exports.checkForSettingDiscrepancy = exports.checkForNoAnswers = void 0;
var _react = require("react");
require("tinymce");
var _utils = require("../../../../utils");
var _ReactStateSettingsParser = _interopRequireDefault(require("../../data/ReactStateSettingsParser"));
var _ReactStateOLXParser = _interopRequireDefault(require("../../data/ReactStateOLXParser"));
var _hooks = require("../../../../sharedComponents/TinyMceWidget/hooks");
var _problem = require("../../../../data/constants/problem");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const state = exports.state = (0, _utils.StrictDict)({
  // eslint-disable-next-line react-hooks/rules-of-hooks
  isSaveWarningModalOpen: val => (0, _react.useState)(val)
});
const saveWarningModalToggle = () => {
  const [isSaveWarningModalOpen, setIsOpen] = state.isSaveWarningModalOpen(false);
  return {
    isSaveWarningModalOpen,
    openSaveWarningModal: () => setIsOpen(true),
    closeSaveWarningModal: () => setIsOpen(false)
  };
};
exports.saveWarningModalToggle = saveWarningModalToggle;
const fetchEditorContent = _ref => {
  let {
    format
  } = _ref;
  const editorObject = {
    hints: []
  };
  const EditorsArray = window.tinymce.editors;
  Object.entries(EditorsArray).forEach(_ref2 => {
    let [id, editor] = _ref2;
    if (Number.isNaN(parseInt(id))) {
      if (id.startsWith('answer')) {
        const {
          answers
        } = editorObject;
        const answerId = id.substring(id.indexOf('-') + 1);
        editorObject.answers = _objectSpread(_objectSpread({}, answers), {}, {
          [answerId]: editor.getContent({
            format
          })
        });
      } else if (id.includes('Feedback')) {
        const {
          selectedFeedback,
          unselectedFeedback,
          groupFeedback
        } = editorObject;
        const feedbackId = id.substring(id.indexOf('-') + 1);
        if (id.startsWith('selected')) {
          editorObject.selectedFeedback = _objectSpread(_objectSpread({}, selectedFeedback), {}, {
            [feedbackId]: editor.getContent()
          });
        }
        if (id.startsWith('unselected')) {
          editorObject.unselectedFeedback = _objectSpread(_objectSpread({}, unselectedFeedback), {}, {
            [feedbackId]: editor.getContent()
          });
        }
        if (id.startsWith('group')) {
          editorObject.groupFeedback = _objectSpread(_objectSpread({}, groupFeedback), {}, {
            [feedbackId]: editor.getContent()
          });
        }
      } else if (id.startsWith('hint')) {
        const {
          hints
        } = editorObject;
        hints.push(editor.getContent());
      } else {
        editorObject[id] = editor.getContent();
      }
    }
  });
  return editorObject;
};
exports.fetchEditorContent = fetchEditorContent;
const parseState = _ref3 => {
  let {
    problem,
    isAdvanced,
    ref,
    assets,
    lmsEndpointUrl
  } = _ref3;
  return () => {
    const rawOLX = ref?.current?.state.doc.toString();
    const editorObject = fetchEditorContent({
      format: ''
    });
    const reactOLXParser = new _ReactStateOLXParser.default({
      problem,
      editorObject
    });
    const reactSettingsParser = new _ReactStateSettingsParser.default({
      problem,
      rawOLX
    });
    const reactBuiltOlx = (0, _hooks.setAssetToStaticUrl)({
      editorValue: reactOLXParser.buildOLX(),
      assets,
      lmsEndpointUrl
    });
    return {
      settings: isAdvanced ? reactSettingsParser.parseRawOlxSettings() : reactSettingsParser.getSettings(),
      olx: isAdvanced ? rawOLX : reactBuiltOlx
    };
  };
};
exports.parseState = parseState;
const checkForNoAnswers = _ref4 => {
  let {
    openSaveWarningModal,
    problem
  } = _ref4;
  const simpleTextAreaProblems = [_problem.ProblemTypeKeys.DROPDOWN, _problem.ProblemTypeKeys.NUMERIC, _problem.ProblemTypeKeys.TEXTINPUT];
  const editorObject = fetchEditorContent({
    format: ''
  });
  const {
    problemType
  } = problem;
  const {
    answers
  } = problem;
  const answerTitles = simpleTextAreaProblems.includes(problemType) ? {} : editorObject.answers;
  const hasTitle = () => {
    const titles = [];
    answers.forEach(answer => {
      const title = simpleTextAreaProblems.includes(problemType) ? answer.title : answerTitles[answer.id];
      if (title.length > 0) {
        titles.push(title);
      }
    });
    if (titles.length > 0) {
      return true;
    }
    return false;
  };
  const hasCorrectAnswer = () => {
    let correctAnswer;
    answers.forEach(answer => {
      if (answer.correct) {
        const title = simpleTextAreaProblems.includes(problemType) ? answer.title : answerTitles[answer.id];
        if (title.length > 0) {
          correctAnswer = true;
        }
      }
    });
    if (correctAnswer) {
      return true;
    }
    return false;
  };
  if (problemType === _problem.ProblemTypeKeys.NUMERIC && !hasTitle()) {
    openSaveWarningModal();
    return true;
  }
  if (!hasCorrectAnswer()) {
    openSaveWarningModal();
    return true;
  }
  return false;
};
exports.checkForNoAnswers = checkForNoAnswers;
const checkForSettingDiscrepancy = _ref5 => {
  let {
    problem,
    ref,
    openSaveWarningModal
  } = _ref5;
  const rawOLX = ref?.current?.state.doc.toString();
  const reactSettingsParser = new _ReactStateSettingsParser.default({
    problem,
    rawOLX
  });
  const problemSettings = reactSettingsParser.getSettings();
  const rawOlxSettings = reactSettingsParser.parseRawOlxSettings();
  let isMismatched = false;
  Object.entries(rawOlxSettings).forEach(_ref6 => {
    let [key, value] = _ref6;
    if (value !== problemSettings[key]) {
      isMismatched = true;
    }
  });
  if (isMismatched) {
    openSaveWarningModal();
    return true;
  }
  return false;
};
exports.checkForSettingDiscrepancy = checkForSettingDiscrepancy;
const getContent = _ref7 => {
  let {
    problemState,
    openSaveWarningModal,
    isAdvancedProblemType,
    editorRef,
    assets,
    lmsEndpointUrl
  } = _ref7;
  const problem = problemState;
  const hasNoAnswers = isAdvancedProblemType ? false : checkForNoAnswers({
    problem,
    openSaveWarningModal
  });
  const hasMismatchedSettings = isAdvancedProblemType ? checkForSettingDiscrepancy({
    ref: editorRef,
    problem,
    openSaveWarningModal
  }) : false;
  if (!hasNoAnswers && !hasMismatchedSettings) {
    const data = parseState({
      isAdvanced: isAdvancedProblemType,
      ref: editorRef,
      problem,
      assets,
      lmsEndpointUrl
    })();
    return data;
  }
  return null;
};
exports.getContent = getContent;
//# sourceMappingURL=hooks.js.map