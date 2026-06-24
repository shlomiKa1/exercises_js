const { add } = require("./math.js");
const { helloName } = require("./greet.js");
const { person } = require("./object.js");
const { adds, substract } = require("./calculate.js");
const { addition, subtraction, multiplier } = require("./utils.js");
const { isEven } = require("./evens.js");
const { sumNums } = require("./arrayNum.js");

// Exercise 1
console.log("=== Exercise 1 ===");
console.log(`5 + 4 = ${add(5, 4)}`);

// Exercise 2
console.log("\n=== Exercise 2 ===");
console.log(helloName("Shlomi"));

// exercise 3
console.log("\n=== Exercise 3 ===");
console.log(person);

// exercise 4
console.log("\n=== Exercise 4 ===");
console.log(`5 + 4 = ${adds(5, 4)}`);
console.log(`5 - 4 = ${substract(5, 4)}`);

// Exercise 5
console.log("\n=== Exercise 5 ===");
console.log(`5 + 5 = ${addition(5, 5)}`);
console.log(`5 - 5 = ${subtraction(5, 5)}`);
console.log(`5 * 5 = ${multiplier(5, 5)}`);

// Exercise 6
console.log("\n=== Exercise 6 ===");
console.log(`'2' is even? ${isEven(2)}`);
console.log(`'3' is even? ${isEven(3)}`);

// Exercise 8
console.log("\n=== Exercise 8 ===");
console.log(`sum: ${sumNums([1, 2, 3, 4])}`);
