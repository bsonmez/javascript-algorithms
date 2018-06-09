import Sort from '../Sort';

export default class QuickSort extends Sort {
  sort(originalArray) {
    // Copies the original array to pretent modification
    const array = [...originalArray];

    if (array.length <= 1) {
      return array;
    }
    // divide array 2 sides
    const leftSide = [];
    const rightSide = [];

    // Take first element as a pivot
    const pivot = array.shift();
    const centerArray = [pivot];


    // Split elements left, center and right
    while (array.length) {
      const currentElement = array.shift();

      // Callbacks visited element
      this.callback.visitCallback(currentElement);

      if (this.comparator.equal(currentElement, pivot)) {
        centerArray.push(currentElement);
      } else if (this.comparator.lessThan(currentElement, pivot)) {
        leftSide.push(currentElement);
      } else {
        rightSide.push(currentElement);
      }
    }
    // Sort the arrays
    const leftSideSorted = this.sort(leftSide);
    const rightSideSorted = this.sort(rightSide);

    // Merge the arrays
    return leftSideSorted.concat(centerArray, rightSideSorted);
  }
}

