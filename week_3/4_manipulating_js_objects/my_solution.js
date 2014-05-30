
// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}



// __________________________________________
// Write your code below.

var adam = {
  name: "Adam",
  spouse: terah
}

terah.spouse = adam;
terah.weight = 125;
// get rid of terah's eyeColor
delete terah.eyeColor;
terah.children = {};
terah.children.carson = {name: "Carson"};
terah.children.carter = {name: "Carter"};
terah.children.colton = {name: "Colton"};
adam.children = terah.children;



// __________________________________________
// Reflection: Use the reflection guidelines
// 
// For the most part, this went like the other solo challenge this week: quickly and easily. I thought the added complexity
// made it much more interesting, or anyway more fun. It wasn't so obvious what went where. I used a little pseudocode,
// unlike last time, when I wan't sure how to remove a key. I left it in above its code translation as a comment, though
// it feels out of place, given the simple, comment-free format of the rest of my code. The information about "delete" came
// from http://perfectionkills.com/understanding-delete/ via Stack Overflow via Google.
//
// I have mixed feelings about my lack of psuedocode here. On one hand, I know I should be practicing using pseudocode even
// when it's tedious, because it's an important habit for clarity, especially with complex projects. On the other hand, I
// genuinely enjoy reading code qua code, especially when, as here, it's simple enough to speak for itself. I think I left
// that one line of pseudocode in as an offering, really. On its own, it's just a jumped-up, obsolete placeholder.
//
// The one hiccup I had was that I first tried assigning adam.children to be terah.children in the adam object literal: that 
// is, by entering "children: terah.children" within adam's curly braces. I wasn't sure if it would work, so I tried. Sure
// enough, that first run's test listing ended with "11. false".

// I did find interesting was how that failed test short-circuited the code. I haven't used "throw" before, though
// it obviously has some stuff in common with a "break" statement (logging a thumbs up and returning true after evaluating the 
// test as false would be absurd), but when I tried running the code without adam.child support (har), it never bothered logging
// the final terah object. Just spat out:
// //   throw "ERROR: " + message;
// //                    ^
// //ERROR: The value of the adam children property should be the value of the terah children property"
// 
// and that was that.



// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)