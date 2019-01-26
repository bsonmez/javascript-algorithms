import Queue from '../Queue';

describe('Queue', () => {
  it('should create a new queue', () => {
    const queue = new Queue();
    expect(queue).not.toBeNull();
    expect(queue.linkedlist).not.toBeNull();
  });

  it('should enqueue the data to queue', () => {
    const queue = new Queue();

    queue.enqueue(0);
    queue.enqueue(1);

    expect(queue.toString()).toBe('0,1');
  });

  it('should enqueue and dequeue objects', () => {
    const queue = new Queue();

    queue.enqueue({ value: 'v1', key: 'k1' });
    queue.enqueue({ value: 'v2', key: 'k2' });

    const stringifier = value => `${value.key}:${value.value}`;

    expect(queue.toString(stringifier)).toBe('k1:v1,k2:v2');
    expect(queue.dequeue().value).toBe('v1');
    expect(queue.dequeue().value).toBe('v2');
  });

  it('should peek data from the queue', () => {
    const queue = new Queue();

    expect(queue.peek()).toBeNull();

    queue.enqueue(0);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.peek()).toBe(0);
    expect(queue.peek()).toBe(0);
  });

  it('should dequeue from queue in according to FIFO order', () => {
    const queue = new Queue();

    queue.enqueue(0);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(0);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.isEmpty()).toBeTruthy();
    expect(queue.dequeue()).toBeNull();
  });
});
