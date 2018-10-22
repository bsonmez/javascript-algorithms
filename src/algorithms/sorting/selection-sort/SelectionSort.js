import Sort from '../Sort';

export default class SelectionSort extends Sort {
  sort(originalArray) {
    const array = [...originalArray];

    for (let i = 0; i < array.length - 1; i += 1) {
      let minIndex = i;
      this.callback.visitCallback(array[i]);

      for (let j = i + 1; j < array.length; j += 1) {
        this.callback.visitCallback(array[j]);

        if (this.comparator.lessThan(array[j], array[minIndex])) {
          minIndex = j;
        }
      }
      // If new minimum element has been found then swap it current i-th element
      if (minIndex !== i) {
        const tmp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = tmp;
      }
    }
    return array;
  }
}
