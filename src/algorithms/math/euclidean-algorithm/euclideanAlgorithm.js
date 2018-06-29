export default function euclideanAlgorithm(numberOne, NumberTwo) {
  const first = Math.abs(numberOne);
  const second = Math.abs(NumberTwo);

  if (first === 0 && second === 0) {
    return null;
  }

  if (first !== 0 && second === 0) {
    return first;
  }

  if (first === 0 && second !== 0) {
    return second;
  }

  if (first > second) {
    return euclideanAlgorithm(first % second, second);
  }

  return euclideanAlgorithm(second % first, first);
}
