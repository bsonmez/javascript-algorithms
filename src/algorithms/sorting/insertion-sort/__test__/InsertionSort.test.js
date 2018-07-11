import InsertionSort from '../InsertionSort';
import {
  sortedArr,
  reverseArr,
  randomArr,
  equalArr,
  SortTester,
} from '../../SortTester';

const REVERSE_ARR_VISITING_COUNT = 210;
const RANDOM_ARR_VISITING_COUNT = 101;
const EQUAL_ARR_VISITING_COUNT = 20;
const SORTED_ARR_VISITING_COUNT = 20;


describe('Insertion Sort', () => {
  it('should sort array', () => {
    SortTester.testSort(InsertionSort);
  });

  it('should visit equal array as many as constant', () => {
    SortTester.algorithmTimeComplexity(
      InsertionSort,
      sortedArr,
      SORTED_ARR_VISITING_COUNT,
    );
  });


  it('should visit equal array as many as constant', () => {
    SortTester.algorithmTimeComplexity(
      InsertionSort,
      reverseArr,
      REVERSE_ARR_VISITING_COUNT,
    );
  });


  it('should visit equal array as many as constant', () => {
    SortTester.algorithmTimeComplexity(
      InsertionSort,
      randomArr,
      RANDOM_ARR_VISITING_COUNT,
    );
  });

  it('should visit equal array as many as constant', () => {
    SortTester.algorithmTimeComplexity(
      InsertionSort,
      equalArr,
      EQUAL_ARR_VISITING_COUNT,
    );
  });
});
