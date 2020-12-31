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
You can even omit the quotes for single-word string properties, as follows:
**/

var anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};

// However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.

/**
There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.
Dot notation is what you use when you know the name of the property you're trying to access ahead of time.
**/
