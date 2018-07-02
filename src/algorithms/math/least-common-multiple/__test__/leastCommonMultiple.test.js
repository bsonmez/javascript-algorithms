import leastCommonMutiple from '../leastCommonMultiple';

describe('playground', () => {
  it('should calculate LCM ', () => {
    expect(leastCommonMutiple(0, 0)).toBe(0);
    expect(leastCommonMutiple(1, 1)).toBe(1);
    expect(leastCommonMutiple(3, 5)).toBe(15);
    expect(leastCommonMutiple(6, 8)).toBe(24);
    expect(leastCommonMutiple(7, 3)).toBe(21);
    expect(leastCommonMutiple(7, 2)).toBe(14);
    expect(leastCommonMutiple(9, 4)).toBe(36);
    expect(leastCommonMutiple(-9, 4)).toBe(36);
    expect(leastCommonMutiple(7, -9)).toBe(63);
  });
});
