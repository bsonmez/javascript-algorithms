export default function permutateWithRepetitions(permutationOptions) {
  if (!permutationOptions || permutationOptions.length === 0) {
    return [];
  }

  if (permutationOptions.length === 1) {
    return [permutationOptions];
  }

  let prevPermutations = permutationOptions.map(option => [option]);
  let currPermutations = [];
  let permutationSize = 1;

  // While the size of each permutation is less then or equal to options length...
  while (permutationSize < permutationOptions.length) {
    // Reset all current permutations.
    currPermutations = [];

    for (let permIndex = 0; permIndex < prevPermutations.length; permIndex += 1) {
      for (let optionIndex = 0; optionIndex < permutationOptions.length; optionIndex += 1) {
        let currPermutation = prevPermutations[permIndex];
        currPermutation = currPermutation.concat([permutationOptions[optionIndex]]);
        currPermutations.push(currPermutation);
      }
    }

    prevPermutations = currPermutations.slice(0);
    permutationSize += 1;
  }

  return currPermutations;
}
