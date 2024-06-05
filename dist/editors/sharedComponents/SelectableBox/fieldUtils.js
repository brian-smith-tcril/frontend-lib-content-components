"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIdList = exports.useHasValue = exports.omitUndefinedProperties = exports.mergeAttributeValues = exports.callAllHandlers = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _react = require("react");
var _newId = _interopRequireDefault(require("./newId"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const omitUndefinedProperties = function () {
  let obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.entries(obj).reduce((acc, _ref) => {
    let [key, value] = _ref;
    if (value !== undefined) {
      acc[key] = value;
    }
    return acc;
  }, {});
};
exports.omitUndefinedProperties = omitUndefinedProperties;
const callAllHandlers = function () {
  for (var _len = arguments.length, handlers = new Array(_len), _key = 0; _key < _len; _key++) {
    handlers[_key] = arguments[_key];
  }
  const unifiedEventHandler = event => {
    handlers.filter(handler => typeof handler === 'function').forEach(handler => handler(event));
  };
  return unifiedEventHandler;
};
exports.callAllHandlers = callAllHandlers;
const useHasValue = _ref2 => {
  let {
    defaultValue,
    value
  } = _ref2;
  const [hasUncontrolledValue, setHasUncontrolledValue] = (0, _react.useState)(!!defaultValue || defaultValue === 0);
  const hasValue = !!value || value === 0 || hasUncontrolledValue;
  const handleInputEvent = e => setHasUncontrolledValue(e.target.value);
  return [hasValue, handleInputEvent];
};
exports.useHasValue = useHasValue;
const useIdList = (uniqueIdPrefix, initialList) => {
  const [idList, setIdList] = (0, _react.useState)(initialList || []);
  const addId = idToAdd => {
    setIdList(oldIdList => [...oldIdList, idToAdd]);
    return idToAdd;
  };
  const getNewId = () => {
    const idToAdd = (0, _newId.default)(`${uniqueIdPrefix}-`);
    return addId(idToAdd);
  };
  const removeId = idToRemove => {
    setIdList(oldIdList => oldIdList.filter(id => id !== idToRemove));
  };
  const useRegisteredId = explicitlyRegisteredId => {
    const [registeredId, setRegisteredId] = (0, _react.useState)(explicitlyRegisteredId);
    (0, _react.useEffect)(() => {
      if (explicitlyRegisteredId) {
        addId(explicitlyRegisteredId);
      } else if (!registeredId) {
        setRegisteredId(getNewId(uniqueIdPrefix));
      }
      return () => removeId(registeredId);
    }, [registeredId, explicitlyRegisteredId]);
    return registeredId;
  };
  return [idList, useRegisteredId];
};
exports.useIdList = useIdList;
const mergeAttributeValues = function () {
  for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    values[_key2] = arguments[_key2];
  }
  const mergedValues = (0, _classnames.default)(values);
  return mergedValues || undefined;
};
exports.mergeAttributeValues = mergeAttributeValues;
//# sourceMappingURL=fieldUtils.js.map