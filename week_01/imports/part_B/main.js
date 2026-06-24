import { sum, PI } from "./math.js";
import { greet } from "./named.js";
import { count } from "./array.js";
import mult from "./math.js";
import createUser from "./named.js";

console.log("=== Exercise 1 ===");
console.log(`1 + 3 = ${sum(1, 3)}`);

console.log("\n=== Exercise 2 ===");
console.log(greet("Shlomi"));

console.log("\n=== Exercise 3 ===");
console.log(`PI = ${PI()}`);

console.log("\n=== Exercise 4 ===");
console.log(`1 * 3 = ${mult(1, 3)}`);

console.log("\n=== Exercise 5 ===");
console.log(`count of values in array: ${count([1, 2, 3, 4, 5])}`);

console.log("\n=== Exercise 6 ===");
console.log(createUser("Shlomi", 1));
