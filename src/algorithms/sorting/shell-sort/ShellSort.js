import Sort from '../Sort';

export default class ShellSort extends Sort {
  sort(orginialArray) {
    // Copied the original array
    const array = [...orginialArray];

    let gap = Math.floor(array.length / 2);

    // swaps until the gap is bigger than zero
    while (gap > 0) {
      for (let i = 0; i < (array.length - gap); i += 1) {
        let index = i;
        let gapSwapedIndex = i + gap;

        while (index >= 0) {
          this.callback.visitCallback(array[index]);

          if (this.comparator.lessThan(array[gapSwapedIndex], array[index])) {
            const temp = array[index];
            array[index] = array[gapSwapedIndex];
            array[gapSwapedIndex] = temp;
          }

          gapSwapedIndex = index;
          index -= gap;
        }
      }
      gap = Math.floor(gap / 2);
    }

    return array;
  }
}
