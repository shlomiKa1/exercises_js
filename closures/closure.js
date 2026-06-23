// Exercise 1
console.log("=== Exercise 1 ===");
function createLogger() {
  return function () {
    console.log("Hello");
  };
}
const print = createLogger();
print();
