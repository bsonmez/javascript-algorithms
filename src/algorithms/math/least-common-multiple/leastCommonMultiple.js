import euclideanAlgorithm from '../euclidean-algorithm/euclideanAlgorithm';

export default function leastCommonMultiple(a, b) {
  if (a === 0 && b === 0) {
    return 0;
  }

  return Math.abs(a * b) / euclideanAlgorithm(a, b);
}
