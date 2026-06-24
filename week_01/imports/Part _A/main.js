const { add } = require("./math.js");
const { helloName } = require("./greet.js");
const { person } = require("./object.js");

// Exercise 1
console.log("=== Exercise 1 ===");
console.log(`5 + 4 = ${add(5, 4)}`);

// Exercise 2
console.log("\n=== Exercise 2 ===");
console.log(helloName("Shlomi"));

// exercise 3
console.log("\n=== Exercise 3 ===");
console.log(person);
