export default function factorial(number) {
  // initial result
  let result = 1;

  // Loop calculation until given number.
  for (let i = 1; i < number; i += 1) {
    result *= i;
  }

  return result;
}

