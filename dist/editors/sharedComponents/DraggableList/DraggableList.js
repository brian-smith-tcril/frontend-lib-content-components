"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _core = require("@dnd-kit/core");
var _sortable = require("@dnd-kit/sortable");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DraggableList = _ref => {
  let {
    itemList,
    setState,
    updateOrder,
    children
  } = _ref;
  const sensors = (0, _core.useSensors)((0, _core.useSensor)(_core.PointerSensor), (0, _core.useSensor)(_core.KeyboardSensor, {
    coordinateGetter: _sortable.sortableKeyboardCoordinates
  }));
  const handleDragEnd = event => {
    const {
      active,
      over
    } = event;
    if (active.id !== over.id) {
      let updatedArray;
      setState(() => {
        const [activeElement] = itemList.filter(item => item.id === active.id);
        const [overElement] = itemList.filter(item => item.id === over.id);
        const oldIndex = itemList.indexOf(activeElement);
        const newIndex = itemList.indexOf(overElement);
        updatedArray = (0, _sortable.arrayMove)(itemList, oldIndex, newIndex);
        return updatedArray;
      });
      updateOrder()(updatedArray);
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_core.DndContext, {
    sensors: sensors,
    collisionDetection: _core.closestCenter,
    onDragEnd: handleDragEnd,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_sortable.SortableContext, {
      items: itemList,
      strategy: _sortable.verticalListSortingStrategy,
      children: children
    })
  });
};
DraggableList.propTypes = {
  itemList: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string.isRequired
  })).isRequired,
  setState: _propTypes.default.func.isRequired,
  updateOrder: _propTypes.default.func.isRequired,
  children: _propTypes.default.node.isRequired
};
var _default = exports.default = DraggableList;
//# sourceMappingURL=DraggableList.js.map