// I paired by myself on this challenge.

// __________________________________________
// Write your code below.

var secretNumber = 7;
var password = 'just open the door';
var allowedIn = false;
var members = ["John", "Peter", "Paul", "Mary"];




// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// If you're comfortable with numbers, strings, booleans, and arrays as data types and with prefacing js
// variables with "var" and ending lines with ";", then this challenge wasn't really anything of the sort.
// I didn't need any pseudocode, because the code was very, very readable. It did take a moment of reflection
// to get my head around the mechanics of assert(), but having done so, the tests were a numbered walk through
// the variable declarations. You were given the names, the types, and the values of each, and in the form of
// strings. Strings located in the parameter called "message". Doesn't get much more straightforward than that.


// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

