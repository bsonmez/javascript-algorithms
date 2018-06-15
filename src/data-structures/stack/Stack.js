import LinkedList from '../linked-list/LinkedList';

export default class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }
  // Adds the value to top of the stack
  push(value) {
    this.linkedList.append(value);
  }

  // Pops the value on top of the stack
  pop() {
    const popTop = this.linkedList.deleteTail();
    return popTop ? popTop.value : null;
  }

  // Checks the stack if its empty or not
  isEmpty() {
    return !this.linkedList.tail;
  }

  // Return the top of the stack.
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.linkedList.tail.value;
  }

  // Converts stack values to an array.
  toArray() {
    return this.linkedList.toArray().map(LinkedListNode => LinkedListNode.value).reverse();
  }

  toString(callback) {
    return this.linkedList.toString(callback);
  }
}
