/* Use the Rest Parameter with Function Parameters */

/**
In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters.
With the rest parameter, you can create functions that take a variable number of arguments.
These arguments are stored in an array that can be accessed later from inside the function.
**/

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.

/**
The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.
Example 2:
**/

const sum = (...args) => {
  //const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(2, 2, 3));
console.log(sum(5, 4));

//
