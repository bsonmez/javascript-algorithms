import LinkedListNode from '../LinkedListNode';

describe('Linkedlist Node tests', () => {
  it('should create node with value', () => {
    const node = new LinkedListNode(9);

    expect(node.value).toBe(9);
    expect(node.next).toBeNull();
  });

  it('should create node with object as a value', () => {
    const nodeWithValue = {
      value: 1,
      key: 'first',
    };
    const node = new LinkedListNode(nodeWithValue);

    expect(node.value.value).toBe(1);
    expect(node.value.key).toBe('first');
    expect(node.next).toBeNull();
  });

  it('should connect nodes together via links', () => {
    const node2 = new LinkedListNode(2);
    const node = new LinkedListNode(1, node2);

    expect(node.next).toBeDefined();
    expect(node.value).toBe(1);
    expect(node2.next).toBeNull();
    expect(node2.value).toBe(2);
    expect(node.next.value).toBe(2);
  });
});
