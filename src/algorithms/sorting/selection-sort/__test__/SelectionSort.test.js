import SelectionSort from '../SelectionSort';
import {
  sortedArr,
  reverseArr,
  randomArr,
  equalArr,
  SortTester,
} from '../../SortTester';

const REVERSE_ARR_VISITING_COUNT = 209;
const RANDOM_ARR_VISITING_COUNT = 209;
const EQUAL_ARR_VISITING_COUNT = 209;
const SORTED_ARR_VISITING_COUNT = 209;

describe('Selection Sort', () => {
  it('should sort array', () => {
    SortTester.testSort(SelectionSort);
  });

  it('should visit equal array as many as constant', () => {
    SortTester.algorithmTimeComplexity(
      SelectionSort,
      sortedArr,
      SORTED_ARR_VISITING_COUNT,
    );
  });

  it('should visit equal array as many as constant', () => {
    SortTester.algorithmTimeComplexity(
      SelectionSort,
      reverseArr,
      REVERSE_ARR_VISITING_COUNT,
    );
  });

  it('should visit equal array as many as constant', () => {
    SortTester.algorithmTimeComplexity(
      SelectionSort,
      randomArr,
      RANDOM_ARR_VISITING_COUNT,
    );
  });

  it('should visit equal array as many as constant', () => {
    SortTester.algorithmTimeComplexity(
      SelectionSort,
      equalArr,
      EQUAL_ARR_VISITING_COUNT,
    );
  });
});
