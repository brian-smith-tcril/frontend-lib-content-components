"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LicenseTypes = exports.LicenseNames = exports.LicenseLevel = void 0;
var _utils = require("../../utils");
const LicenseNames = exports.LicenseNames = (0, _utils.StrictDict)({
  select: 'Select',
  allRightsReserved: 'All Rights Reserved',
  creativeCommons: 'Creative Commons'
});
const LicenseTypes = exports.LicenseTypes = (0, _utils.StrictDict)({
  allRightsReserved: 'all-rights-reserved',
  creativeCommons: 'creative-commons',
  select: 'select'
  // publicDomainDedication: 'public-domain-dedication', // future?
});
const LicenseLevel = exports.LicenseLevel = (0, _utils.StrictDict)({
  block: 'block',
  course: 'course',
  library: 'library'
});
var _default = exports.default = {
  LicenseLevel,
  LicenseNames,
  LicenseTypes
};
//# sourceMappingURL=licenses.js.map