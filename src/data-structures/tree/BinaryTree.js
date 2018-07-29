export default class BinaryTree {
  constructor(value = null, parent = null) {
    this.left = null;
    this.right = null;
    this.value = value;
    this.parent = parent;
  }

  setLeft(node) {
    // Detach left node.
    if (this.left) {
      this.left.parent = null;
    }

    // Attach the node to left.
    this.left = node;

    // Make current node parent for new left.
    if (this.left) {
      this.left.parent = this;
    }

    return this;
  }

  setRight(node) {
    // Detach left node.
    if (this.right) {
      this.right.parent = null;
    }

    // Attach the node to right.
    this.right = node;

    // Make current node parent for new right.
    if (this.right) {
      this.right.parent = this;
    }
    return this;
  }

  removeChild(node) {
    if (this.left && this.left === node) {
      this.left = null;
      return true;
    }

    if (this.right && this.right === node) {
      this.right = null;
      return true;
    }

    return false;
  }

  get rightHeight() {
    if (!this.right) {
      return 0;
    }
    return this.right.height + 1;
  }

  get leftHeight() {
    if (!this.left) {
      return 0;
    }

    return this.left.height + 1;
  }

  get height() {
    return Math.max(this.leftHeight, this.rightHeight);
  }

  get balance() {
    return this.leftHeight - this.rightHeight;
  }

  replaceChild(nodeToReplace, replacementNode) {
    if (!nodeToReplace || !replacementNode) {
      return false;
    }

    if (this.left && this.left === nodeToReplace) {
      this.left = replacementNode;
      return true;
    }

    if (this.right && this.right === nodeToReplace) {
      this.right = replacementNode;
      return true;
    }

    return false;
  }

  traverseInOrder() {
    let traverse = [];

    // Adds left node.
    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder());
    }
    // Adds root.
    traverse.push(this.value);

    // Adds right node.
    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder());
    }
    return traverse;
  }

  toString() {
    return this.traverseInOrder().toString();
  }
}
