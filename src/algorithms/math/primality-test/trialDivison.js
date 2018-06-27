export default function trialDivision(number) {
  // If the number is less than 1, then it doesn't satisfy definition of prime numbers
  if (number <= 1) {
    return false;
  } else if (number <= 3) {
    // 2 and 3 are prime numbers
    return true;
  }

  // If the number does not able to divide by 2 then can eliminate all futher dividers.
  if (number % 2 === 0) {
    return false;
  }

  // if there is no divider up to square root of the number then there will be not higher dividers.
  const wall = Math.sqrt(number);
  for (let divider = 3; divider <= wall; divider += 2) {
    if (number % divider === 0) {
      return false;
    }
  }

  return true;
}
