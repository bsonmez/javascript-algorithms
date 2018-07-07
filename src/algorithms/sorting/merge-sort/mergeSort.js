import Sort from '../Sort';


export default class MergeSort extends Sort {
  sort(originalArray) {
    // Calls visiting callback.
    this.callback.visitCallback(null);

    // if there is no element or an element then return the array.
    if (originalArray.length <= 1) {
      return originalArray;
    }

    // Split the array on two halves.
    const middleIndex = Math.floor(originalArray.length / 2);
    const leftSide = originalArray.slice(0, middleIndex);
    const rightSide = originalArray.slice(middleIndex, originalArray.length);

    // Sort the arrays
    const sortedLeftSide = this.sort(leftSide);
    const sortedRightSide = this.sort(rightSide);

    // Merge and return the sorted arrays in into an array.
    return this.mergeSorted(sortedLeftSide, sortedRightSide);
  }

  mergeSorted(leftArray, rightArray) {
    let sortedArray = [];

    // In case of existence elements size are not 1.
    while (leftArray.length && rightArray.length) {
      let minimumElement = null;

      // Find minimum element of two arrays.
      if (this.comparator.lessThanOrEqual(leftArray[0], rightArray[0])) {
        minimumElement = leftArray.shift();
      } else {
        minimumElement = rightArray.shift();
      }
      // Calls visiting callback.
      this.callback.visitCallback(minimumElement);

      // pushes the minimum element of the arrays to the sorted array
      sortedArray.push(minimumElement);
    }

    if (leftArray.length) {
      sortedArray = sortedArray.concat(leftArray);
    }
    if (rightArray.length) {
      sortedArray = sortedArray.concat(rightArray);
    }
    return sortedArray;
  }
}
