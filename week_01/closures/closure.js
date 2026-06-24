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

// Exercise 4
console.log("\n=== Exercise 4 ===");
console.log(
  "Print -> 10, Because we create a closure that call to the inner function",
);

// Exercise 5
console.log("\n=== Exercise 5 ===");
function createMultiplier(x) {
  return function (y) {
    console.log(x * y);
  };
}
const double = createMultiplier(2);
double(5);

// Exercise 6
console.log("\n=== Exercise 6 ===");
function createAdder(a) {
  return function (b) {
    console.log(a + b);
  };
}
const add5 = createAdder(5);
add5(3);

// Exercise 7
console.log("\n=== Exercise 7 ===");
function createSecret() {
  let value = 5;

  return {
    getSecret() {
      return value;
    },
    setSecret(newValue) {
      value = newValue;
    },
  };
}
const secret = createSecret();
const get = secret.getSecret();
console.log(`Get secret value: ${get}`);
console.log(`Set secret value '${get}' to 'a'`);
secret.setSecret("a");
console.log(`Get secret value: ${secret.getSecret()}`);

// Exercise 8
console.log("\n=== Exercise 8 ===");
const once = () =>
  function fn() {
    console.log("fn run one time");
  };
const callFn = once();
callFn();

// Exercise 13
console.log("\n=== Exercise 12 ===");
function createStack() {
  const arr = [];

  return {
    push(val) {
      arr.push(val);
    },
    pop() {
      arr.pop();
    },
    peek(index) {
      return arr[index + 1];
    },
  };
}
const arr = createStack();
arr.push(1);
arr.push(2);
arr.push(3);
arr.pop();
console.log(arr.peek(0));
