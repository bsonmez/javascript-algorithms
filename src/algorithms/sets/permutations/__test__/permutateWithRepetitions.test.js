import permutateWithRepetitions from '../permutateWithRepetitions';

describe('Permutate With Repetitions', () => {
  it('should permutate strig with repetition', () => {
    const permutationsFirst = permutateWithRepetitions([]);
    expect(permutationsFirst).toEqual([]);

    const permutationsSecond = permutateWithRepetitions(['1']);
    expect(permutationsSecond).toEqual([['1']]);

    const permutationsThird = permutateWithRepetitions(['1', '2']);
    expect(permutationsThird).toEqual([
      ['1', '1'],
      ['1', '2'],
      ['2', '1'],
      ['2', '2'],
    ]);

    const permutationsCalculation = permutateWithRepetitions(['1', '2', '3', '4']);
    expect(permutationsCalculation.length).toBe(4 * 4 * 4 * 4);
  });
});
