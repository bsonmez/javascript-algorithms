import Comparator from '../../../utils/comparator/Comparator';

export default function linearSearch(array, searchElement, comparatorCallback) {
  const comparator = new Comparator(comparatorCallback);
  const found = [];

  array.forEach((element, index) => {
    if (comparator.equal(element, searchElement)) {
      found.push(index);
    }
  });

  return found;
}
