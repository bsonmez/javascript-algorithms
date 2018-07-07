import MergeSort from '../mergeSort';
import {
  sortedArr,
  reverseArr,
  randomArr,
  equalArr,
  SortTester,
} from '../../SortTester';

// Complexity constats
const NOT_SORTED_ARRAY_VISITING_COUNT = 102;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 87;
const EQUAL_ARRAY_VISITING_COUNT = 79;
const SORTED_ARRAY_VISITING_COUNT = 79;

describe('Merge Sort', () => {
  it('should do merge sorting ', () => {
    SortTester.testSort(MergeSort);
  });

  it('should visit RANDOM array element specified number of times', () => {
    SortTester.algorithmTimeComplexity(
      MergeSort,
      randomArr,
      NOT_SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit EQUAL array element specified number of times', () => {
    SortTester.algorithmTimeComplexity(
      MergeSort,
      equalArr,
      EQUAL_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit REVERSE array element specified number of times', () => {
    SortTester.algorithmTimeComplexity(
      MergeSort,
      reverseArr,
      REVERSE_SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit SORTED array element specified number of times', () => {
    SortTester.algorithmTimeComplexity(
      MergeSort,
      sortedArr,
      SORTED_ARRAY_VISITING_COUNT,
    );
  });
});
