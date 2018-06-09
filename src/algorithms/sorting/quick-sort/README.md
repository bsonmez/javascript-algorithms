# Quick-Sort

Quick Sort picks an element as *pivot* and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.

- Always pick first element as pivot.(This is what I implemented)
- Always pick last element as pivot.
- Pick a random element as pivot.
- Pick median as pivot.

 The role of the pivot value is to assist with splitting the list. The actual position where the pivot value belongs in the final sorted list, commonly called the split point, will be used to divide the list for subsequent calls to the quick sort.

![Quick Sort](http://interactivepython.org/courselib/static/pythonds/_images/firstsplit.png)


To run tests simply run:

```
npm test -- -t 'quick-sort'
```
