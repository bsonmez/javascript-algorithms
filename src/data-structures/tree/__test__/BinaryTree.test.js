import BinaryTree from '../BinaryTree';

describe('Binary Tree', () => {
  it('should be null all nodes', () => {
    const node = new BinaryTree();

    expect(node).toBeDefined();
    expect(node.value).toBeNull();
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });

  it('should creates nodes', () => {
    const root = new BinaryTree(1);
    const left = new BinaryTree(2);
    const right = new BinaryTree(3);

    root.setLeft(left).setRight(right);

    expect(root.value).toBe(1);
    expect(root.left.value).toBe(2);
    expect(root.right.value).toBe(3);
  });

  it('should traverse nodes', () => {
    const root = new BinaryTree(1);
    const left = new BinaryTree(2);
    const right = new BinaryTree(3);

    root.setLeft(left).setRight(right);

    expect(root.traverseInOrder()).toEqual([2, 1, 3]);
    expect(root.toString()).toBe('2,1,3');
  });

  it('should set parent node', () => {
    const root = new BinaryTree(1);
    const left = new BinaryTree(2);
    const right = new BinaryTree(3);

    root.setLeft(left).setRight(right);

    expect(root.parent).toBeNull();
    expect(root.left.parent.value).toBe(1);
    expect(root.right.parent.value).toBe(1);
  });

  it('should remove node', () => {
    const root = new BinaryTree(1);
    const left = new BinaryTree(2);
    const right = new BinaryTree(3);

    root.setLeft(left).setRight(right);

    expect(root.traverseInOrder()).toEqual([2, 1, 3]);

    expect(root.remove(root.right)).toBeTruthy();
    expect(root.traverseInOrder()).toEqual([2, 1]);

    expect(root.remove(root.left)).toBeTruthy();
    expect(root.traverseInOrder()).toEqual([1]);

    expect(root.remove(root.left)).toBeFalsy();
    expect(root.traverseInOrder()).toEqual([1]);
  });

  it('should remove node', () => {
    const root = new BinaryTree(1);
    const left = new BinaryTree(2);
    const right = new BinaryTree(3);

    root.setLeft(left).setRight(right);

    expect(root.traverseInOrder()).toEqual([2, 1, 3]);

    expect(root.remove(root.right)).toBeTruthy();
    expect(root.traverseInOrder()).toEqual([2, 1]);

    expect(root.remove(root.left)).toBeTruthy();
    expect(root.traverseInOrder()).toEqual([1]);

    expect(root.remove(root.left)).toBeFalsy();
    expect(root.traverseInOrder()).toEqual([1]);
  });

  it('should calculate tree height', () => {
    const root = new BinaryTree(1);
    const left = new BinaryTree(2);
    const right = new BinaryTree(3);
    const grandRight = new BinaryTree(4);
    const grandLeft = new BinaryTree(5);
    const grandGrandLeft = new BinaryTree(6);

    expect(root.height).toBe(0);
    root.setLeft(left).setRight(right);

    expect(root.height).toBe(1);
    expect(root.balance).toBe(0);

    left.setLeft(grandLeft).setRight(grandRight);
    expect(root.height).toBe(2);
    expect(left.height).toBe(1);
    expect(root.balance).toBe(1);

    grandLeft.setRight(grandGrandLeft);
    expect(root.height).toBe(3);
    expect(left.height).toBe(2);

    expect(grandLeft.height).toBe(1);
    expect(grandRight.height).toBe(0);
    expect(grandGrandLeft.height).toBe(0);

    expect(root.balance).toBe(2);
  });

  it('should remove node', () => {
    const root = new BinaryTree(1);
    const left = new BinaryTree(2);
    const right = new BinaryTree(3);
    const replacementNode = new BinaryTree(9);

    root.setLeft(left).setRight(right);

    expect(root.traverseInOrder()).toEqual([2, 1, 3]);
    right.setRight(replacementNode);

    expect(root.traverseInOrder()).toEqual([2, 1, 3, 9]);

    expect(root.replaceChild(root.right, root.right.right)).toBeTruthy();
    expect(root.right.value).toBe(9);
    expect(root.right.right).toBeNull();
    expect(root.traverseInOrder()).toEqual([2, 1, 9]);

    expect(root.replaceChild(root.left, replacementNode)).toBeTruthy();
    expect(root.traverseInOrder()).toEqual([9, 1, 9]);
  });
});
