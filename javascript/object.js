/* Build JavaScript Objects */

/**
Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.
**/

var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};

/**
In this example, all the properties are stored as strings, such as - "name", "legs", and "tails". However, you can also use numbers as properties.
You can even omit the quotes for single-word string properties.
However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.
**/

var anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus",
  "launch date": 2012
};

var makeValue = anotherObject.make;
var dateValue = anotherObject["launch date"];

/**
There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.
Dot notation is what you use when you know the name of the property you're trying to access ahead of time.
If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
**/

/* Accessing Object Properties with Variables */

/**
Another use of bracket notation on objects is to access a property which is stored as the value of a variable.
This can be very useful for iterating through an object's properties or when accessing a lookup table.
**/

var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"

/**
Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:
**/

var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"
