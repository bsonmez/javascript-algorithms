import LinkedList from '../LinkedList';

describe('LinkedList', () => {

  // Creation.
  it('should create new empty linkedlist', () => {
    const linkedList = new LinkedList();
    expect(linkedList.toString()).toBe('');
  });

  // Addition.
  it('should add node to empty linkedlist', () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.toString()).toBe('1,2');
  });

  it('should prepend node to linkedlist', () => {
    const linkedList = new LinkedList();

    linkedList.append(1);
    linkedList.prepend(2);

    expect(linkedList.toString()).toBe('2,1');
  });

  // Deletion.
  it('should delete node from linkedlist', () => {
    const linkedList = new LinkedList();

    expect(linkedList.delete(1)).toBeNull();

    linkedList.append(1);
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(7);
    linkedList.append(4);
    linkedList.append(6);
    linkedList.append(9);

    expect(linkedList.head.toString()).toBe('1');
    expect(linkedList.tail.toString()).toBe('9');

    const deletedNode = linkedList.delete(7);
    expect(deletedNode.value).toBe(7);
    expect(linkedList.toString()).toBe('1,1,2,4,6,9');
    linkedList.delete(1);
    expect(linkedList.toString()).toBe('1,2,4,6,9');
    linkedList.delete(2);
    expect(linkedList.toString()).toBe('1,4,6,9');
    linkedList.delete(6);
    expect(linkedList.toString()).toBe('1,4,9');

    expect(linkedList.head.toString()).toBe('1');
    expect(linkedList.tail.toString()).toBe('9');

    linkedList.delete(9);
    expect(linkedList.toString()).toBe('1,4');

    expect(linkedList.tail.toString()).toBe('4');

    linkedList.delete(4);
    expect(linkedList.toString()).toBe('1');

    expect(linkedList.head.toString()).toBe('1');
    expect(linkedList.tail.toString()).toBe('1');

    linkedList.delete(1);
    expect(linkedList.toString()).toBe('');
  });

  it('should delete head from linkedlist', () => {
    const linkedList = new LinkedList();

    linkedList.append(2).append(5);

    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('5');

    const deletedNode = linkedList.deleteHead();
    expect(deletedNode.value).toBe(2);
    expect(linkedList.toString()).toBe('5');
    expect(linkedList.head.toString()).toBe('5');
    expect(linkedList.tail.toString()).toBe('5');

    const deletedNodeSecond = linkedList.deleteHead();
    expect(deletedNodeSecond.value).toBe(5);
    expect(linkedList.toString()).toBe('');
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it('should delete tail from linkedlist', () => {
    const linkedlist = new LinkedList();

    linkedlist.append(4);
    linkedlist.append(9);
    linkedlist.append(6);
    linkedlist.append(8);

    expect(linkedlist.head.toString()).toBe('4');
    expect(linkedlist.tail.toString()).toBe('8');

    const deletedNode = linkedlist.deleteTail();
    expect(deletedNode.value).toBe(8);
    expect(linkedlist.toString()).toBe('4,9,6');
    expect(linkedlist.head.toString()).toBe('4');
    expect(linkedlist.tail.toString()).toBe('6');

    const deletedNodeSecond = linkedlist.deleteTail();
    expect(deletedNodeSecond.value).toBe(6);
    expect(linkedlist.toString()).toBe('4,9');
    expect(linkedlist.head.toString()).toBe('4');
    expect(linkedlist.tail.toString()).toBe('9');

    const deletedNodeThird = linkedlist.deleteTail();
    expect(deletedNodeThird.value).toBe(9);
    expect(linkedlist.toString()).toBe('4');
    expect(linkedlist.head.toString()).toBe('4');
    expect(linkedlist.tail.toString()).toBe('4');

    const deletedNodeForth = linkedlist.deleteTail();
    expect(deletedNodeForth.value).toBe(4);
    expect(linkedlist.toString()).toBe('');
    expect(linkedlist.head).toBeNull();
    expect(linkedlist.tail).toBeNull();
  });

  // Find.
  it('should find node by value', () => {
    const linkedList = new LinkedList();

    expect(linkedList.find({
      value: 11,
    })).toBeNull();

    linkedList.append(5).append(7);
    expect(linkedList.toString()).toBe('5,7');
    expect(linkedList.find({
      value: 5,
    })).toBeDefined();

    const seekedNode = linkedList.find({
      value: 5,
    });

    expect(seekedNode.value).toBe(5);
  });

  it('should find node by callback', () => {
    const linkedList = new LinkedList();

    linkedList.append({
      value: 1,
      key: 'first',
    }).append({
      value: 2,
      key: 'second',
    }).append({
      value: 3,
      key: 'third',
    });

    const node = linkedList.find({
      callback: value => value.key === 'third',
    });

    expect(node).toBeDefined();
    expect(node.value.value).toBe(3);
    expect(node.value.key).toBe('third');
    expect(linkedList.find({
      callback: value => value.key === 'fifth',
    })).toBeNull();
  });
});
