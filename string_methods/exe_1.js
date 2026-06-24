// Exercise 1
console.log("=== Exercise 1 ===");
let str = " Hello world ";
str = str.trim();
console.log(str);

// Exercise 2
console.log("\n=== Exercise 2 ===");
let email = "user@gamil.com";
console.log(email.includes("@"));

// Exercise 3
console.log("\n=== Exercise 3 ===");
const convertToUpperCase = (str) => str.toUpperCase();
console.log(CavertToUpperCase("javascript"));

// Exercise 4
console.log("\n=== Exercise 4 ===");
const convertToLowerCase = (str) => str.toLowerCase();
console.log(CavertToLowerCase("HELLO WORLD"));

// Exercise 5
console.log("\n=== Exercise 5 ===");
const lengthString = (str) => str.length;
console.log(lengthString("שלום עולם"));

// Exercise 6
console.log("\n=== Exercise 6 ===");
const sliceStr4 = (str) => str.slice(0, 4);
console.log(sliceStr4("javaScript"));

// Exercise 7
console.log("\n=== Exercise 7 ===");
const sliceStrBack6 = (str) => str.slice(4, str.length);
console.log(sliceStrBack6("javaScript"));

// Exercise 8
console.log("\n=== Exercise 8 ===");
const checkHttp = (str) => str.startsWith("https");
console.log(checkHttp("https://example.com"));

// Exercise 9
console.log("\n=== Exercise 9 ===");
const checkEnd = (str) => str.endsWith(".com");
console.log(checkEnd("mywebsite.org"));

// Exercise 10
console.log("\n=== Exercise 10 ===");
const replaceWord = (str) => str.replace("שלום", "היי");
console.log(replaceWord("שלום עולם"));

// Exercise 11
console.log("\n=== Exercise 11 ===");
const replaceAllChar = (str) => str.replaceAll("a", "o");
console.log(replaceAllChar("banana"));

// Exercise 12
console.log("\n=== Exercise 12 ===");
const splitWords = (str) => str.split(" ");
console.log(splitWords("one tow three"));

// Exercise 13
console.log("\n=== Exercise 13 ===");
const splitWordsBy = (str) => {
  str = str.split(",");
  return str.slice(0, str.length - 1);
};
console.log(splitWordsBy("apple,banana,grape"));

// Exercise 14
console.log("\n=== Exercise 14 ===");
const findChar = (str) => str.indexOf("a");
console.log(findChar("banana"));

// Exercise 15
console.log("\n=== Exercise 15 ===");
const findLastChar = (str) => str.lastIndexOf("a");
console.log(findLastChar("banana"));

// Exercise 16
console.log("\n=== Exercise 16 ===");
const joinStr = (str) => str.padStart(3, "0");
console.log(joinStr("7"));

// Exercise 17
console.log("\n=== Exercise 17 ===");
const joinStrEnd = (str) => str.padEnd(5, "*");
console.log(joinStrEnd("hi"));

// Exercise 18
console.log("\n=== Exercise 18 ===");
const repeatHa = (str) => str.repeat(3);
console.log(repeatHa("ha"));

// Exercise 19
console.log("\n=== Exercise 19 ===");
const firstChar = (str) => str.charAt(0);
console.log(firstChar("Hello"));

// Exercise 20
console.log("\n=== Exercise 20 ===");
const lastChar = (str) => str.at(-1);
console.log(lastChar("Hello"));

// Exercise 21
console.log("\n=== Exercise 21 ===");
const joinTwoStr = (firstWord, secondWord) =>
  firstWord.concat(` ${secondWord}`);
console.log(joinTwoStr("Hello", "World"));

// Exercise 22
console.log("\n=== Exercise 22 ===");
const substringStr = (str) => str.substring(2, 6);
console.log(substringStr("JavaScript"));

// Exercise 23
console.log("\n=== Exercise 23 ===");
const checkAdmin = (str) => convertToLowerCase(str).includes("admin");
console.log(checkAdmin("AdminPanel"));

// Exercise 24
console.log("\n=== Exercise 24 ===");
const trimFromStart = (str) => str.trimStart();
console.log(trimFromStart("  Hello   "));

// Exercise 25
console.log("\n=== Exercise 25 ===");
const trimFromEnd = (str) => str.trimEnd();
console.log("   Hello   ");
