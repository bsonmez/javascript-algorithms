import Comparator from '../../utils/comparator/Comparator';

export default class MinHeap {
  constructor(comparatorFunction) {
    this.heapContainer = [];
    this.compare = new Comparator(comparatorFunction);
  }

  // Its actually 2*Index since array start from 0 we had to add +2
  getRightChildIndex(parentIndex) {
    return (2 * parentIndex) + 2;
  }
  // Its actually 2*Index since array start from 0 we had to add +1
  getLeftChildIndex(parentIndex) {
    return (2 * parentIndex) + 1;
  }

  // Its actually Index/2  since array start from 0 we had to substrack 1
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }

  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  }

  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
  }

  leftChild(parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  }

  rightChild(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  }

  parent(childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)];
  }

  // Heapify the heap from its last element upwards.
  heapifyUp(customStartIndex) {
    let currentIndex = customStartIndex || this.heapContainer.length - 1;

    while (this.hasParent(currentIndex) &&
      this.compare.lessThan(this.heapContainer[currentIndex], this.parent(currentIndex))) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  // Heapify the heap from root to bottom.
  heapifyDown(customStartIndex) {
    let currentIndex = customStartIndex || 0;
    let nextIndex = null;

    while (this.hasLeftChild(currentIndex)) {
      if (this.hasRightChild(currentIndex) &&
        this.compare.lessThan(this.rightChild(currentIndex), this.leftChild(currentIndex))
      ) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }

      if (this.compare.lessThan(this.heapContainer[currentIndex], this.heapContainer[nextIndex])) {
        break;
      }
      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }

  swap(indexOne, indexTwo) {
    const tmp = this.heapContainer[indexTwo];
    this.heapContainer[indexTwo] = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = tmp;
  }

  // Get top element value from the heap.
  peek() {
    if (this.heapContainer.length === 0) {
      return null;
    }
    return this.heapContainer[0];
  }

  // Extract top element from the heap.
  poll() {
    if (this.heapContainer.length === 0) {
      return null;
    }

    if (this.heapContainer.length === 1) {
      return this.heapContainer.pop();
    }

    const element = this.heapContainer[0];
    this.heapContainer[0] = this.heapContainer.pop();
    this.heapifyDown();

    return element;
  }

  insert(element) {
    this.heapContainer.push(element);
    this.heapifyUp();
    return this;
  }

  delete(element, customFindingComparator) {
    const numberOfItemToDelete = this.find(element).length;
    const customComparator = customFindingComparator || this.compare;

    for (let iteration = 0; iteration < numberOfItemToDelete; iteration += 1) {
      const indexToDelete = this.find(element, customComparator).pop();

      if (indexToDelete === (this.heapContainer.length - 1)) {
        this.heapContainer.pop();
      } else {
        // Move last element in heap to the deleted position.
        this.heapContainer[indexToDelete] = this.heapContainer.pop();
        // Get parent.
        const parentElement = this.hasParent(indexToDelete) ? this.parent(indexToDelete) : null;
        const leftChild = this.hasLeftChild(indexToDelete) ? this.leftChild(indexToDelete) : null;

        if (leftChild !== null &&
          (
            parentElement === null ||
            this.compare.lessThan(parentElement, this.heapContainer[indexToDelete])
          )
        ) {
          this.heapifyDown(indexToDelete);
        } else {
          this.heapifyUp(indexToDelete);
        }
      }
    }
    return this;
  }

  isEmpty() {
    return !this.heapContainer.length;
  }

  toString() {
    return this.heapContainer.toString();
  }

  find(element, customComparator) {
    const foundItemIndicies = [];
    const comparator = customComparator || this.compare;

    for (let itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex += 1) {
      if (comparator.equal(element, this.heapContainer[itemIndex])) {
        foundItemIndicies.push(itemIndex);
      }
    }
    return foundItemIndicies;
  }
}
