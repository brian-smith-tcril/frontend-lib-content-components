"use strict";

var _utils = require("./utils");
describe('SearchBlocks utils', () => {
  describe('filterBlocksByText function', () => {
    const testBlocks = {
      block1: {
        id: 'block1',
        path: 'Root / Child 1'
      },
      block2: {
        id: 'block2',
        path: 'Root / Child 2'
      },
      block3: {
        id: 'block3',
        path: 'Another / Block'
      }
    };
    test('returns an empty object when searchText is empty', () => {
      const searchText = '';
      const filteredBlocks = (0, _utils.filterBlocksByText)(searchText, testBlocks);
      expect(filteredBlocks).toEqual({});
    });
    test('filters blocks based on case-insensitive searchText', () => {
      const searchText = 'child';
      const filteredBlocks = (0, _utils.filterBlocksByText)(searchText, testBlocks);
      expect(filteredBlocks).toEqual({
        block1: {
          id: 'block1',
          path: 'Root / Child 1'
        },
        block2: {
          id: 'block2',
          path: 'Root / Child 2'
        }
      });
    });
    test('returns an empty object when no blocks match searchText', () => {
      const searchText = 'nonexistent';
      const filteredBlocks = (0, _utils.filterBlocksByText)(searchText, testBlocks);
      expect(filteredBlocks).toEqual({});
    });
    test('filters blocks with partial matches in path', () => {
      const searchText = 'root';
      const filteredBlocks = (0, _utils.filterBlocksByText)(searchText, testBlocks);
      expect(filteredBlocks).toEqual({
        block1: {
          id: 'block1',
          path: 'Root / Child 1'
        },
        block2: {
          id: 'block2',
          path: 'Root / Child 2'
        }
      });
    });
  });
});
//# sourceMappingURL=utils.test.js.map