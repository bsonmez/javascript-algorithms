import Sort from '../Sort';

describe('Sort', () => {
  it('cannot reach Sort.sort() directly', () => {
    function doSort() {
      const sorter = new Sort();
      sorter.sort();
    }
    expect(doSort).toThrow();
  });
});

