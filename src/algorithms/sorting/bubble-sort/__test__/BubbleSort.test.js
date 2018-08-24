import BubbleSort from '../BubbleSort';
import {
  sortedArr,
  reverseArr,
  randomArr,
  equalArr,
  SortTester,
} from '../../SortTester';

const EQUAL_ARRAY_VISITING_COUNT = 20;
const SORTED_ARRAY_VISITING_COUNT = 20;
const NOT_SORTED_ARRAY_VISITING_COUNT = 189;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 209;


describe('BubbleSort', () => {
  it('should sort array', () => {
    SortTester.testSort(BubbleSort);
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    SortTester.algorithmTimeComplexity(
      BubbleSort,
      reverseArr,
      REVERSE_SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit SORTED array element specified number of times', () => {
    SortTester.algorithmTimeComplexity(
      BubbleSort,
      sortedArr,
      SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit EQUAL array element specified number of times', () => {
    SortTester.algorithmTimeComplexity(
      BubbleSort,
      equalArr,
      EQUAL_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit RANDOM array element specified number of times', () => {
    SortTester.algorithmTimeComplexity(
      BubbleSort,
      randomArr,
      NOT_SORTED_ARRAY_VISITING_COUNT,
    );
  });
});
