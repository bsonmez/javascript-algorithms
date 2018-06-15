import Stack from '../Stack';

describe('Stack', () => {
  it('should create a stack', () => {
    const stack = new Stack();
    expect(stack).not.toBeNull();
    expect(stack.linkedList).not.toBeNull();
  });

  it('should push value into the stack', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.toString()).toBe('1,2,3');
  });

  it('should pop value from the stack', () => {
    const stack = new Stack();
    expect(stack.peek()).toBeNull();

    stack.push(1);
    stack.push(2);
    stack.push(99);
    stack.push(5);

    expect(stack.pop()).toBe(5);
    expect(stack.pop()).toBe(99);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);

    expect(stack.peek()).toBeNull();
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('should peek data from the stack', () => {
    const stack = new Stack();
    expect(stack.peek()).toBeNull();

    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);

    stack.push(99);
    expect(stack.peek()).toBe(99);
  });

  it('should check stack if its empty or not', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBeTruthy();

    stack.push(1);
    expect(stack.isEmpty()).toBeFalsy();
  });

  it('should convert stack to an array', () => {
    const stack = new Stack();
    expect(stack.peek()).toBeNull();

    stack.push(19);
    stack.push(5);
    stack.push(1);
    stack.push(121);

    expect(stack.toArray()).toEqual([121, 1, 5, 19]);
  });
});
