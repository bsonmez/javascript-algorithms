import factorial from '../factorial';

describe('factorial', () => {
  it('take factorial correctly', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(5)).toBe(120);
  });
});
