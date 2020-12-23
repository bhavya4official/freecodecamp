/* Manipulate Arrays With shift() */

var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

/**
pop() always removes the last element of an array. What if you want to remove the first?
That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.
**/
