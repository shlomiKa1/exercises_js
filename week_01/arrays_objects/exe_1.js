// Exercise 1
const numbers = [1, 2, 3];
for (const num of numbers) {
  console.log(num);
}

// Exercise 2
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

// Exercise 3
let index = fruits.indexOf("banana");
if (index !== -1) {
  fruits.splice(index, 1, "mango");
}
console.log(fruits);

// Exercise 4
fruits.push("orange");
console.log(`Push "orange": ${fruits}`);

// Exercise 5
console.log(`Delete one fruit - ${fruits.pop()}`);
console.log(`Left: ${fruits}`);

// Exercise 6
fruits.unshift("kiwi");
console.log(`Add kiwi to first: ${fruits}`);

// Exercise 7
fruits.shift();
console.log(fruits);

// Exercise 8
const arr = ["a", "b", "c", "d"];
index = arr.indexOf("b");

if (index !== -1) {
  arr.splice(index, 1);
}
console.log(arr);

// Exercise 9
arr.splice(index, 0, "x", "b");
console.log(arr);

// Exercise 10
index = arr.indexOf("c");
if (index !== -1) {
  arr.splice(index, 1, "Y");
}
console.log(arr);

// Exercise 11
const numbers_1 = [1, 5, 4, 8, 9, 4, 1];
console.log(`Length of numbers: ${numbers_1.length}`);
console.log(`Length of numbers: ${numbers_1[numbers_1.length - 1]}`);

// Exercise 12
const types = ["asf", "a", 2, "dfa ", true];
for (const type_ of types) {
  switch (typeof type_) {
    case "number":
      console.log(type_);
      break;

    case "string":
      console.log(type_);
      break;

    case "boolean":
      console.log(type_);
      break;
  }
}

// Exercise 13
const nums = [10, 20, 30];
nums.forEach((num) => console.log(num));

// Exercise 14
const numbers_2 = [5, 10, 15];
const initialValue = 0;
const sumWithInitial = numbers_2.reduce(
  (accumulator, curretValue) => accumulator + curretValue,
  initialValue,
);
console.log(sumWithInitial);

// Exercise 15
const nums_1 = [3, 8, 12, 1];
let filtered = nums_1.filter((x) => x > 5);
console.log(filtered);

// Exercise 16
let person = {
  name: "Momo",
  age: 17,
};
console.log(person);

// Exercise 17
const person_1 = { name: "Dan", age: 25 };
console.log(person_1.name, person.age);
for (let key in person_1) {
  console.log(person_1[key]);
}
console.log(Object.values(person_1));

// Exercise 18
person_1.city = "Tel Aviv";
person_1.name = "Toto";
console.log(person_1);

// Exercise 19
delete person_1.age;
if (!(person_1.age in person_1)) {
  console.log("Delete age");
}
console.log(person_1);

// Execise 20
const student = {
  name: "Yael",
  grades: [90, 80, 100],
};
console.log(`First Grade: ${student.grades[0]}`);
student.grades.push(81);
console.log(student.grades);
student.grades.shift();
console.log(student.grades);

// Exercise 21
const product = {
  name: "Laptop",
  price: 3500,
  isStock: true,
};

for (let key in product) {
  console.log(`${key}: ${product[key]}`);
}

// Exercise 22
const user = {
  username: "admin",
  role: "manager",
  active: true,
};

console.log(`\nKeys in user: "${Object.keys(user)}"`);
console.log(`Values in user "${Object.values(user)}"`);
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}

// Exercise 23
const order = {
  id: 101,
  customer: {
    name: "Roi",
    address: {
      city: "Tel Aviv",
      zip: "12345",
    },
  },
};

console.log(`Order: ${order.customer}`);

console.log(`City: ${order.customer.address.city}`);

order.customer.address.zip = "1234567";
console.log(`City: ${order.customer.address.zip}`);

order.customer.address.phone = "054984640";
console.log(`Phone: ${order.customer.address.phone}`);

delete order.customer.address.city;
console.log(`city: ${order.customer.address.city}`);
