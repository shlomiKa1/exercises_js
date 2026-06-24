// Part A - map / filter
// Exercise 1
let numbers = [1, 2, 3, 4, 5, 6];
const multMap = (nums) => nums.map((num) => num * 2);
console.log("=== Exercise 1 ===");
console.log(`mult array by 2: ${multMap(numbers)}`);

// Exercise 2
const wordsToUpper = (words) => words.map((word) => word.toUpperCase());
console.log("\n=== Exercise 2 ===");
console.log(wordsToUpper(["hello", "world"]));

// Exercise 3
const vatPrices = (prices) => prices.map((price) => price + (price / 17) * 100);
console.log("\n=== Exercise 3 ===");
console.log(vatPrices(numbers));

// Exercise 4
const evensNums = (nums) => nums.filter((num) => num % 2 == 0);
console.log("\n=== Exercise 4 ===");
console.log(evensNums(numbers));

// Exercise 5
const filterStrLength = (str, num) => str.filter((s) => s.length > num);
console.log("\n=== Exercise 5 ===");
console.log(filterStrLength(["hi", "hello", "cat", "javascript"], 3));

// Exercise 6
let users = [
  { name: "Avi", age: 17 },
  { name: "Dana", age: 22 },
];
const filterUsers = (users, age) => users.filter((user) => user.age >= age);
console.log(filterUsers(users, 18));

// Exercise 7
users.mapNames = function () {
  return this.map((user) => user.name);
};
const names = users.mapNames();
console.log(names);

// Exercise 8
const filterMapPrices = (nums) => {
  return nums.filter((num) => num >= 100).map((num) => num + (num / 10) * 100);
};

/* Part B - reduce */
// Exercise 9
numbers = [10, 20, 30];
const sumNums = (nums) => nums.reduce((acc, current) => acc + current, 0);

// Exercise 10
const multNums = (nums) => nums.reduce((acc, current) => acc * current, 0);
console.log(multNums([1, 2, 3]));

// Exercise 11
let word = ["a", "b", "c"];
const unionChars = (chars) => chars.reduce((word, char) => word + char);
console.log(unionChars(word));

// Exercise 12
const avgAges = (ages) => ages.reduce((sum, age), 0) / ages.length;

// Exercise 13
const evensOddsObj = (nums) => {
  const countEvens = nums
    .filter((num) => num % 2 == 0)
    .reduce((count) => count + 1, 0);

  const countOdds = nums
    .filter((num) => num % 2 != 0)
    .reduce((count) => count + 1, 0);

  return { even: countEvens, odd: countOdds };
};
console.log(evensOddsObj(numbers));

// Part C - find/some/every
// Exercise 14
numbers = [1, 4, 50, 80, 9, 55, 1];
const findFirstNum = (nums) => nums.find((num) => num > 50);
console.log(findFirstNum(numbers));

// Exercise 15
const findById = (users, id) => users.find((user) => user.id === id);

// Exercise 16
const thereNegative = (nums) => nums.some((num) => num < 0);

// Exercise 17
const theyPositive = (nums) => nums.every((num) => num > 0);

// Exercise 18
const usersOver18 = (users) => users.every((user) => user.age > 18);

// Part D - includes/indexOf
// Exercise 19
let fruits = ["apple", "banana"];
const fruitExists = (fruits, fruit) => fruits.includes(fruit);
console.log(fruitExists(fruits, "apple"));

// exercise 20
const indexByValue = (nums, val) => nums.indexOf();

// Exercise 21
const valueExistsSub = (nums, val, start) => nums.includes(val, start);

// Part E - forEach
// exercise 22
const printArr = (arr) => arr.forEach((item) => console.log(item));

// Exercise 25
const sorted = (arr) => arr.sort((a, b) => a - b);

// Exercise 29
const removeTwoVal = (arr, start, count) => arr.splice(start, count);

// Exercise 32
const flatArr = (arr) => arr.flat();

// Exercise 36
const evensMultSum = (nums) =>
  nums
    .filter((num) => num % 2 == 0)
    .map((num) => num * 2)
    .reduce((sum, val) => sum + val, 0);

// Exercise 38
function groupBy(obj) {
  return obj.reduce((acc, current) => {
    const type = current.type;

    if (!acc[type]) acc[type] = [];

    acc[type].push();

    return acc;
  });
}
const product = [{ type: "fruit" }, { type: "veg" }, { type: "fruit" }];
console.log(groupBy(product));

// Exercise 39
console.log("\n=== Exercise 39 ===");
function hasNoDuplicates(arr) {
  return arr.every((val, index) => {
    return arr.lastIndexOf(val) == index;
  });
}
console.log(hasNoDuplicates(numbers));
numbers = [1, 2, 3];
console.log(hasNoDuplicates(numbers));

// Exercise 40
function mostPapilore(arr) {
  const count = arr.reduce((elements, val) => {
    if (!Object.hasOwn(elements, val)) elements[val] = 1;

    elements[val]++;
    return elements;
  }, {});

  const maxNum = Math.max(...Object.values(count));
  const index = Object.values(count).includes(maxNum);
  return Object.keys(count)[index];
}
console.log(mostPapilore(numbers));

// Exercise 41
const products = [
  { name: "Laptop", price: 800, inStock: true, category: "tech" },
  { name: "Phone", price: 400, inStock: true, category: "tech" },
  { name: "Shirt", price: 50, inStock: true, category: "fashion" },
];

const newProducts = products
  .filter((product) => product.inStock)
  .filter((product) => product.price > 100)
  .sort((a, b) => a - b)
  .map((product) => product.name)
  .join(", ");

console.log(newProducts);
