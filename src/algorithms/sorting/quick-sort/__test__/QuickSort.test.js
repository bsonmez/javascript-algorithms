import QuickSort from '../QuickSort';
import {
  equalArr,
  randomArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

// Complexity constants
const SORTED_ARRAY_VISITING_COUNT = 190;
const RANDOM_ARRAY_VISITING_COUNT = 62;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 190;
const EQUAL_ARRAY_VISITING_COUNT = 19;

// Test Cases
describe('quick-sort', () => {
  it('sould sort array with quick-sort algorithm', () => {
    SortTester.testSort(QuickSort);
  });

  it('should visit EQUAL array specified number of times', () => {
    SortTester.algorithmTimeComplexity(QuickSort, equalArr, EQUAL_ARRAY_VISITING_COUNT);
  });

  it('should visit REVERSE array specified number of times', () => {
    SortTester.algorithmTimeComplexity(QuickSort, reverseArr, REVERSE_SORTED_ARRAY_VISITING_COUNT);
  });

  it('should visit SORTED array specified number of times', () => {
    SortTester.algorithmTimeComplexity(QuickSort, sortedArr, SORTED_ARRAY_VISITING_COUNT);
  });

  it('should visit RANDOM array specified number of times', () => {
    SortTester.algorithmTimeComplexity(QuickSort, randomArr, RANDOM_ARRAY_VISITING_COUNT);
  });
});

