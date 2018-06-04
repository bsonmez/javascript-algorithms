import linearSearch from '../linear-search';

describe('linearSearch', () => {
  it('should find the element in array', () => {
    const array = [112, 52, 24, 46, 92, 1];

    expect(linearSearch(array, 10)).toEqual([]);
    expect(linearSearch(array, 1)).toEqual([5]);
  });
});

