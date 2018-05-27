export default function fibonacci(numberPosition) {
  if (numberPosition === 1) {
    return 1;
  }

  let iterationCounter = numberPosition - 1;

  // Calculated Fibonacci Number
  let fib = null;

  // Previous number.
  let previous = 1;

  // Before previous Number
  let prePrevious = 0;

  while (iterationCounter) {
    // Calculate current value
    fib = previous + prePrevious;

    // Shift Values
    prePrevious = previous;
    previous = fib;
    iterationCounter -= 1;
  }
  return fib;
}

