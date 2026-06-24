// Exercise 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Exercise 2
for (let i = 10; i <= 1; i--) {
    console.log(i);
}

// Exercise 3
// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log(sum)

// Exercise 4
const names = ["מיכל", "יוסי", "דנה"];
for (const name of names) {
    console.log(name);
}

// Exercise 5
const numbers = [2, 5, 8, 11, 14, 17, 20];
for (const num of numbers) {
    if (num % 2 == 0){
        console.log(num);
    }
}

// Exercise 6
const numbers_3 = [3, 99, 12, 45, 78];
let max = numbers_3[0];
for (const num of numbers_3) {
    if (num > max) {
        max = num;
    }
}
console.log(max);

// Exercise 7
const word = "javascript";
for (const char of word) {
    console.log(char);
}

// Exercise 8
const numbers_4 = [1, 2, 3, 4];
for (let i = 0; i < numbers_4.length; i++) {
    console.log(numbers_4[i] * 2)
}

// Exercise 9
let index = 1;
while (index <= 10) {
    console.log(index);
    index ++;
}

// // Exercise 10
// let input = "";
// while (input != "stop") {
//     let input = prompt("Enter a input: ");
// }

// // Exercise 11
// let input;
// let sum;
// while (input !== 0) {
//     sum += input;
// }
// console.log(sum);

// // Exercise 12
// const secret = 7;
// let num;
// while (num != 7) {
//     num = 7;
// }

// // Exercise 13
// let x = 1;
// while (x < 20) {
//     console.log(x);
//     x ++;
// }

// Exercise 14
// let password = "";
// while (password !== "1234") {
//     password = prompt();
// }

// // Exercise 15
// let count = 0;
// do {
//     console.log(count);
// } while(count < 0)

// // Exercise 16
// let choice;
// do {
//     choice = showMenu();
// } while (choice !== "Exist")

// Exercise 17
const numbers_5 = [1, 3, 7, 9, 15, 2];
let index_1 = 0;
while (index_1 < numbers_5.length) {
    if (numbers_5[index_1] > 10) {
        break;
    }
    index_1 ++;
}

// Exercise 18
const numbers_6 = [5, -1, 8, -3, 10];
for (const num of numbers_6) {
    if (num < 0) {
        continue;
    }
}

// Exercise 19
const ages = [12, 15, 18, 21, 25];
for (const age  of ages) {
    if (age >= 18) {
        console.log("Find %s", age);
    }
}

// Exercise 20
const arr = [10, 20, 30, 40 ,50];
for (const num of arr) {
    console.log(num);
}

// Exercise 21
const numbers_7 = [1, 2, 3, 4, 5, 6];
let sum_even = 0;
for (const num_1 of numbers_7) {
    if (num_1 % 2 == 0) {
        sum_even += num_1;
    }
}
console.log(sum_even);

// Exercise 22
const target = 25;
const numbers_8 = [10, 15, 20, 25, 30];
let index_2 = 0;
while (index_2 < numbers_8.length) {
    if (target === numbers_8[index_2]) {
        console.log("Find target");
        break;
    }
    index_2 ++;
}

// Exercise 23
const word_1 = "hello world";
for (const char of word_1) {
    console.log(char.toUpperCase());
}

// Exercise 24
const numbers_9 = [2, 4, 6, 8, 10, 12];
for (const num of numbers_9) {
    if (num > 8 && num % 2 == 0) {
        console.log("Numbers is bigger than 8 and it's even");
        break;
    }
    console.log(num);
}

// Exercise 25
const students = [
    {name: "דנה", grade: 55},
    {name: "יוסי", grade: 90},
    {name: "מיכל", grade: 78},
    {name: "רון", grade: 45}
];

for (const student of students) {
    if (student.grade === 100) {
        console.log(student.name);
        break;
    }
    else if (student.grade >= 60) {
        console.log(student.name);
    }
}