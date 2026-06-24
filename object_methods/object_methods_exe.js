// Part B - Object methods
// Exercise 1
console.log("=== Exercise 1 ===");
const keysObject = (obj) => Object.keys(obj);
const obj = { name: "Momo", age: 13 };
console.log(`Keys object are "${keysObject(obj)}"`);

// Exercise 2
console.log("\n=== Exercise 2 ===");
const valuesObject = (obj) => Object.values(obj);
console.log(`Values of object "${valuesObject(obj)}"`);

// Exercise 3
console.log("\n=== Exercise 3 ===");
const printObject = (obj) => {
  Object.entries(obj).forEach(([key, val]) => console.log(`${key}: ${val}`));
};
printObject(obj);

// Exercise 4
console.log("\n=== Exercise 4 ===");
function avgGrades(obj) {
  const grades = Object.values(obj);
  let sum = grades.reduce((sum, val) => sum + val, 0);
  return sum / grades.length;
}
let grades = { math: 80, english: 90, science: 70 };
console.log(`Avrage grades: ${avgGrades(grades)}`);

// Exercise 5
console.log("\n=== Exercise 5 ===");
const unionTwoObjects = (obj1, obj2) => Object.assign(obj1, obj2);
console.log(unionTwoObjects(obj, grades));

// Exercise 6
console.log("\n=== Exercise 6 ===");
const userSettingsObj = (defaults, settings) =>
  Object.assign(defaults, settings);

const defaults = { theme: "light", lang: "en" };
const userSettings = { lang: "he" };
console.log(userSettingsObj(defaults, userSettings));

// Exercise 7
console.log("\n=== Exercise 7 ===");
const keyExists = (obj, key) => Object.hasOwn(obj, key);
console.log(`"name" exists in obj? ${keyExists(obj, "name")}`);

// Exercise 8
const freezeObj = (config) => Object.freeze(config);
grades = freezeObj(grades);

// grades.math = 0; // error

// Exercise 9
console.log("\n=== Exercise 9 ===");
let person = [
  ["name", "Alice"],
  ["age", 25],
];
const arrToObject = (arr) => Object.fromEntries(arr);
console.log(arrToObject(person));

// Exercise 10
console.log("\n=== Exercise 10 ===");
const discountPricesObj = (obj, dis) =>
  Object.fromEntries(Object.entries(obj.map(([k, v]) => [k, v * dis])));
const fruits = { apple: 10, banana: 5, mango: 20 };
console.log(discountPricesObj(products));

// Exercise 11
console.log("\n=== Exercise 11 ===");
const numOfKeys = (obj) =>
  Object.keys(obj).filter((key) => typeof obj[key] === "number");
console.log(numOfKeys(obj));

console.log("\n=== Exercise 12 ===");
const copyObject = (obj) => Object.fromEntries(Object.entries(obj));
const obj1 = copyObject(obj);
obj1.age = 14;
console.log(obj1);
console.log(obj);

console.log("\n=== Exercise 13 ===");
function sameNameKey(obj1, obj2) {
  for (const key of Object.keys(obj1)) {
    if (Object.hasOwn(obj2, key)) return true;
  }
  return false;
}
const users = { name: "Avi", password: "1234" };
console.log(sameNameKey(obj, users));
console.log(Object.keys(obj).filter((key) => typeof obj[key] === "number"));
