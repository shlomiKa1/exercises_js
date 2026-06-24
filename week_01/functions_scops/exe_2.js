// Exercise 1
const multByThree = (num) => num * 3;

// Exercise 2
const lengthString = (str) => str.length;

// Exercise 3
const checkNum = (num) =>
  num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log(checkNum(0));

// Exercise 4
const getMax = (a, b) => (a >= b ? a : b);
console.log(getMax(8, 5));

// Exercise 5
const lengthArray = (arr) => arr.length;

// Exercise 6
// 7
let a = 3;
function test_1() {
  a = 7;
}
test_1();
console.log(a);

// Exercise 7
// Error a not defined
function test_2() {
  let a = 5;
}
test_2();
console.log(a);

// Exercise 8
let x_ = 10;
function change() {
  let x = 20;
}
console.log(x_);

// Exercise 9 - 4
// Exercise 10
const print = (message) => console.log(message);
print("Hi");

// Exercise 11
function getMin(nums) {
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (min > num[i]) {
      min = nums[i];
    }
  }
  return min;
}

// Exercise 12
const duNum = (a, b) => a / b === b;

// Exercise 13
function joinString(arr) {
  let result = "";
  for (const str of arr) {
    result += str;
  }
  return result;
}

// Exercise 14 - 15 15

// Exercise 15
function printN(n) {
  for (i = 1; i <= n; i++) {
    console.log(i);
  }
}

// Exercise 16
function setArr(arr) {
  let result = [];
  for (const num of arr) {
    let exists = false;
    for (let j = 0; j < result.length; j++)
      if (result[j] == num) {
        exists = true;
      }
    if (!exists) {
      result.push(num);
    }
  }
  return result;
}
console.log(setArr([1, 5, 1, 4, 5, 5]));

// Exercise 17 - that

let sum = 0;

function add(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
}

add([1, 2]);
add([3, 4]);

console.log(`fasf: ${sum}`);

// Exercise 18
function sumEvenNums(nums) {
  let sumEven = 0;
  for (const num of nums) {
    if (num % 2 == 0) {
      sumEven += num;
    }
  }
  return sumEven;
}

// Exercise 19 - 2
console.log("\n=== Exercise 19 ===");
console.log("Print -> 2")

// Exercise 20
function getPrice(price, discount) {
  return price - price * discount;
}
