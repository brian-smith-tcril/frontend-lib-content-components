"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findNodesAndRemoveTheirParentNodes = findNodesAndRemoveTheirParentNodes;
exports.nodeContainsChildTags = nodeContainsChildTags;
exports.tagName = tagName;
var _lodash = _interopRequireDefault(require("lodash.flatten"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable import/prefer-default-export */

/**
 * flattenSubNodes - appends a nodes children to a given array 'subNodes' in a flattened format.
 * Only appends direct children unless `recursive` is set to true.
 * @param {object} node
 * @param {object[]} subNodes
 * @param {object} options - { recursive: false } Whether to search recursively for child tags.
 * @returns {void}
 */
function flattenSubNodes(node, subNodes) {
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    recursive: false
  };
  const values = Array.isArray(node) ? (0, _lodash.default)(node.map(n => Object.values(n))) : Object.values(node);
  values.forEach(value => {
    if (Array.isArray(value)) {
      subNodes.push(...value);
      if (options.recursive) {
        value.forEach(nestedNode => {
          flattenSubNodes(nestedNode, subNodes, options);
        });
      }
    }
  });
}

/**
 * function nodeContainsChildTags - checks whether a node contains any subnodes with the specified tag names.
 *
 * @param {object} node - Example for node:
 *   {"div":
 *     [
 *       {"label":
 *         [
 *           {"#text":"def"}
 *         ]
 *       },
 *       {"div":
 *         [{
 *           label:
 *             [
 *               { '#text': 'def' },
 *             ],
 *         }],
 *       },
 *       {"#text":" "},
 *       {"em":
 *         [
 *           {"#text":"ghi"}
 *         ],
 *         ":@": {"@_class":"olx_description"}
 *       },
 *       {"em":
 *         [
 *           {"#text":"jkl"}
 *         ]
 *       }
 *     ]
 *   }
 * @param {string[]} tagNames
 * @param {boolean} [recursive=false] - Whether to search recursively for child tags.
 *
 * @returns {boolean} whether node contains the specified child tags
 */
function nodeContainsChildTags(node, tagNames) {
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    recursive: false
  };
  const subNodes = [];
  flattenSubNodes(node, subNodes, options);
  const res = subNodes.some(subNode => tagNames.includes(Object.keys(subNode)[0]));
  return res;
}

/**
 * @param {object} node
 * @returns {string} the tag name of the node
 */
function tagName(node) {
  if (Array.isArray(node)) {
    throw new TypeError('function tagName does not accept arrays as input');
  }
  return Object.keys(node).find(key => key.match(/^[a-zA-Z].*/));
}

/**
 * findNodesAndRemoveTheirParentNodes - given 'arrayOfNodes', an array that results from the
 * XMLParser, this looks for 'nodesToFind': specific child tags (e.g. 'label'), and removes
 * their parent tags (e.g. 'div') but keeps all their content one level higher.
 * The 'parentsToRemove' array should contain a list of parent tags that will be removed.
 *
 * For example, if you have a div containing a p that contains a label and an em, and you specify
 * 'label' as the nodeToFind and 'p' as the parentToRemove, then you will get a div containing a label and an em.
 * @param {object} { arrayOfNodes, nodesToFind, parentsToRemove }
 *
 * @returns {object} - an array of nodes
 */
function findNodesAndRemoveTheirParentNodes(_ref) {
  let {
    arrayOfNodes,
    nodesToFind,
    parentsToRemove
  } = _ref;
  const result = [];
  arrayOfNodes.forEach(node => {
    const containsRelevantSubnodes = nodeContainsChildTags(node, nodesToFind);
    if (!containsRelevantSubnodes || !parentsToRemove.includes(tagName(node))) {
      result.push(node);
    } else {
      const subNodes = Object.values(node)[0];
      result.push(...subNodes);
    }
  });
  return result;
}
//# sourceMappingURL=reactStateOLXHelpers.js.map