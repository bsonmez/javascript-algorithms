import Sort from '../Sort';

export default class InsertionSort extends Sort {
  sort(originalArray) {
    const array = [...originalArray];

    // go thorugh all the elements of array.
    for (let i = 0; i < array.length; i += 1) {
      let currentIndex = i;

      // calls visiting callback.
      this.callback.visitCallback(array[i]);

      // Checks if previous elements and greater then current one.
      while (
        array[currentIndex - 1] &&
        this.comparator.lessThan(array[currentIndex], array[currentIndex - 1])
      ) {
        // calls visiting callback.
        this.callback.visitCallback(array[currentIndex - 1]);

        // if this is the case then swap that elements.
        const tmp = array[currentIndex - 1];
        array[currentIndex - 1] = array[currentIndex];
        array[currentIndex] = tmp;

        // Shift currentIndex with its left.
        currentIndex -= 1;
      }
    }
    return array;
  }
}
