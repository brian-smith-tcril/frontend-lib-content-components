"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.post = exports.get = exports.deleteObject = exports.client = void 0;
var _auth = require("@edx/frontend-platform/auth");
/**
 * get(url)
 * simple wrapper providing an authenticated Http client get action
 * @param {string} url - target url
 */
const get = function () {
  return (0, _auth.getAuthenticatedHttpClient)().get(...arguments);
};
/**
 * post(url, data)
 * simple wrapper providing an authenticated Http client post action
 * @param {string} url - target url
 * @param {object|string} data - post payload
 */
exports.get = get;
const post = function () {
  return (0, _auth.getAuthenticatedHttpClient)().post(...arguments);
};
/**
 * delete(url, data)
 * simple wrapper providing an authenticated Http client delete action
 * @param {string} url - target url
 * @param {object|string} data - delete payload
 */
exports.post = post;
const deleteObject = function () {
  return (0, _auth.getAuthenticatedHttpClient)().delete(...arguments);
};
exports.deleteObject = deleteObject;
const client = exports.client = _auth.getAuthenticatedHttpClient;
//# sourceMappingURL=utils.js.map