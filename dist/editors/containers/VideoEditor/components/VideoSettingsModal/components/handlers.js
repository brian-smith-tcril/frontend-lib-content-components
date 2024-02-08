"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onValue = exports.onEvent = exports.onChecked = exports.handleIndexTransformEvent = exports.handleIndexEvent = void 0;
/**
 * handleIndexEvent({ handler, transform })
 * return a method that takes an index and returns an event handler of the given type
 * that calls a transform with the given index and the incoming value.
 * @param {func} handler - event handler (onValue, onChecked, etc)
 * @param {func} transform - transform method taking an index and a new value
 * @return {func} - event handler creator for index-tied values
 */
const handleIndexEvent = _ref => {
  let {
    handler,
    transform
  } = _ref;
  return index => handler(val => transform(index, val));
};

/**
 * handleIndexTransformEvent({ handler, setter, local, transform })
 * return a method that takes an index and returns an event handler of the given type
 * that calls a transform with the given index and the incoming value.
 * @param {func} handler - event handler (onValue, onChecked, etc)
 * @param {string|number|object} local - local hook values
 * @param {func} setter - method that updates models based on event
 * @param {func} transform - transform method taking an index and a new value
 * @return {func} - event handler creator for index-tied values with separate setter and transforms
 */
exports.handleIndexEvent = handleIndexEvent;
const handleIndexTransformEvent = _ref2 => {
  let {
    handler,
    local,
    setter,
    transform
  } = _ref2;
  return index => handler(val => setter(transform(local, index, val)));
};

/**
 * onValue(handler)
 * returns an event handler that calls the given method with the event target value
 * Intended for most basic input types.
 * @param {func} handler - callback to receive the event value
 * @return - event handler that calls passed handler with event.target.value
 */
exports.handleIndexTransformEvent = handleIndexTransformEvent;
const onValue = handler => e => handler(e.target.value);

/**
 * onValue(handler)
 * returns an event handler that calls the given method with the event target value
 * Intended for checkbox input types.
 * @param {func} handler - callback to receive the event value
 * @return - event handler that calls passed handler with event.target.checked
 */
exports.onValue = onValue;
const onChecked = handler => e => handler(e.target.checked);

/**
 * onEvent(handler)
 * returns an event handler that calls the given method with the event
 * Intended for most basic input types.
 * @param {func} handler - callback to receive the event value
 * @return - event handler that calls passed handler with event
 */
exports.onChecked = onChecked;
const onEvent = handler => e => handler(e);
exports.onEvent = onEvent;
//# sourceMappingURL=handlers.js.map