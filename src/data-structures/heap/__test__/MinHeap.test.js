import MinHeap from '../MinHeap';

describe('MinHeap', () => {
  it('should create an empty min heap', () => {
    const minHeap = new MinHeap();

    expect(minHeap).toBeDefined();
    expect(minHeap.peek()).toBeNull();
    expect(minHeap.isEmpty()).toBeTruthy();
  });

  it('should add elements to the heap and heapify it up', () => {
    const minHeap = new MinHeap();

    minHeap.insert(2);
    expect(minHeap.isEmpty()).toBeFalsy();
    expect(minHeap.peek()).toBe(2);
    expect(minHeap.toString()).toBe('2');

    minHeap.insert(5);
    expect(minHeap.peek()).toBe(2);
    expect(minHeap.toString()).toBe('2,5');

    minHeap.insert(3);
    expect(minHeap.peek()).toBe(2);
    expect(minHeap.toString()).toBe('2,5,3');

    minHeap.insert(1);
    expect(minHeap.peek()).toBe(1);
    expect(minHeap.toString()).toBe('1,2,3,5');

    minHeap.insert(9);
    expect(minHeap.peek()).toBe(1);
    expect(minHeap.toString()).toBe('1,2,3,5,9');

    expect(minHeap.poll()).toBe(1);
    expect(minHeap.toString()).toBe('2,5,3,9');

    expect(minHeap.poll()).toBe(2);
    expect(minHeap.toString()).toBe('3,5,9');

    expect(minHeap.poll()).toBe(3);
    expect(minHeap.toString()).toBe('5,9');

    expect(minHeap.poll()).toBe(5);
    expect(minHeap.toString()).toBe('9');

    expect(minHeap.poll()).toBe(9);
    expect(minHeap.toString()).toBe('');
  });

  it('should poll elements from the heap and heapify it down', () => {
    const minHeap = new MinHeap();

    minHeap.insert(5);
    minHeap.insert(2);
    minHeap.insert(3);
    minHeap.insert(8);
    minHeap.insert(10);
    minHeap.insert(9);
    minHeap.insert(11);
    minHeap.insert(1);

    expect(minHeap.toString()).toBe('1,2,3,5,10,9,11,8');

    expect(minHeap.poll()).toBe(1);
    expect(minHeap.toString()).toBe('2,5,3,8,10,9,11');

    expect(minHeap.poll()).toBe(2);
    expect(minHeap.toString()).toBe('3,5,9,8,10,11');

    expect(minHeap.poll()).toBe(3);
    expect(minHeap.toString()).toBe('5,8,9,11,10');

    expect(minHeap.poll()).toBe(5);
    expect(minHeap.toString()).toBe('8,10,9,11');

    expect(minHeap.poll()).toBe(8);
    expect(minHeap.toString()).toBe('9,10,11');

    expect(minHeap.poll()).toBe(9);
    expect(minHeap.toString()).toBe('10,11');

    expect(minHeap.poll()).toBe(10);
    expect(minHeap.toString()).toBe('11');

    expect(minHeap.poll()).toBe(11);
    expect(minHeap.toString()).toBe('');

    expect(minHeap.poll()).toBeNull();
    expect(minHeap.isEmpty()).toBeTruthy();
  });

  it('should heapifty down thought right branch', () => {
    const minHeap = new MinHeap();

    minHeap.insert(8);
    minHeap.insert(10);
    minHeap.insert(9);

    expect(minHeap.toString()).toBe('8,10,9');

    minHeap.insert(32);
    expect(minHeap.toString()).toBe('8,10,9,32');

    expect(minHeap.poll()).toBe(8);
    expect(minHeap.toString()).toBe('9,10,32');
  });

  it('should find the element in the heap', () => {
    const minHeap = new MinHeap();

    minHeap.insert(1);
    minHeap.insert(5);
    minHeap.insert(3);
    minHeap.insert(9);

    expect(minHeap.toString()).toBe('1,5,3,9');

    expect(minHeap.find(5)).toEqual([1]);
    expect(minHeap.find(9)).toEqual([3]);

    minHeap.insert(9);
    expect(minHeap.toString()).toBe('1,5,3,9,9');
    expect(minHeap.find(9)).toEqual([3, 4]);

    expect(minHeap.find(2)).toEqual([]);
  });

  it('should be possible to remove items from heap with heapify down', () => {
    const minHeap = new MinHeap();

    minHeap.insert(5);
    minHeap.insert(21);
    minHeap.insert(11);
    minHeap.insert(15);
    minHeap.insert(32);


    expect(minHeap.toString()).toBe('5,15,11,21,32');

    expect(minHeap.delete(5).toString()).toEqual('11,15,32,21');
    expect(minHeap.delete(5).peek()).toEqual(11);
    expect(minHeap.delete(11).toString()).toEqual('15,21,32');
    expect(minHeap.delete(11).peek()).toEqual(15);
  });

  it('should be possible to remove items from heap with heapify up', () => {
    const minHeap = new MinHeap();

    minHeap.insert(5);
    minHeap.insert(21);
    minHeap.insert(11);
    minHeap.insert(15);
    minHeap.insert(32);
    minHeap.insert(10);
    minHeap.insert(3);
    minHeap.insert(2);
    minHeap.insert(8);


    expect(minHeap.toString()).toBe('2,3,5,8,32,11,10,21,15');
    expect(minHeap.delete(8).toString()).toEqual('2,3,5,15,32,11,10,21');
    expect(minHeap.delete(3).toString()).toEqual('2,15,5,21,32,11,10');
    expect(minHeap.delete(5).toString()).toEqual('2,15,10,21,32,11');
    expect(minHeap.delete(15).toString()).toEqual('2,11,10,21,32');
    expect(minHeap.delete(21).toString()).toEqual('2,11,10,32');
    expect(minHeap.delete(2).toString()).toEqual('10,11,32');
    expect(minHeap.delete(10).toString()).toEqual('11,32');
    expect(minHeap.delete(11).toString()).toEqual('32');
    expect(minHeap.delete(32).toString()).toEqual('');

    expect(minHeap.poll()).toBeNull();
    expect(minHeap.isEmpty()).toBeTruthy();
  });
});
