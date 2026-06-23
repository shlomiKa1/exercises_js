// Exercise 1
console.log("=== Exercise 1 ===");
function createLogger() {
  return function () {
    console.log("Hello");
  };
}
const print = createLogger();
print();

// Exercise 2
console.log("\n=== Exercise 2 ===");
function createGreeting() {
  let name;

  return function (name) {
    console.log(`Hello ${name}`);
  };
}

const greeting = createGreeting();
greeting("Shlomi");

// Exercise 3
console.log("\n=== Exercise 3 ===");
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}
const getCounter = createCounter();
console.log(getCounter());
