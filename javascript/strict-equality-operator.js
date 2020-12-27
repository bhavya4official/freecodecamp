/* Comparison with the Strict Equality Operator */

3 ===  3   // true
3 === '3'  // false

/**
Strict equality (===) is the counterpart to the equality operator (==).
However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.
**/
