import Comparator from '../../../utils/comparator/Comparator';

export default function binarySearch(sortedArray, element, comparatorCallback) {
  const comparator = new Comparator(comparatorCallback);

  let firstIndex = 0;
  let lastIndex = sortedArray.length - 1;

  while (firstIndex <= lastIndex) {
    const midIndex = firstIndex + Math.floor((lastIndex - firstIndex) / 2);

    // If the element has been found return index
    if (comparator.equal(sortedArray[midIndex], element)) {
      return midIndex;
    }
    // If the element less or more than middle index
    if (comparator.lessThan(sortedArray[midIndex], element)) {
      // Right side.
      firstIndex = midIndex + 1;
    } else {
      // Left side.
      lastIndex = midIndex - 1;
    }
  }
  return -1;
}

