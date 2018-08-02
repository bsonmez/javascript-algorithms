import BinarySearchTreeNode from './BinarySearchTreeNode';

export default class BinarySearchTree {
  constructor() {
    this.root = new BinarySearchTreeNode();
  }

  insert(value) {
    this.root.insert(value);
  }
  remove(value) {
    return this.root.remove(value);
  }
  contains(value) {
    return this.root.contains(value);
  }

  toString() {
    return this.root.toString();
  }
}
