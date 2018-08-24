import Sort from '../Sort';

export default class BubbleSort extends Sort {
  sort(originalArray) {
    // Keep track of swapping process
    let swapped = false;
    // Copy the array
    const array = [...originalArray];

    for (let i = 1; i < array.length; i += 1) {
      swapped = false;
      this.callback.visitCallback(array[i]);

      for (let j = 0; j < array.length - i; j += 1) {
        this.callback.visitCallback(array[j]);

        // Swaps the elements if they are not in order
        if (this.comparator.lessThan(array[j + 1], array[j])) {
          const tmp = array[j + 1];
          array[j + 1] = array[j];
          array[j] = tmp;

          // Mark as swapped
          swapped = true;
        }
      }
      // If swappes are finished then its sorted then no need to go futher
      if (!swapped) {
        return array;
      }
    }

    return array;
  }
}
