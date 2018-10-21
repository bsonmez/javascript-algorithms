import ShellSort from '../ShellSort';
import {
  equalArr,
  randomArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 320;
const NOT_SORTED_ARRAY_VISITING_COUNT = 320;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 320;
const EQUAL_ARRAY_VISITING_COUNT = 320;

describe('ShellSort', () => {
  it('should sort array', () => {
    SortTester.testSort(ShellSort);
  });

  it('should visit EQUAL ARRAY specified number of times', () => {
    SortTester.algorithmTimeComplexity(ShellSort, equalArr, EQUAL_ARRAY_VISITING_COUNT);
  });

  it('should visit SORTED ARRAY specified number of times', () => {
    SortTester.algorithmTimeComplexity(ShellSort, sortedArr, SORTED_ARRAY_VISITING_COUNT);
  });

  it('should visit REVERSE ARRAY specified number of times', () => {
    SortTester.algorithmTimeComplexity(ShellSort, reverseArr, REVERSE_SORTED_ARRAY_VISITING_COUNT);
  });

  it('should visit REVERSE ARRAY specified number of times', () => {
    SortTester.algorithmTimeComplexity(ShellSort, randomArr, NOT_SORTED_ARRAY_VISITING_COUNT);
  });
});
