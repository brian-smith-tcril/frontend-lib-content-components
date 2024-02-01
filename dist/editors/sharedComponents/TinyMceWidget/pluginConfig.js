"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = require("../../utils");
var _tinyMCE = require("../../data/constants/tinyMCE");
const mapToolbars = toolbars => toolbars.map(toolbar => toolbar.join(' ')).join(' | ');
const pluginConfig = _ref => {
  let {
    isLibrary,
    placeholder,
    editorType
  } = _ref;
  const image = isLibrary ? '' : _tinyMCE.plugins.image;
  const imageTools = isLibrary ? '' : _tinyMCE.plugins.imagetools;
  const imageUploadButton = isLibrary ? '' : _tinyMCE.buttons.imageUploadButton;
  const editImageSettings = isLibrary ? '' : _tinyMCE.buttons.editImageSettings;
  const codePlugin = editorType === 'text' ? _tinyMCE.plugins.code : '';
  const codeButton = editorType === 'text' ? _tinyMCE.buttons.code : '';
  const labelButton = editorType === 'question' ? _tinyMCE.buttons.customLabelButton : '';
  const quickToolbar = editorType === 'expandable' ? _tinyMCE.plugins.quickbars : '';
  const inline = editorType === 'expandable';
  const toolbar = editorType !== 'expandable';
  const defaultFormat = editorType === 'question' || editorType === 'expandable' ? 'div' : 'p';
  return (0, _utils.StrictDict)({
    plugins: [_tinyMCE.plugins.link, _tinyMCE.plugins.lists, _tinyMCE.plugins.codesample, _tinyMCE.plugins.emoticons, _tinyMCE.plugins.table, _tinyMCE.plugins.hr, _tinyMCE.plugins.charmap, codePlugin, _tinyMCE.plugins.autoresize, image, imageTools, quickToolbar, _tinyMCE.plugins.a11ychecker, _tinyMCE.plugins.powerpaste].join(' '),
    menubar: false,
    toolbar: toolbar ? mapToolbars([[_tinyMCE.buttons.undo, _tinyMCE.buttons.redo], [_tinyMCE.buttons.formatSelect], [labelButton], [_tinyMCE.buttons.bold, _tinyMCE.buttons.italic, _tinyMCE.buttons.underline, _tinyMCE.buttons.foreColor, _tinyMCE.buttons.backColor], [_tinyMCE.buttons.align.left, _tinyMCE.buttons.align.center, _tinyMCE.buttons.align.right, _tinyMCE.buttons.align.justify], [_tinyMCE.buttons.bullist, _tinyMCE.buttons.numlist, _tinyMCE.buttons.outdent, _tinyMCE.buttons.indent], [imageUploadButton, _tinyMCE.buttons.link, _tinyMCE.buttons.unlink, _tinyMCE.buttons.blockQuote, _tinyMCE.buttons.codeBlock], [_tinyMCE.buttons.table, _tinyMCE.buttons.emoticons, _tinyMCE.buttons.charmap, _tinyMCE.buttons.hr], [_tinyMCE.buttons.removeFormat, codeButton, _tinyMCE.buttons.a11ycheck]]) : false,
    imageToolbar: mapToolbars([
    // [buttons.rotate.left, buttons.rotate.right],
    // [buttons.flip.horiz, buttons.flip.vert],
    [editImageSettings]]),
    quickbarsInsertToolbar: toolbar ? false : mapToolbars([[_tinyMCE.buttons.undo, _tinyMCE.buttons.redo], [_tinyMCE.buttons.formatSelect], [_tinyMCE.buttons.bold, _tinyMCE.buttons.italic, _tinyMCE.buttons.underline, _tinyMCE.buttons.foreColor], [_tinyMCE.buttons.align.justify, _tinyMCE.buttons.bullist, _tinyMCE.buttons.numlist], [imageUploadButton, _tinyMCE.buttons.blockQuote, _tinyMCE.buttons.codeBlock], [_tinyMCE.buttons.table, _tinyMCE.buttons.emoticons, _tinyMCE.buttons.charmap, _tinyMCE.buttons.removeFormat, _tinyMCE.buttons.a11ycheck]]),
    quickbarsSelectionToolbar: toolbar ? false : mapToolbars([[_tinyMCE.buttons.undo, _tinyMCE.buttons.redo], [_tinyMCE.buttons.formatSelect], [_tinyMCE.buttons.bold, _tinyMCE.buttons.italic, _tinyMCE.buttons.underline, _tinyMCE.buttons.foreColor], [_tinyMCE.buttons.align.justify, _tinyMCE.buttons.bullist, _tinyMCE.buttons.numlist], [imageUploadButton, _tinyMCE.buttons.blockQuote, _tinyMCE.buttons.codeBlock], [_tinyMCE.buttons.table, _tinyMCE.buttons.emoticons, _tinyMCE.buttons.charmap, _tinyMCE.buttons.removeFormat, _tinyMCE.buttons.a11ycheck]]),
    config: {
      branding: false,
      height: '100%',
      menubar: false,
      toolbar_mode: 'sliding',
      toolbar_sticky: true,
      toolbar_sticky_offset: 76,
      relative_urls: true,
      convert_urls: false,
      placeholder,
      inline,
      block_formats: 'Header 1=h1;Header 2=h2;Header 3=h3;Header 4=h4;Header 5=h5;Header 6=h6;Div=div;Paragraph=p;Preformatted=pre',
      forced_root_block: defaultFormat,
      powerpaste_allow_local_images: true,
      powerpaste_word_import: 'prompt',
      powerpaste_html_import: 'prompt',
      powerpaste_googledoc_import: 'prompt'
    }
  });
};
var _default = exports.default = pluginConfig;
//# sourceMappingURL=pluginConfig.js.map