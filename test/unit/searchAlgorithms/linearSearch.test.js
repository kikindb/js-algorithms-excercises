const { linearSearch } = require('../../../searchAlgorithms/linearSearch');
const { unsortedNames, unsortedNumbers } = require('../utils/arrays');

describe('linearSearch', () => {
  it('should return -1 in unsorted array of numbers', () => {
    expect(linearSearch(unsortedNumbers, 69)).toBe(-1);
  });

  it('should return the position of the element in unsorted array of numbers', () => {
    expect(linearSearch(unsortedNumbers, 43)).toBe(4);
  });

  it('should return -1 in unsorted array of names', () => {
    expect(linearSearch(unsortedNames, 'frankie')).toBe(-1);
  });

  it('should return the position of the item in unsorted array of names', () => {
    expect(linearSearch(unsortedNames, 'zapata')).toBe(6);
  });
});