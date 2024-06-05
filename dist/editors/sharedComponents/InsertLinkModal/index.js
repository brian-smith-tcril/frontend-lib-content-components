"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _logging = require("@edx/frontend-platform/logging");
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@openedx/paragon");
var _insertlink = require("../../data/redux/insertlink");
var _BaseModal = _interopRequireDefault(require("../BaseModal"));
var _BlocksList = _interopRequireDefault(require("./BlocksList"));
var _BlockLink = _interopRequireDefault(require("./BlockLink"));
var _SearchBlocks = _interopRequireDefault(require("./SearchBlocks"));
var _utils = require("./utils");
var _api = require("./api");
var _messages = _interopRequireDefault(require("./messages"));
require("./index.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const InsertLinkModal = _ref => {
  let {
    courseId,
    isOpen,
    onClose,
    editorRef
  } = _ref;
  const intl = (0, _i18n.useIntl)();
  const [searchField, setSearchField] = (0, _react.useState)('');
  const [blocksSearched, setBlocksSearched] = (0, _react.useState)(false);
  const [blockSelected, setBlocksSelected] = (0, _react.useState)(null);
  const [blocksList, setBlocksList] = (0, _react.useState)(null);
  const [, setInvalidUrlInput] = (0, _react.useState)(false);
  const [inputUrlValue, setInputUrlValue] = (0, _react.useState)('');
  const dispatch = (0, _reactRedux.useDispatch)();
  const {
    selectedBlocks
  } = (0, _reactRedux.useSelector)(_insertlink.selectors.insertlinkState);
  const handleSearchedBlocks = isSearched => {
    setBlocksSearched(isSearched);
  };
  const handleSelectedBlock = blockSelectedFromList => {
    setBlocksSelected(blockSelectedFromList);
    setInputUrlValue('');
  };
  const handleCloseLink = () => {
    setSearchField('');
    setBlocksSelected(null);
  };

  /* istanbul ignore next */
  const handleSave = () => {
    const editor = editorRef.current;
    const urlPath = blockSelected?.lmsWebUrl || inputUrlValue;
    const blockId = blockSelected?.blockId;
    const linkRegex = /<a\b[^>]*><\/a>/gi;
    if (editor && urlPath) {
      const validateUrl = (0, _utils.isValidURL)(urlPath);
      if (!validateUrl) {
        setInvalidUrlInput(true);
        return;
      }
      const selectedRange = editor.selection.getRng();
      const selectedNode = editor.selection.getNode();
      const textContent = editor.selection.getContent({
        format: 'text'
      });
      const selectedText = textContent || selectedNode.textContent;
      const newLinkNode = editor.dom.create('a', {
        href: urlPath,
        'data-mce-href': urlPath,
        'data-block-id': blockId,
        target: '_blank'
      });
      if (textContent) {
        // If the selected node is a text node, replace the selection with the new link
        newLinkNode.textContent = selectedText;
        selectedRange.deleteContents();
        selectedRange.insertNode(newLinkNode);
      } else {
        // If the selected node is an element node, wrap its text content in the new link
        newLinkNode.textContent = selectedNode.textContent;
        selectedNode.textContent = '';
        selectedNode.appendChild(newLinkNode);
      }

      // Remove empty "a" tags after replacing URLs (if needed)
      const editorContent = editor.getContent();
      const modifiedContent = editorContent.replace(linkRegex, '');
      editor.setContent(modifiedContent);
      dispatch(_insertlink.actions.addBlock({
        [blockId]: blockSelected
      }));
    }
    if (editor && !blockId) {
      const selectedNode = editor.selection.getNode();
      if (selectedNode.nodeName === 'A') {
        // If the selected node is a link, unwrap it
        editor.dom.remove(selectedNode, true);
      } else {
        // If the selected node contains links, remove them
        const links = selectedNode.querySelectorAll('a');
        links.forEach(link => editor.dom.remove(link, true));
      }
      // Update the editor content
      editor.setContent(editor.getContent());
    }
    onClose();
  };
  (0, _react.useEffect)(() => {
    const getBlocksList = async () => {
      try {
        const blocksData = await (0, _api.getBlocksFromCourse)(courseId);
        const {
          blocks: blocksResponse,
          root: rootBlocksResponse
        } = blocksData;
        const blockListFormatted = (0, _utils.formatBlocks)(blocksResponse, rootBlocksResponse);
        setBlocksList(blockListFormatted);
      } catch (error) {
        (0, _logging.logError)(error);
      }
    };
    getBlocksList();
  }, []);
  (0, _react.useEffect)(() => {
    /* istanbul ignore next */
    const editor = editorRef.current;
    if (editor) {
      const selectionNode = editor.selection.getNode();
      const selectedHTML = editor.selection.getContent({
        format: 'html'
      }) || selectionNode.outerHTML;
      const regexDataBlockId = /data-block-id="([^"]+)"/;
      const regexHref = /href="([^"]+)"/;
      const matchDataBlockId = selectedHTML.match(regexDataBlockId);
      const matchHreUrl = selectedHTML.match(regexHref);

      // Extracting the value from the match
      const dataBlockId = matchDataBlockId ? matchDataBlockId[1] : null;
      const hrefUrl = matchHreUrl ? matchHreUrl[1] : null;
      const blockSelectedUrl = selectedBlocks?.[dataBlockId]?.lmsWebUrl;
      const hasExternalUrl = hrefUrl !== blockSelectedUrl;
      if (selectedHTML && !dataBlockId) {
        const selectedNode = editor.selection.getNode();
        const parentNode = editor.dom.getParent(selectedNode, 'a');
        if (parentNode) {
          const dataBlockIdParent = parentNode.getAttribute('data-block-id');
          const url = parentNode.getAttribute('href');
          const blockIsValid = (dataBlockIdParent in selectedBlocks);
          const blockIdFormat = blockSelectedUrl ?? selectedBlocks?.[dataBlockIdParent]?.lmsWebUrl;
          const hasValidUrl = url === blockIdFormat;
          if (dataBlockIdParent && blockIsValid && hasValidUrl) {
            setBlocksSelected(selectedBlocks[dataBlockIdParent]);
          } else {
            setBlocksSelected(null);
          }
        }
      }
      if (dataBlockId && hasExternalUrl) {
        setBlocksSelected(null);
      }
      if (dataBlockId && !hasExternalUrl) {
        const blockIsValid = (dataBlockId in selectedBlocks);
        if (dataBlockId && blockIsValid) {
          setBlocksSelected(selectedBlocks[dataBlockId]);
        }
      }
    }
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_BaseModal.default, {
    isOpen: isOpen,
    close: onClose,
    title: intl.formatMessage(_messages.default.insertLinkModalTitle),
    confirmAction: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
      variant: "primary",
      onClick: handleSave,
      children: intl.formatMessage(_messages.default.insertLinkModalButtonSave)
    }),
    children: blockSelected ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_BlockLink.default, {
      path: blockSelected.path,
      onCloseLink: handleCloseLink
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Tabs, {
      variant: "tabs",
      defaultActiveKey: "course-pages",
      id: "uncontrolled-tab-example",
      className: "mt-3 justify-content-around w-100",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Tab, {
        eventKey: "course-pages",
        title: intl.formatMessage(_messages.default.insertLinkModalCoursePagesTabTitle),
        className: "col-12 w-100 tabs-container",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_SearchBlocks.default, {
          blocks: blocksList || {},
          onSearchFilter: handleSearchedBlocks,
          searchInputValue: searchField,
          onBlockSelected: handleSelectedBlock
        }), !blocksSearched && /*#__PURE__*/(0, _jsxRuntime.jsx)(_BlocksList.default, {
          blocks: blocksList || {},
          onBlockSelected: handleSelectedBlock
        })]
      })
    })
  });
};
InsertLinkModal.propTypes = {
  courseId: _propTypes.default.string.isRequired,
  isOpen: _propTypes.default.bool.isRequired,
  onClose: _propTypes.default.func.isRequired,
  editorRef: _propTypes.default.shape({
    current: _propTypes.default.shape({
      selection: _propTypes.default.shape({
        getContent: _propTypes.default.func,
        setContent: _propTypes.default.func,
        getRng: _propTypes.default.func,
        getNode: _propTypes.default.func
      }),
      getContent: _propTypes.default.func,
      setContent: _propTypes.default.func,
      dom: _propTypes.default.shape({
        create: _propTypes.default.func,
        getParent: _propTypes.default.func,
        remove: _propTypes.default.func
      })
    })
  }).isRequired
};
var _default = exports.default = InsertLinkModal;
//# sourceMappingURL=index.js.map