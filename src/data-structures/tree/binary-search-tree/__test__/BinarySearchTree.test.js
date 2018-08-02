import BinarySearchTree from '../BinarySearchTree';

describe('Binar ySearch Tree', () => {
  it('should create a new binary search tree', () => {
    const tree = new BinarySearchTree();

    expect(tree).toBeDefined();
    expect(tree.root).toBeDefined();
    expect(tree.root.value).toBeNull();
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
  });

  it('should insert values into tree', () => {
    const tree = new BinarySearchTree();

    tree.insert(25);
    tree.insert(10);
    tree.insert(15);
    tree.insert(45);

    expect(tree.toString()).toBe('10,15,25,45');
  });

  it('should remove values from tree', () => {
    const tree = new BinarySearchTree();

    tree.insert(25);
    tree.insert(10);
    tree.insert(15);
    tree.insert(45);

    expect(tree.toString()).toBe('10,15,25,45');

    tree.remove(45);
    expect(tree.toString()).toBe('10,15,25');

    tree.remove(10);
    expect(tree.toString()).toBe('15,25');
  });

  it('should check if the values exits', () => {
    const tree = new BinarySearchTree();

    tree.insert(25);
    tree.insert(10);
    tree.insert(15);
    tree.insert(45);

    expect(tree.contains(15)).toBeTruthy();
    expect(tree.contains(99)).toBeFalsy();
  });
});
