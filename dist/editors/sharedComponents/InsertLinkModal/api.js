"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBlocksFromCourse = void 0;
var _frontendPlatform = require("@edx/frontend-platform");
var _auth = require("@edx/frontend-platform/auth");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* eslint-disable import/prefer-default-export */
const getBlocksFromCourse = async courseId => {
  try {
    const courseIdFormat = encodeURIComponent(courseId);
    const {
      data
    } = await (0, _auth.getAuthenticatedHttpClient)().get(`${(0, _frontendPlatform.getConfig)().LMS_BASE_URL}/api/courses/v1/blocks/?course_id=${courseIdFormat}&all_blocks=true&depth=all&requested_fields=name,parent, display_name,block_type,children`);
    const {
      blocks
    } = data;
    const blocksFormat = Object.keys(blocks).reduce((prevBlocks, key) => _objectSpread(_objectSpread({}, prevBlocks), {}, {
      [key]: (0, _frontendPlatform.camelCaseObject)(blocks[key])
    }), {});
    data.blocks = blocksFormat;
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
exports.getBlocksFromCourse = getBlocksFromCourse;
//# sourceMappingURL=api.js.map