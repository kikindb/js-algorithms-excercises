const { binarySearch } = require('../../../searchAlgorithms/binarySearch');
const { sortedNames, sortedNumbers } = require('../utils/arrays');

describe('binarySearch', () => {
  it('should return -1 looking in array of numbers', () => {
    expect(binarySearch(sortedNumbers, 560)).toBe(-1);
  });

  it('should return 200 position looking in array of numbers', () => {
    expect(binarySearch(sortedNumbers, 200)).toBe(6);
  });

  it('should return enrique position in array', () => {
    expect(binarySearch(sortedNames, "enrique")).toBe(3);
  });

  it('should return -1 looking in array of names', () => {
    expect(binarySearch(sortedNames, "pedro")).toBe(-1);
  });
});