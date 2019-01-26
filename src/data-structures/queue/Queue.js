import LinkedList from '../linked-list/LinkedList';

export default class Queue {
  constructor() {
    this.linkedlist = new LinkedList();
  }

  isEmpty() {
    return !this.linkedlist.tail;
  }

  peek() {
    return (!this.linkedlist.head) ? null : this.linkedlist.head.value;
  }

  enqueue(value) {
    this.linkedlist.append(value);
  }

  dequeue() {
    const removedHead = this.linkedlist.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  toString(callback) {
    return this.linkedlist.toString(callback);
  }
}
