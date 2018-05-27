import fibonacci from '../fibonacci';

describe('fibonacci', () => {
  it('should perform fibonacci correctly', () => {
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(20)).toBe(6765);
  });
});

