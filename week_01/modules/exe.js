console.log("Exercise 1.1 => CommonJS");
console.log("Exercise 1.2 => ESModules");
console.log("Exercise 1.3 => ESModules");
console.log("Exercise 1.4 => CommonJS");

// import { add } from "./math.js";

// import express from "./express.js";

// import { fs } from "./fs.js";
// const path = require("./path");

// Exercise 3

// Exercise 4
console.log("\n=== Exercise 4 ===");
console.log("express -> dependencies");
console.log("nodemon -> devDependencies");
console.log("jest -> devDependencies");
console.log("mongoose -> dependencies");
console.log("eslint -> devDependencies");

// Exercise 5
console.log("\n=== Exercise 5 ===");
console.log(
  "MAJOR / '5' -> Any change version also versions that will crash the old code.",
);
console.log(
  "PATCH / '18' -> Add fetchers and new software, without crash the exists cose.",
);
console.log(
  "MINOR / '3' -> Fix bugs and performance improvements or security update",
);

// Exercise 6
console.log("\n=== Exercise 6 ===");
console.log("express: ^4.18.2 -> Any version 4.18.2 that up to 4.99.99");
console.log("express: ~4.18.2 -> Any version 4.18.x that up to 4.18.99");
console.log("express: 4.18.2 -> Only version 4.18.2");
console.log("express: * -> Any version");

// Exercise 7
console.log("\n=== Exercise 7 ===");
console.log("1. node_modules -> false");
console.log("2. package-lock.json -> true");
console.log("3. npm install -> true");
console.log("4. npm ci without package-lock.json -> false");

// Exercise 8
console.log("\n=== Exercise 8 ===");
console.log(
  "1. The file loads at the runtime, exactly when execution reachers this line.",
);
console.log(
  "2. It's good because thr file is only loaded if we actually need to use it.",
);
console.log(
  "3. It helps keep the code clean while writing asynchronous logic in a synchronous style.",
);

// Exercise 9
console.log("\n=== Exercise 9 ===");
const tableObj = {
  1: ["Subject", "CommonJS", "ESModules"],
  2: [
    "Import",
    "const { <module> } = require('./<nameFile>')",
    "import { <module> } from './<nameFile.js>'",
  ],
  3: [
    "Export",
    "module.exports = { <module> }",
    "export (default) function {....}",
  ],
  4: ["Load", "Sync", "Async"],
  5: ["Tree Shaking", "Not supported", "Supported"],
};
console.table(tableObj);

// Exercise 10
console.log("\n=== Exercise 10 ===");
console.log("1. I use ESModules because React running on ESModules.");
console.log(
  "2. It performance like Tree Shaking and it's also can use await without to use async.",
);
console.log(
  "2. This Incompatibility bugs, Prevents browser crashes and Prevents circular dependency problems.",
);
