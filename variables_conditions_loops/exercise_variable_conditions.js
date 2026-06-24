import input from "analiza-sync";

let num_ = input("Enter a number: ");

// Exercise 1
const age = 20;
if (age > 17) {
  console.log("Older");
} else {
  console.log("Tennager");
}

// Exercise 2
const number = 7;
if (number % 2 == 0) console.log("Number is even");
else console.log("Number is odd");

// Exercise 3
const isLoggedIn = true;
if (isLoggedIn) {
  console.log("You welcome");
} else {
  console.log("Please logg in");
}

// Exercise 4
const num = -5;
if (num == 0) {
  console.log("Number is 0");
} else if (num > 0) {
  console.log("Num is positive");
} else {
  console.log("Number is negative");
}

// Exercise 5
const a = 10;
const b = 20;
if (a === b) {
  console.log("a = b");
} else if (a > b) {
  console.log("a > b");
} else {
  console.log("a < b");
}

// Exercise 6
const password = "1234";
if (password === "1234") {
  console.log("Access is ");
} else {
  console.log("Wrong password !!!");
}

// Exercise 7
const x = 15;
if (x >= 10 && x <= 20) {
  console.log(true);
} else {
  console.log(false);
}

// Exercise 8
const grade = 83;
if (grade >= 90) {
  console.log("Best");
} else if (grade <= 89 && grade >= 75) {
  console.log("Good");
} else if (grade >= 60 && grade <= 74) {
  console.log("Pass");
} else {
  console.log("Failed");
}

// Exercise 9
const temp = 30;
const check_temp =
  temp >= 30
    ? "Is very hot, drink water"
    : temp >= 20 && temp < 30
      ? "Is normal"
      : "Cold, take a jaket";
console.log(check_temp);

// Exercise 10
const age_ = 20;
const hasID = true;
if (age_ >= 18 && hasID) {
  console.log("Have a ID and older than 18");
}

// Exercise 11
const isAdmin = false;
const isManager = true;
if (isAdmin == true || isManager == true) {
  console.log("Approved access");
}

//  Exercise 12
const hasCard = false;
if (!hasCard) {
  console.log("Don't have access");
} else {
  console.log("Access approved");
}

// Exercise 13
const name = "";
// const check_name = !name ? "Guest" : `${name}`;
const check_name = name || "Guest";
console.log(check_name);

// Exercise 14
const arr = [];
const check_arr = arr.length == 0 ? "Empty" : arr;
console.log(check_arr);

// Exercise 15
const x_ = "5";
const y = 5;
console.log(x_ == y); // true - Because JS convert string to int so this check if num to string
console.log(x_ === y); // false - Check if the type is the same

// Exercise 16
const username = "admin";
const password_ = "1234";
if (username == "admin" && password_ == "1234") {
  console.log("Your welcome");
} else {
  console.log("Access denaied");
}

// Exercise 17
const age_1 = 67;
if (age_1 < 18) {
  console.log("Teenager discount");
} else if (age_1 >= 65) {
  console.log("Pensioners discount");
} else {
  console.log("Don't have discount");
}

// Exercise 18
const day = "שני";
switch (day) {
  case "שבת":
    console.log("Sabbat today");
    break;

  case "שישי":
    console.log("Half Day");
    break;

  default:
    console.log("Work day");
}

//  Exercise 19
const total = 250;
if (total > 300) {
  console.log("Shipment it's Free");
} else if (total >= 150 && total <= 300) {
  console.log("Shipment cost 20");
} else {
  console.log("Shipment cost 40");
}

// Exercise 20
const role = "editor";
switch (role) {
  case "admin":
    console.log("All access");
    break;

  case "editor":
    console.log("Only Editor");
    break;

  case "viewer":
    console.log("Read only");

  default:
    console.log("Don't have an access");
}
