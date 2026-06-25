# Solutions

## Exercise 1

- Exercise 1.1 => CommonJS
- Exercise 1.2 => ESModules
- Exercise 1.3 => ESModules
- Exercise 1.4 => CommonJS

---

## Exercise 2

### Q1:

```js
import { add } from "./math.mjs";
```

### Q2:

package.json:

```json
{
  "name": "my-app",
  "type": "module"
}
```

file

```js
import express from "express.js";
```

### Q3:

```js
import fs from "./fs.mjs";
const path = require("./path.cjs");
```

---

## Exercise 3

```json
{
  "name": "student-system",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

---

## Exercise 4

- **express** -> dependencies
- **nodemon** -> devDependencies
- **jest** -> devDependencies
- **mongoose** -> dependencies
- **eslint** -> devDependencies

---

## Exercise 5

- **MAJOR / '5'** -> Any change version also versions that will crash the old code.
- **PATCH / '18'** -> Add fetchers and new software, without crash the exists cose.
- **MINOR / '3'** -> Fix bugs and performance improvements or security update

---

## Exercise 6

- **express: ^4.18.2** -> Any version 4.18.2 that up to 4.99.99
- **express: ~4.18.2** -> Any version 4.18.x that up to 4.18.99
- **express: 4.18.2** -> Only version 4.18.2
- **express: \*** -> Any version

---

## Exercise 7

1. node_modules -> false
2. package-lock.json -> true
3. npm install -> true
4. npm ci without package-lock.json -> false

---

## Exercise 8

1. The file loads at the runtime, exactly when execution reachers this line.
2. It's good because thr file is only loaded if we actually need to use it.
3. It helps keep the code clean while writing asynchronous logic in a synchronous style.

---

## Exercise 9

| Subject          | CommonJS                                       | ESModules                                    |
| :--------------- | :--------------------------------------------- | :------------------------------------------- |
| **Import**       | `const { <module> } = require('./<nameFile>')` | `import { <module> } from './<nameFile.js>'` |
| **Export**       | `module.exports = { <module> }`                | `export (default) function {....}`           |
| **Load**         | Sync                                           | Async                                        |
| **Tree Shaking** | Not supported                                  | Supported                                    |

---

## Exercise 10

1. I use ESModules because React running on ESModules.
2. It performance like Tree Shaking and it's also can use await without to use async.
3. This Incompatibility bugs, Prevents browser crashes and Prevents circular dependency problems.

---

## Exercise 11

1. Read package.json
2. Check package-look.json
3. Download packages from npm
4. Create folder node_modules
5. Lock versions

---

## Exercise 12

Becase there is 'jumple' between:

- ESModules -> `import express from 'express';`
- CommonJS -> `module.exports = app;`

---

## Exercise 13

math.js:

```js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

logger.js:

```js
export const log = (message) => {
  console.log(message);
};
```

app.js:

```js
import { add, subtract } from "./math.js";
import { log } from "./log.js";

log(`start function add(1, 3)`);
const add = add(1, 3);
log(`return ${add}`);

log(`start function subtract(1, 3)`);
const subtract = subtract(1, 3);
log(`Return ${subtract}`);
```

package.json:

```json
{
  "name": "small-project",
  "version": "1.0.0",
  "type": "module"
}
```

---

## Exercise 14

1. Modules breings us -> shere files in code, files code more short, reusabillity beteen codes.
2. Script-tags -> there not guaranteed order of loads, evreting is global, Nested dependencies are not supported
3. 3.1 dependencies is for that the project will run - like the server
4. 3.2 devDependencies is for the programer - like autmaclly refresh
5. Because it's lock rightlly version, make sure uniformity between computers and npm ci use that more fast and secure.
6. Never upload node_modules because its can contain GBs

---

## Exercise 15

1. Node claming that is CJS if there is not a type so there will have error on import, and also import need ending with mjs
2. The file of import most be ending with .mjs and also in the syntax of import
3. For make sure that I will not get error, I will add to ending of files .mjs -> import, .cjs -> require

```

```
