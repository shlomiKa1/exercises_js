// Exercise 1
console.log("=== Exercise 1 ===");
const hello = (name) => console.log(`Hello ${name}`);
hello("Moshe");

// Exercise 2
console.log("\n=== Exercise 2 ===");
const sumNums = (num1, num2) =>
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
sumNums(1, 5);

// Exercise 3
console.log("\n=== Exercise 4 ===");
const evenNum = (num) => num % 2 == 0;
let num = 9;
console.log(`${num} is even? ${evenNum(num)}`);

// Exercise 4
console.log("\n=== Exercise 4 ===");
const firstNumArr = (arr) => arr[0];
let arr = [1, 5, 4, 7, 8, 9];
console.log(`first num in arr ${arr} is: ${firstNumArr(arr)}`);

// Exercise 5
console.log("\n=== Exercise 5 ===");
const capitalWord = (words) => words.toUpperCase();
console.log(`Capital word '${"aba"}' is: ${capitalWord("aba")}`);

// Exercise 6
console.log("\n=== Exercise 6 ===");
console.log("Prints -> 10 -> 5, Because in function test defined ");

// Exercise 7
// Need to defaind a number
console.log("\n=== Exercise 7 ===");
console.log("y is not defiend");

// Exercise 8
console.log("\n=== Exercise 8 ===");
console.log("Print -> 1");

// Exercise 9
console.log("\n=== Exercise 9 ===");
const counter = (x) => x++;
const inner = () => counter(x);
console.log(inner(2));

// Exercise 10
console.log("\n=== Exercise 10 ===");
function add(count) {
  count++;
  return count;
}
console.log(add(5));

// Exercise 11
console.log("\n=== Exercise 11 ===");
const nums2 = [1, 5, 4, 2];
function sumFilter(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}
console.log(sumFilter(nums2));

// Exercise 12
console.log("\n=== Exercise 12 ===");
const sqaure = (num) => num ** 2;
const use = (num) => sqaure(num);
console.log(use(8));

// Exercise 13
console.log("\n=== Exercise 13 ===");
console.log(
  "Print -> 10, Because there is argument x on function, so it not use the global x",
);

// Exercise 14
console.log("\n=== Exercise 14 ===");
function evenNums(arr) {
  const result = [];
  for (const num of arr) {
    if (num % 2 == 0) {
      result.push(num);
    }
  }
  return result;
}
console.log(evenNums(arr));

// Exercise 15
console.log("\n=== Exercise 15 ===");
console.log("It's danger because any one can change total without know.");
{
  let total = 0;

  function addToTotal(num) {
    total += num;
  }

  function reset() {
    total = 0;
  }

  addToTotal(5);
  addToTotal(10);
  reset();
}
console.log(total); /// total not defiend
