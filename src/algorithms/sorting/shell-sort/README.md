# Shellsort

Shellsort, also known as Shell sort or Shell's method, 
is an in-place comparison sort. It can be seen as either a 
generalization of sorting by exchange (bubble sort) or sorting 
by insertion (insertion sort). The method starts by sorting 
pairs of elements far apart from each other, then progressively 
reducing the gap between elements to be compared. Starting 
with far apart elements, it can move some out-of-place 
elements into position faster than a simple nearest neighbor 
exchange

![Shellsort](https://upload.wikimedia.org/wikipedia/commons/d/d8/Sorting_shellsort_anim.gif)

To run tests simply run:

```
npm test -- -t 'shellsort'
```
