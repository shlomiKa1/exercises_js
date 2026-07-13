## Exercise 1

---

## Exercise 2

```text
PORT=3000
DB=http://myDb.sql
KEY=DB770
```

---

## Exercise 3

On .env there is like:

```text
PORT=3000
DB_URL=http://myDb.sql
KEY=DB770
```

and .env.example there is:

```text
PORT=
DB_URL=
KEY=
```

and this go up to github

---

## Exercise 4

```js
require("dotenv/config");
// OR
import dot from "dotenv/config";
```

---

## Exercise 5

procces.env is a global object on node:

```js
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const KEY = process.env.KEY;
```

---

## Exercise 6

False, Although there are no passwords, but it leads us to a dangerous habit.
That's why we always write ".env" down in .gitignore

---

## Exercise 7

True, like this example

```js
// Bad and Wrong
// Because it's read "DB" before we got load in .env
import DB from "./db";
import dot from "dotenv/config";

// Good
// Because it's read "DB" after we got load in .env
import dot from "dotenv/config";
import DB from "./db";
```

---

## Exercise 8

False, It's syntax of Unix/Linux/macOS

---

## Exercise 9

```js
require("dotenv").config();
const express = require("express");

const port = process.env.port || 3000;
```

---

## Exercise 10

```text
PORT = 3000
DATABASE_URL=mongodb://localhost/mydb
SECRET_KEY=abc123
```

---

## Exercise 11

```js
const port = process.env.PORT || 5000;

app.listen(port);
```

---

## Exercise 12

```text
node_modules/
.env
.env.local
```

---

## Exercise 13

```js
const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

---

## Exercise 14

---

## Exercise 15

package:

```json
{
  "name": "express",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "node --env-file=.env-test server.js",
    "dev": "node --env-file=.env.development server.js",
    "production": "node --env-file=.env.prodouction server.js"
  },
  "dependencies": {
    "express": "4.18.2"
  }
}
```

---

## Exercise 16

---

## Exercise 17

1. He forgot to import with "config" -> require("dotenv").config().

2. The file is not in the main file of the project were the ditenv defiend or the name is incorrect.

3. Wrong case on the word, example:
   on the env file -> PORT=3000
   but he call it -> process.env.Port not PORT.

4. dotenv is not wrote in package

---

## Exercise 18

```js
// גישה א
const port = process.env.PORT || 3000;

// גישה ב
if (!process.env.PORT) {
  throw new Error("PORT is not defined in environment variables");
}
const port = process.env.PORT;

// The first option it's when I want that the app will work on any server, that it's not break.
// But the second option is when I want it's fall, like a DB_URL we don't want that it will running on a break url.
```

---

## Exercise 19

```text
cars-project/
|__routes/
|____cars.js -> All the routes of cars
|
|__app.js -> Main file to running this project
|__config.js -> Constant variables
|__.env -> Real values of PORT & URL_DB don't go up to github
|__.env.example -> Example of what contain in env, upload to github
|__package.json -> Package for install.
|_.gitignore -> folders & files that don't upload to github
|_README.md -> Telling about the project
```
