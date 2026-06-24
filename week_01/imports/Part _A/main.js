const { add } = require("./math.js");
const { helloName } = require("./greet.js");
const { person } = require("./object.js");
const { adds, substract } = require("./calculate.js");

// Exercise 1
console.log("=== Exercise 1 ===");
console.log(`5 + 4 = ${add(5, 4)}`);

// Exercise 2
console.log("\n=== Exercise 2 ===");
console.log(helloName("Shlomi"));

// exercise 3
console.log("\n=== Exercise 3 ===");
console.log(person);

// exercise 3
console.log("\n=== Exercise 3 ===");
console.log(`5 + 4 = ${adds(5, 4)}`);
console.log(`5 - 4 = ${substract(5, 4)}`);
