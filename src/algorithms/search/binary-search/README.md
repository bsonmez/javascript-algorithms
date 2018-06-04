# Binary Search

Search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.

![Binary Search](https://www.geeksforgeeks.org/wp-content/uploads/gq/2014/01/binary-search1.png)

## How to use this repository

**Run tests by name**
```
npm test -- -t 'search'
```
