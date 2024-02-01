"use strict";

var _utils = require("./utils");
describe('VideGallery utils', () => {
  describe('sortFunctions', () => {
    const dateA = {
      dateAdded: new Date('2023-03-30')
    };
    const dateB = {
      dateAdded: new Date('2023-03-31')
    };
    const nameA = {
      displayName: 'This is the Name A',
      dateAdded: new Date('2023-03-30')
    };
    const nameB = {
      displayName: 'Hello World',
      dateAdded: new Date('2023-03-30')
    };
    const nameC = {
      displayName: 'Hello World',
      dateAdded: new Date('2023-03-31')
    };
    const durationA = {
      duration: 10
    };
    const durationB = {
      duration: 100
    };
    test('correct functionality of dateNewest', () => {
      expect(_utils.sortFunctions.dateNewest(dateA, dateB)).toBeGreaterThan(0);
      expect(_utils.sortFunctions.dateNewest(dateB, dateA)).toBeLessThan(0);
      expect(_utils.sortFunctions.dateNewest(dateA, dateA)).toEqual(0);
    });
    test('correct functionality of dateOldest', () => {
      expect(_utils.sortFunctions.dateOldest(dateA, dateB)).toBeLessThan(0);
      expect(_utils.sortFunctions.dateOldest(dateB, dateA)).toBeGreaterThan(0);
      expect(_utils.sortFunctions.dateOldest(dateA, dateA)).toEqual(0);
    });
    test('correct functionality of nameAscending', () => {
      expect(_utils.sortFunctions.nameAscending(nameA, nameB)).toEqual(1);
      expect(_utils.sortFunctions.nameAscending(nameB, nameA)).toEqual(-1);
      expect(_utils.sortFunctions.nameAscending(nameA, nameA)).toEqual(0);
      expect(_utils.sortFunctions.nameAscending(nameB, nameC)).toBeGreaterThan(0);
    });
    test('correct functionality of nameDescending', () => {
      expect(_utils.sortFunctions.nameDescending(nameA, nameB)).toEqual(-1);
      expect(_utils.sortFunctions.nameDescending(nameB, nameA)).toEqual(1);
      expect(_utils.sortFunctions.nameDescending(nameA, nameA)).toEqual(0);
      expect(_utils.sortFunctions.nameDescending(nameB, nameC)).toBeGreaterThan(0);
    });
    test('correct functionality of durationShortest', () => {
      expect(_utils.sortFunctions.durationShortest(durationA, durationB)).toBeLessThan(0);
      expect(_utils.sortFunctions.durationShortest(durationB, durationA)).toBeGreaterThan(0);
      expect(_utils.sortFunctions.durationShortest(durationA, durationA)).toEqual(0);
    });
    test('correct functionality of durationLongest', () => {
      expect(_utils.sortFunctions.durationLongest(durationA, durationB)).toBeGreaterThan(0);
      expect(_utils.sortFunctions.durationLongest(durationB, durationA)).toBeLessThan(0);
      expect(_utils.sortFunctions.durationLongest(durationA, durationA)).toEqual(0);
    });
  });
});
//# sourceMappingURL=utils.test.js.map