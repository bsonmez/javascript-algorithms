import euclideanAlgorithm from '../euclideanAlgorithm';

describe('Euclidean Algorithm', () => {
  it('should find greatest common divisor', () => {
    expect(euclideanAlgorithm(0, 0)).toBeNull();
    expect(euclideanAlgorithm(1, 0)).toBe(1);
    expect(euclideanAlgorithm(2, 0)).toBe(2);
    expect(euclideanAlgorithm(1, 2)).toBe(1);
    expect(euclideanAlgorithm(5, 5)).toBe(5);
    expect(euclideanAlgorithm(73, 7)).toBe(1);
    expect(euclideanAlgorithm(7, 73)).toBe(1);
    expect(euclideanAlgorithm(52, 642)).toBe(2);
    expect(euclideanAlgorithm(52, 642)).toBe(2);
    expect(euclideanAlgorithm(270, 192)).toBe(6);
    expect(euclideanAlgorithm(192, 270)).toBe(6);
    expect(euclideanAlgorithm(-192, 270)).toBe(6);
  });
});
