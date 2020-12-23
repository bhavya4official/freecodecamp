/* Nest one Array within Another Array */

var myArray = [["Bulls", 23], ["White Sox", 45]];

// This is also called a multi-dimensional array.


/* Access Multi-Dimensional Arrays With Indexes */

var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11

/**
One way to think of a multi-dimensional array, is as an array of arrays.
When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array,
and each additional pair of brackets refers to the next level of entries inside.
**/
