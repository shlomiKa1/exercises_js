// Exercise 1
const toLower = (str) => str.toLowerCase();
let str = "AlIcE";
console.log(`"${str}" convert to lower "${toLower(str)}"`);

// Exercise 2
const removeAllSpaces = (str) => str.trim();
str = "   hello world   ";
console.log(`"${str}" remove all spaces "${removeAllSpaces(str)}"`);

// Exercise 3
const checkEmail = (email) => email.includes("@");
str = "user@.gmail.com";
console.log(`There is '@' in "${str}"? ${checkEmail(str)}`);
