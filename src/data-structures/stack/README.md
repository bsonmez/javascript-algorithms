# Stack

Stack is a data structure which follows particular orders like LIFO(Last In First Out) or FILO(First In Last Out).

The methods are:

- **Push:** Adds an item in the stack. If the stack is full, then it is said to be an Overflow condition.
- **Pop:** Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an Underflow condition.
- **Peek** or **Top:** Returns top element of stack.
- **isEmpty:** Returns true if stack is empty, else false.

![Stack](https://upload.wikimedia.org/wikipedia/commons/b/b4/Lifo_stack.png)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))


To run tests simply run:

```
npm test -- -t 'stack'
```
