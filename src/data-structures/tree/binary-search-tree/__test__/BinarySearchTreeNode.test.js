import BinarySearchTreeNode from '../BinarySearchTreeNode';

describe('BinarySearchTreeNode', () => {
  it('should create Binary Search tree', () => {
    const bst = new BinarySearchTreeNode(2);

    expect(bst.value).toBe(2);
    expect(bst.left).toBeNull();
    expect(bst.right).toBeNull();
  });

  it('should create Binary Search tree and insert a node if there is no added', () => {
    const bst = new BinarySearchTreeNode();

    bst.insert(5);
    expect(bst.value).toBe(5);
    expect(bst.left).toBeNull();
    expect(bst.right).toBeNull();
  });

  it('should insert nodes', () => {
    const bst = new BinarySearchTreeNode();

    bst.insert(10);
    expect(bst.toString()).toBe('10');
    expect(bst.contains(10)).toBeTruthy();

    bst.insert(12);
    expect(bst.toString()).toBe('10,12');
    expect(bst.contains(12)).toBeTruthy();

    bst.insert(1);
    expect(bst.toString()).toBe('1,10,12');
    expect(bst.contains(1)).toBeTruthy();

    bst.insert(5);
    expect(bst.toString()).toBe('1,5,10,12');
    expect(bst.contains(5)).toBeTruthy();

    bst.insert(6);
    expect(bst.toString()).toBe('1,5,6,10,12');
    expect(bst.contains(6)).toBeTruthy();


    expect(bst.contains(2)).toBeFalsy();
  });

  it('should find node', () => {
    const bst = new BinarySearchTreeNode();

    bst.insert(10);
    bst.insert(12);
    bst.insert(1);
    bst.insert(5);
    bst.insert(6);

    expect(bst.find(5).value).toBe(5);
    expect(bst.find(2)).toBeNull();
  });

  it('should find max and min nodes', () => {
    const bst = new BinarySearchTreeNode();

    bst.insert(10);
    bst.insert(12);
    bst.insert(1);
    bst.insert(5);
    bst.insert(6);

    expect(bst.findMax().value).toBe(12);
    expect(bst.findMin().value).toBe(1);
  });

  it('should remove node', () => {
    const bst = new BinarySearchTreeNode();

    bst.insert(10);
    bst.insert(12);
    bst.insert(1);
    bst.insert(5);
    bst.insert(6);

    expect(bst.toString()).toBe('1,5,6,10,12');

    bst.remove(12);
    expect(bst.toString()).toBe('1,5,6,10');

    bst.remove(1);
    expect(bst.toString()).toBe('5,6,10');
  });

  it('should remove node with children', () => {
    const bst = new BinarySearchTreeNode();

    bst.insert(20);
    bst.insert(10);
    bst.insert(30);
    bst.insert(60);
    bst.insert(40);
    bst.insert(50);

    expect(bst.toString()).toBe('10,20,30,40,50,60');
    expect(bst.find(20).left.value).toBe(10);
    expect(bst.find(20).right.value).toBe(30);

    bst.remove(20);
    expect(bst.toString()).toBe('10,30,40,50,60');

    bst.remove(30);
    expect(bst.toString()).toBe('10,40,50,60');
    expect(bst.value).toBe(40);
    expect(bst.find(40).left.value).toBe(10);
    expect(bst.find(40).right.value).toBe(60);
  });
});
