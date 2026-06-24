// Exercise 4
function createName(name, age) {
  return {
    name,
    age,
    greet: () => console.log({ name, age }),
    isOver18: () => age > 18,
  };
}

// Exercise 3
console.log("\n=== Exercise 1 - 5 ===");
const name1 = createName("Shlomi", 22);
const name2 = createName("Avi", 30);

name1.greet();
name2.greet();

// Exercise 6
console.log("\n=== Exercise 6 ===");
function printCallTimes() {
  let counter = 0;

  return function () {
    counter++;
    if (counter === 1) console.log(`${counter}, `);
    else console.log(`ואז ${counter}, `);
  };
}
const count = printCallTimes();

count();
count();
count();

// Exercise 7
console.log("\n=== Exercise 7 ===");
function counter() {
  let count = 0;
  return () => {
    count++;
    console.log(count);
  };
}
const countNormal = counter();
countNormal();
countNormal();
countNormal();

// Exercise 8
console.log("\n=== Exercise 8 ===");
function counterNumUp(count) {
  return function () {
    count++;
    console.log(count);
  };
}
const countFromNum = counterNumUp(10);
countFromNum();
countFromNum();
countFromNum();

// Exercise 9
console.log("\n=== Exercise 9 ===");
function counterNumDown(count) {
  return function () {
    count--;
    // exercise 10
    return count;
  };
}
const countNumDown = counterNumDown(18);
console.log(countNumDown());
console.log(countNumDown());
console.log(countNumDown());

// Exercise 11
console.log("\n=== Exercise 11 - 14 ===");
function createCounterFactory() {
  let count = 0;

  return {
    increment() {
      count++;
    },
    // Exercise 13
    reset() {
      count = 0;
    },
  };
}

// Exercise 12
const counter_1 = createCounterFactory();
counter_1.increment();
counter_1.increment();
console.log(counter_1.count);
console.log(counter_1.count);

// Exercise 14
const counter_2 = createCounterFactory();
counter_2.increment();

// Part D:
// Exercise 15
function CreateProduct(name, price, stock = 0) {
  // Exercise 17
  if (price < 0) throw new Error("Price most be positive");

  return {
    name,
    price,
    stock,
    // Exercise 16
    isAvailable() {
      return this.stock > 0;
    },
  };
}

// Part E:
// Exercise 19
console.log("\n=== Exercise 19 ===");

function multiplier(x) {
  return (y) => x * y;
}
const double = multiplier(2);
console.log(double(10));

// Exercise 20
console.log("\n=== Exercise 20 ===");
function prefix(prefixStr) {
  return (str) => prefixStr + " " + str;
}
const welcome = prefix("Hello");
console.log(welcome("Dana"));

// Execise 21
console.log("\n=== Exercise 21 - 23 ===");
function privateMessage() {
  const arr = [];

  return {
    addMessage(message) {
      arr.push(message);
    },

    // Exercise 22
    showMessage() {
      return [...arr];
    },

    // Exercise 23
    deleteMessage(index) {
      arr.splice(index, 1);
    },
  };
}
const privet = privateMessage();
privet.addMessage("My name is shlomi");
console.log(privet.showMessage());
privet.deleteMessage(0);
console.log(privet.deleteMessage(0));

// Part F
// Exercise 24
console.log("\n=== Exercise 24 ===");
function userLoggin(name) {
  let id = 0;
  let count = 0;
  id++;

  return function logs() {
    return {
      id,
      name,
      count: count++,
    };
  };
}

const user1 = userLoggin("Shlomi");
user1();
user1();
console.table([user1()]);

// exercise 25
console.log("\n=== Exercise 25 ===");
function createAuthFactory(name) {
  const roles = [];

  return {
    add(role) {
      roles.push(role);
    },
    remove(role) {
      const index = roles.indexOf(role);
      if (index > -1) roles.splice(index, 1);
    },
    check: (role) => roles.includes(role),
  };
}
const manager = createAuthFactory("Momo");
manager.add("Admin");
manager.add("Editor");

console.log(`"Admin" exists? ${manager.check("Admin")}`);
manager.remove("Admin");
console.log("Delete Admin");
console.log(`"Admin" exists? ${manager.check("Admin")}`);
