import BinaryTree from '../BinaryTree';

export default class BinarySearchTreeNode extends BinaryTree {
  insert(value) {
    if (this.value === null) {
      this.value = value;
      return this;
    }

    if (value < this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.setLeft(new BinarySearchTreeNode(value));
      }
    } else if (value > this.value) {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.setRight(new BinarySearchTreeNode(value));
      }
    }

    return this;
  }

  find(value) {
    // Checks root node.
    if (this.value === value) {
      return this;
    }

    if (value < this.value && this.left) {
      // Checks left nodes.
      return this.left.find(value);
    } else if (value > this.value && this.right) {
      // Checks right nodes.
      return this.right.find(value);
    }

    return null;
  }

  contains(value) {
    return !!this.find(value);
  }

  findMin() {
    if (!this.left) {
      return this;
    }
    return this.left.findMin();
  }

  findMax() {
    if (!this.right) {
      return this;
    }
    return this.right.findMax();
  }

  remove(value) {
    const nodeToRemove = this.find(value);

    if (!nodeToRemove) {
      throw new Error('No node found');
    }

    const {
      parent,
    } = nodeToRemove;

    if (!nodeToRemove.left && !nodeToRemove.right) {
      // Node has no children.Just remove the pointer to this node from parent.
      parent.removeChild(nodeToRemove);
    } else if (nodeToRemove.left && nodeToRemove.right) {
      // If Node has two children. Find the next biggest value(Minimum Value in right branch)
      // and replace current value node with that next biggest value.
      const nextBiggerNode = nodeToRemove.right.findMin();
      if (nextBiggerNode !== nodeToRemove.right) {
        this.remove(nextBiggerNode.value);
        nodeToRemove.value = nextBiggerNode.value;
      } else {
        // In case if next right value is the next bigger one and it doesn't have left child
        // then just replace node that is going to be deleted with the right node.
        nodeToRemove.value = nodeToRemove.right.value;
        nodeToRemove.right = nodeToRemove.right.right;
      }
    } else {
      // If Node has only one child.
      // Make this child to be a direct child of current node's parent.
      if (nodeToRemove.left) {
        parent.replaceChild(nodeToRemove, nodeToRemove.left);
      } else {
        parent.replaceChild(nodeToRemove, nodeToRemove.right);
      }
    }
  }
}
